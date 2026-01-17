/**
 * LeetCode #56 - Merge Intervals
 * Link: https://leetcode.com/problems/merge-intervals/description/
 * 
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the non-overlapping
 * intervals that cover all the intervals in the input.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * 
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * 
 * Example 3:
 * Input: intervals = [[4,7],[1,4]]
 * Output: [[1,7]]
 * 
 * Constraints:
 * - 1 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= starti <= endi <= 10^4
 * 
 * @time O(n log n) - Sorting intervals by start time
 * @space O(n) - Output array to store merged intervals
 */

/**
 * Pattern used: Interval Merging (Sorting + Linear Scan)
 * Core idea:
 * - Sort intervals by start
 * - Iterate and merge if current interval overlaps with the previous one
 * - Otherwise, start a new interval
 */

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];

    if (currStart <= end) {
      end = Math.max(end, currEnd);
    } else {
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    }
  }

  result.push([start, end]);

  return result;
}
