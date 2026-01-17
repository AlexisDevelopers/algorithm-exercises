/**
 * LeetCode #225 - Implement Stack using Queues
 * Link: https://leetcode.com/problems/implement-stack-using-queues/
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues.
 * The stack should support push, pop, top, and empty operations.
 *
 * Example:
 * Input:
 * ["MyStack","push","push","top","pop","empty"]
 * [[],[1],[2],[],[],[]]
 * Output:
 * [null,null,null,2,2,false]
 *
 * Constraints:
 * - 1 <= x <= 9
 * - At most 100 calls will be made to push, pop, top, and empty
 *
 * @time
 * push: O(n)
 * pop: O(1)
 * top: O(1)
 * empty: O(1)
 *
 * @space O(n)
 *
 * Pattern used: Queue simulation
 */

class MyStack {
    private q1: number[]
    private q2: number[]

    constructor() {
        this.q1 = []
        this.q2 = []
    }

    push(x: number): void {
        this.q2.push(x)
        while (this.q1.length) {
            this.q2.push(this.q1.shift()!)
        }
        ;[this.q1, this.q2] = [this.q2, this.q1]
    }

    pop(): number {
        return this.q1.shift()!
    }

    top(): number {
        return this.q1[0]
    }

    empty(): boolean {
        return this.q1.length === 0
    }
}
