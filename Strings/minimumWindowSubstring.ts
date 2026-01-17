/**
 * LeetCode #76 - Minimum Window Substring
 * Link: https://leetcode.com/problems/minimum-window-substring/description/
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s
 * such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 *
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 *
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 *
 * Constraints:
 * - m == s.length
 * - n == t.length
 * - 1 <= m, n <= 10^5
 * - s and t consist of uppercase and lowercase English letters.
 *
 * @time O(m + n) - Sliding window where each pointer moves at most m times
 * @space O(1) - Fixed alphabet (English letters), constant-sized maps
 */

/**
 * Pattern used: Sliding Window + Frequency Maps
 * Core idea:
 * - Count needed characters from t
 * - Expand right to satisfy all needs
 * - Shrink left to minimize while still valid
 */

function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return "";

  const need = new Map<string, number>();
  for (const ch of t) need.set(ch, (need.get(ch) ?? 0) + 1);

  const window = new Map<string, number>();
  let have = 0;
  const needDistinct = need.size;

  let left = 0;
  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    window.set(ch, (window.get(ch) ?? 0) + 1);

    if (need.has(ch) && window.get(ch) === need.get(ch)) {
      have++;
    }

    while (have === needDistinct) {
      const windowLen = right - left + 1;
      if (windowLen < bestLen) {
        bestLen = windowLen;
        bestStart = left;
      }

      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar)! - 1);

      if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
        have--;
      }

      left++;
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}
