/**
 * LeetCode #240 - Search a 2D Matrix II
 * Link: https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 *
 * You are given an m x n integer matrix with:
 * - Each row sorted in ascending order (left to right)
 * - Each column sorted in ascending order (top to bottom)
 *
 * Return true if target is found, otherwise false.
 *
 * Example 1:
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
 * Output: false
 *
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 300
 * - -10^9 <= matrix[i][j] <= 10^9
 * - -10^9 <= target <= 10^9
 *
 * @time O(m + n) - Start top-right (or bottom-left) and eliminate a row/col each step
 * @space O(1) - Constant extra space
 */

/**
 * Pattern used: Staircase Search (Greedy Elimination)
 * Core idea:
 * - Start at top-right.
 * - If current > target: move left (eliminate column).
 * - If current < target: move down (eliminate row).
 * - If equal: found.
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const val = matrix[row][col];
    if (val === target) return true;
    if (val > target) col--;
    else row++;
  }

  return false;
}
