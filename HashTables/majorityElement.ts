/**
 * LeetCode #169 - Majority Element
 * Link: https://leetcode.com/problems/majority-element/description/?envType=problem-list-v2&envId=hash-table
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - The majority element always exists.
 * 
 * @time O(n) - Single pass through the array
 * @space O(n) - Hash map to count frequencies
 */
function majorityElement(nums: number[]): number {
  const countMap = new Map<number, number>();
  const limit = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const count = (countMap.get(currentNum) || 0) + 1;
    countMap.set(currentNum, count);

    if (count > limit) {
      return currentNum;
    }
  }
  return -1;
}
