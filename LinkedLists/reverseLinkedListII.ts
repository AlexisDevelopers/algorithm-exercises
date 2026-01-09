/**
 * LeetCode #92 - Reverse Linked List II
 * Link: https://leetcode.com/problems/reverse-linked-list-ii/description/
 * 
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 * 
 * Example 2:
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 * 
 * Constraints:
 * - The number of nodes in the list is n.
 * - 1 <= n <= 500
 * - -500 <= Node.val <= 500
 * - 1 <= left <= right <= n
 * 
 * @time O(n) - Single pass through the list
 * @space O(1) - In-place reversal using constant extra space
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

/**
 * Pattern used:
 * - Dummy Node
 * - In-place Linked List Reversal (sublist)
 *
 * Core idea:
 * 1. Use a dummy node to simplify edge cases (when left = 1).
 * 2. Move a pointer to the node just before `left`.
 * 3. Reverse the sublist between `left` and `right`.
 * 4. Reconnect the reversed sublist back to the original list.
 */

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null || left === right) return head;

  const dummy = new ListNode(0, head);
  let prev: ListNode | null = dummy;
  
  for (let i = 1; i < left; i++) {
    prev = prev!.next;
  }

  let curr = prev!.next;
  for (let i = 0; i < right - left; i++) {
    const temp = curr!.next!;
    curr!.next = temp.next;
    temp.next = prev!.next;
    prev!.next = temp;
  }

  return dummy.next;
}
