/**
 * LeetCode #387 - First Unique Character in a String
 * Link: https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * Given a string s, find the first non-repeating character in it and return its index. 
 * If it does not exist, return -1.
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 *
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of only lowercase English letters.
 *
 * @time O(n) - Two independent passes through the string.
 * @space O(1) - The map size is constant (max 26 lowercase English letters).
 */

function firstUniqChar(s: string): number {
    const charCount = new Map<string, number>();

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
