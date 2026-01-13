/**
 * LeetCode #205 - Isomorphic Strings
 * Link: https://leetcode.com/problems/isomorphic-strings/submissions/1883990803/?envType=problem-list-v2&envId=hash-table
 * 
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * Rules:
 * - All occurrences of a character must be replaced with another character.
 * - The order of characters must be preserved.
 * - No two different characters may map to the same character.
 * - A character may map to itself.
 * 
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Constraints:
 * - 1 <= s.length <= 5 * 10^4
 * - t.length == s.length
 * - s and t consist of any valid ascii character.
 * 
 * @time O(n) - One pass through the strings
 * @space O(1) - At most 256 ASCII mappings
 */
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sToT.has(charS)) {
      if (sToT.get(charS) !== charT) return false;
    } else {
      sToT.set(charS, charT);
    }

    if (tToS.has(charT)) {
      if (tToS.get(charT) !== charS) return false;
    } else {
      tToS.set(charT, charS);
    }
  }

  return true;
}
