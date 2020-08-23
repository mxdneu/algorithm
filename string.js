//请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str)
{
    // write code here
    return str.replace(/\s/g,'%20')
}

// 数字增加千分位

function addThou(num){
  num = num.toString();
  var arr = num.split('').reverse();
  var thou = arr.reduceRight((acc,cur,index) => {
    if((+index + 1)%3 === 0){
      acc += ',' + cur;
    }else{
      acc += cur;
    }
    return acc;
  })
  return thou;
}


// 汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
function LeftRotateString(str, n){
    if(str==null||str.length==0){
        return "";
    }
    n=n%str.length;
    return str.substr(n)+str.substr(0,n);   
}

// ['asd', 'asdasdasd', 'asdasd'], 求最大公共前缀 longest prefix
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  if(strs.length === 1) return strs[0]
  let min = 0, max = 0
  for(let i = 1; i < strs.length; i++) {
      if(strs[min] > strs[i]) min = i
      if(strs[max] < strs[i]) max = i
  }
  for(let j = 0; j < strs[min].length; j++) {
      if(strs[min].charAt(j) !== strs[max].charAt(j)) {
          return strs[min].substring(0, j)
      }
  }
  return strs[min]
};

// ip地址 leetcode 93
// 字符串切割，满足单字段，在[0, 255]
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