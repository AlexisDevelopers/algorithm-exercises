/**
 * LeetCode #435 - Non-overlapping Intervals
 * Link: https://leetcode.com/problems/non-overlapping-intervals/description/
 *
 * Given an array of intervals intervals where intervals[i] = [start, end],
 * return the minimum number of intervals you need to remove to make the rest
 * of the intervals non-overlapping.
 *
 * Note: intervals which only touch at a point are non-overlapping.
 * For example, [1,2] and [2,3] are non-overlapping.
 *
 * Example 1:
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 *
 * Example 2:
 * Input: intervals = [[1,2],[1,2],[1,2]]
 * Output: 2
 *
 * Example 3:
 * Input: intervals = [[1,2],[2,3]]
 * Output: 0
 *
 * Constraints:
 * - 1 <= intervals.length <= 10^5
 * - intervals[i].length == 2
 * - -5 * 10^4 <= start < end <= 5 * 10^4
 *
 * @time O(n log n) - Sorting by end time
 * @space O(1) - Sorting aside, we use constant extra variables
 */

/**
 * Pattern used: Greedy (Interval Scheduling)
 * Core idea:
 * - To remove the minimum, we keep the maximum number of non-overlapping intervals
 * - Best greedy choice: always keep the interval with the earliest end time
 * - Count how many we can keep, answer = total - kept
 */

function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;
  
  intervals.sort((a, b) => a[1] - b[1]);

  let kept = 1;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start >= prevEnd) {
      kept++;
      prevEnd = end;
    }
  }

  return intervals.length - kept;
}
