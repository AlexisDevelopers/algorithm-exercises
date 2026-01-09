/**
 * LeetCode #202 - Happy Number
 * Link: https://leetcode.com/problems/happy-number/description/
 * 
 * Write an algorithm to determine if a number n is happy.
 * 
 * A happy number is defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * - Repeat the process until the number equals 1 (where it will stay),
 *   or it loops endlessly in a cycle that does not include 1.
 * 
 * Return true if n is a happy number, and false if not.
 * 
 * Example 1:
 * Input: n = 19
 * Output: true
 * Explanation:
 * 1² + 9² = 82
 * 8² + 2² = 68
 * 6² + 8² = 100
 * 1² + 0² + 0² = 1
 * 
 * Example 2:
 * Input: n = 2
 * Output: false
 * 
 * Constraints:
 * - 1 <= n <= 2³¹ - 1
 * 
 * @time O(log n) per iteration, bounded iterations due to cycle detection
 * @space O(1) using fast & slow pointers
 */

/**
 * Pattern used: Fast & Slow Pointer (Cycle Detection)
 * The sequence of digit-square sums forms a linked-list-like cycle.
 */

function isHappy(n: number): boolean {
  const next = (num: number): number => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let slow = n;
  let fast = next(n);

  while (fast !== 1 && slow !== fast) {
    slow = next(slow);
    fast = next(next(fast));
  }

  return fast === 1;
}
