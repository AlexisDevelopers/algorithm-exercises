'''
TechieDelight #31 - Rearrange Array IV 
Link: https://www.techiedelight.com/?problem=RearrangeArrayIV

Given an array of positive and negative integers, in-place segregate them 
in linear time and constant space. The output should contain all negative 
numbers, followed by all positive numbers.

Example 1:
Input: nums = [9, -3, 5, -2, -8, -6, 1, 3]
Output: [-3, -2, -8, -6, 9, 5, 1, 3]

Example 2:
Input: nums = [-4, -2, -7, -9]
Output: [-4, -2, -7, -9]

Constraints:
- 1 <= len(nums) <= 10^5
- -10^9 <= nums[i] <= 10^9

@time O(n) - Single pass through the list using two pointers.
@space O(1) - Strictly in-place modification.
'''

from typing import List

class Solution:
    def rearrange(self, nums: List[int]) -> None:
        """
        Rearranges the array in-place to move all negative numbers to the front.
        Optimized to avoid redundant swaps when indices are identical.
        """
        # 'write_index' tracks where the next negative number should be placed
        write_index = 0
        
        for read_index in range(len(nums)):
            if nums[read_index] < 0:
                # Perform swap only if the pointers are at different positions
                if read_index != write_index:
                    nums[read_index], nums[write_index] = nums[write_index], nums[read_index]
                
                write_index += 1
