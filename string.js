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