/**
 * LeetCode #242 - Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram/
 *
 * Problem:
 * Given two strings s and t, return true if t is an anagram of s, 
 * and false otherwise.
 *
 * @time  O(n) - Where n is the length of the strings.
 * @space O(1) - Constant space if restricted to 26 lowercase letters, 
 * or O(k) for Unicode characters.
 */
function isAnagram(s: string, t: string): boolean {
   if (s.length !== t.length) {
    return false;
  }

  const charCount: Record<string, number> = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
};
