/**
 * LeetCode #230 - Kth Smallest Element in a BST
 * Link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 *
 * Given the root of a Binary Search Tree (BST) and an integer k, return the k-th smallest value
 * (1-indexed) among all the node values in the tree.
 *
 * Key idea:
 * In a BST, an inorder traversal (left -> node -> right) visits values in ascending order.
 * So the k-th visited node in inorder is the answer.
 *
 * Example 1:
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 *
 * Example 2:
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 * Output: 3
 *
 * Constraints:
 * - The number of nodes in the tree is n.
 * - 1 <= k <= n <= 10^4
 * - 0 <= Node.val <= 10^4
 *
 * @time O(h + k) average in a balanced BST (we stop once we reach k),
 *       O(n) worst-case in a skewed tree.
 * @space O(h) for the explicit stack used in iterative inorder traversal.
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

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    const node = stack.pop()!;
    k--;
    if (k === 0) return node.val;

    curr = node.right;
  }

  return -1;
}
