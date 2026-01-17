/**
 * LeetCode #200 - Number of Islands
 * Link: https://leetcode.com/problems/number-of-islands/description/
 * 
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 * 
 * An island is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are surrounded by water.
 * 
 * Example 1:
 * Input: grid = [
 *  ["1","1","1","1","0"],
 *  ["1","1","0","1","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Example 2:
 * Input: grid = [
 *  ["1","1","0","0","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","1","0","0"],
 *  ["0","0","0","1","1"]
 * ]
 * Output: 3
 * 
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 300
 * - grid[i][j] is '0' or '1'
 * 
 * @time O(m * n)
 * @space O(m * n)
 */

/**
 * Pattern used: DFS (Grid Traversal)
 * Core idea:
 * - Iterate every cell.
 * - When you find a '1', that's a new island: count++.
 * - Run DFS/BFS to sink the whole island by turning connected '1's into '0's.
 */

function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dfs = (r: number, c: number): void => {
    if (r < 0 || r >= m || c < 0 || c >= n) return;
    if (grid[r][c] !== "1") return;

    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  let islands = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === "1") {
        islands++;
        dfs(r, c);
      }
    }
  }

  return islands;
}
