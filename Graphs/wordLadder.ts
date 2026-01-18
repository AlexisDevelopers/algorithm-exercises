/**
 * LeetCode #127 - Word Ladder
 * Link: https://leetcode.com/problems/word-ladder/description/
 *
 * A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList`
 * is a sequence of words:
 * beginWord -> s1 -> s2 -> ... -> sk
 * such that:
 * - Every adjacent pair of words differs by a single letter.
 * - Every si (1 <= i <= k) is in `wordList`.
 * - sk == endWord.
 * Note: beginWord does not need to be in wordList.
 *
 * Return the number of words in the shortest transformation sequence from beginWord to endWord,
 * or 0 if no such sequence exists.
 *
 * Example 1:
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * Output: 5
 * Explanation: One shortest transformation sequence is:
 * "hit" -> "hot" -> "dot" -> "dog" -> "cog"
 *
 * Example 2:
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
 * Output: 0
 * Explanation: The endWord "cog" is not in wordList, therefore there is no valid sequence.
 *
 * Constraints:
 * - 1 <= beginWord.length <= 10
 * - endWord.length == beginWord.length
 * - 1 <= wordList.length <= 5000
 * - wordList[i].length == beginWord.length
 * - beginWord, endWord, and wordList[i] consist of lowercase English letters.
 * - beginWord != endWord
 * - All the words in wordList are unique.
 *
 * Approach:
 * - BFS over "generic patterns" (e.g., h*t, *it) to find the shortest path.
 * - Precompute: pattern -> list of words that match that pattern.
 *
 * @time  O(N * L^2)  (N = number of words, L = word length; building patterns + BFS expansion)
 * @space O(N * L)    (pattern map + visited)
 */
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const L = beginWord.length;

  const patternMap = new Map<string, string[]>();
  const allWords = [beginWord, ...wordList];

  for (const word of allWords) {
    for (let i = 0; i < L; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      const arr = patternMap.get(pattern);
      if (arr) arr.push(word);
      else patternMap.set(pattern, [word]);
    }
  }

  const queue: Array<{ word: string; dist: number }> = [{ word: beginWord, dist: 1 }];
  const visited = new Set<string>([beginWord]);

  while (queue.length > 0) {
    const { word, dist } = queue.shift()!;

    if (word === endWord) return dist;

    for (let i = 0; i < L; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      const neighbors = patternMap.get(pattern);
      if (!neighbors) continue;

      for (const next of neighbors) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push({ word: next, dist: dist + 1 });
        }
      }

      patternMap.set(pattern, []);
    }
  }

  return 0;
}
