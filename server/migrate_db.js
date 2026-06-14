import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';

dotenv.config();

async function migrate() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://manalidighe6_db_user:K9RJTdgqSiTFjQXC@primecode.6inriw9.mongodb.net/primecode');
    console.log('Connected to DB');

    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems to migrate.`);

    let migrated = 0;

    for (let problem of problems) {
      const sc = problem.starterCode;
      const dc = { javascript: '', cpp: '', java: '' };
      const newSc = { javascript: '', cpp: '', java: '' };

      // JAVASCRIPT
      if (sc.javascript) {
        if (sc.javascript.includes('const input = require')) {
          const parts = sc.javascript.split('const input = require');
          newSc.javascript = parts[0].trim();
          dc.javascript = 'const input = require' + parts[1];
        } else {
          newSc.javascript = sc.javascript;
        }
      }

      // CPP
      if (sc.cpp) {
        if (sc.cpp.includes('int main()')) {
          const parts = sc.cpp.split('int main()');
          const top = parts[0].trim();
          const bottom = 'int main()' + parts[1];
          
          if (bottom.includes('// Write your solution here') || bottom.length < 50) {
            // It's the generic one
            newSc.cpp = `string solve(string input) {\n    // Write your solution here\n    return "";\n}`;
            dc.cpp = `int main() {\n    string input;\n    string line;\n    while(getline(cin, line)) {\n        input += line + "\\n";\n    }\n    if(!input.empty()) input.pop_back();\n    cout << solve(input) << endl;\n    return 0;\n}`;
          } else {
            // It's a specific one. We should leave the top part (which usually has the function) in newSc,
            // but remove `#include <bits/stdc++.h>\nusing namespace std;` since the backend appends it.
            let userCode = top;
            userCode = userCode.replace(/#include\s*<bits\/stdc\+\+\.h>\s*/g, '');
            userCode = userCode.replace(/using\s+namespace\s+std;\s*/g, '');
            newSc.cpp = userCode.trim();
            dc.cpp = bottom.trim();
          }
        } else {
          newSc.cpp = sc.cpp;
        }
      }

      // JAVA
      if (sc.java) {
        if (sc.java.includes('public static void main')) {
          // If it's a generic one
          if (sc.java.includes('// Write your solution here') && sc.java.length < 150) {
            newSc.java = `class Solution {\n    public String solve(String input) {\n        // Write your solution here\n        return "";\n    }\n}`;
            dc.java = `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        StringBuilder sb = new StringBuilder();\n        while(sc.hasNextLine()) { sb.append(sc.nextLine()).append("\\n"); }\n        String input = sb.toString();\n        if(input.length() > 0) input = input.substring(0, input.length()-1);\n        Solution sol = new Solution();\n        System.out.println(sol.solve(input));\n    }\n}`;
          } else {
            // Try to separate class Main
            const mainIdx = sc.java.indexOf('public static void main');
            const classMainIdx = sc.java.lastIndexOf('public class Main', mainIdx);
            
            if (classMainIdx !== -1) {
               // Extract the user code that is before 'public class Main'
               let top = sc.java.substring(0, classMainIdx);
               top = top.replace(/import\s+java\.util\.\*;\s*/g, '');
               newSc.java = top.trim();
               if (!newSc.java) {
                 // if there was no user code before class Main, we have a problem.
                 // let's just make the user code empty and driver code the whole thing.
               }
               dc.java = sc.java.substring(classMainIdx).trim();
            } else {
               newSc.java = sc.java;
            }
          }
        } else {
          newSc.java = sc.java;
        }
      }

      problem.starterCode = newSc;
      problem.driverCode = dc;
      await problem.save();
      migrated++;
    }

    console.log(`Migration complete! Updated ${migrated} problems.`);
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrate();
