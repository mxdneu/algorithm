// 数组方法

// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target, array) {
  let row = 0;
  let col = array[0].length - 1;
  while(row <= array.length - 1 && col >= 0) {
    if (target === array[row][col]) {
      return true;
    } else if (target > array[row][col]) {
      row++;
    } else {
      col--;
    }
  }
  return false;
}

// 将字符串空格换成%20

function replaceSpace(str){
  return str.replace(/\s/g, '%20');
}

// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次
// 超过数组长度的一半，因此输出2。如果不存在则输出0。
// 利用分叶法，不同的数字消除，最后剩下的数字就是最多的那个数
function MoreThanHalfNum_Solution(numbers){
  // write code here
  const len = numbers.length;
  if(!len){
      return 0;
  }
  let count = 1;
  let num = numbers[0];
  for(let i = 1;i < len;i++){
      if(num === numbers[i]){
          count++;
      } else {
          count--;
      }
      if(count === 0){
          num = numbers[i];
          count = 1;
      }
  }
  count = 0;
  for(let i = 0;i < len; i++){
      if(num === numbers[i]){
          count++;
      }
  }
  if(count*2 > len){
      return num; 
  }
  return 0;
}

// 统计一个数字在排序数组中出现的次数。

function GetNumberOfK(data, k){
    // write code here
    let location = data.indexOf(k);
    let count = 0;
    if(location >= 0){
        while(data[location] === k){
            count++;
            location++;
        } 
    }
    return count;
}
