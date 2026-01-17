/**
 * LeetCode #739 – Daily Temperatures
 * Link: https://leetcode.com/problems/daily-temperatures/
 *
 * Given an array of integers `temperatures` where `temperatures[i]` represents
 * the temperature on the i-th day, return an array `answer` such that:
 *
 * - `answer[i]` is the number of days you have to wait after day `i`
 *   to get a warmer temperature.
 * - If there is no future day with a warmer temperature, `answer[i] = 0`.
 *
 * ---
 * Examples:
 *
 * Example 1:
 * Input:  temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 *
 * Example 2:
 * Input:  temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 *
 * Example 3:
 * Input:  temperatures = [30,60,90]
 * Output: [1,1,0]
 *
 * ---
 * Constraints:
 * - 1 <= temperatures.length <= 10^5
 * - 30 <= temperatures[i] <= 100
 *
 * ---
 * Approach:
 * Monotonic Stack (Decreasing Stack)
 *
 * We keep a stack of indices where the temperatures are in decreasing order.
 * For each day `i`:
 * - While the current temperature is greater than the temperature at the
 *   index on top of the stack, we pop that index and compute the difference
 *   `i - prevIndex`.
 * - Push the current index onto the stack.
 *
 * Each index is pushed and popped at most once.
 *
 * ---
 * Time Complexity:
 * O(n) — each element is processed once.
 *
 * Space Complexity:
 * O(n) — stack + result array.
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array<number>(n).fill(0);
  const stack: number[] = []; // stack of indices

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}
