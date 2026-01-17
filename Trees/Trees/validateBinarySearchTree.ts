/**
 * LeetCode #98 - Validate Binary Search Tree
 * Link: https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Given the root of a binary tree, determine if it is a valid BST.
 *
 * A valid BST:
 * - left subtree values < node.val
 * - right subtree values > node.val
 * - both subtrees must also be BST
 *
 * @time O(n)
 * @space O(h) - recursion stack (h = height)
 *
 * Pattern used: DFS with bounds (min/max)
 */
function isValidBST(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, low: number, high: number): boolean => {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return dfs(node.left, low, node.val) && dfs(node.right, node.val, high);
  };

  return dfs(root, -Infinity, Infinity);
}
