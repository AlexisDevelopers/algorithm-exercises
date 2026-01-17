/**
 * LeetCode #3 - Longest Substring Without Repeating Characters
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 
 * Given a string s, find the length of the longest substring without duplicate characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - s consists of English letters, digits, symbols and spaces.
 * 
 * @time O(n) - Sliding window with last seen index map
 * @space O(min(n, charset)) - Map stores last position for characters seen
 */

/**
 * Pattern used: Sliding Window (Two Pointers) + Hash Map
 * Core idea:
 * - Keep a window [left..right] with unique characters
 * - If s[right] repeats, move left to (lastSeen[char] + 1)
 * - Track max window length
 */

function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (lastSeen.has(ch)) {
      left = Math.max(left, lastSeen.get(ch)! + 1);
    }

    lastSeen.set(ch, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
}
