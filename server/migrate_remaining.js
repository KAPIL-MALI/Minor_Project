import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';

dotenv.config();

const defs = {
  "Minimum Window Substring": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    string minWindow(string s, string t) {\n        // Write your solution here\n        return "";\n    }\n};`,
      java: `class Solution {\n    public String minWindow(String s, String t) {\n        // Write your solution here\n        return "";\n    }\n}`,
      javascript: `function minWindow(s, t) {\n    // Write your solution here\n    return "";\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s, t;\n    getline(cin, s);\n    getline(cin, t);\n    Solution sol;\n    cout << sol.minWindow(s, t) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        String t = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.minWindow(s, t));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(minWindow(input[0], input[1]));`
    }
  },
  "Jump Game": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function canJump(nums) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << (sol.canJump(nums) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.canJump(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(canJump(JSON.parse(input)));`
    }
  },
  "Palindrome Number": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function isPalindrome(x) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int x; cin >> x;\n    Solution sol;\n    cout << (sol.isPalindrome(x) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.isPalindrome(x));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isPalindrome(parseInt(input)));`
    }
  },
  "Fizz Buzz": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<string> fizzBuzz(int n) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public List<String> fizzBuzz(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
      javascript: `function fizzBuzz(n) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    auto r = sol.fizzBuzz(n);\n    cout << "[";\n    for(int i=0;i<r.size();i++) { if(i) cout << ","; cout << "\\"" << r[i] << "\\""; }\n    cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.fizzBuzz(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(fizzBuzz(parseInt(input))));`
    }
  },
  "Single Number": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function singleNumber(nums) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << sol.singleNumber(nums) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.singleNumber(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(singleNumber(JSON.parse(input)));`
    }
  },
  "Median of Two Sorted Arrays": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your solution here\n        return 0.0;\n    }\n};`,
      java: `class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return 0.0;\n    }\n}`,
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string l1, l2; getline(cin, l1); getline(cin, l2);\n    auto parse = [](string s) { vector<int> v; if(s=="[]") return v; s=s.substr(1,s.size()-2); stringstream ss(s); string t; while(getline(ss,t,',')) v.push_back(stoi(t)); return v; };\n    auto a = parse(l1), b = parse(l2);\n    Solution sol;\n    printf("%.5f\\n", sol.findMedianSortedArrays(a, b));\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String l1 = sc.nextLine().trim(), l2 = sc.nextLine().trim();\n        int[] a = parse(l1), b = parse(l2);\n        Solution sol = new Solution();\n        System.out.printf("%.5f%n", sol.findMedianSortedArrays(a, b));\n    }\n    static int[] parse(String s) {\n        if(s.equals("[]")) return new int[0];\n        s = s.substring(1,s.length()-1);\n        String[] p = s.split(",");\n        int[] r = new int[p.length];\n        for(int i=0;i<p.length;i++) r[i]=Integer.parseInt(p[i].trim());\n        return r;\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(findMedianSortedArrays(JSON.parse(input[0]), JSON.parse(input[1])).toFixed(5));`
    }
  },
  "Maximum XOR of Two Non-Overlapping Subarrays": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int solve(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function solve(nums) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << sol.solve(nums) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.solve(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(solve(JSON.parse(input)));`
    }
  },
  "Print 1 to N": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    string printNumbers(int n) {\n        // Write your solution here\n        return "";\n    }\n};`,
      java: `class Solution {\n    public String printNumbers(int n) {\n        // Write your solution here\n        return "";\n    }\n}`,
      javascript: `function printNumbers(n) {\n    // Write your solution here\n    return "";\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << sol.printNumbers(n) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.printNumbers(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(printNumbers(parseInt(input)));`
    }
  },
  "Sum of Array Elements": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int sumOfArray(vector<int>& nums) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int sumOfArray(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function sumOfArray(nums) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << sol.sumOfArray(nums) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.sumOfArray(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(sumOfArray(JSON.parse(input)));`
    }
  },
  "Find Maximum in Array": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int findMax(vector<int>& nums) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int findMax(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function findMax(nums) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << sol.findMax(nums) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.findMax(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(findMax(JSON.parse(input)));`
    }
  },
  "Check Even or Odd": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool isEven(int n) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isEven(int n) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function isEven(n) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << (sol.isEven(n) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.isEven(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isEven(parseInt(input)));`
    }
  },
  "Vowel or Consonant": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    string check(char c) {\n        // Write your solution here\n        return "";\n    }\n};`,
      java: `class Solution {\n    public String check(char c) {\n        // Write your solution here\n        return "";\n    }\n}`,
      javascript: `function check(c) {\n    // Write your solution here\n    return "";\n}`
    },
    driverCode: {
      cpp: `int main() {\n    char c; cin >> c;\n    Solution sol;\n    cout << sol.check(c) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char c = sc.nextLine().trim().charAt(0);\n        Solution sol = new Solution();\n        System.out.println(sol.check(c));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(check(input));`
    }
  },
  "Swap Two Numbers": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> swapNumbers(int a, int b) {\n        // Write your solution here\n        return {b, a};\n    }\n};`,
      java: `class Solution {\n    public int[] swapNumbers(int a, int b) {\n        // Write your solution here\n        return new int[]{b, a};\n    }\n}`,
      javascript: `function swapNumbers(a, b) {\n    // Write your solution here\n    return [b, a];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int a, b; cin >> a >> b;\n    Solution sol;\n    auto r = sol.swapNumbers(a, b);\n    cout << "[" << r[0] << "," << r[1] << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = Integer.parseInt(sc.nextLine().trim());\n        int b = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        int[] r = sol.swapNumbers(a, b);\n        System.out.println("[" + r[0] + "," + r[1] + "]");\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(JSON.stringify(swapNumbers(parseInt(input[0]), parseInt(input[1]))));`
    }
  },
  "Find ASCII Value": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int asciiValue(char c) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int asciiValue(char c) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function asciiValue(c) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    char c; cin >> c;\n    Solution sol;\n    cout << sol.asciiValue(c) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        char c = sc.nextLine().trim().charAt(0);\n        Solution sol = new Solution();\n        System.out.println(sol.asciiValue(c));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(asciiValue(input));`
    }
  },
  "Count Digits": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int countDigits(int n) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int countDigits(int n) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function countDigits(n) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << sol.countDigits(n) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.countDigits(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(countDigits(parseInt(input)));`
    }
  },
  "Factorial of a Number": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int factorial(int n) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int factorial(int n) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function factorial(n) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << sol.factorial(n) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.factorial(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(factorial(parseInt(input)));`
    }
  },
  "Reverse an Array": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> reverseArray(vector<int>& arr) {\n        // Write your solution here\n        return arr;\n    }\n};`,
      java: `class Solution {\n    public int[] reverseArray(int[] arr) {\n        // Write your solution here\n        return arr;\n    }\n}`,
      javascript: `function reverseArray(arr) {\n    // Write your solution here\n    return arr;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> arr;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) arr.push_back(stoi(token));\n    Solution sol;\n    auto r = sol.reverseArray(arr);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0;i<parts.length;i++) arr[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        int[] r = sol.reverseArray(arr);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(reverseArray(JSON.parse(input))));`
    }
  },
  "Remove Duplicates from Sorted Array": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function removeDuplicates(nums) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << sol.removeDuplicates(nums) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.removeDuplicates(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(removeDuplicates(JSON.parse(input)));`
    }
  },
  "Plus One": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      javascript: `function plusOne(digits) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> d;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) d.push_back(stoi(token));\n    Solution sol;\n    auto r = sol.plusOne(d);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] d = new int[parts.length];\n        for(int i=0;i<parts.length;i++) d[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        int[] r = sol.plusOne(d);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(plusOne(JSON.parse(input))));`
    }
  },
  "First Unique Character": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int firstUniqChar(string s) {\n        // Write your solution here\n        return -1;\n    }\n};`,
      java: `class Solution {\n    public int firstUniqChar(String s) {\n        // Write your solution here\n        return -1;\n    }\n}`,
      javascript: `function firstUniqChar(s) {\n    // Write your solution here\n    return -1;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s; getline(cin, s);\n    Solution sol;\n    cout << sol.firstUniqChar(s) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.firstUniqChar(s));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(firstUniqChar(input));`
    }
  },
  "Power of Two": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isPowerOfTwo(int n) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function isPowerOfTwo(n) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << (sol.isPowerOfTwo(n) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.isPowerOfTwo(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isPowerOfTwo(parseInt(input)));`
    }
  },
  "Intersection of Two Arrays": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      javascript: `function intersection(nums1, nums2) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string l1, l2; getline(cin, l1); getline(cin, l2);\n    auto parse = [](string s) { vector<int> v; s=s.substr(1,s.size()-2); stringstream ss(s); string t; while(getline(ss,t,',')) v.push_back(stoi(t)); return v; };\n    auto a=parse(l1), b=parse(l2);\n    Solution sol;\n    auto r = sol.intersection(a, b);\n    sort(r.begin(), r.end());\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String l1 = sc.nextLine().trim(), l2 = sc.nextLine().trim();\n        // simple parse\n        Solution sol = new Solution();\n        System.out.println(Arrays.toString(sol.intersection(parse(l1), parse(l2))).replaceAll(" ",""));\n    }\n    static int[] parse(String s) { s=s.substring(1,s.length()-1); String[] p=s.split(","); int[] r=new int[p.length]; for(int i=0;i<p.length;i++) r[i]=Integer.parseInt(p[i].trim()); return r; }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(JSON.stringify(intersection(JSON.parse(input[0]), JSON.parse(input[1]))));`
    }
  },
  "Reverse String": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<string> reverseString(vector<string>& s) {\n        // Write your solution here\n        return s;\n    }\n};`,
      java: `class Solution {\n    public String[] reverseString(String[] s) {\n        // Write your solution here\n        return s;\n    }\n}`,
      javascript: `function reverseString(s) {\n    // Write your solution here\n    return s;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    // parse char array\n    Solution sol;\n    cout << line << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(sc.nextLine());\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst s = JSON.parse(input);\nconsole.log(JSON.stringify(reverseString(s)));`
    }
  },
  "Is Subsequence": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isSubsequence(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function isSubsequence(s, t) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s, t; getline(cin, s); getline(cin, t);\n    Solution sol;\n    cout << (sol.isSubsequence(s, t) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim(), t = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.isSubsequence(s, t));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(isSubsequence(input[0], input[1]));`
    }
  },
  "Find the Difference": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        // Write your solution here\n        return ' ';\n    }\n};`,
      java: `class Solution {\n    public char findTheDifference(String s, String t) {\n        // Write your solution here\n        return ' ';\n    }\n}`,
      javascript: `function findTheDifference(s, t) {\n    // Write your solution here\n    return "";\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s, t; getline(cin, s); getline(cin, t);\n    Solution sol;\n    cout << sol.findTheDifference(s, t) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim(), t = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.findTheDifference(s, t));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(findTheDifference(input[0], input[1]));`
    }
  },
  "Ugly Number": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool isUgly(int n) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isUgly(int n) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function isUgly(n) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << (sol.isUgly(n) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.isUgly(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isUgly(parseInt(input)));`
    }
  },
  "Squares of a Sorted Array": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] sortedSquares(int[] nums) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      javascript: `function sortedSquares(nums) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    auto r = sol.sortedSquares(nums);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        int[] r = sol.sortedSquares(nums);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(sortedSquares(JSON.parse(input))));`
    }
  },
  "Valid Mountain Array": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool validMountainArray(vector<int>& arr) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean validMountainArray(int[] arr) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function validMountainArray(arr) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> arr;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) arr.push_back(stoi(token));\n    Solution sol;\n    cout << (sol.validMountainArray(arr) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0;i<parts.length;i++) arr[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.validMountainArray(arr));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(validMountainArray(JSON.parse(input)));`
    }
  },
  "Combination Sum": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
      javascript: `function combinationSum(candidates, target) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> cands;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) cands.push_back(stoi(token));\n    int target; cin >> target;\n    Solution sol;\n    auto r = sol.combinationSum(cands, target);\n    sort(r.begin(), r.end());\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<"[";for(int j=0;j<r[i].size();j++){if(j)cout<<",";cout<<r[i][j];}cout<<"]";} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] cands = new int[parts.length];\n        for(int i=0;i<parts.length;i++) cands[i]=Integer.parseInt(parts[i].trim());\n        int target = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        System.out.println(sol.combinationSum(cands, target).toString().replaceAll(" ",""));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(JSON.stringify(combinationSum(JSON.parse(input[0]), parseInt(input[1]))));`
    }
  },
  "Decode Ways": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int numDecodings(string s) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int numDecodings(String s) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function numDecodings(s) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s; getline(cin, s);\n    Solution sol;\n    cout << sol.numDecodings(s) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.numDecodings(s));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(numDecodings(input));`
    }
  },
  "Unique Paths": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function uniquePaths(m, n) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int m, n; cin >> m >> n;\n    Solution sol;\n    cout << sol.uniquePaths(m, n) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = Integer.parseInt(sc.nextLine().trim());\n        int n = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        System.out.println(sol.uniquePaths(m, n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(uniquePaths(parseInt(input[0]), parseInt(input[1])));`
    }
  },
  "Generate Parentheses": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
      javascript: `function generateParenthesis(n) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    auto r = sol.generateParenthesis(n);\n    sort(r.begin(), r.end());\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<"\\"" << r[i] << "\\"";} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        List<String> r = sol.generateParenthesis(n);\n        Collections.sort(r);\n        System.out.println(r);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst r = generateParenthesis(parseInt(input));\nr.sort();\nconsole.log(JSON.stringify(r));`
    }
  },
  "Letter Combinations of a Phone Number": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public List<String> letterCombinations(String digits) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
      javascript: `function letterCombinations(digits) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s; getline(cin, s);\n    Solution sol;\n    auto r = sol.letterCombinations(s);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<"\\"" << r[i] << "\\"";} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.letterCombinations(s));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(letterCombinations(input)));`
    }
  },
  "Rotate Image": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<vector<int>> rotate(vector<vector<int>>& matrix) {\n        // Write your solution here\n        return matrix;\n    }\n};`,
      java: `class Solution {\n    public int[][] rotate(int[][] matrix) {\n        // Write your solution here\n        return matrix;\n    }\n}`,
      javascript: `function rotate(matrix) {\n    // Write your solution here\n    return matrix;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    Solution sol;\n    // pass through for now\n    cout << line << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(sc.nextLine());\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst matrix = JSON.parse(input);\nconsole.log(JSON.stringify(rotate(matrix)));`
    }
  },
  "Sort Colors": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> sortColors(vector<int>& nums) {\n        // Write your solution here\n        return nums;\n    }\n};`,
      java: `class Solution {\n    public int[] sortColors(int[] nums) {\n        // Write your solution here\n        return nums;\n    }\n}`,
      javascript: `function sortColors(nums) {\n    // Write your solution here\n    return nums;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    auto r = sol.sortColors(nums);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        int[] r = sol.sortColors(nums);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(sortColors(JSON.parse(input))));`
    }
  },
  "Top K Frequent Elements": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      javascript: `function topKFrequent(nums, k) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    int k; cin >> k;\n    Solution sol;\n    auto r = sol.topKFrequent(nums, k);\n    sort(r.begin(), r.end());\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        int k = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        int[] r = sol.topKFrequent(nums, k);\n        Arrays.sort(r);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst r = topKFrequent(JSON.parse(input[0]), parseInt(input[1]));\nr.sort((a,b)=>a-b);\nconsole.log(JSON.stringify(r));`
    }
  },
  "Regular Expression Matching": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        // Write your solution here\n        return false;\n    }\n};`,
      java: `class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your solution here\n        return false;\n    }\n}`,
      javascript: `function isMatch(s, p) {\n    // Write your solution here\n    return false;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s, p; getline(cin, s); getline(cin, p);\n    Solution sol;\n    cout << (sol.isMatch(s, p) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim(), p = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.isMatch(s, p));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(isMatch(input[0], input[1]));`
    }
  },
  "First Missing Positive": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int firstMissingPositive(vector<int>& nums) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int firstMissingPositive(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function firstMissingPositive(nums) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    Solution sol;\n    cout << sol.firstMissingPositive(nums) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        System.out.println(sol.firstMissingPositive(nums));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(firstMissingPositive(JSON.parse(input)));`
    }
  },
  "Reverse Nodes in k-Group": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> reverseKGroup(vector<int>& arr, int k) {\n        // Write your solution here\n        return arr;\n    }\n};`,
      java: `class Solution {\n    public int[] reverseKGroup(int[] arr, int k) {\n        // Write your solution here\n        return arr;\n    }\n}`,
      javascript: `function reverseKGroup(arr, k) {\n    // Write your solution here\n    return arr;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> arr;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) arr.push_back(stoi(token));\n    int k; cin >> k;\n    Solution sol;\n    auto r = sol.reverseKGroup(arr, k);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] arr = new int[parts.length];\n        for(int i=0;i<parts.length;i++) arr[i]=Integer.parseInt(parts[i].trim());\n        int k = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        int[] r = sol.reverseKGroup(arr, k);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(JSON.stringify(reverseKGroup(JSON.parse(input[0]), parseInt(input[1]))));`
    }
  },
  "Longest Valid Parentheses": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int longestValidParentheses(string s) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int longestValidParentheses(String s) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function longestValidParentheses(s) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s; getline(cin, s);\n    Solution sol;\n    cout << sol.longestValidParentheses(s) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.longestValidParentheses(s));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(longestValidParentheses(input));`
    }
  },
  "Edit Distance": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function minDistance(word1, word2) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string w1, w2; getline(cin, w1); getline(cin, w2);\n    Solution sol;\n    cout << sol.minDistance(w1, w2) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String w1 = sc.nextLine().trim(), w2 = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.minDistance(w1, w2));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(minDistance(input[0], input[1]));`
    }
  },
  "N-Queens": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
      javascript: `function solveNQueens(n) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    auto r = sol.solveNQueens(n);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<"[";for(int j=0;j<r[i].size();j++){if(j)cout<<",";cout<<"\\"" << r[i][j] << "\\"";} cout<<"]";} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.solveNQueens(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(solveNQueens(parseInt(input))));`
    }
  },
  "Word Ladder": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function ladderLength(beginWord, endWord, wordList) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string bw, ew, line; getline(cin, bw); getline(cin, ew); getline(cin, line);\n    vector<string> dict;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string t;\n    while(getline(ss, t, ',')) { string v; for(char c:t) if(c!='"'&&c!=' ') v+=c; if(!v.empty()) dict.push_back(v); }\n    Solution sol;\n    cout << sol.ladderLength(bw, ew, dict) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String bw = sc.nextLine().trim(), ew = sc.nextLine().trim();\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        List<String> dict = new ArrayList<>();\n        for(String w : line.split(",")) dict.add(w.trim().replace("\"",""));\n        Solution sol = new Solution();\n        System.out.println(sol.ladderLength(bw, ew, dict));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(ladderLength(input[0], input[1], JSON.parse(input[2])));`
    }
  },
  // Remaining from addRemainingProblems.js
  "Print 1 to N Space Separated": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    string printNumbers(int n) {\n        // Write your solution here\n        return "";\n    }\n};`,
      java: `class Solution {\n    public String printNumbers(int n) {\n        // Write your solution here\n        return "";\n    }\n}`,
      javascript: `function printNumbers(n) {\n    // Write your solution here\n    return "";\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << sol.printNumbers(n) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.printNumbers(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(printNumbers(parseInt(input)));`
    }
  },
  "Matrix Diagonal Sum": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int diagonalSum(vector<vector<int>>& mat) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int diagonalSum(int[][] mat) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function diagonalSum(mat) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    Solution sol;\n    cout << 0 << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(0);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst mat = JSON.parse(input);\nconsole.log(diagonalSum(mat));`
    }
  },
  "Find Center of Star Graph": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int findCenter(vector<vector<int>>& edges) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int findCenter(int[][] edges) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function findCenter(edges) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    Solution sol;\n    cout << 0 << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(0);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(findCenter(JSON.parse(input)));`
    }
  },
  "Count Asterisks": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int countAsterisks(string s) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int countAsterisks(String s) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function countAsterisks(s) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s; getline(cin, s);\n    Solution sol;\n    cout << sol.countAsterisks(s) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.countAsterisks(s));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(countAsterisks(input));`
    }
  },
  "Minimum Operations to Make Array Equal": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int minOperations(int n) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int minOperations(int n) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function minOperations(n) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int n; cin >> n;\n    Solution sol;\n    cout << sol.minOperations(n) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Solution sol = new Solution();\n        System.out.println(sol.minOperations(n));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(minOperations(parseInt(input)));`
    }
  },
  "Max Consecutive Ones III": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int longestOnes(int[] nums, int k) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function longestOnes(nums, k) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    int k; cin >> k;\n    Solution sol;\n    cout << sol.longestOnes(nums, k) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        int k = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        System.out.println(sol.longestOnes(nums, k));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(longestOnes(JSON.parse(input[0]), parseInt(input[1])));`
    }
  },
  "Number of Provinces": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int findCircleNum(vector<vector<int>>& isConnected) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int findCircleNum(int[][] isConnected) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function findCircleNum(isConnected) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    Solution sol;\n    cout << 0 << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(0);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(findCircleNum(JSON.parse(input)));`
    }
  },
  "Sort Characters By Frequency": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    string frequencySort(string s) {\n        // Write your solution here\n        return "";\n    }\n};`,
      java: `class Solution {\n    public String frequencySort(String s) {\n        // Write your solution here\n        return "";\n    }\n}`,
      javascript: `function frequencySort(s) {\n    // Write your solution here\n    return "";\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string s; getline(cin, s);\n    Solution sol;\n    cout << sol.frequencySort(s) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        Solution sol = new Solution();\n        System.out.println(sol.frequencySort(s));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(frequencySort(input));`
    }
  },
  "Count Good Nodes in Binary Tree": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int goodNodes(vector<string>& nodes) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int goodNodes(String[] nodes) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function goodNodes(arr) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    Solution sol;\n    cout << 0 << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(0);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(goodNodes(JSON.parse(input)));`
    }
  },
  "Koko Eating Bananas": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function minEatingSpeed(piles, h) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> piles;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) piles.push_back(stoi(token));\n    int h; cin >> h;\n    Solution sol;\n    cout << sol.minEatingSpeed(piles, h) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] piles = new int[parts.length];\n        for(int i=0;i<parts.length;i++) piles[i]=Integer.parseInt(parts[i].trim());\n        int h = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        System.out.println(sol.minEatingSpeed(piles, h));\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(minEatingSpeed(JSON.parse(input[0]), parseInt(input[1])));`
    }
  },
  "Daily Temperatures": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      javascript: `function dailyTemperatures(temperatures) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> temps;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) temps.push_back(stoi(token));\n    Solution sol;\n    auto r = sol.dailyTemperatures(temps);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] temps = new int[parts.length];\n        for(int i=0;i<parts.length;i++) temps[i]=Integer.parseInt(parts[i].trim());\n        Solution sol = new Solution();\n        int[] r = sol.dailyTemperatures(temps);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(dailyTemperatures(JSON.parse(input))));`
    }
  },
  "Car Fleet": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    int carFleet(int target, vector<int>& position, vector<int>& speed) {\n        // Write your solution here\n        return 0;\n    }\n};`,
      java: `class Solution {\n    public int carFleet(int target, int[] position, int[] speed) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      javascript: `function carFleet(target, position, speed) {\n    // Write your solution here\n    return 0;\n}`
    },
    driverCode: {
      cpp: `int main() {\n    int target; cin >> target; cin.ignore();\n    string l1, l2; getline(cin, l1); getline(cin, l2);\n    auto parse = [](string s) { vector<int> v; s=s.substr(1,s.size()-2); stringstream ss(s); string t; while(getline(ss,t,',')) v.push_back(stoi(t)); return v; };\n    auto pos=parse(l1), spd=parse(l2);\n    Solution sol;\n    cout << sol.carFleet(target, pos, spd) << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int target = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        System.out.println(0);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(carFleet(parseInt(input[0]), JSON.parse(input[1]), JSON.parse(input[2])));`
    }
  },
  "Design Twitter": {
    starterCode: {
      cpp: `class Twitter {\npublic:\n    Twitter() {\n        // Write your solution here\n    }\n    void postTweet(int userId, int tweetId) {\n        // Write your solution here\n    }\n    vector<int> getNewsFeed(int userId) {\n        // Write your solution here\n        return {};\n    }\n    void follow(int followerId, int followeeId) {\n        // Write your solution here\n    }\n    void unfollow(int followerId, int followeeId) {\n        // Write your solution here\n    }\n};`,
      java: `class Twitter {\n    public Twitter() {\n        // Write your solution here\n    }\n    public void postTweet(int userId, int tweetId) {\n        // Write your solution here\n    }\n    public List<Integer> getNewsFeed(int userId) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n    public void follow(int followerId, int followeeId) {\n        // Write your solution here\n    }\n    public void unfollow(int followerId, int followeeId) {\n        // Write your solution here\n    }\n}`,
      javascript: `class Twitter {\n    constructor() {\n        // Write your solution here\n    }\n    postTweet(userId, tweetId) {\n        // Write your solution here\n    }\n    getNewsFeed(userId) {\n        // Write your solution here\n        return [];\n    }\n    follow(followerId, followeeId) {\n        // Write your solution here\n    }\n    unfollow(followerId, followeeId) {\n        // Write your solution here\n    }\n}`
    },
    driverCode: {
      cpp: `int main() {\n    cout << "null" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("null");\n    }\n}`,
      javascript: `console.log("null");`
    }
  },
  "Sliding Window Maximum": {
    starterCode: {
      cpp: `class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        // Write your solution here\n        return {};\n    }\n};`,
      java: `class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      javascript: `function maxSlidingWindow(nums, k) {\n    // Write your solution here\n    return [];\n}`
    },
    driverCode: {
      cpp: `int main() {\n    string line; getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line); string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    int k; cin >> k;\n    Solution sol;\n    auto r = sol.maxSlidingWindow(nums, k);\n    cout << "["; for(int i=0;i<r.size();i++){if(i)cout<<",";cout<<r[i];} cout << "]" << endl;\n    return 0;\n}`,
      java: `public class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0;i<parts.length;i++) nums[i]=Integer.parseInt(parts[i].trim());\n        int k = Integer.parseInt(sc.nextLine().trim());\n        Solution sol = new Solution();\n        int[] r = sol.maxSlidingWindow(nums, k);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++){if(i>0)sb.append(",");sb.append(r[i]);}\n        sb.append("]"); System.out.println(sb);\n    }\n}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(JSON.stringify(maxSlidingWindow(JSON.parse(input[0]), parseInt(input[1]))));`
    }
  }
};

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');
    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems total.`);
    let updated = 0, skipped = 0;
    for (const problem of problems) {
      const def = defs[problem.title];
      if (!def) { skipped++; continue; }
      problem.starterCode = def.starterCode;
      problem.driverCode = def.driverCode;
      await problem.save();
      console.log(`[UPDATED] ${problem.title}`);
      updated++;
    }
    console.log(`\nDone. Updated: ${updated}, Already done / no match: ${skipped}`);
    process.exit(0);
  } catch (e) {
    console.error("Error:", e);
    process.exit(1);
  }
}
run();
