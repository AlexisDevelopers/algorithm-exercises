/**
 * First Repeating Character
 * 
 * Given a string, return the first character that appears more than once.
 * The character returned must be the one whose second occurrence
 * appears first when reading the string from left to right.
 * 
 * Example 1:
 * Input: s = "abcab"
 * Output: "a"
 * Explanation: 'a' is the first character that repeats.
 * 
 * Example 2:
 * Input: s = "abab"
 * Output: "a"
 * Explanation: 'a' is the first character to repeat.
 * 
 * Example 3:
 * Input: s = "aabbbc"
 * Output: "a"
 * 
 * Example 4:
 * Input: s = "aabbdbc"
 * Output: "a"
 * 
 * Example 5:
 * Input: s = ""
 * Output: null
 * 
 * Constraints:
 * - 0 <= s.length <= 10^5
 * - s may contain letters, digits, or symbols
 * 
 * @time O(n) - Single pass through the string
 * @space O(n) - Set to store seen characters
 */
function firstRepeatingCharacter(s: string): string | null {
  const seen = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (seen.has(currentChar)) {
      return currentChar;
    }

    seen.add(currentChar);
  }

  return null;
}

// Tests
console.log(firstRepeatingCharacter("schoolofweb3")); // o
console.log(firstRepeatingCharacter("abcab"));        // a
console.log(firstRepeatingCharacter("abab"));         // a
console.log(firstRepeatingCharacter(""));              // null
