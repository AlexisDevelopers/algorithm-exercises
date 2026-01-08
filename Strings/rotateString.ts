/**
 * LeetCode #796 - Rotate String
 * * Links:https://leetcode.com/problems/rotate-string/
 *
 * Problem:
 * Given two strings s and goal, return true if s can become goal 
 * after some number of shifts (rotations).
 *
 * @time  O(n) - Optimized string search.
 * @space O(n) - Concatenated string storage.
 */
function rotateString(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;

    const concatenated = s + s;

    return concatenated.includes(goal);
};
