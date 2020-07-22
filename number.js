// 第n个丑数

//第一种方法，时间复杂度太高。。需要判断每个数字
function GetUglyNumber_Solution(index){
  // write code here
  let count = 0;
  let num = 1;
  while (count < index) {
      if (boolUglyNumber(num)) {
          count++;
      }
      num++;
  }
  return num - 1;
}

function boolUglyNumber(num) {
  while(num%2 === 0) {
      num /= 2;
  }
  while(num%3 === 0){
      num /= 3;
  }
  while(num%5 === 0) {
      num /= 5;
  }
  
  return num === 1;
}

// 第二种方法，不去判断每个数字，只维护一个丑数的数组
function GetUglyNumber_Solution1(index){
  if (index === 0) {
    return 0;
  }
  const arr = [1];
  let two = 0;
  let three = 0;
  let five = 0;
  for(let i = 1; i < index;i++){
    arr[i] = Math.min(arr[two]*2, arr[three]*3, arr[five]*5);
    if (arr[i] === arr[two]*2) {
      two++
    }
    if (arr[i] === arr[three]*3) {
      three++;
    }
    if (arr[i] === arr[five]*5) {
      five++;
    }
  }
  return arr[index -1];
}

// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

function Sum_Solution(n) {
  // write code here
  let res = n;
  (n > 0) && (res += Sum_Solution(n - 1));
  return res;
}

// 和为S的连续正整数序列

function FindContinuousSequence(sum)
{
  // write code here
  let plow = 1;
  let phigh = 2;
  let result = [];
  while(plow < phigh) {
    let currunt = (plow + phigh) * (phigh - plow + 1)/2;
    if (currunt === sum) {
      let item = [];
      for(let i = plow;i <= phigh;i++) {
        item.push(i);
      }
      result.push(item);
      plow++;
    } else if (currunt < sum) {
      phigh++;
    } else {
      plow++;
    }
  }
  return result;
}
