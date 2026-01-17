/**
 * HackerRank - Snakes and Ladders: The Quickest Way Up
 * Link: https://www.hackerrank.com/challenges/the-quickest-way-up/problem
 *
 * Given ladders and snakes on a 1..100 board, return the minimum number of dice rolls
 * to go from square 1 to square 100 (exact roll required). If impossible, return -1.
 *
 * Approach:
 * - Build a jump map for ladders/snakes (start -> end).
 * - Run BFS from square 1 over possible dice moves (1..6), applying jumps on landing.
 *
 * @time  O(100 * 6) ~ O(1)
 * @space O(100)
 */

function quickestWayUp(ladders: number[][], snakes: number[][]): number {
  const jump = Array<number>(101).fill(0);

  for (const [start, end] of ladders) jump[start] = end;
  for (const [start, end] of snakes) jump[start] = end;

  const dist = Array<number>(101).fill(-1);
  const q: number[] = [];

  dist[1] = 0;
  q.push(1);

  while (q.length) {
    const cur = q.shift() as number;

    for (let dice = 1; dice <= 6; dice++) {
      const next = cur + dice;
      if (next > 100) continue;

      let to = next;
      if (jump[to] !== 0) to = jump[to];

      if (dist[to] !== -1) continue;

      dist[to] = dist[cur] + 1;
      if (to === 100) return dist[to];
      q.push(to);
    }
  }

  return dist[100];
}
