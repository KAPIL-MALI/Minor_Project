import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Problem from '../models/Problem.js';
import User from '../models/User.js';

dotenv.config({ path: '../.env' });

// Generic starter codes to save space
const genericStarterCode = {
  javascript: `function solve(arr) {\n  // Write your solution here\n}\n\nconst input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();\nconst arr = JSON.parse(input);\nconsole.log(JSON.stringify(solve(arr)));`,
  cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}`,
  java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution here\n    }\n}`
};

const newProblems = [
  // BASIC (10 problems)
  {
    title: "Print 1 to N",
    description: "Given an integer N, print all numbers from 1 to N space-separated.",
    difficulty: "Basic", category: "Basics", tags: ["Loops"],
    examples: [{ input: "N = 5", output: "1 2 3 4 5", explanation: "" }],
    constraints: ["1 <= N <= 1000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "5", expectedOutput: "1 2 3 4 5" }, { input: "3", expectedOutput: "1 2 3" }],
    order: 101, acceptance: 95
  },
  {
    title: "Sum of Array Elements",
    description: "Given an integer array, return the sum of all its elements.",
    difficulty: "Basic", category: "Arrays", tags: ["Arrays", "Math"],
    examples: [{ input: "[1, 2, 3]", output: "6", explanation: "1+2+3=6" }],
    constraints: ["1 <= nums.length <= 1000", "1 <= nums[i] <= 1000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,3]", expectedOutput: "6" }],
    order: 102, acceptance: 90
  },
  {
    title: "Find Maximum in Array",
    description: "Find the maximum element in a given array of integers.",
    difficulty: "Basic", category: "Arrays", tags: ["Arrays"],
    examples: [{ input: "[1, 5, 3]", output: "5", explanation: "5 is the max" }],
    constraints: ["1 <= nums.length <= 1000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,5,3]", expectedOutput: "5" }],
    order: 103, acceptance: 92
  },
  {
    title: "Check Even or Odd",
    description: "Given an integer N, return true if it is even, false if odd.",
    difficulty: "Basic", category: "Basics", tags: ["Math"],
    examples: [{ input: "N = 4", output: "true", explanation: "4 is even" }],
    constraints: ["0 <= N <= 10^9"],
    starterCode: genericStarterCode,
    testCases: [{ input: "4", expectedOutput: "true" }],
    order: 104, acceptance: 96
  },
  {
    title: "Vowel or Consonant",
    description: "Given a character, return 'Vowel' if it is a vowel, otherwise 'Consonant'.",
    difficulty: "Basic", category: "Strings", tags: ["Strings", "Conditionals"],
    examples: [{ input: "c = 'a'", output: "Vowel", explanation: "" }],
    constraints: ["c is a lowercase English letter"],
    starterCode: genericStarterCode,
    testCases: [{ input: "a", expectedOutput: "Vowel" }],
    order: 105, acceptance: 91
  },
  {
    title: "Swap Two Numbers",
    description: "Given two numbers a and b, return them swapped as an array [b, a].",
    difficulty: "Basic", category: "Basics", tags: ["Basics"],
    examples: [{ input: "a = 1, b = 2", output: "[2, 1]", explanation: "" }],
    constraints: ["-10^9 <= a, b <= 10^9"],
    starterCode: genericStarterCode,
    testCases: [{ input: "1\n2", expectedOutput: "[2,1]" }],
    order: 106, acceptance: 98
  },
  {
    title: "Find ASCII Value",
    description: "Given a character, return its ASCII value.",
    difficulty: "Basic", category: "Basics", tags: ["Strings"],
    examples: [{ input: "c = 'A'", output: "65", explanation: "" }],
    constraints: ["c is a printable ASCII character"],
    starterCode: genericStarterCode,
    testCases: [{ input: "A", expectedOutput: "65" }],
    order: 107, acceptance: 94
  },
  {
    title: "Count Digits",
    description: "Given an integer N, return the number of digits in N.",
    difficulty: "Basic", category: "Math", tags: ["Math"],
    examples: [{ input: "N = 12345", output: "5", explanation: "" }],
    constraints: ["1 <= N <= 10^9"],
    starterCode: genericStarterCode,
    testCases: [{ input: "12345", expectedOutput: "5" }],
    order: 108, acceptance: 89
  },
  {
    title: "Factorial of a Number",
    description: "Calculate the factorial of N. N! = 1 * 2 * ... * N.",
    difficulty: "Basic", category: "Math", tags: ["Math", "Recursion"],
    examples: [{ input: "N = 5", output: "120", explanation: "5! = 120" }],
    constraints: ["0 <= N <= 12"],
    starterCode: genericStarterCode,
    testCases: [{ input: "5", expectedOutput: "120" }],
    order: 109, acceptance: 88
  },
  {
    title: "Reverse an Array",
    description: "Given an array, return a new array with elements in reversed order.",
    difficulty: "Basic", category: "Arrays", tags: ["Arrays"],
    examples: [{ input: "[1, 2, 3]", output: "[3, 2, 1]", explanation: "" }],
    constraints: ["1 <= nums.length <= 1000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,3]", expectedOutput: "[3,2,1]" }],
    order: 110, acceptance: 90
  },

  // EASY (15 problems)
  {
    title: "Remove Duplicates from Sorted Array",
    description: "Remove duplicates in-place such that each element appears only once. Return the new length.",
    difficulty: "Easy", category: "Arrays", tags: ["Two Pointers"],
    examples: [{ input: "[1,1,2]", output: "2", explanation: "Array becomes [1,2,_]" }],
    constraints: ["1 <= nums.length <= 3*10^4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,1,2]", expectedOutput: "2" }],
    order: 111, acceptance: 52
  },
  {
    title: "Plus One",
    description: "Given a large integer represented as an array of digits, increment it by one.",
    difficulty: "Easy", category: "Math", tags: ["Arrays", "Math"],
    examples: [{ input: "[1,2,3]", output: "[1,2,4]", explanation: "123 + 1 = 124" }],
    constraints: ["1 <= digits.length <= 100"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,3]", expectedOutput: "[1,2,4]" }],
    order: 112, acceptance: 44
  },
  {
    title: "Majority Element",
    description: "Find the majority element that appears more than ⌊n / 2⌋ times.",
    difficulty: "Easy", category: "Arrays", tags: ["Hash Map", "Divide and Conquer"],
    examples: [{ input: "[3,2,3]", output: "3", explanation: "" }],
    constraints: ["n == nums.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[3,2,3]", expectedOutput: "3" }],
    order: 113, acceptance: 64
  },
  {
    title: "Move Zeroes",
    description: "Move all 0's to the end of the array while maintaining the relative order of the non-zero elements.",
    difficulty: "Easy", category: "Arrays", tags: ["Two Pointers"],
    examples: [{ input: "[0,1,0,3,12]", output: "[1,3,12,0,0]", explanation: "" }],
    constraints: ["1 <= nums.length <= 10^4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[0,1,0,3,12]", expectedOutput: "[1,3,12,0,0]" }],
    order: 114, acceptance: 61
  },
  {
    title: "First Unique Character",
    description: "Given a string s, find the first non-repeating character and return its index. If not found, return -1.",
    difficulty: "Easy", category: "Strings", tags: ["Strings", "Hash Map"],
    examples: [{ input: "\"leetcode\"", output: "0", explanation: "l is first unique" }],
    constraints: ["1 <= s.length <= 10^5"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"leetcode\"", expectedOutput: "0" }],
    order: 115, acceptance: 60
  },
  {
    title: "Power of Two",
    description: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
    difficulty: "Easy", category: "Math", tags: ["Math", "Bit Manipulation"],
    examples: [{ input: "n = 1", output: "true", explanation: "2^0 = 1" }],
    constraints: ["-2^31 <= n <= 2^31 - 1"],
    starterCode: genericStarterCode,
    testCases: [{ input: "16", expectedOutput: "true" }],
    order: 116, acceptance: 46
  },
  {
    title: "Missing Number",
    description: "Given an array containing n distinct numbers in the range [0, n], return the only number missing.",
    difficulty: "Easy", category: "Math", tags: ["Math", "Bit Manipulation", "Arrays"],
    examples: [{ input: "[3,0,1]", output: "2", explanation: "2 is missing" }],
    constraints: ["n == nums.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[3,0,1]", expectedOutput: "2" }],
    order: 117, acceptance: 64
  },
  {
    title: "Intersection of Two Arrays",
    description: "Given two arrays, return an array of their intersection. Each element must be unique.",
    difficulty: "Easy", category: "Arrays", tags: ["Hash Map", "Arrays"],
    examples: [{ input: "[1,2,2,1], [2,2]", output: "[2]", explanation: "" }],
    constraints: ["1 <= length <= 1000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,2,1]\n[2,2]", expectedOutput: "[2]" }],
    order: 118, acceptance: 72
  },
  {
    title: "Reverse String",
    description: "Reverse a string in-place.",
    difficulty: "Easy", category: "Strings", tags: ["Strings", "Two Pointers"],
    examples: [{ input: "[\"h\",\"e\",\"l\",\"l\",\"o\"]", output: "[\"o\",\"l\",\"l\",\"e\",\"h\"]", explanation: "" }],
    constraints: ["1 <= s.length <= 10^5"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[\"h\",\"e\",\"l\",\"l\",\"o\"]", expectedOutput: "[\"o\",\"l\",\"l\",\"e\",\"h\"]" }],
    order: 119, acceptance: 77
  },
  {
    title: "Single Number",
    description: "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
    difficulty: "Easy", category: "Bit Manipulation", tags: ["Bit Manipulation", "Arrays"],
    examples: [{ input: "[2,2,1]", output: "1", explanation: "" }],
    constraints: ["1 <= nums.length <= 3 * 10^4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[2,2,1]", expectedOutput: "1" }],
    order: 120, acceptance: 71
  },
  {
    title: "Is Subsequence",
    description: "Given two strings s and t, return true if s is a subsequence of t.",
    difficulty: "Easy", category: "Strings", tags: ["Two Pointers", "Strings"],
    examples: [{ input: "s = \"abc\", t = \"ahbgdc\"", output: "true", explanation: "" }],
    constraints: ["0 <= s.length <= 100"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"abc\"\n\"ahbgdc\"", expectedOutput: "true" }],
    order: 121, acceptance: 47
  },
  {
    title: "Find the Difference",
    description: "String t is generated by random shuffling string s and adding one more letter. Find the added letter.",
    difficulty: "Easy", category: "Strings", tags: ["Hash Map", "Bit Manipulation"],
    examples: [{ input: "s = \"abcd\", t = \"abcde\"", output: "\"e\"", explanation: "" }],
    constraints: ["0 <= s.length <= 1000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"abcd\"\n\"abcde\"", expectedOutput: "\"e\"" }],
    order: 122, acceptance: 59
  },
  {
    title: "Ugly Number",
    description: "Return true if n is an ugly number. Ugly numbers are positive integers whose prime factors are limited to 2, 3, and 5.",
    difficulty: "Easy", category: "Math", tags: ["Math"],
    examples: [{ input: "n = 6", output: "true", explanation: "6 = 2 * 3" }],
    constraints: ["-2^31 <= n <= 2^31 - 1"],
    starterCode: genericStarterCode,
    testCases: [{ input: "6", expectedOutput: "true" }],
    order: 123, acceptance: 41
  },
  {
    title: "Squares of a Sorted Array",
    description: "Given an integer array sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    difficulty: "Easy", category: "Arrays", tags: ["Two Pointers"],
    examples: [{ input: "[-4,-1,0,3,10]", output: "[0,1,9,16,100]", explanation: "" }],
    constraints: ["1 <= nums.length <= 10^4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[-4,-1,0,3,10]", expectedOutput: "[0,1,9,16,100]" }],
    order: 124, acceptance: 71
  },
  {
    title: "Valid Mountain Array",
    description: "Given an array of integers arr, return true if and only if it is a valid mountain array.",
    difficulty: "Easy", category: "Arrays", tags: ["Arrays"],
    examples: [{ input: "[0,3,2,1]", output: "true", explanation: "" }],
    constraints: ["1 <= arr.length <= 10^4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[0,3,2,1]", expectedOutput: "true" }],
    order: 125, acceptance: 33
  },

  // MEDIUM (15 problems)
  {
    title: "Container With Most Water",
    description: "Given an integer array height of length n, find two lines that together with the x-axis form a container, such that it contains the most water.",
    difficulty: "Medium", category: "Arrays", tags: ["Two Pointers", "Greedy"],
    examples: [{ input: "[1,8,6,2,5,4,8,3,7]", output: "49", explanation: "" }],
    constraints: ["n == height.length", "2 <= n <= 10^5"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,8,6,2,5,4,8,3,7]", expectedOutput: "49" }],
    order: 126, acceptance: 54
  },
  {
    title: "3Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    difficulty: "Medium", category: "Arrays", tags: ["Two Pointers", "Sorting"],
    examples: [{ input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]", explanation: "" }],
    constraints: ["3 <= nums.length <= 3000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[-1,0,1,2,-1,-4]", expectedOutput: "[[-1,-1,2],[-1,0,1]]" }],
    order: 127, acceptance: 34
  },
  {
    title: "Search in Rotated Sorted Array",
    description: "Given the array nums after a possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    difficulty: "Medium", category: "Binary Search", tags: ["Binary Search", "Arrays"],
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4", explanation: "" }],
    constraints: ["1 <= nums.length <= 5000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[4,5,6,7,0,1,2]\n0", expectedOutput: "4" }],
    order: 128, acceptance: 40
  },
  {
    title: "Word Search",
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
    difficulty: "Medium", category: "Backtracking", tags: ["Backtracking", "Matrix"],
    examples: [{ input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'", output: "true", explanation: "" }],
    constraints: ["1 <= m, n <= 6"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\n\"ABCCED\"", expectedOutput: "true" }],
    order: 129, acceptance: 41
  },
  {
    title: "Combination Sum",
    description: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations where the chosen numbers sum to target.",
    difficulty: "Medium", category: "Backtracking", tags: ["Backtracking", "Recursion"],
    examples: [{ input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]", explanation: "" }],
    constraints: ["1 <= candidates.length <= 30"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[2,3,6,7]\n7", expectedOutput: "[[2,2,3],[7]]" }],
    order: 130, acceptance: 70
  },
  {
    title: "Find Minimum in Rotated Sorted Array",
    description: "Given the sorted rotated array nums of unique elements, return the minimum element of this array. Must run in O(log n) time.",
    difficulty: "Medium", category: "Binary Search", tags: ["Binary Search", "Arrays"],
    examples: [{ input: "[3,4,5,1,2]", output: "1", explanation: "" }],
    constraints: ["n == nums.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[3,4,5,1,2]", expectedOutput: "1" }],
    order: 131, acceptance: 49
  },
  {
    title: "Decode Ways",
    description: "Given a string s containing only digits, return the number of ways to decode it.",
    difficulty: "Medium", category: "Dynamic Programming", tags: ["Dynamic Programming", "Strings"],
    examples: [{ input: "\"12\"", output: "2", explanation: "\"AB\" (1 2) or \"L\" (12)" }],
    constraints: ["1 <= s.length <= 100"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"12\"", expectedOutput: "2" }],
    order: 132, acceptance: 34
  },
  {
    title: "Jump Game",
    description: "Given an integer array nums, you are initially positioned at the array's first index. Each element represents your maximum jump length. Return true if you can reach the last index.",
    difficulty: "Medium", category: "Greedy", tags: ["Greedy", "Dynamic Programming"],
    examples: [{ input: "[2,3,1,1,4]", output: "true", explanation: "" }],
    constraints: ["1 <= nums.length <= 10^4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[2,3,1,1,4]", expectedOutput: "true" }],
    order: 133, acceptance: 38
  },
  {
    title: "Unique Paths",
    description: "A robot is located at the top-left corner of an m x n grid. It can only move down or right. Find the number of unique paths to the bottom-right corner.",
    difficulty: "Medium", category: "Dynamic Programming", tags: ["Math", "Dynamic Programming"],
    examples: [{ input: "m = 3, n = 7", output: "28", explanation: "" }],
    constraints: ["1 <= m, n <= 100"],
    starterCode: genericStarterCode,
    testCases: [{ input: "3\n7", expectedOutput: "28" }],
    order: 134, acceptance: 64
  },
  {
    title: "Generate Parentheses",
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    difficulty: "Medium", category: "Backtracking", tags: ["Strings", "Backtracking"],
    examples: [{ input: "3", output: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]", explanation: "" }],
    constraints: ["1 <= n <= 8"],
    starterCode: genericStarterCode,
    testCases: [{ input: "3", expectedOutput: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" }],
    order: 135, acceptance: 74
  },
  {
    title: "Letter Combinations of a Phone Number",
    description: "Given a string containing digits from 2-9, return all possible letter combinations that the number could represent.",
    difficulty: "Medium", category: "Backtracking", tags: ["Strings", "Backtracking"],
    examples: [{ input: "\"23\"", output: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]", explanation: "" }],
    constraints: ["0 <= digits.length <= 4"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"23\"", expectedOutput: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" }],
    order: 136, acceptance: 60
  },
  {
    title: "Rotate Image",
    description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). Do it in-place.",
    difficulty: "Medium", category: "Arrays", tags: ["Matrix", "Math"],
    examples: [{ input: "[[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]", explanation: "" }],
    constraints: ["n == matrix.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[[1,2,3],[4,5,6],[7,8,9]]", expectedOutput: "[[7,4,1],[8,5,2],[9,6,3]]" }],
    order: 137, acceptance: 73
  },
  {
    title: "Sort Colors",
    description: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent. (0=red, 1=white, 2=blue).",
    difficulty: "Medium", category: "Arrays", tags: ["Sorting", "Two Pointers"],
    examples: [{ input: "[2,0,2,1,1,0]", output: "[0,0,1,1,2,2]", explanation: "" }],
    constraints: ["n == nums.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[2,0,2,1,1,0]", expectedOutput: "[0,0,1,1,2,2]" }],
    order: 138, acceptance: 60
  },
  {
    title: "Top K Frequent Elements",
    description: "Given an integer array nums and an integer k, return the k most frequent elements.",
    difficulty: "Medium", category: "Arrays", tags: ["Hash Map", "Heap"],
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]", explanation: "" }],
    constraints: ["1 <= nums.length <= 10^5"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,1,1,2,2,3]\n2", expectedOutput: "[1,2]" }],
    order: 139, acceptance: 65
  },
  {
    title: "Subsets",
    description: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
    difficulty: "Medium", category: "Backtracking", tags: ["Backtracking", "Bit Manipulation"],
    examples: [{ input: "[1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]", explanation: "" }],
    constraints: ["1 <= nums.length <= 10"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,3]", expectedOutput: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }],
    order: 140, acceptance: 76
  },

  // HARD (10 problems)
  {
    title: "Median of Two Sorted Arrays",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. O(log (m+n)) runtime required.",
    difficulty: "Hard", category: "Binary Search", tags: ["Binary Search", "Arrays"],
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "" }],
    constraints: ["nums1.length == m"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,3]\n[2]", expectedOutput: "2.00000" }],
    order: 141, acceptance: 38
  },
  {
    title: "Trapping Rain Water",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    difficulty: "Hard", category: "Two Pointers", tags: ["Two Pointers", "Arrays", "Dynamic Programming"],
    examples: [{ input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "" }],
    constraints: ["n == height.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expectedOutput: "6" }],
    order: 142, acceptance: 61
  },
  {
    title: "Regular Expression Matching",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' Matches any single character and '*' Matches zero or more of the preceding element.",
    difficulty: "Hard", category: "Dynamic Programming", tags: ["Strings", "Dynamic Programming"],
    examples: [{ input: "s = \"aa\", p = \"a*\"", output: "true", explanation: "" }],
    constraints: ["1 <= s.length <= 20"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"aa\"\n\"a*\"", expectedOutput: "true" }],
    order: 143, acceptance: 28
  },
  {
    title: "Merge k Sorted Lists",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    difficulty: "Hard", category: "Linked Lists", tags: ["Linked List", "Divide and Conquer", "Heap"],
    examples: [{ input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]", explanation: "" }],
    constraints: ["k == lists.length"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[[1,4,5],[1,3,4],[2,6]]", expectedOutput: "[1,1,2,3,4,4,5,6]" }],
    order: 144, acceptance: 51
  },
  {
    title: "First Missing Positive",
    description: "Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums. Must run in O(n) time and use O(1) auxiliary space.",
    difficulty: "Hard", category: "Arrays", tags: ["Arrays", "Hash Map"],
    examples: [{ input: "[1,2,0]", output: "3", explanation: "" }],
    constraints: ["1 <= nums.length <= 10^5"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,0]", expectedOutput: "3" }],
    order: 145, acceptance: 37
  },
  {
    title: "Reverse Nodes in k-Group",
    description: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.",
    difficulty: "Hard", category: "Linked Lists", tags: ["Linked List", "Recursion"],
    examples: [{ input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]", explanation: "" }],
    constraints: ["The number of nodes is n"],
    starterCode: genericStarterCode,
    testCases: [{ input: "[1,2,3,4,5]\n2", expectedOutput: "[2,1,4,3,5]" }],
    order: 146, acceptance: 57
  },
  {
    title: "Longest Valid Parentheses",
    description: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
    difficulty: "Hard", category: "Dynamic Programming", tags: ["Strings", "Dynamic Programming", "Stack"],
    examples: [{ input: "\")()()\"", output: "4", explanation: "()()" }],
    constraints: ["0 <= s.length <= 30000"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\")()()\"", expectedOutput: "4" }],
    order: 147, acceptance: 33
  },
  {
    title: "Edit Distance",
    description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, replace).",
    difficulty: "Hard", category: "Dynamic Programming", tags: ["Strings", "Dynamic Programming"],
    examples: [{ input: "word1 = \"horse\", word2 = \"ros\"", output: "3", explanation: "" }],
    constraints: ["0 <= word1.length, word2.length <= 500"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"horse\"\n\"ros\"", expectedOutput: "3" }],
    order: 148, acceptance: 56
  },
  {
    title: "N-Queens",
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions.",
    difficulty: "Hard", category: "Backtracking", tags: ["Backtracking", "Matrix"],
    examples: [{ input: "4", output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]", explanation: "" }],
    constraints: ["1 <= n <= 9"],
    starterCode: genericStarterCode,
    testCases: [{ input: "4", expectedOutput: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]" }],
    order: 149, acceptance: 67
  },
  {
    title: "Word Ladder",
    description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words... Return the number of words in the shortest transformation sequence.",
    difficulty: "Hard", category: "Graphs", tags: ["Graphs", "BFS", "Hash Map"],
    examples: [{ input: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]", output: "5", explanation: "" }],
    constraints: ["1 <= beginWord.length <= 10"],
    starterCode: genericStarterCode,
    testCases: [{ input: "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]", expectedOutput: "5" }],
    order: 150, acceptance: 38
  }
];

async function addProblems() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://manalidighe6_db_user:K9RJTdgqSiTFjQXC@primecode.6inriw9.mongodb.net/primecode');
    console.log('Connected to DB');
    
    // Auto-generate slugs to prevent dupes
    newProblems.forEach(p => {
      p.slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    });

    for (let p of newProblems) {
      const exists = await Problem.findOne({ slug: p.slug });
      if (!exists) {
        await Problem.create(p);
        console.log(`Added: \${p.title}`);
      } else {
        console.log(`Skipped existing: \${p.title}`);
      }
    }
    console.log('Successfully inserted 50 new problems!');
    process.exit(0);
  } catch (error) {
    console.error('Failed to insert problems:', error);
    process.exit(1);
  }
}

addProblems();
