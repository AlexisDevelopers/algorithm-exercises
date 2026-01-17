/**
 * LeetCode #124 - Binary Tree Maximum Path Sum
 * Link: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence
 * has an edge connecting them. A node can appear at most once in the path.
 * The path does NOT need to pass through the root.
 *
 * The path sum is the sum of the node values in the path.
 *
 * Return the maximum path sum of any non-empty path.
 *
 * Example 1:
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 (sum = 2 + 1 + 3 = 6).
 *
 * Example 2:
 * Input: root = [-10,9,20,null,null,15,7]
 * Output: 42
 * Explanation: The optimal path is 15 -> 20 -> 7 (sum = 15 + 20 + 7 = 42).
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 3 * 10^4]
 * - -1000 <= Node.val <= 1000
 *
 * Approach (DFS / Postorder):
 * For each node, compute the maximum "gain" we can extend upwards to its parent:
 *   gain(node) = node.val + max(0, gain(left), gain(right))
 * This means: if a child contributes negative sum, we ignore it (take 0).
 *
 * At the same time, consider the best path that "turns" at this node (uses both sides):
 *   pathThroughNode = node.val + max(0, gain(left)) + max(0, gain(right))
 * Update a global maximum with pathThroughNode.
 *
 * Return gain(node) up the recursion.
 *
 * @time O(n) - Visit each node once
 * @space O(h) - Recursion stack (h = tree height)
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   val: number
 *   left: TreeNode | null
 *   right: TreeNode | null
 *   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *   }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
  let best = -Infinity;

  const dfs = (node: TreeNode | null): number => {
    if (node === null) return 0;

    const leftGain = Math.max(0, dfs(node.left));
    const rightGain = Math.max(0, dfs(node.right));

    const pathThroughNode = node.val + leftGain + rightGain;
    best = Math.max(best, pathThroughNode);

    return node.val + Math.max(leftGain, rightGain);
  };

  dfs(root);
  return best;
}
