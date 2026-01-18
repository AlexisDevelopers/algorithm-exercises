/**
 * LeetCode #210 - Course Schedule II
 * Link: https://leetcode.com/problems/course-schedule-ii/
 *
 * You have to take `numCourses` courses labeled from 0 to numCourses - 1.
 * `prerequisites[i] = [a, b]` means you must take course `b` before course `a`.
 *
 * Return an ordering of courses you should take to finish all courses.
 * If there are many valid answers, return any of them.
 * If it is impossible to finish all courses, return an empty array.
 *
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: [0,1]
 *
 * Example 2:
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,2,1,3]  (another valid: [0,1,2,3])
 *
 * Example 3:
 * Input: numCourses = 1, prerequisites = []
 * Output: [0]
 *
 * Constraints:
 * - 1 <= numCourses <= 2000
 * - 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 * - prerequisites[i].length == 2
 * - 0 <= a, b < numCourses
 * - a != b
 * - All pairs [a, b] are distinct
 *
 * Approach:
 * - Topological Sort (Kahn's Algorithm / BFS using indegrees)
 *
 * @time  O(V + E)
 * @space O(V + E)
 */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree: number[] = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    indegree[a]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order: number[] = [];
  let head = 0;

  while (head < queue.length) {
    const course = queue[head++];
    order.push(course);

    for (const next of graph[course]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return order.length === numCourses ? order : [];
}
