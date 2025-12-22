'''
TechieDelight #9 - Derive Strings
Link: https://www.techiedelight.com/?problem=DeriveStrings

Check if a given string can be derived from another string by circularly rotating it. 
The rotation can be in a clockwise or anti-clockwise rotation.

Example:
Input: X = 'ABCD', Y = 'DABC'
Output: True
Explanation: 'DABC' can be derived from 'ABCD' by right-rotating it by 1 unit.

Complexity Analysis:
@time  O(n) - Optimized string search using the concatenation trick.
@space O(n) - Temporary storage for the doubled string (X + X).
'''

class Solution:
    def check(self, X: str, Y: str) -> bool:
        if len(X) != len(Y):
            return False

        if not X and not Y:
            return True

        all_possible_rotations = X + X

        return Y in all_possible_rotations
