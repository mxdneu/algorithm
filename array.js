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


// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
function FindNumsAppearOnce(array) {
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let j = 0;
    while(array.length > 2) {
        const index = array[j];
        let sumBool = true;
        for(let i = j + 1;i < array.length; i++){
            if (index === array[i]) {
                array.splice(j, 1);
                array.splice(i - 1, 1);
                sumBool = false;
                break;
            }
        }
        // 判断判断位是否应该加1
        if (sumBool) {
          j++;
        }
    }
    return array;
}

function FindNumsAppearOnce1(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}

// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
// 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
// 不能使用除法。（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
// 对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。

function multiply(array)
{
    // write code here
  let bArr = [];
  const len = array.length;
  for(let i = 0;i < len; i++) {
    let index = 0;
    let b = 1;
    while(index < len) {
      if (i !== index) {
         b = b * array[index];
      }
      index++;
    }
    bArr.push(b);
  }
  return bArr;
}

//如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
// 那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，
// 那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，
// 使用GetMedian()方法获取当前读取数据的中位数。

function Midone() {
    const arr = [];
    function Insert(num)
    {
        // write code here
    if (!arr.length) {
        arr.push(num);
    } else {
        const i = binarySearch(num);
        arr.splice(i, 0, num);
    }
    }
    function GetMedian(){
        // write code here
    let mid;
    const len = arr.length;
    if (len%2 === 1) {
        mid = arr[Math.floor(len/2)];
    } else {
        const i = len/2;
        mid = (arr[i] + arr[i-1])/2;
    }
    return mid;
    }

    function binarySearch(num) {
    let low = 0;
    let high = arr.length - 1;
    while(low < high) {
        let mid = Math.floor((low + high)/2);
        if (num === arr[mid]) {
        return mid;
        } else if (num > arr[mid]) {
        low = mid + 1;
        } else {
        high = mid - 1;
        }
    }
    return low;
    }
}