/**
 * LeetCode #133 - Clone Graph
 * Link: https://leetcode.com/problems/clone-graph/description/
 *
 * You are given a reference to a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 *
 * Test case format:
 * - Node values are 1-indexed (the first node has val = 1, the second val = 2, etc.).
 * - The graph is represented as an adjacency list.
 * - The given node will always be the first node with val = 1.
 *
 * Example 1:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 *
 * Example 2:
 * Input: adjList = [[]]
 * Output: [[]]
 *
 * Example 3:
 * Input: adjList = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the graph is in the range [0, 100]
 * - 1 <= Node.val <= 100
 * - Node.val is unique for each node
 * - There are no repeated edges and no self-loops in the graph
 * - The graph is connected and all nodes can be visited starting from the given node
 *
 * Approach:
 * - Use DFS (or BFS) with a HashMap to map original nodes -> cloned nodes.
 * - Whenever we visit a node, we create its clone (if not already created),
 *   then recursively clone and connect its neighbors.
 *
 * @time  O(V + E) - Each node and edge processed once
 * @space O(V)     - Map for visited/cloned nodes + recursion stack
 */

/**
 * Definition for _Node.
 * class _Node {
 *   val: number
 *   neighbors: _Node[]
 *   constructor(val?: number, neighbors?: _Node[]) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.neighbors = (neighbors===undefined ? [] : neighbors)
 *   }
 * }
 */

function cloneGraph(node: _Node | null): _Node | null {
  if (node === null) return null;

  const cloned = new Map<_Node, _Node>();

  const dfs = (cur: _Node): _Node => {
    const existing = cloned.get(cur);
    if (existing) return existing;

    const copy = new _Node(cur.val);
    cloned.set(cur, copy);

    for (const nei of cur.neighbors) {
      copy.neighbors.push(dfs(nei));
    }

    return copy;
  };

  return dfs(node);
}
