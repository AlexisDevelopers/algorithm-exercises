/**
 * LeetCode #103 - Binary Tree Zigzag Level Order Traversal
 * Link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * Given the root of a binary tree, return the zigzag level order traversal
 * of its nodes' values.
 *
 * Zigzag traversal means:
 * - Level 0: left to right
 * - Level 1: right to left
 * - Level 2: left to right
 * - And so on, alternating direction at each level
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 *
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 2000]
 * - -100 <= Node.val <= 100
 *
 * Pattern used: Breadth-First Search (BFS)
 * Core idea:
 * - Traverse the tree level by level using a queue
 * - Keep a boolean flag to track direction
 * - Reverse the level values when needed
 *
 * @time O(n) - Each node is processed once
 * @space O(n) - Queue + output storage
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const size = queue.length;
    const level: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!leftToRight) level.reverse();
    result.push(level);
    leftToRight = !leftToRight;
  }

  return result;
}
