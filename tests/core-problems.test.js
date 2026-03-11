const test = require('node:test');
const assert = require('node:assert/strict');

const { twoSum } = require('../src/problems/array/two-sum');
const { maxSubArray } = require('../src/problems/array/max-subarray');
const { lengthOfLongestSubstring } = require('../src/problems/string/longest-substring-without-repeat');
const { isAnagram } = require('../src/problems/string/valid-anagram');
const { reverseList } = require('../src/problems/linked-list/reverse-linked-list');
const { isValid } = require('../src/problems/stack-queue/valid-parentheses');
const { searchInsert } = require('../src/problems/binary-search/search-insert-position');
const { maxDepth } = require('../src/problems/tree/maximum-depth-of-binary-tree');
const { permute } = require('../src/problems/backtracking/permutations');
const { climbStairs } = require('../src/problems/dynamic-programming/climbing-stairs');
const { numIslands } = require('../src/problems/graph/number-of-islands');
const { maxProfit } = require('../src/problems/greedy/best-time-to-buy-and-sell-stock');
const { singleNumber } = require('../src/problems/bit/single-number');
const { topKFrequent } = require('../src/problems/heap/top-k-frequent-elements');
const { buildLinkedList, linkedListToArray } = require('../src/utils/list-node');
const { buildTreeFromLevelOrder } = require('../src/utils/tree-node');

test('twoSum', () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

test('maxSubArray', () => {
  assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

test('lengthOfLongestSubstring', () => {
  assert.equal(lengthOfLongestSubstring('abcabcbb'), 3);
});

test('isAnagram', () => {
  assert.equal(isAnagram('anagram', 'nagaram'), true);
  assert.equal(isAnagram('rat', 'car'), false);
});

test('reverseList', () => {
  const head = buildLinkedList([1, 2, 3]);
  assert.deepEqual(linkedListToArray(reverseList(head)), [3, 2, 1]);
});

test('isValid', () => {
  assert.equal(isValid('()[]{}'), true);
  assert.equal(isValid('(]'), false);
});

test('searchInsert', () => {
  assert.equal(searchInsert([1, 3, 5, 6], 5), 2);
  assert.equal(searchInsert([1, 3, 5, 6], 2), 1);
});

test('maxDepth', () => {
  const root = buildTreeFromLevelOrder([3, 9, 20, null, null, 15, 7]);
  assert.equal(maxDepth(root), 3);
});

test('permute', () => {
  assert.equal(permute([1, 2, 3]).length, 6);
});

test('climbStairs', () => {
  assert.equal(climbStairs(5), 8);
});

test('numIslands', () => {
  const grid = [
    ['1', '1', '0', '0'],
    ['1', '0', '0', '1'],
    ['0', '0', '1', '1'],
  ];
  assert.equal(numIslands(grid), 2);
});

test('maxProfit', () => {
  assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
});

test('singleNumber', () => {
  assert.equal(singleNumber([4, 1, 2, 1, 2]), 4);
});

test('topKFrequent', () => {
  assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
});
