/**
 * LeetCode #257 - Binary Tree Paths
 * Link: https://leetcode.com/problems/binary-tree-paths/
 *
 * Given the `root` of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 *
 * We build paths like: "1->2->5"
 *
 * Approach:
 * DFS (preorder). We keep a `path` string (or build with an array of values) and when we
 * reach a leaf, we push the full path to the result.
 *
 * Example 1:
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 * Example 2:
 * Input: root = [1]
 * Output: ["1"]
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 100]
 * - -100 <= Node.val <= 100
 *
 * @time O(n) - Visit each node once (string building total work is proportional to output size)
 * @space O(h) - Recursion stack (h = tree height), excluding output
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   val: number
 *   left: TreeNode | null
 *   right: TreeNode | null
 *   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 *   }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  if (root === null) return result;

  const dfs = (node: TreeNode, path: string): void => {
    const nextPath = path.length === 0 ? `${node.val}` : `${path}->${node.val}`;

    if (node.left === null && node.right === null) {
      result.push(nextPath);
      return;
    }

    if (node.left !== null) dfs(node.left, nextPath);
    if (node.right !== null) dfs(node.right, nextPath);
  };

  dfs(root, "");
  return result;
}
