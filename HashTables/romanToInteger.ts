/**
 * LeetCode #13 - Roman to Integer
 * Link: https://leetcode.com/problems/roman-to-integer/
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Rule:
 * - Normally, you add values from left to right.
 * - But if a smaller value appears before a larger value, you subtract it.
 *   Examples: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.
 *
 * Example 1:
 * Input: s = "III"
 * Output: 3
 *
 * Example 2:
 * Input: s = "LVIII"
 * Output: 58
 *
 * Example 3:
 * Input: s = "MCMXCIV"
 * Output: 1994
 *
 * Constraints:
 * - 1 <= s.length <= 15
 * - s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 * - It is guaranteed that s is a valid roman numeral in the range [1, 3999]
 *
 * @time O(n) - One pass through the string
 * @space O(1) - Constant extra space (map size is fixed)
 */
function romanToInt(s: string): number {
  const values = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values.get(s[i])!;
    const next = i + 1 < s.length ? values.get(s[i + 1])! : 0;

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
