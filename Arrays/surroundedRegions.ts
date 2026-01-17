/**
 * LeetCode #130 - Surrounded Regions
 * Link: https://leetcode.com/problems/surrounded-regions/description/
 *
 * You are given an m x n matrix board containing 'X' and 'O'.
 * Capture regions that are surrounded:
 * - Connect: Adjacent cells are connected horizontally or vertically.
 * - Region: A region is formed by connecting adjacent 'O' cells.
 * - Surround: A region is surrounded if none of its 'O' cells are on the border.
 *
 * Modify board in-place:
 * - Flip all surrounded 'O' to 'X'.
 * - 'O' connected to any border 'O' must remain 'O'.
 *
 * Constraints:
 * - m == board.length
 * - n == board[i].length
 * - 1 <= m, n <= 200
 * - board[i][j] is 'X' or 'O'
 *
 * @time O(m*n)
 * @space O(m*n) worst-case (queue/stack)
 */

/**
 * Pattern used: Graph Traversal (BFS/DFS) from the borders
 * Core idea:
 * - Mark all 'O' that are connected to the border as "safe".
 * - Then flip the remaining 'O' to 'X'.
 * - Finally restore the safe marks back to 'O'.
 */
function solve(board: string[][]): void {
  const m = board.length;
  const n = board[0].length;

  const q: Array<[number, number]> = [];

  const pushIfO = (r: number, c: number) => {
    if (r < 0 || r >= m || c < 0 || c >= n) return;
    if (board[r][c] !== "O") return;
    board[r][c] = "#";
    q.push([r, c]);
  };

  for (let c = 0; c < n; c++) {
    pushIfO(0, c);
    pushIfO(m - 1, c);
  }
  for (let r = 0; r < m; r++) {
    pushIfO(r, 0);
    pushIfO(r, n - 1);
  }

  while (q.length) {
    const [r, c] = q.shift()!;
    pushIfO(r + 1, c);
    pushIfO(r - 1, c);
    pushIfO(r, c + 1);
    pushIfO(r, c - 1);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      else if (board[r][c] === "#") board[r][c] = "O";
    }
  }
}
