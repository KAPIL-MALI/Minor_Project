import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';

dotenv.config();

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const problems = await Problem.find({});
    for (const p of problems) {
      const cppStart = p.starterCode?.cpp || '';
      const isGeneric = cppStart.includes('solve(string input)') || cppStart.includes('solve(') || !p.starterCode?.cpp;
      if (!isGeneric) {
        console.log(`- ${p.title} (${p.category})`);
      }
    }

    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}

run();
