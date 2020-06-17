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