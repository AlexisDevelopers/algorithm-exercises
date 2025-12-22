/**
 * Problem: Find the Longest Word in a String
 * * Given a string s, return the longest word found in the string.
 * If there are multiple words with the same length, return the first one encountered.
 *
 * Example 1:
 * Input: s = "The quick brown fox jumped over the lazy dog"
 * Output: "jumped"
 *
 * Example 2:
 * Input: s = "May the force be with you"
 * Output: "force"
 *
 * Example 3:
 * Input: s = "Google do a barrel roll"
 * Output: "Google"
 *
 * @time O(n) - Single pass through the string where n is the length of the string.
 * @space O(n) - Storing the words in an array after splitting.
 */

function longestWord(s: string): string {
  const words: string[] = s.split(/\s+/);
  let longest: string = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}

// console.log(longestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
