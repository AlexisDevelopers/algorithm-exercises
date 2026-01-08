 * LeetCode #19 - Remove Nth Node From End of List
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * 
 * Given the head of a linked list, remove the nth node from the end of the list 
 * and return its head.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * Explanation: Remove the 2nd node from the end (node 4).
 * 
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 * 
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 * 
 * Constraints:
 * - The number of nodes in the list is sz.
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 * 
 * Follow up: Could you do this in one pass?
 * 
 * @time O(n) - Single pass through the list
 * @space O(1) - Only two pointers used
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast!.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next;
  }

  slow!.next = slow!.next!.next;

  return dummy.next;
}
