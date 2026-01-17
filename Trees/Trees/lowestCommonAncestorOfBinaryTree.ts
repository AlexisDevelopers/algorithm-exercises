/**
 * LeetCode #236 - Lowest Common Ancestor of a Binary Tree
 * Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * The LCA is the lowest node that has both p and q as descendants (a node can be a descendant of itself).
 *
 * Example 1:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 *
 * Example 2:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 *
 * Example 3:
 * Input: root = [1,2], p = 1, q = 2
 * Output: 1
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [2, 10^5]
 * - -10^9 <= Node.val <= 10^9
 * - All Node.val are unique
 * - p != q
 * - p and q exist in the tree
 *
 * @time O(n) - Visit each node at most once
 * @space O(h) - Recursion stack (h = tree height)
 */

/**
 * Pattern used: DFS Recursion (Postorder)
 * Core idea:
 * - If current node is null, return null.
 * - If current node is p or q, return current node.
 * - Recurse left and right.
 * - If both sides return non-null, current node is the LCA.
 * - Otherwise return the non-null side (propagate found node up).
 */

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || p === null || q === null) return null;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;
  return left !== null ? left : right;
}
