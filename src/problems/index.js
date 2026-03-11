module.exports = {
  array: {
    ...require('./array/two-sum'),
    ...require('./array/max-subarray'),
  },
  string: {
    ...require('./string/longest-substring-without-repeat'),
    ...require('./string/valid-anagram'),
  },
  linkedList: {
    ...require('./linked-list/reverse-linked-list'),
  },
  stackQueue: {
    ...require('./stack-queue/valid-parentheses'),
  },
  binarySearch: {
    ...require('./binary-search/search-insert-position'),
  },
  tree: {
    ...require('./tree/maximum-depth-of-binary-tree'),
  },
  backtracking: {
    ...require('./backtracking/permutations'),
  },
  dynamicProgramming: {
    ...require('./dynamic-programming/climbing-stairs'),
  },
  graph: {
    ...require('./graph/number-of-islands'),
  },
  greedy: {
    ...require('./greedy/best-time-to-buy-and-sell-stock'),
  },
  bit: {
    ...require('./bit/single-number'),
  },
  heap: {
    ...require('./heap/top-k-frequent-elements'),
  },
};
