/**
 * LeetCode #78 - Subsets
 * Link: https://leetcode.com/problems/subsets/
 *
 * Given an integer array `nums` of unique elements, return all possible subsets
 * (the power set).
 *
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 * Constraints:
 * - 1 <= nums.length <= 10
 * - -10 <= nums[i] <= 10
 * - All the numbers of nums are unique.
 *
 * Approach:
 * - Backtracking (DFS).
 * - At each index, decide whether to include the current element or not.
 * - Every recursion level adds the current subset to the result.
 *
 * @time  O(2^n * n)   (number of subsets times copy cost)
 * @space O(2^n * n)   (result storage + recursion stack)
 */
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, path: number[]): void {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}
