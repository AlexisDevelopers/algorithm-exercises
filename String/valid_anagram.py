'''
Check Anagram (Techie Delight #40)
Links:https://www.techiedelight.com/?problem=CheckAnagram

Problem:
Given two strings X and Y, determine if they are anagrams of each other.
An anagram is a word formed by rearranging the letters of another.

Example:
Input: X = 'silent', Y = 'listen'
Output: True

Complexity Analysis:
@time  O(n) - We iterate through the strings to build a frequency map.
@space O(k) - Where k is the number of unique characters.
'''

class Solution:
  def isAnagram(self, X: str, Y: str) -> bool:
       if len(X) != len(Y):
           return False

       char_counts = {}

       for char in X:
           char_counts[char] = char_counts.get(char, 0) + 1

       for char in Y:
           if char not in char_counts:
               return False
            
           char_counts[char] -= 1
            
           if char_counts[char] < 0:
               return False

       return all(count == 0 for count in char_counts.values())
