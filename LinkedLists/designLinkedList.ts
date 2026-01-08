/**
 * LeetCode #707 - Design Linked List
 * Link: https://leetcode.com/problems/design-linked-list/description/
 * 
 * Design your implementation of the linked list. You can choose to use a singly 
 * or doubly linked list.
 * 
 * Implement the MyLinkedList class:
 * - MyLinkedList() Initializes the MyLinkedList object.
 * - int get(int index) Get the value of the indexth node in the linked list. 
 *   If the index is invalid, return -1.
 * - void addAtHead(int val) Add a node of value val before the first element 
 *   of the linked list.
 * - void addAtTail(int val) Append a node of value val as the last element 
 *   of the linked list.
 * - void addAtIndex(int index, int val) Add a node of value val before the indexth 
 *   node in the linked list. If index equals the length of the linked list, the node 
 *   will be appended to the end. If index is greater than the length, the node will not be inserted.
 * - void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 * 
 * Example 1:
 * Input:
 * ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
 * [[], [1], [3], [1, 2], [1], [1], [1]]
 * Output:
 * [null, null, null, null, 2, null, 3]
 * 
 * Explanation:
 * MyLinkedList myLinkedList = new MyLinkedList();
 * myLinkedList.addAtHead(1);
 * myLinkedList.addAtTail(3);
 * myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
 * myLinkedList.get(1);              // return 2
 * myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
 * myLinkedList.get(1);              // return 3
 * 
 * Constraints:
 * - 0 <= index, val <= 1000
 * - Please do not use the built-in LinkedList library.
 * - At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
 * 
 * @time get: O(n), addAtHead: O(1), addAtTail: O(1), addAtIndex: O(n), deleteAtIndex: O(n)
 * @space O(1) - Per operation (overall O(n) for storing n nodes)
 */

class Node {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  private head: Node | null;
  private tail: Node | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current!.val;
  }

  addAtHead(val: number): void {
    const newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new Node(val);
    
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;
    
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }

    newNode.next = current!.next;
    current!.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head!.next;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }

    current!.next = current!.next!.next;
    
    if (index === this.size - 1) {
      this.tail = current;
    }
    
    this.size--;
  }
}
