import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from './models/Problem.js';

dotenv.config();

// ===================================================================
// Problem signature definitions — one entry per problem title.
// For each problem we define the function/class starter code (what the
// user sees) AND the driver code (hidden, calls the user's function).
//
// Format for each language:
//   starterCode — only the class Solution / function
//   driverCode  — reads stdin, calls user function, prints result
//
// The submission controller already prepends:
//   C++:  #include <bits/stdc++.h>, using namespace std, ListNode, TreeNode
//   Java: import java.util.*, ListNode, TreeNode
//   JS:   ListNode, TreeNode
// So we do NOT include those in starter or driver code.
// ===================================================================

const problemDefinitions = {
  // ======================== ARRAYS ========================
  "Two Sum": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
}`,
      javascript: `function twoSum(nums, target) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    int target;
    cin >> target;
    Solution sol;
    auto result = sol.twoSum(nums, target);
    cout << "[" << result[0] << "," << result[1] << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        int target = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        int[] result = sol.twoSum(nums, target);
        System.out.println("[" + result[0] + "," + result[1] + "]");
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const nums = JSON.parse(input[0]);
const target = parseInt(input[1]);
console.log(JSON.stringify(twoSum(nums, target)));`
    }
  },

  "Best Time to Buy and Sell Stock": {
    starterCode: {
      cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function maxProfit(prices) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> prices;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) prices.push_back(stoi(token));
    Solution sol;
    cout << sol.maxProfit(prices) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] prices = new int[parts.length];
        for(int i=0; i<parts.length; i++) prices[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.maxProfit(prices));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const prices = JSON.parse(input);
console.log(maxProfit(prices));`
    }
  },

  "Contains Duplicate": {
    starterCode: {
      cpp: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function containsDuplicate(nums) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << (sol.containsDuplicate(nums) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.containsDuplicate(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
console.log(containsDuplicate(nums));`
    }
  },

  "Maximum Subarray": {
    starterCode: {
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function maxSubArray(nums) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << sol.maxSubArray(nums) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.maxSubArray(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
console.log(maxSubArray(nums));`
    }
  },

  "Product of Array Except Self": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[]{};
    }
}`,
      javascript: `function productExceptSelf(nums) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    auto r = sol.productExceptSelf(nums);
    cout << "[";
    for(int i=0;i<r.size();i++) { if(i) cout << ","; cout << r[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        int[] r = sol.productExceptSelf(nums);
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<r.length;i++) { if(i>0) sb.append(","); sb.append(r[i]); }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
console.log(JSON.stringify(productExceptSelf(nums)));`
    }
  },

  // ======================== STRINGS ========================
  "Valid Anagram": {
    starterCode: {
      cpp: `class Solution {
public:
    bool isAnagram(string s, string t) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function isAnagram(s, t) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string s, t;
    getline(cin, s);
    getline(cin, t);
    Solution sol;
    cout << (sol.isAnagram(s, t) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        String t = sc.nextLine().trim();
        Solution sol = new Solution();
        System.out.println(sol.isAnagram(s, t));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
console.log(isAnagram(input[0], input[1]));`
    }
  },

  "Longest Substring Without Repeating Characters": {
    starterCode: {
      cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string s;
    getline(cin, s);
    Solution sol;
    cout << sol.lengthOfLongestSubstring(s) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring(s));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(lengthOfLongestSubstring(input));`
    }
  },

  "Valid Palindrome": {
    starterCode: {
      cpp: `class Solution {
public:
    bool isPalindrome(string s) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function isPalindrome(s) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string s;
    getline(cin, s);
    Solution sol;
    cout << (sol.isPalindrome(s) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        Solution sol = new Solution();
        System.out.println(sol.isPalindrome(s));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(isPalindrome(input));`
    }
  },

  // ======================== LINKED LISTS ========================
  "Reverse Linked List": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> reverseList(vector<int>& arr) {
        // Reverse the array (simulating linked list)
        // Write your solution here
        return arr;
    }
};`,
      java: `class Solution {
    public int[] reverseList(int[] arr) {
        // Reverse the array (simulating linked list)
        // Write your solution here
        return arr;
    }
}`,
      javascript: `function reverseList(arr) {
    // Reverse the array (simulating linked list)
    // Write your solution here
    return arr;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> arr;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) arr.push_back(stoi(token));
    Solution sol;
    auto result = sol.reverseList(arr);
    cout << "[";
    for(int i=0;i<result.size();i++) { if(i) cout << ","; cout << result[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] arr = new int[parts.length];
        for(int i=0; i<parts.length; i++) arr[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        int[] result = sol.reverseList(arr);
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<result.length;i++) { if(i>0) sb.append(","); sb.append(result[i]); }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const arr = JSON.parse(input);
console.log(JSON.stringify(reverseList(arr)));`
    }
  },

  "Merge Two Sorted Lists": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> mergeTwoLists(vector<int>& l1, vector<int>& l2) {
        // Merge two sorted arrays
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public List<Integer> mergeTwoLists(List<Integer> l1, List<Integer> l2) {
        // Merge two sorted lists
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      javascript: `function mergeTwoLists(l1, l2) {
    // Merge two sorted arrays
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line1, line2;
    getline(cin, line1);
    getline(cin, line2);
    auto parse = [](string s) {
        vector<int> v;
        if(s == "[]") return v;
        s = s.substr(1, s.size()-2);
        stringstream ss(s);
        string t;
        while(getline(ss, t, ',')) v.push_back(stoi(t));
        return v;
    };
    auto a = parse(line1), b = parse(line2);
    Solution sol;
    auto merged = sol.mergeTwoLists(a, b);
    cout << "[";
    for(int i=0;i<merged.size();i++) { if(i) cout << ","; cout << merged[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String l1s = sc.nextLine().trim();
        String l2s = sc.nextLine().trim();
        List<Integer> l1 = new ArrayList<>();
        List<Integer> l2 = new ArrayList<>();
        if(!l1s.equals("[]")) for(String s : l1s.substring(1,l1s.length()-1).split(",")) l1.add(Integer.parseInt(s.trim()));
        if(!l2s.equals("[]")) for(String s : l2s.substring(1,l2s.length()-1).split(",")) l2.add(Integer.parseInt(s.trim()));
        Solution sol = new Solution();
        List<Integer> merged = sol.mergeTwoLists(l1, l2);
        System.out.println(merged.toString().replaceAll(" ",""));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const l1 = JSON.parse(input[0]);
const l2 = JSON.parse(input[1]);
console.log(JSON.stringify(mergeTwoLists(l1, l2)));`
    }
  },

  // ======================== STACKS & QUEUES ========================
  "Valid Parentheses": {
    starterCode: {
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function isValid(s) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string s;
    getline(cin, s);
    Solution sol;
    cout << (sol.isValid(s) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        Solution sol = new Solution();
        System.out.println(sol.isValid(s));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(isValid(input));`
    }
  },

  // ======================== BINARY SEARCH ========================
  "Binary Search": {
    starterCode: {
      cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Write your solution here
        return -1;
    }
};`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
      javascript: `function search(nums, target) {
    // Write your solution here
    return -1;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    int target;
    cin >> target;
    Solution sol;
    cout << sol.search(nums, target) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        int target = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        System.out.println(sol.search(nums, target));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const nums = JSON.parse(input[0]);
const target = parseInt(input[1]);
console.log(search(nums, target));`
    }
  },

  // ======================== TREES ========================
  "Maximum Depth of Binary Tree": {
    starterCode: {
      cpp: `class Solution {
public:
    int maxDepth(vector<string>& nodes, int i) {
        if(i >= nodes.size() || nodes[i] == "null") return 0;
        return 1 + max(maxDepth(nodes, 2*i+1), maxDepth(nodes, 2*i+2));
    }
    int solve(vector<string>& nodes) {
        if(nodes.empty() || nodes[0] == "null") return 0;
        return maxDepth(nodes, 0);
    }
};`,
      java: `class Solution {
    public int maxDepth(String[] nodes, int i) {
        if(i >= nodes.length || nodes[i].trim().equals("null")) return 0;
        return 1 + Math.max(maxDepth(nodes, 2*i+1), maxDepth(nodes, 2*i+2));
    }
    public int solve(String[] nodes) {
        if(nodes.length == 0 || nodes[0].trim().equals("null")) return 0;
        return maxDepth(nodes, 0);
    }
}`,
      javascript: `function maxDepth(arr) {
    if(!arr.length || arr[0] === null) return 0;
    function depth(i) {
        if(i >= arr.length || arr[i] === null) return 0;
        return 1 + Math.max(depth(2*i+1), depth(2*i+2));
    }
    return depth(0);
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<string> nodes;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) {
        token.erase(0, token.find_first_not_of(' '));
        nodes.push_back(token);
    }
    Solution sol;
    cout << sol.solve(nodes) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        Solution sol = new Solution();
        System.out.println(sol.solve(parts));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const arr = JSON.parse(input.replace(/null/g, 'null'));
console.log(maxDepth(arr));`
    }
  },

  "Invert Binary Tree": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> invertTree(vector<int>& arr) {
        // Invert tree represented as level-order array
        // Write your solution here
        return arr;
    }
};`,
      java: `class Solution {
    public int[] invertTree(int[] arr) {
        // Invert tree represented as level-order array
        // Write your solution here
        return arr;
    }
}`,
      javascript: `function invertTree(arr) {
    // Invert tree represented as level-order array
    // Write your solution here
    return arr;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> arr;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) arr.push_back(stoi(token));
    Solution sol;
    auto result = sol.invertTree(arr);
    cout << "[";
    for(int i=0;i<result.size();i++) { if(i) cout << ","; cout << result[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] arr = new int[parts.length];
        for(int i=0; i<parts.length; i++) arr[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        int[] result = sol.invertTree(arr);
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<result.length;i++) { if(i>0) sb.append(","); sb.append(result[i]); }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const arr = JSON.parse(input);
console.log(JSON.stringify(invertTree(arr)));`
    }
  },

  // ======================== DYNAMIC PROGRAMMING ========================
  "Climbing Stairs": {
    starterCode: {
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function climbStairs(n) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    int n;
    cin >> n;
    Solution sol;
    cout << sol.climbStairs(n) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Solution sol = new Solution();
        System.out.println(sol.climbStairs(n));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(climbStairs(parseInt(input)));`
    }
  },

  "House Robber": {
    starterCode: {
      cpp: `class Solution {
public:
    int rob(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function rob(nums) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << sol.rob(nums) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.rob(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
console.log(rob(nums));`
    }
  },

  "Coin Change": {
    starterCode: {
      cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        // Write your solution here
        return -1;
    }
};`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }
}`,
      javascript: `function coinChange(coins, amount) {
    // Write your solution here
    return -1;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> coins;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) coins.push_back(stoi(token));
    int amount;
    cin >> amount;
    Solution sol;
    cout << sol.coinChange(coins, amount) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] coins = new int[parts.length];
        for(int i=0; i<parts.length; i++) coins[i] = Integer.parseInt(parts[i].trim());
        int amount = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        System.out.println(sol.coinChange(coins, amount));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const coins = JSON.parse(input[0]);
const amount = parseInt(input[1]);
console.log(coinChange(coins, amount));`
    }
  },

  "Longest Common Subsequence": {
    starterCode: {
      cpp: `class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function longestCommonSubsequence(text1, text2) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string t1, t2;
    getline(cin, t1);
    getline(cin, t2);
    Solution sol;
    cout << sol.longestCommonSubsequence(t1, t2) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String t1 = sc.nextLine().trim();
        String t2 = sc.nextLine().trim();
        Solution sol = new Solution();
        System.out.println(sol.longestCommonSubsequence(t1, t2));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
console.log(longestCommonSubsequence(input[0], input[1]));`
    }
  },

  // ======================== GRAPHS ========================
  "Number of Islands": {
    starterCode: {
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function numIslands(grid) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    // Parse 2D grid from JSON
    vector<vector<char>> grid;
    // Remove outer brackets
    line = line.substr(1, line.size()-2);
    string row;
    int depth = 0;
    for(char c : line) {
        if(c == '[') { depth++; if(depth == 1) row = ""; }
        else if(c == ']') { depth--; if(depth == 0) {
            // parse row
            vector<char> r;
            stringstream ss(row);
            string t;
            while(getline(ss, t, ',')) {
                // remove quotes and spaces
                string val;
                for(char ch : t) if(ch != '"' && ch != ' ') val += ch;
                if(!val.empty()) r.push_back(val[0]);
            }
            grid.push_back(r);
        }}
        else if(depth >= 1) row += c;
    }
    Solution sol;
    cout << sol.numIslands(grid) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        // Simple JSON 2D array parser
        line = line.substring(1, line.length()-1);
        List<char[]> rows = new ArrayList<>();
        int depth = 0;
        StringBuilder row = new StringBuilder();
        for(char c : line.toCharArray()) {
            if(c == '[') { depth++; if(depth == 1) row = new StringBuilder(); }
            else if(c == ']') { depth--; if(depth == 0) {
                String[] parts = row.toString().split(",");
                char[] r = new char[parts.length];
                for(int i=0;i<parts.length;i++) r[i] = parts[i].trim().replace("\"","").charAt(0);
                rows.add(r);
            }}
            else if(depth >= 1) row.append(c);
        }
        char[][] grid = rows.toArray(new char[0][]);
        Solution sol = new Solution();
        System.out.println(sol.numIslands(grid));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const grid = JSON.parse(input);
console.log(numIslands(grid));`
    }
  },

  // ======================== HASH MAP ========================
  "Group Anagrams": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      javascript: `function groupAnagrams(strs) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    // Parse JSON string array
    vector<string> strs;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) {
        // remove quotes and spaces
        string val;
        for(char c : token) if(c != '"' && c != ' ') val += c;
        strs.push_back(val);
    }
    Solution sol;
    auto result = sol.groupAnagrams(strs);
    // Sort for consistent output
    for(auto& g : result) sort(g.begin(), g.end());
    sort(result.begin(), result.end());
    cout << "[";
    for(int i=0;i<result.size();i++) {
        if(i) cout << ",";
        cout << "[";
        for(int j=0;j<result[i].size();j++) {
            if(j) cout << ",";
            cout << "\\"" << result[i][j] << "\\"";
        }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] strs = line.split(",");
        for(int i=0;i<strs.length;i++) strs[i] = strs[i].trim().replace("\"","");
        Solution sol = new Solution();
        List<List<String>> result = sol.groupAnagrams(strs);
        for(List<String> g : result) Collections.sort(g);
        result.sort((a,b) -> a.toString().compareTo(b.toString()));
        System.out.println(result);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const strs = JSON.parse(input);
const result = groupAnagrams(strs);
result.forEach(g => g.sort());
result.sort();
console.log(JSON.stringify(result));`
    }
  },

  // ======================== BACKTRACKING ========================
  "3Sum": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      javascript: `function threeSum(nums) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    auto result = sol.threeSum(nums);
    sort(result.begin(), result.end());
    cout << "[";
    for(int i=0;i<result.size();i++) {
        if(i) cout << ",";
        cout << "[";
        for(int j=0;j<result[i].size();j++) { if(j) cout << ","; cout << result[i][j]; }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        List<List<Integer>> result = sol.threeSum(nums);
        Collections.sort(result, (a,b) -> a.toString().compareTo(b.toString()));
        System.out.println(result.toString().replaceAll(" ",""));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
const result = threeSum(nums);
result.sort((a,b) => a[0]-b[0] || a[1]-b[1] || a[2]-b[2]);
console.log(JSON.stringify(result));`
    }
  },

  "Subsets": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      javascript: `function subsets(nums) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    auto result = sol.subsets(nums);
    for(auto& s : result) sort(s.begin(), s.end());
    sort(result.begin(), result.end());
    cout << "[";
    for(int i=0;i<result.size();i++) {
        if(i) cout << ",";
        cout << "[";
        for(int j=0;j<result[i].size();j++) { if(j) cout << ","; cout << result[i][j]; }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        List<List<Integer>> result = sol.subsets(nums);
        Collections.sort(result, (a,b) -> a.toString().compareTo(b.toString()));
        System.out.println(result.toString().replaceAll(" ",""));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
const result = subsets(nums);
result.forEach(s => s.sort((a,b) => a-b));
result.sort((a,b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
console.log(JSON.stringify(result));`
    }
  },

  "Permutations": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public List<List<Integer>> permute(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      javascript: `function permute(nums) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    auto result = sol.permute(nums);
    sort(result.begin(), result.end());
    cout << "[";
    for(int i=0;i<result.size();i++) {
        if(i) cout << ",";
        cout << "[";
        for(int j=0;j<result[i].size();j++) { if(j) cout << ","; cout << result[i][j]; }
        cout << "]";
    }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        List<List<Integer>> result = sol.permute(nums);
        Collections.sort(result, (a,b) -> a.toString().compareTo(b.toString()));
        System.out.println(result.toString().replaceAll(" ",""));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const nums = JSON.parse(input);
const result = permute(nums);
result.sort((a,b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
console.log(JSON.stringify(result));`
    }
  },

  "Merge Intervals": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[][]{};
    }
}`,
      javascript: `function merge(intervals) {
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<vector<int>> intervals;
    // parse [[1,3],[2,6]]
    line = line.substr(1, line.size()-2);
    string row;
    int depth = 0;
    for(char c : line) {
        if(c == '[') { depth++; if(depth == 1) row = ""; }
        else if(c == ']') { depth--; if(depth == 0) {
            vector<int> r;
            stringstream ss(row);
            string t;
            while(getline(ss, t, ',')) r.push_back(stoi(t));
            intervals.push_back(r);
        }}
        else if(depth >= 1) row += c;
    }
    Solution sol;
    auto result = sol.merge(intervals);
    cout << "[";
    for(int i=0;i<result.size();i++) {
        if(i) cout << ",";
        cout << "[" << result[i][0] << "," << result[i][1] << "]";
    }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        // Parse JSON 2D array
        line = line.substring(1, line.length()-1);
        List<int[]> list = new ArrayList<>();
        int depth = 0;
        StringBuilder row = new StringBuilder();
        for(char c : line.toCharArray()) {
            if(c == '[') { depth++; if(depth == 1) row = new StringBuilder(); }
            else if(c == ']') { depth--; if(depth == 0) {
                String[] parts = row.toString().split(",");
                list.add(new int[]{Integer.parseInt(parts[0].trim()), Integer.parseInt(parts[1].trim())});
            }}
            else if(depth >= 1) row.append(c);
        }
        int[][] intervals = list.toArray(new int[0][]);
        Solution sol = new Solution();
        int[][] result = sol.merge(intervals);
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<result.length;i++) {
            if(i>0) sb.append(",");
            sb.append("[").append(result[i][0]).append(",").append(result[i][1]).append("]");
        }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const intervals = JSON.parse(input);
