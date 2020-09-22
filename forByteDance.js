// leetcode 209
// 长度最小的子数组
// 思路：滑动窗口，

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(s, nums) {
  const max_len = nums.length + 1;
  let sum = 0, i = 0, ans = max_len;
  for(let j = 0; j < nums.length; j++) {
      sum += nums[j];
      while(sum >= s) {
          ans = Math.min(ans, j - i + 1);
          sum -= nums[i++]
      }
  }
  return ans === max_len ? 0 : ans;
};

// leetcode 215 数组中第k个最大元素，还是用sort函数性能最高，快排不行
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // const sortNums = quickSort(nums);
  const sortNums = nums.sort((a, b) => (b - a));
  return sortNums[k - 1];
};

var quickSort = function(arr) {
  if (arr.length < 1) return arr;
  let arrIndex = arr[0];
  const mid = [], left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
          left.push(arr[i]);
      } else if (arr[i] < arr[0]) {
          right.push(arr[i]);
      } else {
          mid.push(arr[i]);
      }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

// leetcode 21， 合并两个有序链表
function Merge(pHead1, pHead2)
{
    // write code here
    let list = {}
    if(pHead1 === null){
        return pHead2;
    } else if (pHead2 === null) {
        return pHead1;
    }
    if(pHead1.val > pHead2.val){
        list = pHead2;
        list.next = Merge(pHead1, pHead2.next);
    } else {
        list = pHead1;
        list.next = Merge(pHead2, pHead1.next);
    }
    return list;
}

// leetcode 98 验证二叉搜索树
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 使用中序遍历去解答，利用搜索二叉树特性，左节点大于根，右节点小于根，中序遍历得到的是一个有序数组
var isValidBST = function(root) {
  var result = [];
  function lrr(root) {
      if (root) {
          root.left && lrr(root.left);
          result.push(root.val);
          root.right && lrr(root.right);
      }
  }
  lrr(root);
  for (let i = 0; i < result.length -1; i++) {
      if (result[i] >= result[i + 1]) {
          return false;
      }
  }
  return true;
};

// leetcode 93 复原ip地址
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    const dfs = function(subRes, start) {
        if (subRes.length === 4 && start === s.length) {
            res.push(subRes.join('.'));
            return;
        }
        if (subRes.length === 4 && start < s.length) {
            return;
        }
        for (let i = 1; i < 4; i++) {
            if (start + i - 1 >= s.length) return;
            if (i !== 1 && s[start] == 0) return;
            const str = s.substr(start, i);
            if (str.length === 3 && +str > 255) return;
            subRes.push(str);
            dfs(subRes, start + i);
            subRes.pop();
        }
    }
    dfs([], 0);
    return res;
};
