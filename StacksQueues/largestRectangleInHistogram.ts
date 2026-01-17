/**
 * LeetCode #84 - Largest Rectangle in Histogram
 * Link: https://leetcode.com/problems/largest-rectangle-in-histogram/
 *
 * Given an array `heights` representing the histogram's bar heights where each bar has width 1,
 * return the area of the largest rectangle in the histogram.
 *
 * Key idea:
 * Use a **monotonic increasing stack** of indices.
 * When we find a bar shorter than the bar at the stack top, we can "close" rectangles where the
 * popped bar is the limiting height, and compute their max area.
 *
 * Example 1:
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 *
 * Example 2:
 * Input: heights = [2,4]
 * Output: 4
 *
 * Constraints:
 * - 1 <= heights.length <= 10^5
 * - 0 <= heights[i] <= 10^4
 *
 * @time O(n) - Each index is pushed and popped at most once
 * @space O(n) - Stack of indices
 */
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const stack: number[] = []; // indices, heights are increasing
  let maxArea = 0;

  for (let i = 0; i <= n; i++) {
    const curHeight = i === n ? 0 : heights[i];

    while (stack.length > 0 && curHeight < heights[stack[stack.length - 1]]) {
      const hIndex = stack.pop()!;
      const h = heights[hIndex];

      const leftBoundary = stack.length === 0 ? 0 : stack[stack.length - 1] + 1;
      const width = i - leftBoundary;

      const area = h * width;
      if (area > maxArea) maxArea = area;
    }

    stack.push(i);
  }

  return maxArea;
}
