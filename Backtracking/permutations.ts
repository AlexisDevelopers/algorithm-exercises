/**
 * LeetCode #46 - Permutations
 * Link: https://leetcode.com/problems/permutations/
 *
 * Given an array `nums` of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * Constraints:
 * - 1 <= nums.length <= 6
 * - -10 <= nums[i] <= 10
 * - All the integers of nums are unique.
 *
 * Approach:
 * - Backtracking (DFS).
 * - Build permutations incrementally.
 * - At each step, try every unused number.
 * - When the current permutation length equals nums.length, store a copy.
 *
 * @time  O(n! * n)   (number of permutations times copy cost)
 * @space O(n! * n)   (result storage + recursion stack)
 */
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  function backtrack(path: number[]): void {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      backtrack(path);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
}
