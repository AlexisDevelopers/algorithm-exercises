/**
 * LeetCode #125 - Valid Palindrome
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * Constraints:
 * - 1 <= s.length <= 2 * 10^5
 * - s consists only of printable ASCII characters.
 * 
 * @time O(n) - Single pass with two pointers
 * @space O(1) - Only using pointers, no extra data structures
 */
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s.charCodeAt(left);
    const rightChar = s.charCodeAt(right);

    if (!isAlphanumeric(leftChar)) {
      left++;
      continue;
    }

    if (!isAlphanumeric(rightChar)) {
      right--;
      continue;
    }

    const leftLower = leftChar >= 65 && leftChar <= 90 ? leftChar + 32 : leftChar;
    const rightLower = rightChar >= 65 && rightChar <= 90 ? rightChar + 32 : rightChar;

    if (leftLower !== rightLower) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(code: number): boolean {
  return (
    (code >= 48 && code <= 57) ||  
    (code >= 65 && code <= 90) ||  
    (code >= 97 && code <= 122)    
  );
}
