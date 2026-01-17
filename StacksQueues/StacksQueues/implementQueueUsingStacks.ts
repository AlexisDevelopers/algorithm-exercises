/**
 * LeetCode #232 - Implement Queue using Stacks
 * Link: https://leetcode.com/problems/implement-queue-using-stacks/
 *
 * Implement a first-in-first-out (FIFO) queue using only two stacks.
 * The implemented queue should support all the functions of a normal queue:
 * push, pop, peek, and empty.
 *
 * Constraints:
 * - 1 <= x <= 9
 * - At most 100 calls will be made to push, pop, peek, and empty.
 * - All calls to pop and peek are valid.
 *
 * @time Amortized O(1)
 * @space O(n)
 *
 * Pattern used: Two Stacks
 * Core idea:
 * - One stack handles input.
 * - One stack handles output.
 * - Elements are moved only when needed.
 */

class MyQueue {
    private inStack: number[]
    private outStack: number[]

    constructor() {
        this.inStack = []
        this.outStack = []
    }

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop()!)
            }
        }
        return this.outStack.pop()!
    }

    peek(): number {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop()!)
            }
        }
        return this.outStack[this.outStack.length - 1]
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0
    }
}
