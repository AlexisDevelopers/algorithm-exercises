/**
 * LeetCode #113 - Path Sum II
 * Link: https://leetcode.com/problems/path-sum-ii/description/
 *
 * Given the `root` of a binary tree and an integer `targetSum`, return all root-to-leaf paths
 * where the sum of the node values in the path equals `targetSum`.
 *
 * Each path should be returned as a list of the node values, not node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf node.
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 *
 * Example 2:
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 *
 * Example 3:
 * Input: root = [1,2], targetSum = 0
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 5000]
 * - -1000 <= Node.val <= 1000
 * - -1000 <= targetSum <= 1000
 *
 * Approach:
 * Use DFS (backtracking) to explore all root-to-leaf paths.
 * Keep a `path` array with the current path values and a running sum.
 * When we reach a leaf, if the sum matches `targetSum`, push a copy of the path to results.
 *
 * @time O(n) in traversal, plus copying paths for each valid result
 * @space O(h) recursion stack + path (h = tree height)
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (node: TreeNode | null, currentSum: number): void => {
    if (!node) return;

    path.push(node.val);
    currentSum += node.val;

    const isLeaf = node.left === null && node.right === null;
    if (isLeaf) {
      if (currentSum === targetSum) result.push([...path]);
    } else {
      dfs(node.left, currentSum);
      dfs(node.right, currentSum);
    }

    path.pop();
  };

  dfs(root, 0);
  return result;
}
