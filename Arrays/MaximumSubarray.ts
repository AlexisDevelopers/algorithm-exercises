/**
 * LeetCode #53 - Maximum Subarray
 *
 * Given an integer array nums, find the subarray with the largest sum, 
 * and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 *
 * @time O(n) - Single pass through the array using Kadane's Algorithm.
 * @space O(1) - Only using two variables to track current and max sums.
 */
function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Si la suma acumulada es menor que el número actual, reiniciamos el subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    
    // Guardamos el máximo global encontrado
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
