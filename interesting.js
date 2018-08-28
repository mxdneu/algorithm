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