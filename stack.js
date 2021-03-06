// stack

// 两个栈实现一个队列，完成队列的pop和push操作
let stackA = [];
let stackB = [];

function push(node) {
    return stackA.push(node);
}

function pop(node) {
    if(stackB.length !== 0) {
        while(stackA.length) {
            stackB.push(stackA.pop());
        }
    }
    return stackB.pop(); 
}

// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
// 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

function IsPopOrder(pushV, popV){
    // write code here
    const stack = [];
    let index = 0;
    for(let i = 0;i < pushV.length;i++){
        stack.push(pushV[i]);
        while(stack.length && stack[stack.length - 1] == popV[index]) {
            stack.pop();
            index++;
        }
    }
    return stack.length == 0;
}

class Stack{}

// 一个无序栈，只有pop，push，empty，top方法，得出一个有序栈
function sortStack(stack) {
  const sort = new Stack();
  let currentEle = 0;
  while(!stack.isEmpty()) {
    currentEle = stack.pop();
    while(!sort.isEmpty() && currentEle > sort.top()) {
      stack.push(sort.pop());
    }
    sort.push(currentEle);
  }
  while(!sort.isEmpty()) {
    stack.push(sort.pop());
  }
}