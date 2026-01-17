/**
 * LeetCode #1379 - Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 * Link: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 *
 * Given two binary trees original and cloned and a reference to a node target in the original tree,
 * return a reference to the same node in the cloned tree.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 10^4].
 * - target is a node from the original tree and is not null.
 *
 * @time O(N)
 * @space O(N) in worst case (stack)
 *
 * Pattern used: Parallel DFS (Original + Cloned)
 */

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (!original || !cloned || !target) return null;

  const stackO: (TreeNode | null)[] = [original];
  const stackC: (TreeNode | null)[] = [cloned];

  while (stackO.length) {
    const o = stackO.pop()!;
    const c = stackC.pop()!;

    if (o === target) return c;

    if (o.right) {
      stackO.push(o.right);
      stackC.push(c.right);
    }
    if (o.left) {
      stackO.push(o.left);
      stackC.push(c.left);
    }
  }

  return null;
}
