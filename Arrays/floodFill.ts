/**
 * LeetCode #733 - Flood Fill
 * Link: https://leetcode.com/problems/flood-fill/description/
 * 
 * You are given an image represented by an m x n grid of integers image, where image[i][j]
 * represents the pixel value of the image. You are also given three integers sr, sc, and color.
 * 
 * Perform a flood fill on the image starting from the pixel image[sr][sc]:
 * - Change the starting pixel to color.
 * - Then, change any 4-directionally connected pixel with the same original color.
 * 
 * Return the modified image.
 * 
 * Example 1:
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * 
 * Example 2:
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
 * Output: [[0,0,0],[0,0,0]]
 * 
 * Constraints:
 * - m == image.length
 * - n == image[i].length
 * - 1 <= m, n <= 50
 * - 0 <= image[i][j], color < 2^16
 * - 0 <= sr < m
 * - 0 <= sc < n
 * 
 * @time O(m * n) - In the worst case we visit each cell once
 * @space O(m * n) - Recursion stack (DFS) in the worst case
 */

/**
 * Pattern used: DFS (Flood Fill)
 * Core idea:
 * - Capture the original color.
 * - If original color == new color, nothing to do.
 * - DFS from (sr, sc), recolor and expand to 4 neighbors that still have original color.
 */

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const original = image[sr][sc];
  if (original === color) return image;

  const m = image.length;
  const n = image[0].length;

  const dfs = (r: number, c: number): void => {
    if (r < 0 || r >= m || c < 0 || c >= n) return;
    if (image[r][c] !== original) return;

    image[r][c] = color;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  dfs(sr, sc);
  return image;
}