console.log(JSON.stringify(merge(intervals)));`
    }
  },

  // ======================== TWO POINTERS ========================
  "Container With Most Water": {
    starterCode: {
      cpp: `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function maxArea(height) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> height;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) height.push_back(stoi(token));
    Solution sol;
    cout << sol.maxArea(height) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] height = new int[parts.length];
        for(int i=0; i<parts.length; i++) height[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.maxArea(height));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const height = JSON.parse(input);
console.log(maxArea(height));`
    }
  },

  "Trapping Rain Water": {
    starterCode: {
      cpp: `class Solution {
public:
    int trap(vector<int>& height) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function trap(height) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> h;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) h.push_back(stoi(token));
    Solution sol;
    cout << sol.trap(h) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] height = new int[parts.length];
        for(int i=0; i<parts.length; i++) height[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.trap(height));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const height = JSON.parse(input);
console.log(trap(height));`
    }
  },

  "Merge K Sorted Lists": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> mergeKLists(vector<vector<int>>& lists) {
        // Merge k sorted arrays into one sorted array
        // Write your solution here
        return {};
    }
};`,
      java: `class Solution {
    public List<Integer> mergeKLists(List<List<Integer>> lists) {
        // Merge k sorted lists into one sorted list
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      javascript: `function mergeKLists(lists) {
    // Merge k sorted arrays into one sorted array
    // Write your solution here
    return [];
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<vector<int>> lists;
    line = line.substr(1, line.size()-2);
    string row;
    int depth = 0;
    for(char c : line) {
        if(c == '[') { depth++; if(depth == 1) row = ""; }
        else if(c == ']') { depth--; if(depth == 0) {
            vector<int> r;
            if(!row.empty()) {
                stringstream ss(row);
                string t;
                while(getline(ss, t, ',')) r.push_back(stoi(t));
            }
            lists.push_back(r);
        }}
        else if(depth >= 1) row += c;
    }
    Solution sol;
    auto result = sol.mergeKLists(lists);
    cout << "[";
    for(int i=0;i<result.size();i++) { if(i) cout << ","; cout << result[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        // Parse JSON 2D array
        List<List<Integer>> lists = new ArrayList<>();
        line = line.substring(1, line.length()-1);
        int depth = 0;
        StringBuilder row = new StringBuilder();
        for(char c : line.toCharArray()) {
            if(c == '[') { depth++; if(depth == 1) row = new StringBuilder(); }
            else if(c == ']') { depth--; if(depth == 0) {
                List<Integer> r = new ArrayList<>();
                if(row.length() > 0) for(String s : row.toString().split(",")) r.add(Integer.parseInt(s.trim()));
                lists.add(r);
            }}
            else if(depth >= 1) row.append(c);
        }
        Solution sol = new Solution();
        List<Integer> result = sol.mergeKLists(lists);
        System.out.println(result.toString().replaceAll(" ",""));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const lists = JSON.parse(input);
console.log(JSON.stringify(mergeKLists(lists)));`
    }
  },

  // ======================== MORE ARRAYS ========================
  "Rotate Array": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> rotate(vector<int>& nums, int k) {
        // Write your solution here
        return nums;
    }
};`,
      java: `class Solution {
    public int[] rotate(int[] nums, int k) {
        // Write your solution here
        return nums;
    }
}`,
      javascript: `function rotate(nums, k) {
    // Write your solution here
    return nums;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    int k; cin >> k;
    Solution sol;
    auto result = sol.rotate(nums, k);
    cout << "[";
    for(int i=0;i<result.size();i++) { if(i) cout << ","; cout << result[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        int k = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        int[] result = sol.rotate(nums, k);
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<result.length;i++) { if(i>0) sb.append(","); sb.append(result[i]); }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const nums = JSON.parse(input[0]);
const k = parseInt(input[1]);
console.log(JSON.stringify(rotate(nums, k)));`
    }
  },

  "Move Zeroes": {
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> moveZeroes(vector<int>& nums) {
        // Write your solution here
        return nums;
    }
};`,
      java: `class Solution {
    public int[] moveZeroes(int[] nums) {
        // Write your solution here
        return nums;
    }
}`,
      javascript: `function moveZeroes(nums) {
    // Write your solution here
    return nums;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    auto result = sol.moveZeroes(nums);
    cout << "[";
    for(int i=0;i<result.size();i++) { if(i) cout << ","; cout << result[i]; }
    cout << "]" << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        int[] result = sol.moveZeroes(nums);
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<result.length;i++) { if(i>0) sb.append(","); sb.append(result[i]); }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(JSON.stringify(moveZeroes(JSON.parse(input))));`
    }
  },

  "Search in Rotated Sorted Array": {
    starterCode: {
      cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Write your solution here
        return -1;
    }
};`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
      javascript: `function search(nums, target) {
    // Write your solution here
    return -1;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    int target; cin >> target;
    Solution sol;
    cout << sol.search(nums, target) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        int target = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        System.out.println(sol.search(nums, target));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const nums = JSON.parse(input[0]);
const target = parseInt(input[1]);
console.log(search(nums, target));`
    }
  },

  "Validate Binary Search Tree": {
    starterCode: {
      cpp: `class Solution {
public:
    bool isValidBST(vector<string>& nodes) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isValidBST(String[] nodes) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function isValidBST(arr) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<string> nodes;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) {
        token.erase(0, token.find_first_not_of(' '));
        nodes.push_back(token);
    }
    Solution sol;
    cout << (sol.isValidBST(nodes) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        for(int i=0;i<parts.length;i++) parts[i] = parts[i].trim();
        Solution sol = new Solution();
        System.out.println(sol.isValidBST(parts));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const arr = JSON.parse(input.replace(/null/g, 'null'));
console.log(isValidBST(arr));`
    }
  },

  "Word Search": {
    starterCode: {
      cpp: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function exist(board, word) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<vector<char>> board;
    line = line.substr(1, line.size()-2);
    string row;
    int depth = 0;
    for(char c : line) {
        if(c == '[') { depth++; if(depth == 1) row = ""; }
        else if(c == ']') { depth--; if(depth == 0) {
            vector<char> r;
            stringstream ss(row);
            string t;
            while(getline(ss, t, ',')) {
                string val;
                for(char ch : t) if(ch != '"' && ch != ' ') val += ch;
                if(!val.empty()) r.push_back(val[0]);
            }
            board.push_back(r);
        }}
        else if(depth >= 1) row += c;
    }
    string word;
    getline(cin, word);
    Solution sol;
    cout << (sol.exist(board, word) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        List<char[]> rows = new ArrayList<>();
        int depth = 0;
        StringBuilder row = new StringBuilder();
        for(char c : line.toCharArray()) {
            if(c == '[') { depth++; if(depth == 1) row = new StringBuilder(); }
            else if(c == ']') { depth--; if(depth == 0) {
                String[] parts = row.toString().split(",");
                char[] r = new char[parts.length];
                for(int i=0;i<parts.length;i++) r[i] = parts[i].trim().replace("\"","").charAt(0);
                rows.add(r);
            }}
            else if(depth >= 1) row.append(c);
        }
        char[][] board = rows.toArray(new char[0][]);
        String word = sc.nextLine().trim();
        Solution sol = new Solution();
        System.out.println(sol.exist(board, word));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const board = JSON.parse(input[0]);
const word = input[1];
console.log(exist(board, word));`
    }
  },

  // ======================== DESIGN ========================
  "LRU Cache": {
    starterCode: {
      cpp: `class LRUCache {
public:
    LRUCache(int capacity) {
        // Write your solution here
    }
    int get(int key) {
        // Write your solution here
        return -1;
    }
    void put(int key, int value) {
        // Write your solution here
    }
};`,
      java: `class LRUCache {
    public LRUCache(int capacity) {
        // Write your solution here
    }
    public int get(int key) {
        // Write your solution here
        return -1;
    }
    public void put(int key, int value) {
        // Write your solution here
    }
}`,
      javascript: `class LRUCache {
    constructor(capacity) {
        // Write your solution here
    }
    get(key) {
        // Write your solution here
        return -1;
    }
    put(key, value) {
        // Write your solution here
    }
}`
    },
    driverCode: {
      cpp: `int main() {
    string line1, line2;
    getline(cin, line1);
    getline(cin, line2);
    // Parse ops and args
    // Simple JSON parsing
    vector<string> ops;
    vector<vector<int>> args;
    // parse ops
    stringstream ss1(line1.substr(1, line1.size()-2));
    string t;
    while(getline(ss1, t, ',')) {
        string val;
        for(char c : t) if(c != '"' && c != ' ') val += c;
        ops.push_back(val);
    }
    // parse args - simple
    string a = line2.substr(1, line2.size()-2);
    vector<int> cur;
    int depth = 0;
    string num;
    for(char c : a) {
        if(c == '[') { depth++; if(depth == 1) cur.clear(); }
        else if(c == ']') { depth--; if(depth == 0) { if(!num.empty()) { cur.push_back(stoi(num)); num=""; } args.push_back(cur); }}
        else if(c == ',') { if(depth == 1) { if(!num.empty()) { cur.push_back(stoi(num)); num=""; } } }
        else if(c != ' ') num += c;
    }
    LRUCache* cache = nullptr;
    cout << "[";
    for(int i=0;i<ops.size();i++) {
        if(i) cout << ",";
        if(ops[i]=="LRUCache") { cache = new LRUCache(args[i][0]); cout << "null"; }
        else if(ops[i]=="get") { cout << cache->get(args[i][0]); }
        else { cache->put(args[i][0], args[i][1]); cout << "null"; }
    }
    cout << "]" << endl;
    delete cache;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line1 = sc.nextLine().trim();
        String line2 = sc.nextLine().trim();
        // Parse
        String[] opsArr = line1.substring(1,line1.length()-1).split(",");
        for(int i=0;i<opsArr.length;i++) opsArr[i] = opsArr[i].trim().replace("\"","");
        // Parse args
        String a = line2.substring(1, line2.length()-1);
        List<int[]> argsList = new ArrayList<>();
        int depth = 0;
        List<Integer> cur = new ArrayList<>();
        StringBuilder num = new StringBuilder();
        for(char c : a.toCharArray()) {
            if(c == '[') { depth++; if(depth == 1) cur = new ArrayList<>(); }
            else if(c == ']') { depth--; if(depth == 0) { if(num.length()>0) { cur.add(Integer.parseInt(num.toString())); num = new StringBuilder(); } argsList.add(cur.stream().mapToInt(Integer::intValue).toArray()); }}
            else if(c == ',' && depth == 1) { if(num.length()>0) { cur.add(Integer.parseInt(num.toString())); num = new StringBuilder(); } }
            else if(c != ' ') num.append(c);
        }
        LRUCache cache = null;
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<opsArr.length;i++) {
            if(i>0) sb.append(",");
            if(opsArr[i].equals("LRUCache")) { cache = new LRUCache(argsList.get(i)[0]); sb.append("null"); }
            else if(opsArr[i].equals("get")) { sb.append(cache.get(argsList.get(i)[0])); }
            else { cache.put(argsList.get(i)[0], argsList.get(i)[1]); sb.append("null"); }
        }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const ops = JSON.parse(input[0]);
const args = JSON.parse(input[1]);
let cache;
const result = [];
for(let i=0; i<ops.length; i++) {
    if(ops[i]==='LRUCache') { cache = new LRUCache(args[i][0]); result.push(null); }
    else if(ops[i]==='get') { result.push(cache.get(args[i][0])); }
    else { cache.put(args[i][0], args[i][1]); result.push(null); }
}
console.log(JSON.stringify(result));`
    }
  },

  "Longest Palindromic Substring": {
    starterCode: {
      cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        // Write your solution here
        return "";
    }
};`,
      java: `class Solution {
    public String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }
}`,
      javascript: `function longestPalindrome(s) {
    // Write your solution here
    return "";
}`
    },
    driverCode: {
      cpp: `int main() {
    string s;
    getline(cin, s);
    Solution sol;
    cout << sol.longestPalindrome(s) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Solution sol = new Solution();
        System.out.println(sol.longestPalindrome(sc.nextLine()));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(longestPalindrome(input));`
    }
  },

  "Majority Element": {
    starterCode: {
      cpp: `class Solution {
public:
    int majorityElement(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int majorityElement(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function majorityElement(nums) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << sol.majorityElement(nums) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.majorityElement(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(majorityElement(JSON.parse(input)));`
    }
  },

  "Missing Number": {
    starterCode: {
      cpp: `class Solution {
public:
    int missingNumber(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int missingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function missingNumber(nums) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << sol.missingNumber(nums) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.missingNumber(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(missingNumber(JSON.parse(input)));`
    }
  },

  "Kth Largest Element": {
    starterCode: {
      cpp: `class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function findKthLargest(nums, k) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    int k; cin >> k;
    Solution sol;
    cout << sol.findKthLargest(nums, k) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        int k = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        System.out.println(sol.findKthLargest(nums, k));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
console.log(findKthLargest(JSON.parse(input[0]), parseInt(input[1])));`
    }
  },

  "Implement Trie (Prefix Tree)": {
    starterCode: {
      cpp: `class Trie {
public:
    Trie() {
        // Write your solution here
    }
    void insert(string word) {
        // Write your solution here
    }
    bool search(string word) {
        // Write your solution here
        return false;
    }
    bool startsWith(string prefix) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Trie {
    public Trie() {
        // Write your solution here
    }
    public void insert(String word) {
        // Write your solution here
    }
    public boolean search(String word) {
        // Write your solution here
        return false;
    }
    public boolean startsWith(String prefix) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `class Trie {
    constructor() {
        // Write your solution here
    }
    insert(word) {
        // Write your solution here
    }
    search(word) {
        // Write your solution here
        return false;
    }
    startsWith(prefix) {
        // Write your solution here
        return false;
    }
}`
    },
    driverCode: {
      cpp: `int main() {
    string line1, line2;
    getline(cin, line1);
    getline(cin, line2);
    vector<string> ops;
    stringstream ss1(line1.substr(1, line1.size()-2));
    string t;
    while(getline(ss1, t, ',')) { string val; for(char c:t) if(c!='"'&&c!=' ') val+=c; ops.push_back(val); }
    // Parse args
    vector<string> argVals;
    string a = line2.substr(1, line2.size()-2);
    int depth=0; string cur;
    for(char c:a) {
        if(c=='[') { depth++; if(depth==1) cur=""; }
        else if(c==']') { depth--; if(depth==0) { string val; for(char ch:cur) if(ch!='"'&&ch!=' ') val+=ch; argVals.push_back(val); }}
        else if(depth>=1) cur+=c;
    }
    Trie* trie=nullptr;
    cout<<"[";
    for(int i=0;i<ops.size();i++) {
        if(i) cout<<",";
        if(ops[i]=="Trie") { trie=new Trie(); cout<<"null"; }
        else if(ops[i]=="insert") { trie->insert(argVals[i]); cout<<"null"; }
        else if(ops[i]=="search") { cout<<(trie->search(argVals[i])?"true":"false"); }
        else if(ops[i]=="startsWith") { cout<<(trie->startsWith(argVals[i])?"true":"false"); }
    }
    cout<<"]"<<endl;
    delete trie;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line1 = sc.nextLine().trim();
        String line2 = sc.nextLine().trim();
        String[] opsArr = line1.substring(1,line1.length()-1).split(",");
        for(int i=0;i<opsArr.length;i++) opsArr[i] = opsArr[i].trim().replace("\"","");
        // Parse args
        String a = line2.substring(1, line2.length()-1);
        List<String> argVals = new ArrayList<>();
        int depth=0; StringBuilder cur = new StringBuilder();
        for(char c : a.toCharArray()) {
            if(c=='[') { depth++; if(depth==1) cur=new StringBuilder(); }
            else if(c==']') { depth--; if(depth==0) argVals.add(cur.toString().replace("\"","")); }
            else if(depth>=1) cur.append(c);
        }
        Trie trie = null;
        StringBuilder sb = new StringBuilder("[");
        for(int i=0;i<opsArr.length;i++) {
            if(i>0) sb.append(",");
            if(opsArr[i].equals("Trie")) { trie = new Trie(); sb.append("null"); }
            else if(opsArr[i].equals("insert")) { trie.insert(argVals.get(i)); sb.append("null"); }
            else if(opsArr[i].equals("search")) { sb.append(trie.search(argVals.get(i))); }
            else if(opsArr[i].equals("startsWith")) { sb.append(trie.startsWith(argVals.get(i))); }
        }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const ops = JSON.parse(input[0]);
const args = JSON.parse(input[1]);
let trie;
const result = [];
for(let i=0;i<ops.length;i++) {
    if(ops[i]==='Trie') { trie = new Trie(); result.push(null); }
    else result.push(trie[ops[i]](args[i][0]));
}
console.log(JSON.stringify(result));`
    }
  },

  "Course Schedule": {
    starterCode: {
      cpp: `class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function canFinish(numCourses, prerequisites) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line1, line2;
    getline(cin, line1);
    getline(cin, line2);
    int numCourses = stoi(line1);
    vector<vector<int>> prereqs;
    line2 = line2.substr(1, line2.size()-2);
    string row; int depth=0;
    for(char c : line2) {
        if(c=='[') { depth++; if(depth==1) row=""; }
        else if(c==']') { depth--; if(depth==0) {
            vector<int> r;
            stringstream ss(row); string t;
            while(getline(ss,t,',')) r.push_back(stoi(t));
            prereqs.push_back(r);
        }}
        else if(depth>=1) row+=c;
    }
    Solution sol;
    cout << (sol.canFinish(numCourses, prereqs) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numCourses = Integer.parseInt(sc.nextLine().trim());
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        List<int[]> list = new ArrayList<>();
        int depth=0; StringBuilder row = new StringBuilder();
        for(char c : line.toCharArray()) {
            if(c=='[') { depth++; if(depth==1) row=new StringBuilder(); }
            else if(c==']') { depth--; if(depth==0) {
                String[] parts = row.toString().split(",");
                list.add(new int[]{Integer.parseInt(parts[0].trim()), Integer.parseInt(parts[1].trim())});
            }}
            else if(depth>=1) row.append(c);
        }
        int[][] prereqs = list.toArray(new int[0][]);
        Solution sol = new Solution();
        System.out.println(sol.canFinish(numCourses, prereqs));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
console.log(canFinish(parseInt(input[0]), JSON.parse(input[1])));`
    }
  },

  "Min Stack": {
    starterCode: {
      cpp: `class MinStack {
public:
    MinStack() {
        // Write your solution here
    }
    void push(int val) {
        // Write your solution here
    }
    void pop() {
        // Write your solution here
    }
    int top() {
        // Write your solution here
        return 0;
    }
    int getMin() {
        // Write your solution here
        return 0;
    }
};`,
      java: `class MinStack {
    public MinStack() {
        // Write your solution here
    }
    public void push(int val) {
        // Write your solution here
    }
    public void pop() {
        // Write your solution here
    }
    public int top() {
        // Write your solution here
        return 0;
    }
    public int getMin() {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `class MinStack {
    constructor() {
        // Write your solution here
    }
    push(val) {
        // Write your solution here
    }
    pop() {
        // Write your solution here
    }
    top() {
        // Write your solution here
        return 0;
    }
    getMin() {
        // Write your solution here
        return 0;
    }
}`
    },
    driverCode: {
      cpp: `int main() {
    string line1, line2;
    getline(cin, line1);
    getline(cin, line2);
    vector<string> ops;
    stringstream ss1(line1.substr(1,line1.size()-2));
    string t;
    while(getline(ss1,t,',')) { string val; for(char c:t) if(c!='"'&&c!=' ') val+=c; ops.push_back(val); }
    string a = line2.substr(1, line2.size()-2);
    vector<vector<int>> args;
    int depth=0; vector<int> cur; string num;
    for(char c:a) {
        if(c=='[') { depth++; if(depth==1) { cur.clear(); num=""; } }
        else if(c==']') { depth--; if(depth==0) { if(!num.empty()) { cur.push_back(stoi(num)); num=""; } args.push_back(cur); }}
        else if(c==',' && depth==1) { if(!num.empty()) { cur.push_back(stoi(num)); num=""; } }
        else if(c!=' ') num+=c;
    }
    MinStack* ms=nullptr;
    cout<<"[";
    for(int i=0;i<ops.size();i++) {
        if(i) cout<<",";
        if(ops[i]=="MinStack") { ms=new MinStack(); cout<<"null"; }
        else if(ops[i]=="push") { ms->push(args[i][0]); cout<<"null"; }
        else if(ops[i]=="pop") { ms->pop(); cout<<"null"; }
        else if(ops[i]=="top") { cout<<ms->top(); }
        else if(ops[i]=="getMin") { cout<<ms->getMin(); }
    }
    cout<<"]"<<endl;
    delete ms;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line1 = sc.nextLine().trim();
        String line2 = sc.nextLine().trim();
        String[] opsArr = line1.substring(1,line1.length()-1).split(",");
        for(int i=0;i<opsArr.length;i++) opsArr[i]=opsArr[i].trim().replace("\"","");
        String a = line2.substring(1, line2.length()-1);
        List<int[]> argsList = new ArrayList<>();
        int depth=0; List<Integer> cur=new ArrayList<>(); StringBuilder num=new StringBuilder();
        for(char c:a.toCharArray()) {
            if(c=='[') { depth++; if(depth==1) { cur=new ArrayList<>(); num=new StringBuilder(); } }
            else if(c==']') { depth--; if(depth==0) { if(num.length()>0) { cur.add(Integer.parseInt(num.toString())); num=new StringBuilder(); } argsList.add(cur.stream().mapToInt(Integer::intValue).toArray()); }}
            else if(c==',' && depth==1) { if(num.length()>0) { cur.add(Integer.parseInt(num.toString())); num=new StringBuilder(); } }
            else if(c!=' ') num.append(c);
        }
        MinStack ms=null;
        StringBuilder sb=new StringBuilder("[");
        for(int i=0;i<opsArr.length;i++) {
            if(i>0) sb.append(",");
            if(opsArr[i].equals("MinStack")) { ms=new MinStack(); sb.append("null"); }
            else if(opsArr[i].equals("push")) { ms.push(argsList.get(i)[0]); sb.append("null"); }
            else if(opsArr[i].equals("pop")) { ms.pop(); sb.append("null"); }
            else if(opsArr[i].equals("top")) { sb.append(ms.top()); }
            else if(opsArr[i].equals("getMin")) { sb.append(ms.getMin()); }
        }
        sb.append("]");
        System.out.println(sb);
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');
const ops = JSON.parse(input[0]);
const args = JSON.parse(input[1]);
let ms; const result = [];
for(let i=0;i<ops.length;i++) {
    if(ops[i]==='MinStack') { ms = new MinStack(); result.push(null); }
    else { const r = ms[ops[i]](...(args[i]||[])); result.push(r===undefined?null:r); }
}
console.log(JSON.stringify(result));`
    }
  },

  "Longest Increasing Subsequence": {
    starterCode: {
      cpp: `class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function lengthOfLIS(nums) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << sol.lengthOfLIS(nums) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLIS(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin','utf8').trim();
console.log(lengthOfLIS(JSON.parse(input)));`
    }
  },

  "Serialize and Deserialize Binary Tree": {
    starterCode: {
      cpp: `class Codec {
public:
    string serialize(string input) {
        // Write your solution here
        return input;
    }
    string deserialize(string data) {
        // Write your solution here
        return data;
    }
};`,
      java: `class Codec {
    public String serialize(String input) {
        // Write your solution here
        return input;
    }
    public String deserialize(String data) {
        // Write your solution here
        return data;
    }
}`,
      javascript: `function serialize(arr) {
    // Write your solution here
    return JSON.stringify(arr);
}
function deserialize(str) {
    // Write your solution here
    return JSON.parse(str);
}`
    },
    driverCode: {
      cpp: `int main() {
    string s;
    getline(cin, s);
    Codec codec;
    cout << codec.deserialize(codec.serialize(s)) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        Codec codec = new Codec();
        System.out.println(codec.deserialize(codec.serialize(s)));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin','utf8').trim();
const arr = JSON.parse(input);
console.log(JSON.stringify(deserialize(serialize(arr))));`
    }
  },

  "Find Minimum in Rotated Sorted Array": {
    starterCode: {
      cpp: `class Solution {
public:
    int findMin(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
      java: `class Solution {
    public int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      javascript: `function findMin(nums) {
    // Write your solution here
    return 0;
}`
    },
    driverCode: {
      cpp: `int main() {
    string line;
    getline(cin, line);
    vector<int> nums;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) nums.push_back(stoi(token));
    Solution sol;
    cout << sol.findMin(nums) << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        String[] parts = line.split(",");
        int[] nums = new int[parts.length];
        for(int i=0; i<parts.length; i++) nums[i] = Integer.parseInt(parts[i].trim());
        Solution sol = new Solution();
        System.out.println(sol.findMin(nums));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin','utf8').trim();
console.log(findMin(JSON.parse(input)));`
    }
  },

  "Word Break": {
    starterCode: {
      cpp: `class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        // Write your solution here
        return false;
    }
};`,
      java: `class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        return false;
    }
}`,
      javascript: `function wordBreak(s, wordDict) {
    // Write your solution here
    return false;
}`
    },
    driverCode: {
      cpp: `int main() {
    string s, line;
    getline(cin, s);
    getline(cin, line);
    vector<string> dict;
    line = line.substr(1, line.size()-2);
    stringstream ss(line);
    string token;
    while(getline(ss, token, ',')) {
        string val;
        for(char c : token) if(c != '"' && c != ' ') val += c;
        if(!val.empty()) dict.push_back(val);
    }
    Solution sol;
    cout << (sol.wordBreak(s, dict) ? "true" : "false") << endl;
    return 0;
}`,
      java: `public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        String line = sc.nextLine().trim();
        line = line.substring(1, line.length()-1);
        List<String> dict = new ArrayList<>();
        for(String w : line.split(",")) dict.add(w.trim().replace("\"",""));
        Solution sol = new Solution();
        System.out.println(sol.wordBreak(s, dict));
    }
}`,
      javascript: `const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\\n');
console.log(wordBreak(input[0], JSON.parse(input[1])));`
    }
  }
};

// ===================================================================
// Migration runner
// ===================================================================
async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems total.`);

    let updated = 0;
    let skipped = 0;
    let notFound = 0;

    for (const problem of problems) {
      const def = problemDefinitions[problem.title];
      if (!def) {
        console.log(`[SKIP - no definition] ${problem.title}`);
        notFound++;
        continue;
      }

      problem.starterCode = def.starterCode;
      problem.driverCode = def.driverCode;
      await problem.save();
      console.log(`[UPDATED] ${problem.title}`);
      updated++;
    }

    console.log(`\n============================================`);
    console.log(`Migration Complete.`);
    console.log(`Updated: ${updated}`);
    console.log(`Skipped (no definition): ${notFound}`);
    console.log(`Total problems in DB: ${problems.length}`);
    process.exit(0);
  } catch (e) {
    console.error("Migration fatal error:", e);
    process.exit(1);
  }
}

run();
