/**
 * LeetCode #226 - Invert Binary Tree
 * Link: https://leetcode.com/problems/invert-binary-tree/
 *
 * Given the root of a binary tree, invert the tree and return its root.
 *
 * Inverting a binary tree means swapping the left and right children
 * of every node in the tree.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100]
 * - -100 <= Node.val <= 100
 *
 * Approach:
 * - Traverse the tree using DFS
 * - For each node, swap its left and right children
 * - Recursively apply the same logic to subtrees
 *
 * @time O(n) - Each node is visited once
 * @space O(h) - Recursion stack, where h is the tree height
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   val: number
 *   left: TreeNode | null
 *   right: TreeNode | null
 *   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *     this.val = val === undefined ? 0 : val
 *     this.left = left === undefined ? null : left
 *     this.right = right === undefined ? null : right
 *   }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const temp = root.left
  root.left = root.right
  root.right = temp
  
  invertTree(root.left)
  invertTree(root.right)

  return root
}
