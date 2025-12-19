/**
 * LeetCode #283 - Move Zeroes
 * Difficulty: Easy
 * 
 * Given an integer array nums, move all 0's to the end while maintaining
 * the relative order of the non-zero elements.
 * 
 * Note: You must do this in-place without making a copy of the array.
 * 
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 * 
 * @time O(n) - Single pass through array
 * @space O(1) - In-place modification
 */
function moveZeroes(nums: number[]): void {
  let left = 0; 
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== left) {
        const temp = nums[left];
        nums[left] = nums[i];
        nums[i] = temp;
      }
      left++;
    }
  }
};
