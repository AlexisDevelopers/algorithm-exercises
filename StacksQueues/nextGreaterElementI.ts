/**
 * LeetCode #496 - Next Greater Element I
 * Link: https://leetcode.com/problems/next-greater-element-i/description/
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each value nums1[i], find its position in nums2 and return the first greater element to its right in nums2.
 * If there is no greater element to the right, return -1 for that value.
 *
 * Key idea:
 * - Precompute "next greater" for every value in nums2 using a monotonic decreasing stack.
 * - When we see a number x, we pop smaller numbers from the stack; for each popped value v, x is the next greater of v.
 * - Store mappings in a hash map: nextGreater[v] = x.
 * - Then answer nums1 by looking up each value in the map (or -1 if missing).
 *
 * Example 1:
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 *
 * Example 2:
 * Input: nums1 = [2,4], nums2 = [1,2,3,4]
 * Output: [3,-1]
 *
 * Constraints:
 * - 1 <= nums1.length <= nums2.length <= 1000
 * - 0 <= nums1[i], nums2[i] <= 10^4
 * - All integers in nums1 and nums2 are unique
 * - All the integers of nums1 also appear in nums2
 *
 * @time O(n + m) where n = nums2.length and m = nums1.length
 * @space O(n) for the stack + map
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const next = new Map<number, number>();
  const stack: number[] = [];

  for (const x of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < x) {
      next.set(stack.pop()!, x);
    }
    stack.push(x);
  }

  const ans = new Array<number>(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = next.get(nums1[i]) ?? -1;
  }

  return ans;
}
