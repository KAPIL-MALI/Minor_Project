import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';

dotenv.config();

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');
    const problems = await Problem.find({});
    let updated = 0;

    for (const problem of problems) {
      if (!problem.starterCode || !problem.starterCode.javascript) continue;

      let jsStarter = problem.starterCode.javascript;
      let jsDriver = problem.driverCode ? problem.driverCode.javascript : "";

      // Check if it starts with function
      const match = jsStarter.match(/^function\s+([a-zA-Z0-9_]+)\s*\((.*?)\)\s*\{([\s\S]*)\}/);
      if (match) {
        const funcName = match[1];
        const args = match[2];
        const body = match[3];

        // New Starter Code
        const newStarter = `class Solution {\n    ${funcName}(${args}) {${body}}\n}`;
        problem.starterCode.javascript = newStarter;

        // New Driver Code: 
        // Find where the function is called and replace it with (new Solution()).funcName
        // e.g., console.log(twoSum(nums, target)) -> console.log(new Solution().twoSum(nums, target))
        // or const result = twoSum(nums); -> const result = new Solution().twoSum(nums);
        
        if (jsDriver) {
          // We need a regex that matches the function name being called
          // like funcName( or  funcName (
          const driverRegex = new RegExp(`(?<!function\\s)(?<!\\w)${funcName}\\s*\\(`, 'g');
          let newDriver = jsDriver.replace(driverRegex, `new Solution().${funcName}(`);
          
          // Special case for Javascript generic serialize/deserialize which had two functions
          if (problem.title === "Serialize and Deserialize Binary Tree") {
             // Let's manually handle if there are multiple functions
             // actually that one has serialize and deserialize. We'll skip complex ones or handle them.
          }
          
          problem.driverCode.javascript = newDriver;
        }

        // Must mark as modified for Mongoose if it's a mixed type, but they are defined as String in Schema?
        // Let's just save.
        problem.markModified('starterCode');
        problem.markModified('driverCode');
        await problem.save();
        console.log(`[FIXED JS] ${problem.title}`);
        updated++;
      } else if (jsStarter.includes("function serialize")) {
        // Handle Serialize and Deserialize Binary Tree manually
        problem.starterCode.javascript = `class Codec {\n    serialize(arr) {\n        // Write your solution here\n        return JSON.stringify(arr);\n    }\n    deserialize(str) {\n        // Write your solution here\n        return JSON.parse(str);\n    }\n}`;
        
        if (jsDriver) {
           problem.driverCode.javascript = jsDriver.replace(/deserialize\(serialize\(/g, 'new Codec().deserialize(new Codec().serialize(');
           problem.markModified('driverCode');
        }
        problem.markModified('starterCode');
        await problem.save();
        console.log(`[FIXED JS Codec] ${problem.title}`);
        updated++;
      }
    }

    console.log(`\nFixed ${updated} problems for JS class format.`);
    process.exit(0);
  } catch (e) {
    console.error("Error:", e);
    process.exit(1);
  }
}
run();
