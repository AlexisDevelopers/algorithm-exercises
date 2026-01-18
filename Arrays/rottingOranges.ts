/**
 * LeetCode #994 - Rotting Oranges
 * Link: https://leetcode.com/problems/rotting-oranges/
 *
 * You are given an m x n grid where each cell can have one of three values:
 * - 0: empty cell
 * - 1: fresh orange
 * - 2: rotten orange
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 *
 * Example 1:
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 *
 * Example 2:
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 *
 * Example 3:
 * Input: grid = [[0,2]]
 * Output: 0
 *
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 10
 * - grid[i][j] is 0, 1, or 2
 *
 * Approach:
 * - Multi-source BFS:
 *   1) Push all initially rotten oranges into a queue.
 *   2) Count fresh oranges.
 *   3) BFS level-by-level (each level = 1 minute), rotting adjacent fresh oranges.
 *   4) If fresh remains at the end, return -1; otherwise return minutes.
 *
 * @time  O(m * n)
 * @space O(m * n)
 */
function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const queue: Array<[number, number]> = [];
  let fresh = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let minutes = 0;
  let head = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    let rottedThisMinute = 0;

    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue[head++];

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        if (grid[nr][nc] !== 1) continue;

        grid[nr][nc] = 2;
        fresh--;
        rottedThisMinute++;
        queue.push([nr, nc]);
      }
    }

    if (rottedThisMinute > 0) minutes++;
  }

  return fresh === 0 ? minutes : -1;
}
