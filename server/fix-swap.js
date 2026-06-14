import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';

dotenv.config();

async function fix() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://manalidighe6_db_user:K9RJTdgqSiTFjQXC@primecode.6inriw9.mongodb.net/primecode');
    const problem = await Problem.findOne({ slug: 'swap-two-numbers' });
    if (problem) {
      console.log('Before fix:', JSON.stringify(problem.testCases, null, 2));
      console.log('Examples before:', JSON.stringify(problem.examples, null, 2));
      
      problem.testCases = [{ input: "1\\n2", expectedOutput: "[2,1]" }];
      problem.examples = [{ input: "a = 1, b = 2", output: "[2, 1]", explanation: "" }];
      
      await problem.save();
      console.log('After fix:', JSON.stringify(problem.testCases, null, 2));
    } else {
      console.log('Problem not found');
    }
  } catch(e) {
    console.error(e);
  } finally {
    mongoose.disconnect();
  }
}
fix();
