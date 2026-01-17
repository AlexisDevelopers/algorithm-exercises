/**
 * LeetCode #20 - Valid Parentheses
 * Link: https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * - Every close bracket has a corresponding open bracket.
 *
 * @time O(n)
 * @space O(n)
 */

function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (char in map) {
            const top = stack.pop();
            if (top !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
