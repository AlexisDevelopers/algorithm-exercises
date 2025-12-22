/**
 * Find Second Largest Element in Array
 * Link: https://www.typescriptlang.org/play/
 * 
 * Given an array of integers, find the second-largest element present in the array.
 * If the second largest element does not exist (all elements are the same), return -1.
 * 
 * Example 1:
 * Input: arr = [12, 35, 1, 10, 34, 1]
 * Output: 34
 * Explanation: The largest element is 35 and the second largest element is 34.
 * 
 * Example 2:
 * Input: arr = [10, 5, 10]
 * Output: 5
 * Explanation: The largest element is 10 and the second largest element is 5.
 * 
 * Example 3:
 * Input: arr = [10, 10, 10]
 * Output: -1
 * Explanation: All elements are the same, so there is no second largest element.
 * 
 * Constraints:
 * - 1 <= arr.length <= 10^5
 * - -10^9 <= arr[i] <= 10^9
 * 
 * @time O(n) - Single pass through array
 * @space O(1) - Only two variables used
 */
function findSecondLargest(arr: number[]): number {
  if (arr.length < 2) {
    return -1;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? -1 : secondLargest;
}

// Test cases
console.log(findSecondLargest([12, 35, 1, 10, 34, 1])); // 34
console.log(findSecondLargest([10, 5, 10])); // 5
console.log(findSecondLargest([10, 10, 10])); // -1
console.log(findSecondLargest([5])); // -1
console.log(findSecondLargest([5, 5])); // -1
