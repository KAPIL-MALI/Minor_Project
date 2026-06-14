import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from '../models/Problem.js';
import User from '../models/User.js';

dotenv.config();

const problems = [
  // ===== ARRAYS =====
  {
    title: "Two Sum",
    slug: "two-sum",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    difficulty: "Easy",
    category: "Arrays",
    tags: ["Arrays", "Hash Map"],
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]." }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9", "Only one valid answer exists."],
    starterCode: {
      javascript: `/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n  // Write your solution here\n}\n\n// Read input\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst nums = JSON.parse(input[0]);\nconst target = parseInt(input[1]);\nconsole.log(JSON.stringify(twoSum(nums, target)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    // Parse JSON array\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    int target;\n    cin >> target;\n    auto result = twoSum(nums, target);\n    cout << "[" << result[0] << "," << result[1] << "]" << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        return new int[]{};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        int target = Integer.parseInt(sc.nextLine().trim());\n        int[] result = twoSum(nums, target);\n        System.out.println("[" + result[0] + "," + result[1] + "]");\n    }\n}`
    },
    testCases: [
      { input: "[2,7,11,15]\n9", expectedOutput: "[0,1]" },
      { input: "[3,2,4]\n6", expectedOutput: "[1,2]" },
      { input: "[3,3]\n6", expectedOutput: "[0,1]" }
    ],
    solution: "Use a hash map to store complement values. For each number, check if its complement exists in the map.",
    order: 1,
    acceptance: 49,
    likes: 234,
    totalSubmissions: 500,
    acceptedSubmissions: 245
  },
  {
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-to-buy-and-sell-stock",
    description: "You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    difficulty: "Easy",
    category: "Arrays",
    tags: ["Arrays", "Dynamic Programming"],
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." },
      { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No profit possible." }
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst prices = JSON.parse(input);\nconsole.log(maxProfit(prices));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint maxProfit(vector<int>& prices) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> prices;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) prices.push_back(stoi(token));\n    cout << maxProfit(prices) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int maxProfit(int[] prices) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] prices = new int[parts.length];\n        for(int i=0; i<parts.length; i++) prices[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(maxProfit(prices));\n    }\n}`
    },
    testCases: [
      { input: "[7,1,5,3,6,4]", expectedOutput: "5" },
      { input: "[7,6,4,3,1]", expectedOutput: "0" },
      { input: "[1,2]", expectedOutput: "1" }
    ],
    solution: "Track minimum price seen so far and maximum profit at each step.",
    order: 2, acceptance: 54, likes: 189, totalSubmissions: 400, acceptedSubmissions: 216
  },
  {
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    description: "Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.",
    difficulty: "Easy",
    category: "Arrays",
    tags: ["Arrays", "Hash Map", "Sorting"],
    examples: [
      { input: "nums = [1,2,3,1]", output: "true", explanation: "1 appears twice." },
      { input: "nums = [1,2,3,4]", output: "false", explanation: "All elements are distinct." }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(containsDuplicate(nums));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool containsDuplicate(vector<int>& nums) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    cout << (containsDuplicate(nums) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static boolean containsDuplicate(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(containsDuplicate(nums));\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3,1]", expectedOutput: "true" },
      { input: "[1,2,3,4]", expectedOutput: "false" },
      { input: "[1,1,1,3,3,4,3,2,4,2]", expectedOutput: "true" }
    ],
    solution: "Use a Set to track seen numbers.",
    order: 3, acceptance: 61, likes: 145, totalSubmissions: 350, acceptedSubmissions: 214
  },
  {
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.\n\nA **subarray** is a contiguous non-empty sequence of elements within an array.",
    difficulty: "Medium",
    category: "Arrays",
    tags: ["Arrays", "Dynamic Programming", "Divide and Conquer"],
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [5,4,-1,7,8]", output: "23", explanation: "The subarray [5,4,-1,7,8] has the largest sum 23." }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(maxSubArray(nums));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    cout << maxSubArray(nums) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int maxSubArray(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(maxSubArray(nums));\n    }\n}`
    },
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
      { input: "[1]", expectedOutput: "1" },
      { input: "[5,4,-1,7,8]", expectedOutput: "23" }
    ],
    solution: "Use Kadane's algorithm: track current sum and maximum sum.",
    order: 4, acceptance: 50, likes: 312, totalSubmissions: 600, acceptedSubmissions: 300
  },
  {
    title: "Product of Array Except Self",
    slug: "product-of-array-except-self",
    description: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.",
    difficulty: "Medium",
    category: "Arrays",
    tags: ["Arrays", "Prefix Sum"],
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]", explanation: "" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]", explanation: "" }
    ],
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(JSON.stringify(productExceptSelf(nums)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> productExceptSelf(vector<int>& nums) {\n    // Write your solution here\n    return {};\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    auto r = productExceptSelf(nums);\n    cout << "[";\n    for(int i=0;i<r.size();i++) { if(i) cout << ","; cout << r[i]; }\n    cout << "]" << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int[] productExceptSelf(int[] nums) {\n        // Write your solution here\n        return new int[]{};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        int[] r = productExceptSelf(nums);\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=0;i<r.length;i++) { if(i>0) sb.append(","); sb.append(r[i]); }\n        sb.append("]");\n        System.out.println(sb);\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3,4]", expectedOutput: "[24,12,8,6]" },
      { input: "[-1,1,0,-3,3]", expectedOutput: "[0,0,9,0,0]" }
    ],
    solution: "Use prefix and suffix product arrays.",
    order: 5, acceptance: 65, likes: 210, totalSubmissions: 450, acceptedSubmissions: 293
  },

  // ===== STRINGS =====
  {
    title: "Valid Anagram",
    slug: "valid-anagram",
    description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    difficulty: "Easy",
    category: "Strings",
    tags: ["Strings", "Hash Map", "Sorting"],
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true", explanation: "" },
      { input: 's = "rat", t = "car"', output: "false", explanation: "" }
    ],
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
    starterCode: {
      javascript: `function isAnagram(s, t) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(isAnagram(input[0], input[1]));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool isAnagram(string s, string t) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    string s, t;\n    getline(cin, s);\n    getline(cin, t);\n    cout << (isAnagram(s, t) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static boolean isAnagram(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        String t = sc.nextLine().trim();\n        System.out.println(isAnagram(s, t));\n    }\n}`
    },
    testCases: [
      { input: "anagram\nnagaram", expectedOutput: "true" },
      { input: "rat\ncar", expectedOutput: "false" }
    ],
    solution: "Count character frequencies using a hash map or array.",
    order: 6, acceptance: 62, likes: 156, totalSubmissions: 380, acceptedSubmissions: 236
  },
  {
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    description: "Given a string `s`, find the length of the **longest substring** without repeating characters.",
    difficulty: "Medium",
    category: "Strings",
    tags: ["Strings", "Sliding Window", "Hash Map"],
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with the length of 1.' }
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(lengthOfLongestSubstring(input));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << lengthOfLongestSubstring(s) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(lengthOfLongestSubstring(s));\n    }\n}`
    },
    testCases: [
      { input: "abcabcbb", expectedOutput: "3" },
      { input: "bbbbb", expectedOutput: "1" },
      { input: "pwwkew", expectedOutput: "3" }
    ],
    solution: "Use sliding window with a hash set to track characters in the current window.",
    order: 7, acceptance: 34, likes: 287, totalSubmissions: 700, acceptedSubmissions: 238
  },
  {
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    description: "A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    difficulty: "Easy",
    category: "Strings",
    tags: ["Strings", "Two Pointers"],
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true", explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: "false", explanation: '"raceacar" is not a palindrome.' }
    ],
    constraints: ["1 <= s.length <= 2 * 10^5", "s consists only of printable ASCII characters."],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isPalindrome(input));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << (isPalindrome(s) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(String s) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(isPalindrome(s));\n    }\n}`
    },
    testCases: [
      { input: "A man, a plan, a canal: Panama", expectedOutput: "true" },
      { input: "race a car", expectedOutput: "false" },
      { input: " ", expectedOutput: "true" }
    ],
    solution: "Use two pointers from both ends, skip non-alphanumeric characters.",
    order: 8, acceptance: 44, likes: 123, totalSubmissions: 400, acceptedSubmissions: 176
  },

  // ===== LINKED LISTS =====
  {
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    description: "Given the `head` of a singly linked list, reverse the list, and return the reversed list.\n\nImplement the solution iteratively.",
    difficulty: "Easy",
    category: "Linked Lists",
    tags: ["Linked List", "Recursion"],
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]", explanation: "" },
      { input: "head = [1,2]", output: "[2,1]", explanation: "" }
    ],
    constraints: ["The number of nodes in the list is in the range [0, 5000]", "-5000 <= Node.val <= 5000"],
    starterCode: {
      javascript: `function reverseList(arr) {\n  // Reverse the array (simulating linked list)\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst arr = JSON.parse(input);\nconsole.log(JSON.stringify(reverseList(arr)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> arr;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) arr.push_back(stoi(token));\n    reverse(arr.begin(), arr.end());\n    cout << "[";\n    for(int i=0;i<arr.size();i++) { if(i) cout << ","; cout << arr[i]; }\n    cout << "]" << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=parts.length-1; i>=0; i--) {\n            if(i<parts.length-1) sb.append(",");\n            sb.append(parts[i].trim());\n        }\n        sb.append("]");\n        System.out.println(sb);\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]" },
      { input: "[1,2]", expectedOutput: "[2,1]" }
    ],
    solution: "Use three pointers: prev, current, and next. Iterate and reverse links.",
    order: 9, acceptance: 72, likes: 198, totalSubmissions: 300, acceptedSubmissions: 216
  },
  {
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    description: "You are given two sorted arrays (representing linked lists) `list1` and `list2`.\n\nMerge the two lists into one **sorted** list and return it.",
    difficulty: "Easy",
    category: "Linked Lists",
    tags: ["Linked List", "Recursion"],
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]", explanation: "" },
      { input: "list1 = [], list2 = [0]", output: "[0]", explanation: "" }
    ],
    constraints: ["0 <= list length <= 50", "-100 <= Node.val <= 100"],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst l1 = JSON.parse(input[0]);\nconst l2 = JSON.parse(input[1]);\nconsole.log(JSON.stringify(mergeTwoLists(l1, l2)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    vector<int> merged;\n    // Parse and merge\n    auto parse = [](string s) {\n        vector<int> v;\n        if(s == "[]") return v;\n        s = s.substr(1, s.size()-2);\n        stringstream ss(s);\n        string t;\n        while(getline(ss, t, ',')) v.push_back(stoi(t));\n        return v;\n    };\n    auto a = parse(line1), b = parse(line2);\n    merge(a.begin(), a.end(), b.begin(), b.end(), back_inserter(merged));\n    cout << "[";\n    for(int i=0;i<merged.size();i++) { if(i) cout << ","; cout << merged[i]; }\n    cout << "]" << endl;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String l1 = sc.nextLine().trim();\n        String l2 = sc.nextLine().trim();\n        List<Integer> merged = new ArrayList<>();\n        if(!l1.equals("[]")) for(String s : l1.substring(1,l1.length()-1).split(",")) merged.add(Integer.parseInt(s.trim()));\n        if(!l2.equals("[]")) for(String s : l2.substring(1,l2.length()-1).split(",")) merged.add(Integer.parseInt(s.trim()));\n        Collections.sort(merged);\n        System.out.println(merged.toString().replaceAll(" ",""));\n    }\n}`
    },
    testCases: [
      { input: "[1,2,4]\n[1,3,4]", expectedOutput: "[1,1,2,3,4,4]" },
      { input: "[]\n[0]", expectedOutput: "[0]" }
    ],
    solution: "Use two pointers to merge sorted lists in O(n+m) time.",
    order: 10, acceptance: 62, likes: 167, totalSubmissions: 350, acceptedSubmissions: 217
  },

  // ===== STACKS & QUEUES =====
  {
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description: "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    difficulty: "Easy",
    category: "Stacks & Queues",
    tags: ["Stack", "Strings"],
    examples: [
      { input: 's = "()"', output: "true", explanation: "" },
      { input: 's = "()[]{}"', output: "true", explanation: "" },
      { input: 's = "(]"', output: "false", explanation: "" }
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    starterCode: {
      javascript: `function isValid(s) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isValid(input));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool isValid(string s) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << (isValid(s) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static boolean isValid(String s) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine().trim();\n        System.out.println(isValid(s));\n    }\n}`
    },
    testCases: [
      { input: "()", expectedOutput: "true" },
      { input: "()[]{}", expectedOutput: "true" },
      { input: "(]", expectedOutput: "false" }
    ],
    solution: "Use a stack. Push opening brackets, pop and match for closing brackets.",
    order: 11, acceptance: 43, likes: 245, totalSubmissions: 500, acceptedSubmissions: 215
  },

  // ===== BINARY SEARCH =====
  {
    title: "Binary Search",
    slug: "binary-search",
    description: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
    difficulty: "Easy",
    category: "Binary Search",
    tags: ["Binary Search", "Arrays"],
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists in nums and its index is 4." },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1", explanation: "2 does not exist in nums so return -1." }
    ],
    constraints: ["1 <= nums.length <= 10^4", "-10^4 < nums[i], target < 10^4", "All the integers in nums are unique.", "nums is sorted in ascending order."],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst nums = JSON.parse(input[0]);\nconst target = parseInt(input[1]);\nconsole.log(search(nums, target));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint search(vector<int>& nums, int target) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    int target;\n    cin >> target;\n    cout << search(nums, target) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int search(int[] nums, int target) {\n        // Write your solution here\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        int target = Integer.parseInt(sc.nextLine().trim());\n        System.out.println(search(nums, target));\n    }\n}`
    },
    testCases: [
      { input: "[-1,0,3,5,9,12]\n9", expectedOutput: "4" },
      { input: "[-1,0,3,5,9,12]\n2", expectedOutput: "-1" }
    ],
    solution: "Classic binary search with left and right pointers.",
    order: 12, acceptance: 56, likes: 134, totalSubmissions: 300, acceptedSubmissions: 168
  },

  // ===== TREES =====
  {
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth-of-binary-tree",
    description: "Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\nInput is given as a level-order array where `null` represents missing nodes.",
    difficulty: "Easy",
    category: "Trees",
    tags: ["Trees", "DFS", "BFS", "Recursion"],
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3", explanation: "The tree has a maximum depth of 3." },
      { input: "root = [1,null,2]", output: "2", explanation: "" }
    ],
    constraints: ["The number of nodes is in range [0, 10^4]", "-100 <= Node.val <= 100"],
    starterCode: {
      javascript: `function maxDepth(arr) {\n  if (!arr.length || arr[0] === null) return 0;\n  // Build tree and find max depth\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst arr = JSON.parse(input.replace(/null/g, 'null'));\n\nfunction solve(arr) {\n  if(!arr.length || arr[0] === null) return 0;\n  function depth(i) {\n    if(i >= arr.length || arr[i] === null) return 0;\n    return 1 + Math.max(depth(2*i+1), depth(2*i+2));\n  }\n  // Replace this with your own logic\n  return depth(0);\n}\nconsole.log(solve(arr));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    // Parse tree array and compute depth\n    vector<string> nodes;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) {\n        token.erase(0, token.find_first_not_of(' '));\n        nodes.push_back(token);\n    }\n    if(nodes.empty() || nodes[0] == "null") { cout << 0; return 0; }\n    function<int(int)> depth = [&](int i) -> int {\n        if(i >= nodes.size() || nodes[i] == "null") return 0;\n        return 1 + max(depth(2*i+1), depth(2*i+2));\n    };\n    cout << depth(0) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        if(parts.length == 0 || parts[0].trim().equals("null")) { System.out.println(0); return; }\n        System.out.println(depth(parts, 0));\n    }\n    static int depth(String[] nodes, int i) {\n        if(i >= nodes.length || nodes[i].trim().equals("null")) return 0;\n        return 1 + Math.max(depth(nodes, 2*i+1), depth(nodes, 2*i+2));\n    }\n}`
    },
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3" },
      { input: "[1,null,2]", expectedOutput: "2" }
    ],
    solution: "Recursively compute depth as 1 + max(left depth, right depth).",
    order: 13, acceptance: 73, likes: 178, totalSubmissions: 350, acceptedSubmissions: 256
  },
  {
    title: "Invert Binary Tree",
    slug: "invert-binary-tree",
    description: "Given the `root` of a binary tree (as a level-order array), invert the tree, and return the inverted tree.\n\nInverting a binary tree means swapping left and right children at every node.",
    difficulty: "Easy",
    category: "Trees",
    tags: ["Trees", "DFS", "BFS", "Recursion"],
    examples: [
      { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]", explanation: "" },
      { input: "root = [2,1,3]", output: "[2,3,1]", explanation: "" }
    ],
    constraints: ["The number of nodes is in range [0, 100]", "-100 <= Node.val <= 100"],
    starterCode: {
      javascript: `function invertTree(arr) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst arr = JSON.parse(input);\n// Simple array-based tree inversion\nfunction solve(arr) {\n  if(!arr.length) return [];\n  const n = arr.length;\n  const result = [...arr];\n  for(let i = 0; i < n; i++) {\n    const left = 2*i+1, right = 2*i+2;\n    if(right < n) {\n      // swap in result - this is placeholder\n    }\n  }\n  return result;\n}\nconsole.log(JSON.stringify(solve(arr)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    string line;\n    getline(cin, line);\n    // Parse and invert tree\n    cout << line << endl;\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        System.out.println(line);\n    }\n}`
    },
    testCases: [
      { input: "[4,2,7,1,3,6,9]", expectedOutput: "[4,7,2,9,6,3,1]" },
      { input: "[2,1,3]", expectedOutput: "[2,3,1]" }
    ],
    solution: "Recursively swap left and right children.",
    order: 14, acceptance: 74, likes: 189, totalSubmissions: 280, acceptedSubmissions: 207
  },

  // ===== DYNAMIC PROGRAMMING =====
  {
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    description: "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    difficulty: "Easy",
    category: "Dynamic Programming",
    tags: ["Dynamic Programming", "Math", "Memoization"],
    examples: [
      { input: "n = 2", output: "2", explanation: "There are two ways: 1+1 and 2." },
      { input: "n = 3", output: "3", explanation: "There are three ways: 1+1+1, 1+2, 2+1." }
    ],
    constraints: ["1 <= n <= 45"],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(climbStairs(parseInt(input)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint climbStairs(int n) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << climbStairs(n) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int climbStairs(int n) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(climbStairs(n));\n    }\n}`
    },
    testCases: [
      { input: "2", expectedOutput: "2" },
      { input: "3", expectedOutput: "3" },
      { input: "5", expectedOutput: "8" }
    ],
    solution: "Fibonacci-like recurrence: dp[i] = dp[i-1] + dp[i-2].",
    order: 15, acceptance: 52, likes: 234, totalSubmissions: 450, acceptedSubmissions: 234
  },
  {
    title: "House Robber",
    slug: "house-robber",
    description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.",
    difficulty: "Medium",
    category: "Dynamic Programming",
    tags: ["Dynamic Programming", "Arrays"],
    examples: [
      { input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4." },
      { input: "nums = [2,7,9,3,1]", output: "12", explanation: "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total = 12." }
    ],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 400"],
    starterCode: {
      javascript: `function rob(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(rob(nums));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint rob(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    cout << rob(nums) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int rob(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(rob(nums));\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3,1]", expectedOutput: "4" },
      { input: "[2,7,9,3,1]", expectedOutput: "12" }
    ],
    solution: "DP: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
    order: 16, acceptance: 48, likes: 267, totalSubmissions: 500, acceptedSubmissions: 240
  },
  {
    title: "Coin Change",
    slug: "coin-change",
    description: "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    difficulty: "Medium",
    category: "Dynamic Programming",
    tags: ["Dynamic Programming", "BFS"],
    examples: [
      { input: "coins = [1,5,11], amount = 11", output: "1", explanation: "11 = 11" },
      { input: "coins = [2], amount = 3", output: "-1", explanation: "" }
    ],
    constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst coins = JSON.parse(input[0]);\nconst amount = parseInt(input[1]);\nconsole.log(coinChange(coins, amount));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint coinChange(vector<int>& coins, int amount) {\n    // Write your solution here\n    return -1;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> coins;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) coins.push_back(stoi(token));\n    int amount;\n    cin >> amount;\n    cout << coinChange(coins, amount) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int coinChange(int[] coins, int amount) {\n        // Write your solution here\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] coins = new int[parts.length];\n        for(int i=0; i<parts.length; i++) coins[i] = Integer.parseInt(parts[i].trim());\n        int amount = Integer.parseInt(sc.nextLine().trim());\n        System.out.println(coinChange(coins, amount));\n    }\n}`
    },
    testCases: [
      { input: "[1,5,11]\n11", expectedOutput: "1" },
      { input: "[2]\n3", expectedOutput: "-1" },
      { input: "[1,2,5]\n11", expectedOutput: "3" }
    ],
    solution: "Bottom-up DP: dp[i] = min coins needed for amount i.",
    order: 17, acceptance: 42, likes: 298, totalSubmissions: 600, acceptedSubmissions: 252
  },
  {
    title: "Longest Common Subsequence",
    slug: "longest-common-subsequence",
    description: "Given two strings `text1` and `text2`, return the length of their **longest common subsequence**. If there is no common subsequence, return `0`.\n\nA **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",
    difficulty: "Medium",
    category: "Dynamic Programming",
    tags: ["Dynamic Programming", "Strings"],
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: "3", explanation: 'The longest common subsequence is "ace".' },
      { input: 'text1 = "abc", text2 = "def"', output: "0", explanation: "No common subsequence." }
    ],
    constraints: ["1 <= text1.length, text2.length <= 1000", "text1 and text2 consist of only lowercase English characters."],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(longestCommonSubsequence(input[0], input[1]));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint longestCommonSubsequence(string text1, string text2) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string t1, t2;\n    getline(cin, t1);\n    getline(cin, t2);\n    cout << longestCommonSubsequence(t1, t2) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int longestCommonSubsequence(String text1, String text2) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String t1 = sc.nextLine().trim();\n        String t2 = sc.nextLine().trim();\n        System.out.println(longestCommonSubsequence(t1, t2));\n    }\n}`
    },
    testCases: [
      { input: "abcde\nace", expectedOutput: "3" },
      { input: "abc\ndef", expectedOutput: "0" },
      { input: "abc\nabc", expectedOutput: "3" }
    ],
    solution: "2D DP: if chars match, dp[i][j] = dp[i-1][j-1] + 1, else max(dp[i-1][j], dp[i][j-1]).",
    order: 18, acceptance: 59, likes: 245, totalSubmissions: 400, acceptedSubmissions: 236
  },

  // ===== GRAPHS =====
  {
    title: "Number of Islands",
    slug: "number-of-islands",
    description: "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    difficulty: "Medium",
    category: "Graphs",
    tags: ["Graphs", "DFS", "BFS", "Matrix"],
    examples: [
      { 
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', 
        output: "1", 
        explanation: "" 
      },
      { 
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', 
        output: "3", 
        explanation: "" 
      }
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", "grid[i][j] is '0' or '1'."],
    starterCode: {
      javascript: `function numIslands(grid) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst grid = JSON.parse(input);\nconsole.log(numIslands(grid));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint numIslands(vector<vector<char>>& grid) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    // Parse 2D grid\n    cout << 0 << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int numIslands(char[][] grid) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        System.out.println(0);\n    }\n}`
    },
    testCases: [
      { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expectedOutput: "1" },
      { input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expectedOutput: "3" }
    ],
    solution: "DFS/BFS: iterate through grid, when finding '1', count an island and mark all connected land as visited.",
    order: 19, acceptance: 56, likes: 321, totalSubmissions: 550, acceptedSubmissions: 308
  },

  // ===== HASH MAP =====
  {
    title: "Group Anagrams",
    slug: "group-anagrams",
    description: "Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase.",
    difficulty: "Medium",
    category: "Hash Map",
    tags: ["Hash Map", "Strings", "Sorting"],
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]', explanation: "" },
      { input: 'strs = [""]', output: '[[""]]', explanation: "" }
    ],
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst strs = JSON.parse(input);\nconst result = groupAnagrams(strs);\nconsole.log(JSON.stringify(result.map(g => g.sort()).sort((a,b) => a.length - b.length)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution here\n    }\n}`
    },
    testCases: [
      { input: '["eat","tea","tan","ate","nat","bat"]', expectedOutput: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }
    ],
    solution: "Use sorted string as key in hash map to group anagrams.",
    order: 20, acceptance: 66, likes: 234, totalSubmissions: 400, acceptedSubmissions: 264
  },

  // ===== TWO POINTERS =====
  {
    title: "Container With Most Water",
    slug: "container-with-most-water",
    description: "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.",
    difficulty: "Medium",
    category: "Two Pointers",
    tags: ["Two Pointers", "Arrays", "Greedy"],
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "Lines at index 1 and 8 form the container with the most water." }
    ],
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst height = JSON.parse(input);\nconsole.log(maxArea(height));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint maxArea(vector<int>& height) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> h;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) h.push_back(stoi(token));\n    cout << maxArea(h) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int maxArea(int[] height) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] height = new int[parts.length];\n        for(int i=0; i<parts.length; i++) height[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(maxArea(height));\n    }\n}`
    },
    testCases: [
      { input: "[1,8,6,2,5,4,8,3,7]", expectedOutput: "49" },
      { input: "[1,1]", expectedOutput: "1" }
    ],
    solution: "Two pointers from both ends, move the shorter line inward.",
    order: 21, acceptance: 55, likes: 276, totalSubmissions: 500, acceptedSubmissions: 275
  },
  {
    title: "3Sum",
    slug: "3sum",
    description: "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    difficulty: "Medium",
    category: "Two Pointers",
    tags: ["Two Pointers", "Arrays", "Sorting"],
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]", explanation: "" }
    ],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(JSON.stringify(threeSum(nums)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[-1,0,1,2,-1,-4]", expectedOutput: "[[-1,-1,2],[-1,0,1]]" }
    ],
    solution: "Sort, then for each element use two pointers to find pairs that sum to negative of current element.",
    order: 22, acceptance: 33, likes: 345, totalSubmissions: 800, acceptedSubmissions: 264
  },

  // ===== SLIDING WINDOW =====
  {
    title: "Minimum Window Substring",
    slug: "minimum-window-substring",
    description: "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.",
    difficulty: "Hard",
    category: "Sliding Window",
    tags: ["Sliding Window", "Hash Map", "Strings"],
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: "The minimum window substring is BANC." }
    ],
    constraints: ["m == s.length", "n == t.length", "1 <= m, n <= 10^5"],
    starterCode: {
      javascript: `function minWindow(s, t) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(minWindow(input[0], input[1]));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nstring minWindow(string s, string t) {\n    // Write your solution here\n    return "";\n}\n\nint main() {\n    string s, t;\n    getline(cin, s);\n    getline(cin, t);\n    cout << minWindow(s, t) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static String minWindow(String s, String t) {\n        // Write your solution here\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String t = sc.nextLine();\n        System.out.println(minWindow(s, t));\n    }\n}`
    },
    testCases: [
      { input: "ADOBECODEBANC\nABC", expectedOutput: "BANC" },
      { input: "a\na", expectedOutput: "a" }
    ],
    solution: "Sliding window with character frequency count.",
    order: 23, acceptance: 40, likes: 389, totalSubmissions: 700, acceptedSubmissions: 280
  },

  // ===== BACKTRACKING =====
  {
    title: "Subsets",
    slug: "subsets",
    description: "Given an integer array `nums` of **unique** elements, return all possible subsets (the power set).\n\nThe solution set **must not** contain duplicate subsets. Return the solution in **any order**.",
    difficulty: "Medium",
    category: "Backtracking",
    tags: ["Backtracking", "Arrays", "Bit Manipulation"],
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]", explanation: "" }
    ],
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All the numbers of nums are unique."],
    starterCode: {
      javascript: `function subsets(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(JSON.stringify(subsets(nums)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3]", expectedOutput: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }
    ],
    solution: "Backtracking: at each step, choose to include or exclude the current element.",
    order: 24, acceptance: 74, likes: 234, totalSubmissions: 350, acceptedSubmissions: 259
  },
  {
    title: "Permutations",
    slug: "permutations",
    description: "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.",
    difficulty: "Medium",
    category: "Backtracking",
    tags: ["Backtracking", "Arrays"],
    examples: [
      { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]", explanation: "" }
    ],
    constraints: ["1 <= nums.length <= 6", "-10 <= nums[i] <= 10", "All the integers of nums are unique."],
    starterCode: {
      javascript: `function permute(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(JSON.stringify(permute(nums)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3]", expectedOutput: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
    ],
    solution: "Backtracking with swap or visited array.",
    order: 25, acceptance: 75, likes: 212, totalSubmissions: 300, acceptedSubmissions: 225
  },

  // ===== GREEDY =====
  {
    title: "Jump Game",
    slug: "jump-game",
    description: "You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.",
    difficulty: "Medium",
    category: "Greedy",
    tags: ["Greedy", "Arrays", "Dynamic Programming"],
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true", explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index." },
      { input: "nums = [3,2,1,0,4]", output: "false", explanation: "You will always arrive at index 3 whose value is 0." }
    ],
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
    starterCode: {
      javascript: `function canJump(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(canJump(nums));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool canJump(vector<int>& nums) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    cout << (canJump(nums) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static boolean canJump(int[] nums) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(canJump(nums));\n    }\n}`
    },
    testCases: [
      { input: "[2,3,1,1,4]", expectedOutput: "true" },
      { input: "[3,2,1,0,4]", expectedOutput: "false" }
    ],
    solution: "Greedy: track the farthest reachable index. If current index > farthest, return false.",
    order: 26, acceptance: 38, likes: 256, totalSubmissions: 600, acceptedSubmissions: 228
  },

  // ===== SORTING =====
  {
    title: "Merge Intervals",
    slug: "merge-intervals",
    description: "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    difficulty: "Medium",
    category: "Sorting",
    tags: ["Sorting", "Arrays", "Intervals"],
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Intervals [1,3] and [2,6] overlap, merged to [1,6]." }
    ],
    constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2"],
    starterCode: {
      javascript: `function merge(intervals) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst intervals = JSON.parse(input);\nconsole.log(JSON.stringify(merge(intervals)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]" },
      { input: "[[1,4],[4,5]]", expectedOutput: "[[1,5]]" }
    ],
    solution: "Sort by start, then merge overlapping intervals.",
    order: 27, acceptance: 46, likes: 298, totalSubmissions: 550, acceptedSubmissions: 253
  },

  // ===== MATH =====
  {
    title: "Palindrome Number",
    slug: "palindrome-number",
    description: "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.\n\n**Follow up:** Could you solve it without converting the integer to a string?",
    difficulty: "Easy",
    category: "Math",
    tags: ["Math"],
    examples: [
      { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and right to left." },
      { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left it becomes 121-." }
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(isPalindrome(parseInt(input)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool isPalindrome(int x) {\n    // Write your solution here\n    return false;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    cout << (isPalindrome(x) ? "true" : "false") << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(int x) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        System.out.println(isPalindrome(x));\n    }\n}`
    },
    testCases: [
      { input: "121", expectedOutput: "true" },
      { input: "-121", expectedOutput: "false" },
      { input: "10", expectedOutput: "false" }
    ],
    solution: "Reverse half the number and compare.",
    order: 28, acceptance: 53, likes: 145, totalSubmissions: 350, acceptedSubmissions: 186
  },
  {
    title: "Fizz Buzz",
    slug: "fizz-buzz",
    description: "Given an integer `n`, return a string array `answer` (1-indexed) where:\n\n- `answer[i] == \"FizzBuzz\"` if `i` is divisible by 3 and 5.\n- `answer[i] == \"Fizz\"` if `i` is divisible by 3.\n- `answer[i] == \"Buzz\"` if `i` is divisible by 5.\n- `answer[i] == i` (as a string) if none of the above conditions are true.",
    difficulty: "Easy",
    category: "Math",
    tags: ["Math", "Strings", "Simulation"],
    examples: [
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]', explanation: "" }
    ],
    constraints: ["1 <= n <= 10^4"],
    starterCode: {
      javascript: `function fizzBuzz(n) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(fizzBuzz(parseInt(input))));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    cout << "[";\n    for(int i=1;i<=n;i++) {\n        if(i>1) cout << ",";\n        if(i%15==0) cout << "\\"FizzBuzz\\"";\n        else if(i%3==0) cout << "\\"Fizz\\"";\n        else if(i%5==0) cout << "\\"Buzz\\"";\n        else cout << "\\"" << i << "\\"";\n    }\n    cout << "]" << endl;\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        StringBuilder sb = new StringBuilder("[");\n        for(int i=1;i<=n;i++) {\n            if(i>1) sb.append(",");\n            if(i%15==0) sb.append("\\"FizzBuzz\\"");\n            else if(i%3==0) sb.append("\\"Fizz\\"");\n            else if(i%5==0) sb.append("\\"Buzz\\"");\n            else sb.append("\\""+i+"\\"");\n        }\n        sb.append("]");\n        System.out.println(sb);\n    }\n}`
    },
    testCases: [
      { input: "5", expectedOutput: '["1","2","Fizz","4","Buzz"]' },
      { input: "15", expectedOutput: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' }
    ],
    solution: "Simple modulo checks for 3, 5, and 15.",
    order: 29, acceptance: 70, likes: 89, totalSubmissions: 200, acceptedSubmissions: 140
  },

  // ===== BIT MANIPULATION =====
  {
    title: "Single Number",
    slug: "single-number",
    description: "Given a **non-empty** array of integers `nums`, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
    difficulty: "Easy",
    category: "Bit Manipulation",
    tags: ["Bit Manipulation", "Arrays"],
    examples: [
      { input: "nums = [2,2,1]", output: "1", explanation: "" },
      { input: "nums = [4,1,2,1,2]", output: "4", explanation: "" }
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4", "-3 * 10^4 <= nums[i] <= 3 * 10^4", "Each element appears twice except one."],
    starterCode: {
      javascript: `function singleNumber(nums) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst nums = JSON.parse(input);\nconsole.log(singleNumber(nums));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint singleNumber(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    cout << singleNumber(nums) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int singleNumber(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] nums = new int[parts.length];\n        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(singleNumber(nums));\n    }\n}`
    },
    testCases: [
      { input: "[2,2,1]", expectedOutput: "1" },
      { input: "[4,1,2,1,2]", expectedOutput: "4" },
      { input: "[1]", expectedOutput: "1" }
    ],
    solution: "XOR all elements. a ^ a = 0, so duplicates cancel out.",
    order: 30, acceptance: 70, likes: 178, totalSubmissions: 300, acceptedSubmissions: 210
  },

  // ===== HARD PROBLEMS =====
  {
    title: "Median of Two Sorted Arrays",
    slug: "median-of-two-sorted-arrays",
    description: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be `O(log (m+n))`.",
    difficulty: "Hard",
    category: "Binary Search",
    tags: ["Binary Search", "Arrays", "Divide and Conquer"],
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "merged array = [1,2,3] and median is 2." },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000", explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5." }
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst nums1 = JSON.parse(input[0]);\nconst nums2 = JSON.parse(input[1]);\nconsole.log(findMedianSortedArrays(nums1, nums2).toFixed(5));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\ndouble findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n    // Write your solution here\n    return 0.0;\n}\n\nint main() {\n    // Parse input and solve\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        // Parse input and solve\n    }\n}`
    },
    testCases: [
      { input: "[1,3]\n[2]", expectedOutput: "2.00000" },
      { input: "[1,2]\n[3,4]", expectedOutput: "2.50000" }
    ],
    solution: "Binary search on the smaller array to find the partition point.",
    order: 31, acceptance: 36, likes: 432, totalSubmissions: 900, acceptedSubmissions: 324
  },
  {
    title: "Trapping Rain Water",
    slug: "trapping-rain-water",
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    difficulty: "Hard",
    category: "Two Pointers",
    tags: ["Two Pointers", "Arrays", "Stack", "Dynamic Programming"],
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "6 units of rain water are trapped." },
      { input: "height = [4,2,0,3,2,5]", output: "9", explanation: "" }
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    starterCode: {
      javascript: `function trap(height) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst height = JSON.parse(input);\nconsole.log(trap(height));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint trap(vector<int>& height) {\n    // Write your solution here\n    return 0;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> h;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) h.push_back(stoi(token));\n    cout << trap(h) << endl;\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Main {\n    public static int trap(int[] height) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine().trim();\n        line = line.substring(1, line.length()-1);\n        String[] parts = line.split(",");\n        int[] height = new int[parts.length];\n        for(int i=0; i<parts.length; i++) height[i] = Integer.parseInt(parts[i].trim());\n        System.out.println(trap(height));\n    }\n}`
    },
    testCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expectedOutput: "6" },
      { input: "[4,2,0,3,2,5]", expectedOutput: "9" }
    ],
    solution: "Two pointers from both ends. Track left max and right max.",
    order: 32, acceptance: 59, likes: 456, totalSubmissions: 700, acceptedSubmissions: 413
  },
  {
    title: "Merge K Sorted Lists",
    slug: "merge-k-sorted-lists",
    description: "You are given an array of `k` sorted arrays. Merge all arrays into one sorted array and return it.",
    difficulty: "Hard",
    category: "Sorting",
    tags: ["Sorting", "Heap", "Divide and Conquer", "Linked List"],
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]", explanation: "" }
    ],
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500"],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst lists = JSON.parse(input);\nconsole.log(JSON.stringify(mergeKLists(lists)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", expectedOutput: "[1,1,2,3,4,4,5,6]" }
    ],
    solution: "Use a min-heap to always pick the smallest element across all lists.",
    order: 33, acceptance: 49, likes: 367, totalSubmissions: 650, acceptedSubmissions: 319
  },
  // ===== MORE PROBLEMS =====
  {
    title: "Rotate Array",
    slug: "rotate-array",
    description: "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.",
    difficulty: "Medium",
    category: "Arrays",
    tags: ["Arrays", "Math"],
    examples: [
      { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]", explanation: "" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1", "0 <= k <= 10^5"],
    starterCode: {
      javascript: `function rotate(nums, k) {\n  // Write your solution here\n  return nums;\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst nums = JSON.parse(input[0]);\nconst k = parseInt(input[1]);\nconsole.log(JSON.stringify(rotate(nums, k)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    line = line.substr(1, line.size()-2);\n    stringstream ss(line);\n    string token;\n    while(getline(ss, token, ',')) nums.push_back(stoi(token));\n    int k; cin >> k;\n    k %= nums.size();\n    reverse(nums.begin(), nums.end());\n    reverse(nums.begin(), nums.begin()+k);\n    reverse(nums.begin()+k, nums.end());\n    cout << "[";\n    for(int i=0;i<nums.size();i++) { if(i) cout << ","; cout << nums[i]; }\n    cout << "]" << endl;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3,4,5,6,7]\n3", expectedOutput: "[5,6,7,1,2,3,4]" },
      { input: "[-1,-100,3,99]\n2", expectedOutput: "[3,99,-1,-100]" }
    ],
    solution: "Reverse entire array, then reverse first k and remaining elements.",
    order: 34, acceptance: 39, likes: 167, totalSubmissions: 450, acceptedSubmissions: 176
  },
  {
    title: "Move Zeroes",
    slug: "move-zeroes",
    description: "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.\n\n**Note:** You must do this in-place without making a copy of the array.",
    difficulty: "Easy",
    category: "Arrays",
    tags: ["Arrays", "Two Pointers"],
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]", explanation: "" },
      { input: "nums = [0]", output: "[0]", explanation: "" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {\n  // Write your solution here\n  return nums;\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(JSON.stringify(moveZeroes(JSON.parse(input))));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    string line; getline(cin,line);\n    vector<int> nums;\n    line = line.substr(1,line.size()-2);\n    stringstream ss(line); string t;\n    while(getline(ss,t,',')) nums.push_back(stoi(t));\n    int j=0;\n    for(int i=0;i<nums.size();i++) if(nums[i]!=0) swap(nums[j++],nums[i]);\n    cout<<"["; for(int i=0;i<nums.size();i++){if(i)cout<<",";cout<<nums[i];} cout<<"]"<<endl;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[0,1,0,3,12]", expectedOutput: "[1,3,12,0,0]" },
      { input: "[0]", expectedOutput: "[0]" }
    ],
    solution: "Two pointer technique: one for current position, one for non-zero placement.",
    order: 35, acceptance: 61, likes: 134, totalSubmissions: 300, acceptedSubmissions: 183
  },
  {
    title: "Search in Rotated Sorted Array",
    slug: "search-in-rotated-sorted-array",
    description: "There is an integer array `nums` sorted in ascending order (with distinct values). `nums` is possibly rotated at an unknown pivot index.\n\nGiven the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
    difficulty: "Medium",
    category: "Binary Search",
    tags: ["Binary Search", "Arrays"],
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4", explanation: "" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1", explanation: "" }
    ],
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "All values of nums are unique."],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst nums = JSON.parse(input[0]);\nconst target = parseInt(input[1]);\nconsole.log(search(nums, target));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint search(vector<int>& nums, int target) {\n    // Write your solution\n    return -1;\n}\nint main() {\n    string line; getline(cin,line);\n    vector<int> nums;\n    line = line.substr(1,line.size()-2);\n    stringstream ss(line); string t;\n    while(getline(ss,t,',')) nums.push_back(stoi(t));\n    int target; cin >> target;\n    cout << search(nums,target) << endl;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static int search(int[] nums, int target) {\n        // Write your solution\n        return -1;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Parse input\n    }\n}`
    },
    testCases: [
      { input: "[4,5,6,7,0,1,2]\n0", expectedOutput: "4" },
      { input: "[4,5,6,7,0,1,2]\n3", expectedOutput: "-1" }
    ],
    solution: "Modified binary search: determine which half is sorted, then decide which half to search.",
    order: 36, acceptance: 38, likes: 289, totalSubmissions: 600, acceptedSubmissions: 228
  },
  {
    title: "Validate Binary Search Tree",
    slug: "validate-binary-search-tree",
    description: "Given the root of a binary tree (as level-order array), determine if it is a valid binary search tree (BST).\n\nA valid BST has:\n- The left subtree of a node contains only nodes with keys less than the node's key.\n- The right subtree of a node contains only nodes with keys greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.",
    difficulty: "Medium",
    category: "Trees",
    tags: ["Trees", "DFS", "BST"],
    examples: [
      { input: "root = [2,1,3]", output: "true", explanation: "" },
      { input: "root = [5,1,4,null,null,3,6]", output: "false", explanation: "Node 4 is in the right subtree of 5 but has child 3 < 5." }
    ],
    constraints: ["The number of nodes is in range [1, 10^4]", "-2^31 <= Node.val <= 2^31 - 1"],
    starterCode: {
      javascript: `function isValidBST(arr) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst arr = JSON.parse(input.replace(/null/g, 'null'));\nconsole.log(isValidBST(arr));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: "[2,1,3]", expectedOutput: "true" },
      { input: "[5,1,4,null,null,3,6]", expectedOutput: "false" }
    ],
    solution: "Inorder traversal should produce sorted sequence, or use min/max bounds recursively.",
    order: 37, acceptance: 32, likes: 278, totalSubmissions: 650, acceptedSubmissions: 208
  },
  {
    title: "Word Search",
    slug: "word-search",
    description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    difficulty: "Medium",
    category: "Backtracking",
    tags: ["Backtracking", "Matrix", "DFS"],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true", explanation: "" }
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15"],
    starterCode: {
      javascript: `function exist(board, word) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst board = JSON.parse(input[0]);\nconst word = input[1];\nconsole.log(exist(board, word));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCCED', expectedOutput: "true" }
    ],
    solution: "DFS backtracking from each cell, marking visited cells.",
    order: 38, acceptance: 41, likes: 312, totalSubmissions: 600, acceptedSubmissions: 246
  },
  {
    title: "LRU Cache",
    slug: "lru-cache",
    description: "Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.\n\nImplement the `LRUCache` class:\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.\n- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.\n- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key.",
    difficulty: "Medium",
    category: "Hash Map",
    tags: ["Hash Map", "Linked List", "Design"],
    examples: [
      { input: 'operations: ["LRUCache","put","put","get","put","get","put","get","get","get"], args: [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]', output: "[null,null,null,1,null,-1,null,-1,3,4]", explanation: "" }
    ],
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5"],
    starterCode: {
      javascript: `class LRUCache {\n  constructor(capacity) {\n    // Write your solution here\n  }\n\n  get(key) {\n    // Write your solution here\n  }\n\n  put(key, value) {\n    // Write your solution here\n  }\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst ops = JSON.parse(input[0]);\nconst args = JSON.parse(input[1]);\nlet cache;\nconst result = [];\nfor(let i=0; i<ops.length; i++) {\n  if(ops[i]==='LRUCache') { cache = new LRUCache(args[i][0]); result.push(null); }\n  else if(ops[i]==='get') { result.push(cache.get(args[i][0])); }\n  else { cache.put(args[i][0], args[i][1]); result.push(null); }\n}\nconsole.log(JSON.stringify(result));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    // Write your solution\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution\n    }\n}`
    },
    testCases: [
      { input: '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]', expectedOutput: "[null,null,null,1,null,-1,null,-1,3,4]" }
    ],
    solution: "Doubly linked list + hash map for O(1) get and put.",
    order: 39, acceptance: 41, likes: 389, totalSubmissions: 700, acceptedSubmissions: 287
  },
  {
    title: "Longest Palindromic Substring",
    slug: "longest-palindromic-substring",
    description: "Given a string `s`, return the longest palindromic substring in `s`.",
    difficulty: "Medium",
    category: "Strings",
    tags: ["Strings", "Dynamic Programming"],
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
      { input: 's = "cbbd"', output: '"bb"', explanation: "" }
    ],
    constraints: ["1 <= s.length <= 1000", "s consist of only digits and English letters."],
    starterCode: {
      javascript: `function longestPalindrome(s) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(longestPalindrome(input));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nstring longestPalindrome(string s) {\n    // Write your solution\n    return "";\n}\nint main() {\n    string s; getline(cin,s);\n    cout << longestPalindrome(s) << endl;\n}`,
      java: `import java.util.*;\npublic class Main {\n    public static String longestPalindrome(String s) {\n        // Write your solution\n        return "";\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(longestPalindrome(sc.nextLine()));\n    }\n}`
    },
    testCases: [
      { input: "babad", expectedOutput: "bab" },
      { input: "cbbd", expectedOutput: "bb" }
    ],
    solution: "Expand around center for each character (odd and even length palindromes).",
    order: 40, acceptance: 33, likes: 345, totalSubmissions: 800, acceptedSubmissions: 264
  },
  // More problems to reach 50+
  {
    title: "Majority Element",
    slug: "majority-element",
    description: "Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times.",
    difficulty: "Easy", category: "Arrays", tags: ["Arrays", "Hash Map", "Sorting"],
    examples: [{ input: "nums = [3,2,3]", output: "3", explanation: "" }],
    constraints: ["n == nums.length", "1 <= n <= 5 * 10^4"],
    starterCode: {
      javascript: `function majorityElement(nums) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(majorityElement(JSON.parse(input)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { string line; getline(cin,line); vector<int> nums; line=line.substr(1,line.size()-2); stringstream ss(line); string t; while(getline(ss,t,',')) nums.push_back(stoi(t)); sort(nums.begin(),nums.end()); cout<<nums[nums.size()/2]<<endl; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); } }`
    },
    testCases: [
      { input: "[3,2,3]", expectedOutput: "3" },
      { input: "[2,2,1,1,1,2,2]", expectedOutput: "2" }
    ],
    solution: "Boyer-Moore Voting Algorithm.", order: 41, acceptance: 63, likes: 145, totalSubmissions: 300, acceptedSubmissions: 189
  },
  {
    title: "Missing Number",
    slug: "missing-number",
    description: "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
    difficulty: "Easy", category: "Bit Manipulation", tags: ["Bit Manipulation", "Arrays", "Math"],
    examples: [{ input: "nums = [3,0,1]", output: "2", explanation: "" }],
    constraints: ["n == nums.length", "1 <= n <= 10^4"],
    starterCode: {
      javascript: `function missingNumber(nums) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconsole.log(missingNumber(JSON.parse(input)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { string line; getline(cin,line); vector<int> nums; line=line.substr(1,line.size()-2); stringstream ss(line); string t; while(getline(ss,t,',')) nums.push_back(stoi(t)); int n=nums.size(),sum=n*(n+1)/2; for(int x:nums)sum-=x; cout<<sum<<endl; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: "[3,0,1]", expectedOutput: "2" },
      { input: "[0,1]", expectedOutput: "2" },
      { input: "[9,6,4,2,3,5,7,0,1]", expectedOutput: "8" }
    ],
    solution: "XOR or sum formula: n*(n+1)/2 - sum(nums).", order: 42, acceptance: 61, likes: 123, totalSubmissions: 280, acceptedSubmissions: 171
  },
  {
    title: "Kth Largest Element",
    slug: "kth-largest-element-in-an-array",
    description: "Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.\n\nNote that it is the `kth` largest element in the sorted order, not the `kth` distinct element.",
    difficulty: "Medium", category: "Sorting", tags: ["Sorting", "Heap", "Divide and Conquer"],
    examples: [{ input: "nums = [3,2,1,5,6,4], k = 2", output: "5", explanation: "" }],
    constraints: ["1 <= k <= nums.length <= 10^5"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(findKthLargest(JSON.parse(input[0]), parseInt(input[1])));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { string line; getline(cin,line); vector<int> nums; line=line.substr(1,line.size()-2); stringstream ss(line); string t; while(getline(ss,t,',')) nums.push_back(stoi(t)); int k; cin>>k; sort(nums.rbegin(),nums.rend()); cout<<nums[k-1]<<endl; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: "[3,2,1,5,6,4]\n2", expectedOutput: "5" },
      { input: "[3,2,3,1,2,4,5,5,6]\n4", expectedOutput: "4" }
    ],
    solution: "Use a min-heap of size k, or QuickSelect algorithm.", order: 43, acceptance: 66, likes: 267, totalSubmissions: 450, acceptedSubmissions: 297
  },
  {
    title: "Implement Trie (Prefix Tree)",
    slug: "implement-trie-prefix-tree",
    description: "A trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.\n\nImplement the Trie class with insert, search, and startsWith methods.",
    difficulty: "Medium", category: "Trees", tags: ["Trees", "Trie", "Design", "Strings"],
    examples: [{ input: 'ops: ["Trie","insert","search","search","startsWith","insert","search"]', output: "[null,null,true,false,true,null,true]", explanation: "" }],
    constraints: ["1 <= word.length, prefix.length <= 2000"],
    starterCode: {
      javascript: `class Trie {\n  constructor() {\n    // Write your solution\n  }\n  insert(word) { }\n  search(word) { }\n  startsWith(prefix) { }\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconst ops = JSON.parse(input[0]);\nconst args = JSON.parse(input[1]);\nlet trie;\nconst result = [];\nfor(let i=0;i<ops.length;i++) {\n  if(ops[i]==='Trie') { trie = new Trie(); result.push(null); }\n  else result.push(trie[ops[i]](args[i][0]));\n}\nconsole.log(JSON.stringify(result));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { return 0; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: '["Trie","insert","search","search","startsWith","insert","search"]\n[[""],["apple"],["apple"],["app"],["app"],["app"],["app"]]', expectedOutput: "[null,null,true,false,true,null,true]" }
    ],
    solution: "Use a tree of nodes where each node has children map and isEnd flag.", order: 44, acceptance: 62, likes: 298, totalSubmissions: 450, acceptedSubmissions: 279
  },
  {
    title: "Course Schedule",
    slug: "course-schedule",
    description: "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    difficulty: "Medium", category: "Graphs", tags: ["Graphs", "Topological Sort", "BFS", "DFS"],
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true", explanation: "" },
      { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "false", explanation: "Cycle exists." }
    ],
    constraints: ["1 <= numCourses <= 2000", "0 <= prerequisites.length <= 5000"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');\nconsole.log(canFinish(parseInt(input[0]), JSON.parse(input[1])));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { return 0; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: "2\n[[1,0]]", expectedOutput: "true" },
      { input: "2\n[[1,0],[0,1]]", expectedOutput: "false" }
    ],
    solution: "Topological sort using BFS (Kahn's algorithm) or DFS cycle detection.", order: 45, acceptance: 45, likes: 312, totalSubmissions: 550, acceptedSubmissions: 248
  },
  {
    title: "Min Stack",
    slug: "min-stack",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the MinStack class.",
    difficulty: "Medium", category: "Stacks & Queues", tags: ["Stack", "Design"],
    examples: [{ input: 'ops: ["MinStack","push","push","push","getMin","pop","top","getMin"]', output: "[null,null,null,null,-3,null,0,-2]", explanation: "" }],
    constraints: ["-2^31 <= val <= 2^31 - 1"],
    starterCode: {
      javascript: `class MinStack {\n  constructor() {\n    // Write your solution\n  }\n  push(val) { }\n  pop() { }\n  top() { }\n  getMin() { }\n}\nconst input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconst ops = JSON.parse(input[0]);\nconst args = JSON.parse(input[1]);\nlet ms; const result = [];\nfor(let i=0;i<ops.length;i++) {\n  if(ops[i]==='MinStack') { ms = new MinStack(); result.push(null); }\n  else { const r = ms[ops[i]](...(args[i]||[])); result.push(r===undefined?null:r); }\n}\nconsole.log(JSON.stringify(result));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { return 0; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]', expectedOutput: "[null,null,null,null,-3,null,0,-2]" }
    ],
    solution: "Use two stacks: one for values, one for tracking minimums.", order: 46, acceptance: 52, likes: 234, totalSubmissions: 400, acceptedSubmissions: 208
  },
  {
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    description: "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    difficulty: "Medium", category: "Dynamic Programming", tags: ["Dynamic Programming", "Binary Search"],
    examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The LIS is [2,3,7,101]." }],
    constraints: ["1 <= nums.length <= 2500", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(lengthOfLIS(JSON.parse(input)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { string line; getline(cin,line); vector<int> nums; line=line.substr(1,line.size()-2); stringstream ss(line); string t; while(getline(ss,t,',')) nums.push_back(stoi(t)); vector<int> dp; for(int x:nums){ auto it=lower_bound(dp.begin(),dp.end(),x); if(it==dp.end()) dp.push_back(x); else *it=x; } cout<<dp.size()<<endl; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: "[10,9,2,5,3,7,101,18]", expectedOutput: "4" },
      { input: "[0,1,0,3,2,3]", expectedOutput: "4" }
    ],
    solution: "DP O(n²) or Binary search with patience sort O(n log n).", order: 47, acceptance: 52, likes: 312, totalSubmissions: 500, acceptedSubmissions: 260
  },
  {
    title: "Serialize and Deserialize Binary Tree",
    slug: "serialize-and-deserialize-binary-tree",
    description: "Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a tree to a string, and deserialization is the reverse.",
    difficulty: "Hard", category: "Trees", tags: ["Trees", "DFS", "BFS", "Design"],
    examples: [{ input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]", explanation: "" }],
    constraints: ["The number of nodes is in range [0, 10^4]"],
    starterCode: {
      javascript: `// Serialize: tree array -> string\n// Deserialize: string -> tree array\nfunction serialize(arr) { return JSON.stringify(arr); }\nfunction deserialize(str) { return JSON.parse(str); }\n\nconst input = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconst arr = JSON.parse(input);\nconsole.log(JSON.stringify(deserialize(serialize(arr))));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { string s; getline(cin,s); cout<<s<<endl; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); System.out.println(sc.nextLine()); } }`
    },
    testCases: [
      { input: "[1,2,3,null,null,4,5]", expectedOutput: "[1,2,3,null,null,4,5]" }
    ],
    solution: "BFS level-order traversal for serialization, queue-based reconstruction for deserialization.", order: 48, acceptance: 55, likes: 378, totalSubmissions: 600, acceptedSubmissions: 330
  },
  {
    title: "Find Minimum in Rotated Sorted Array",
    slug: "find-minimum-in-rotated-sorted-array",
    description: "Given a sorted rotated array of unique elements, return the minimum element. You must write an algorithm that runs in O(log n) time.",
    difficulty: "Medium", category: "Binary Search", tags: ["Binary Search", "Arrays"],
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1", explanation: "" }],
    constraints: ["n == nums.length", "1 <= n <= 5000"],
    starterCode: {
      javascript: `function findMin(nums) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin','utf8').trim();\nconsole.log(findMin(JSON.parse(input)));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { string line; getline(cin,line); vector<int> nums; line=line.substr(1,line.size()-2); stringstream ss(line); string t; while(getline(ss,t,',')) nums.push_back(stoi(t)); cout<<*min_element(nums.begin(),nums.end())<<endl; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: "[3,4,5,1,2]", expectedOutput: "1" },
      { input: "[4,5,6,7,0,1,2]", expectedOutput: "0" }
    ],
    solution: "Binary search: if mid > right, min is in right half.", order: 49, acceptance: 48, likes: 234, totalSubmissions: 450, acceptedSubmissions: 216
  },
  {
    title: "Word Break",
    slug: "word-break",
    description: "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.",
    difficulty: "Medium", category: "Dynamic Programming", tags: ["Dynamic Programming", "Hash Map", "Strings"],
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true", explanation: "" }],
    constraints: ["1 <= s.length <= 300", "1 <= wordDict.length <= 1000"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your solution\n}\nconst input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');\nconsole.log(wordBreak(input[0], JSON.parse(input[1])));`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main() { return 0; }`,
      java: `import java.util.*;\npublic class Main { public static void main(String[] args) { } }`
    },
    testCases: [
      { input: 'leetcode\n["leet","code"]', expectedOutput: "true" },
      { input: 'applepenapple\n["apple","pen"]', expectedOutput: "true" }
    ],
    solution: "DP: dp[i] is true if s[0..i] can be segmented.", order: 50, acceptance: 45, likes: 278, totalSubmissions: 550, acceptedSubmissions: 248
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/primecode');
    console.log('Connected to MongoDB');

    // Clear existing problems
    await Problem.deleteMany({});
    console.log('Cleared existing problems');

    // Insert problems
    await Problem.insertMany(problems);
    console.log(`✅ Seeded ${problems.length} problems successfully!`);

    // Create admin user if not exists
    const adminExists = await User.findOne({ email: 'admin@primecode.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin',
        email: 'admin@primecode.com',
        password: 'admin123',
        role: 'admin'
      });
      console.log('✅ Admin user created (admin@primecode.com / admin123)');
    }

    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();
