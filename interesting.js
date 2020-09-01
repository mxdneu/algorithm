//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

//递归实现
//首先考虑n等于0、1、2时的特殊情况，f(0) = 0   f(1) = 1  f(2) = 2
// 其次，当n=3时，青蛙的第一跳有两种情况：跳1级台阶或者跳两级台阶
//假如跳一级，那么 剩下的两级台阶就是f(2)；假如跳两级，那么剩下的一级台阶就是f(1)，因此f(3)=f(2)+f(1)
//当n = 4时，f(4) = f(3) +f(2),以此类推...........可以联想到Fibonacci数列

function jumpFloor(number)
{
    // write code here
    if(number === 0){
        return 0;
    }else if(number === 1){
        return 1;
    }else if(number === 2){
        return 2;
    }else{
        return jumpFloor(number - 1) + jumpFloor(number -2);
    }
}

// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power(base, exponent){
    // write code here
    var basenum = base;
    for(let i = 2;i <= Math.abs(exponent);i++){
        base = base*basenum
    }
    if(exponent < 0){
        base = 1/base;
    }else if(exponent === 0){
        base = 1;
    }
    return base;
}

//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array){
    // write code here
    var oddArr = [],
        evenArr = [],
        totalArr = [];
    for(let i in array){
        if(array[i]%2 == 0){
            oddArr.push(array[i]);
        }else{
            evenArr.push(array[i]);
        }    
    }
    totalArr = evenArr.concat(oddArr);
    return totalArr;
}
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var len = numbers.length;
    if(!len){
        return 0;
    }
    var num = numbers[0];
    var count = 1;
    for(let i = 0;i < len;i++){
        if(num === numbers[i]){
            count++;
        }else{
            count--;
        }
        if(count === 0){
            count = 1;
            num = numbers[i];
        }
    }
    count = 0;
    for(let i = 0;i < len;i++){
        if(num === numbers[i]){
            count++
        }
    }
    if(count*2 > len){
        return num
    }
    return 0;
}
// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k)
{
    // write code here
    var result = [];
    if(input.length >= k){
        result = input.sort().slice(0,k);
    } 
    return result;
}

// HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)

function FindGreatestSumOfSubArray(array)
{
    // write code here
    if(array.length == 0){
       return; 
    }
    var result = array.slice();
    function Sum(arr){
        var arr1 = arr.slice();
        var sum = 0;
        for(let i = 0;i < arr.length;i++){
            sum += arr[i];
            result.push(sum);
        }
        arr1.shift();
        if(arr1.length > 1){
            Sum(arr1);
        }
    }
    Sum(array);
    result = result.sort(function(a,b){
        return a -b;
    })
    return result[result.length-1];
}



// 矩形方块我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function rectCover(number){
    // write code here
    var result = 0;
    if(number === 0){
        result = 0;
    }else if(number === 1){
        result = 1;
    }else if(number === 2){
        result = 2;
    }else{
        result =  rectCover(number-1) + rectCover(number-2);
    }
    return result;
}


// 减绳子
function cutRope(number)
{
    if(number<2) return 0;
    if(number===2) return 1;
    if(number===3) return 2;
    let a=Math.floor(number/3)
    let b=number%3;
    switch(b){
        case 0:return Math.pow(3,a);
        case 1:return Math.pow(3,a-1)*4;
        case 2:return Math.pow(3,a)*2;   
    }
}

// 一个长度为5的数组是否是顺子，有四个王，王算0，可以模拟任何数字
// 思路：先排序，然后计算0的个数和所有间隔的个数，如果有两张以上一样的牌，肯定不是顺子
function IsContinuous(numbers) {
    // write code here
    if (numbers && numbers.length === 0) {
        return false;
    }
    numbers = numbers.sort((a, b) => (a - b));
    let countZero = 0;
    let countGap = 0;
    // 记录0个数，然后重复的直接false
    for(let i = 0;i < numbers.length -1;i++){
        if(numbers[i] === 0){
            countZero++;
        }
        if(numbers[i] === numbers[i + 1] && numbers[i] !== 0){
            return false;
        }
        if (numbers[i] !== 0 && numbers[i + 1] !== 0) {
            countGap += (numbers[i + 1] - numbers[i] - 1);
        }
    }
    if (countZero === countGap || countZero === 4) {
        return true;
    }
    return false;
}

// 洗牌算法

function shuffleCard(arr) {
  const target = [];
  while(arr.length) {
    const index = Math.floor(Math.random() * arr.length);
    target.push(arr.splice(index, 1)[0]);
  }
  return target;
}

// 剑指offer61 是否是顺子
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    const sortNum = nums.sort((a, b) => (a - b));
    let zeroCount = 0;
    let step = 0;
    for (let i = 0; i < sortNum.length - 1; i++) {
        if (sortNum[i] === 0) {
            zeroCount++;
        } else {
            if (sortNum[i + 1] === sortNum[i]) {
                return false;
            }
            step += sortNum[i + 1] - sortNum[i] - 1;
        }
    }
    return zeroCount >= step ? true : false;
};