/**
 * 2106. Maximum Fruits Harvested After at Most K Steps
 * Link: https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/description/
 * Hard
 *
 * Fruits are available at some positions on an infinite x-axis.
 * You are given a 2D integer array `fruits` where:
 *   fruits[i] = [position_i, amount_i]
 * represents `amount_i` fruits at position `position_i`.
 *
 * The array `fruits` is already sorted by position in ascending order,
 * and each position is unique.
 *
 * You are also given an integer `startPos` and an integer `k`.
 * Initially, you are at position `startPos`.
 *
 * From any position, you can either walk to the left or to the right.
 * It takes 1 step to move one unit on the x-axis, and you can walk
 * at most `k` steps in total.
 *
 * For every position you reach, you harvest all the fruits at that
 * position, and the fruits will disappear from that position.
 *
 * Return the maximum total number of fruits you can harvest.
 *
 * Example 1:
 * Input: fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4
 * Output: 9
 *
 * Example 2:
 * Input: fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4
 * Output: 14
 *
 * Example 3:
 * Input: fruits = [[0,3],[6,4],[8,5]], startPos = 3, k = 2
 * Output: 0
 *
 * Constraints:
 * - 1 <= fruits.length <= 10^5
 * - fruits[i].length == 2
 * - 0 <= startPos, position_i <= 2 * 10^5
 * - position_i < position_{i+1}
 * - 1 <= amount_i <= 10^4
 * - 0 <= k <= 2 * 10^5
 */

function maxTotalFruits(
  fruits: number[][],
  startPos: number,
  k: number
): number {

  const leftBound = startPos - k;
  const rightBound = startPos + k;

  const positions: number[] = [];
  const amounts: number[] = [];

  for (const [pos, amt] of fruits) {
    if (pos < leftBound) continue;
    if (pos > rightBound) break;
    positions.push(pos);
    amounts.push(amt);
  }

  const n = positions.length;
  if (n === 0) return 0;

  const prefix: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + amounts[i];
  }

  const rangeSum = (l: number, r: number): number =>
    prefix[r + 1] - prefix[l];

  const minSteps = (l: number, r: number): number => {
    const left = positions[l];
    const right = positions[r];

    if (right <= startPos) return startPos - left;

    if (left >= startPos) return right - startPos;

    const leftDist = startPos - left;
    const rightDist = right - startPos;

    return Math.min(
      2 * leftDist + rightDist,
      leftDist + 2 * rightDist
    );
  };

  let result = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    while (left <= right && minSteps(left, right) > k) {
      left++;
    }
    if (left <= right) {
      result = Math.max(result, rangeSum(left, right));
    }
  }

  return result;
}
