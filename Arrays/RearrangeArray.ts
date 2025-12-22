/**
 * Rearrange Array
 * Link: https://www.typescriptlang.org/play/
 *
 * Given an array of positive and negative integers, in-place segregate them 
 * in linear time and constant space. The output should contain all negative 
 * numbers, followed by all positive numbers.
 *
 * Example 1:
 * Input: nums = [9, -3, 5, -2, -8, -6, 1, 3]
 * Output: [-3, -2, -8, -6, 5, 9, 1, 3]
 * Explanation: All negative numbers are moved to the front.
 *
 * Example 2:
 * Input: nums = [-4, -2, -7, -9]
 * Output: [-4, -2, -7, -9]
 *
 * Example 3:
 * Input: nums = [2, 4, 3, 1, 5]
 * Output: [2, 4, 3, 1, 5]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * @time O(n) - Single pass through the array.
 * @space O(1) - In-place rearrangement.
 */
function rearrange(nums: number[]): number[] {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      if (i !== left) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
      }
      left++;
    }
  }

  return nums;
}

console.log("Test 1 (Mixed):", rearrange([9, -3, 5, -2, -8, -6, 1, 3]));
console.log("Test 2 (All Neg):", rearrange([-4, -2, -7, -9]));
console.log("Test 3 (All Pos):", rearrange([2, 4, 3, 1, 5]));
