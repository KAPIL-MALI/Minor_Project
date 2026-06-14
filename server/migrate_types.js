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

    const problem = await Problem.findOne({ title: "Reverse Linked List" });
    if (!problem) {
      console.error("Problem not found");
      process.exit(1);
    }

    console.log(`Processing problem: ${problem.title}`);

    const prompt = `You are an expert platform content developer for competitive programming websites like LeetCode and GeeksForGeeks.
Your task is to take a coding problem definition that currently uses a generic string-based interface (e.g. string solve(string input)) and migrate it to use standard, strongly-typed function signatures and custom drivers for C++, Java, and JavaScript.

Here are the details of the problem:
Title: ${problem.title}
Category: ${problem.category}
Difficulty: ${problem.difficulty}
Description: ${problem.description}
Examples: ${JSON.stringify(problem.examples)}
Constraints: ${JSON.stringify(problem.constraints)}
Test Cases: ${JSON.stringify(problem.testCases)}

Your goal is to generate:
1. "starterCode": The code shown to the user in their editor. This should only define the function/class signature with appropriate types and a default return value. It should NOT contain main or any input/output handling.
2. "driverCode": Code that runs behind the scenes. It reads the test case input from stdin (standard input), parses it into the typed variables, calls the user's function, formats the result, and prints it to stdout (standard output). The output of the driver code MUST exactly match the expectedOutput from the test cases.

Types and Data Structures available:
- ListNode and TreeNode structs/classes are already pre-defined in the environment for C++, Java, and JavaScript. Do NOT define them in the starterCode or driverCode.
  - C++ definitions:
    struct ListNode { int val; ListNode *next; };
    struct TreeNode { int val; TreeNode *left; TreeNode *right; };
  - Java definitions:
    class ListNode { public int val; public ListNode next; }
    class TreeNode { public int val; public TreeNode left; public TreeNode right; }
  - JavaScript definitions:
    class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
    class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

Rules:
1. In C++, starterCode should be a global function. In Java, it should be a class Solution with a non-static method. In JavaScript, it should be a global function.
2. The starterCode must not contain main() or libraries/includes (they are prepended automatically).
3. The driverCode must read inputs from stdin/cin. Since inputs are given as strings (sometimes representing numbers, arrays, strings, trees, or linked lists), the driver code is responsible for parsing these input strings into the appropriate types.
   - For arrays: Input might be [1,2,3] or a string of numbers. In C++/Java, parse this by removing brackets and splitting by commas. In JS, use JSON.parse().
   - For Tree/Linked List: Parse from standard array representation (like [1,2,3] or [3,9,20,null,null,15,7]).
   - For multiple inputs: If a testcase input has multiple values, they are separated by newlines \\n in the testcase input. Ensure the driver reads them line by line (using getline / sc.nextLine() / input[i]).
4. Output format: The driver must print the output of the function exactly in the expected format.
   - If the output is a boolean, print "true" or "false".
   - If the output is a ListNode, print the list elements as an array [1,2,3].
   - If the output is a TreeNode, print the tree in level-order level array format or whatever format the testcase expects.
   - If the output is an array of arrays, print it in JSON format [[1,2],[3]].

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

    const text = await generateWithRetry(prompt);
    const data = JSON.parse(text);

    console.log("GENERATED STARTER CODE:");
    console.log(JSON.stringify(data.starterCode, null, 2));
    console.log("\nGENERATED DRIVER CODE:");
    console.log(JSON.stringify(data.driverCode, null, 2));

    process.exit(0);
  } catch (e) {
    console.error("Migration failed:", e);
    process.exit(1);
  }
}

run();
