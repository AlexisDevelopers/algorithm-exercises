/**
 * Colorful Number (TutorialHorizon #123)
 * Link: https://tutorialhorizon.com/algorithms/colorful-numbers/
 *
 * A number is "colorful" if the product of every contiguous subsequence of its digits is different.
 *
 * Example:
 * Input: 3245
 * Subsequences: 3,2,4,5, 3*2=6, 2*4=8, 4*5=20, 3*2*4=24, 2*4*5=40, 3*2*4*5=120
 * All products are unique => Colorful
 *
 * Input: 326
 * Subsequences: 3,2,6, 3*2=6, 2*6=12, 3*2*6=36
 * Product 6 repeats (digit 6 and 3*2) => Not Colorful
 *
 * @time O(n^2) - We compute products for all contiguous subsequences
 * @space O(n^2) - Set can store up to n*(n+1)/2 products
 */
function isColorfulNumber(num: number): boolean {
  const digits = String(num).split("").map(Number);
  const seenProducts = new Set<number>();

  for (let start = 0; start < digits.length; start++) {
    let product = 1;

    for (let end = start; end < digits.length; end++) {
      product *= digits[end];

      if (seenProducts.has(product)) {
        return false;
      }

      seenProducts.add(product);
    }
  }

  return true;
}

// Quick tests (optional for local run)
// console.log(isColorfulNumber(3245)); // true
// console.log(isColorfulNumber(326));  // false
// console.log(isColorfulNumber(32458)); // false
