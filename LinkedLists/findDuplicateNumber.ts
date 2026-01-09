/**
 * LeetCode #287 - Find the Duplicate Number
 * Link: https://leetcode.com/problems/find-the-duplicate-number/description/
 * 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * 
 * There is only one repeated number in nums, return this repeated number.
 * 
 * You must solve the problem without modifying the array nums and using only constant extra space.
 * 
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 * 
 * Example 3:
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 * 
 * Constraints:
 * - 1 <= n <= 10^5
 * - nums.length == n + 1
 * - 1 <= nums[i] <= n
 * - All the integers in nums appear only once except for precisely one integer which appears two or more times.
 * 
 * @time O(n) - Floyd’s cycle detection
 * @space O(1) - Constant extra space
 */

/**
 * Pattern used: Fast & Slow Pointers (Floyd’s Cycle Detection)
 * Treat the array as a linked list where:
 *   next(i) = nums[i]
 * Because values are in [1..n], pointers stay within valid indices and a cycle must exist.
 * The duplicate number is the entry point of the cycle.
 */

function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
