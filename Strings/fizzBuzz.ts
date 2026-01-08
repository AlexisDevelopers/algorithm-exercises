/**
 * LeetCode #412 - Fizz Buzz
 * Link: https://leetcode.com/problems/fizz-buzz/
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i (as a string) if none of the above conditions are true.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 *
 * Example 2:
 * Input: n = 15
 * Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 * Constraints:
 * - 1 <= n <= 10^4
 *
 * @time O(n) - Single loop from 1 to n.
 * @space O(n) - Resulting array to store strings.
 */

function fizzBuzz(n: number): string[] {
    const result: string[] = [];

    for (let i = 1; i <= n; i++) {
        let output = "";

        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";

        result.push(output || i.toString());
    }

    return result;
};
