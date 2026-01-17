/**
 * LeetCode #153 - Find Minimum in Rotated Sorted Array
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * 
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * Given the sorted rotated array nums of unique elements, return the minimum element.
 * 
 * You must write an algorithm that runs in O(log n) time.
 * 
 * Example 1:
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2]
 * Output: 0
 * 
 * Example 3:
 * Input: nums = [11,13,15,17]
 * Output: 11
 * 
 * Constraints:
 * - 1 <= nums.length <= 5000
 * - -5000 <= nums[i] <= 5000
 * - All the integers of nums are unique.
 * - nums is sorted in ascending order and then rotated.
 * 
 * @time O(log n) - Binary search on rotated array
 * @space O(1) - Constant extra space
 */

/**
 * Pattern used: Modified Binary Search
 * Core idea:
 * - Compare mid with right to locate the unsorted half.
 * - If nums[mid] > nums[right], min is in the right half (exclude mid).
 * - Else, min is in the left half (including mid).
 */

function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return nums[l];
}
