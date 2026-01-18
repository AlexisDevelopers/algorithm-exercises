/**
 * LeetCode #51 - N-Queens
 * Link: https://leetcode.com/problems/n-queens/
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * Each solution contains a distinct board configuration, where 'Q' indicates a queen
 * and '.' indicates an empty space.
 *
 * Example 1:
 * Input: n = 4
 * Output: [
 *  [".Q..","...Q","Q...","..Q."],
 *  ["..Q.","Q...","...Q",".Q.."]
 * ]
 *
 * Example 2:
 * Input: n = 1
 * Output: [["Q"]]
 *
 * Constraints:
 * - 1 <= n <= 9
 *
 * Approach:
 * - Backtracking row by row.
 * - Track used columns, main diagonals (r - c), and anti-diagonals (r + c).
 * - Place a queen if column/diagonals are free, recurse to next row, then undo.
 *
 * @time  O(N!) (backtracking; upper-bound style)
 * @space O(N^2) for board + O(N) sets/arrays (excluding output)
 */

function solveNQueens(n: number): string[][] {
  const results: string[][] = [];

  const cols = new Array<boolean>(n).fill(false);
  const diag1 = new Array<boolean>(2 * n - 1).fill(false); // (r - c) + (n - 1)
  const diag2 = new Array<boolean>(2 * n - 1).fill(false); // (r + c)

  const board: string[][] = Array.from({ length: n }, () => new Array<string>(n).fill("."));

  function backtrack(r: number): void {
    if (r === n) {
      results.push(board.map((row) => row.join("")));
      return;
    }

    for (let c = 0; c < n; c++) {
      const d1 = r - c + (n - 1);
      const d2 = r + c;

      if (cols[c] || diag1[d1] || diag2[d2]) continue;

      cols[c] = true;
      diag1[d1] = true;
      diag2[d2] = true;
      board[r][c] = "Q";

      backtrack(r + 1);

      board[r][c] = ".";
      cols[c] = false;
      diag1[d1] = false;
      diag2[d2] = false;
    }
  }

  backtrack(0);
  return results;
}
