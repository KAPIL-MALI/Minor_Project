import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(prompt, retries = 5, delayMs = 3000) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    generationConfig: { responseMimeType: 'application/json' }
  });
  
  for (let i = 0; i < retries; i++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (e) {
      console.warn(`Attempt ${i + 1} failed: ${e.message}`);
      if (i === retries - 1) throw e;
      const waitTime = delayMs * Math.pow(2, i);
      console.log(`Waiting ${waitTime}ms before retrying...`);
      await sleep(waitTime);
    }
  }
}

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems total.`);

    // Identify problems needing migration
    const toMigrate = [];
    for (const p of problems) {
      const cppStart = p.starterCode?.cpp || '';
      const isGeneric = !p.starterCode?.cpp || cppStart.includes('solve(string input)') || cppStart.includes('solve(');
      
      // Skip "Swap Two Numbers" because it's already manually verified
      if (isGeneric && p.title !== "Swap Two Numbers") {
        toMigrate.push(p);
      }
    }

    console.log(`Found ${toMigrate.length} problems needing migration.`);

    let succeeded = 0;
    let failed = 0;

    for (let index = 0; index < toMigrate.length; index++) {
      const problem = toMigrate[index];
      const progressStr = `[${index + 1}/${toMigrate.length}]`;
      console.log(`\n--------------------------------------------`);
      console.log(`${progressStr} Processing: ${problem.title} (ID: ${problem._id})`);

      const prompt = `You are an expert platform content developer for competitive programming websites like LeetCode and GeeksForGeeks.
Your task is to take a coding problem definition that currently uses a generic string-based interface (e.g. string solve(string input)) and generate starter and driver code that follows this simple function signature for all languages.

Here are the details of the problem:
Title: ${problem.title}
Category: ${problem.category}
Difficulty: ${problem.difficulty}
Description: ${problem.description}
Examples: ${JSON.stringify(problem.examples)}
Constraints: ${JSON.stringify(problem.constraints)}
Test Cases: ${JSON.stringify(problem.testCases)}

Your goal is to generate:
1. "starterCode": The code shown to the user in their editor. It should define **only** the function `string solve(string input)` (for C++), `public String solve(String input)` (for Java), or `function solve(input) {}` (for JavaScript) with a default return value (e.g., empty string). Do NOT include any class wrappers, main functions, or I/O handling.
2. "driverCode": Code that runs behind the scenes. It reads the testcase input from stdin (or appropriate input method), parses it, calls the user's `solve` function, formats the result, and prints it to stdout. The driver must handle parsing of arrays, trees, and linked lists using the pre‑defined `ListNode` and `TreeNode` structures (which are already available in the environment). Do NOT redefine these structures.

Rules:
- The starterCode must be **minimal** – only the function signature and a placeholder return.
- The driverCode must handle all necessary parsing and output formatting, respecting the expected output format of the test cases.
- Do NOT include any additional libraries or includes; the platform will prepend them automatically.
- Ensure that the driver code works with the existing global `ListNode` and `TreeNode` definitions.

Return your response strictly as a JSON object matching this schema:
{
  "starterCode": {
    "javascript": "string",
    "cpp": "string",
    "java": "string"
  },
  "driverCode": {
    "javascript": "string",
    "cpp": "string",
    "java": "string"
  }
}
Do NOT wrap the JSON in markdown code blocks. Return ONLY valid JSON.`;

      try {
        const text = await generateWithRetry(prompt);
        const data = JSON.parse(text);

        if (data.starterCode && data.driverCode) {
          problem.starterCode = data.starterCode;
          problem.driverCode = data.driverCode;
          await problem.save();
          console.log(`=> Successfully migrated: ${problem.title}`);
          succeeded++;
        } else {
          console.error(`=> Failed (invalid response format) for: ${problem.title}`);
          failed++;
        }
      } catch (e) {
        console.error(`=> Error migrating ${problem.title}: ${e.message}`);
        failed++;
      }

      // Small delay between problems to respect rate limits
      await sleep(1500);
    }

    console.log(`\n============================================`);
    console.log(`Migration Complete.`);
    console.log(`Total Succeeded: ${succeeded}`);
    console.log(`Total Failed: ${failed}`);
    process.exit(0);
  } catch (e) {
    console.error("Migration fatal error:", e);
    process.exit(1);
  }
}

run();
