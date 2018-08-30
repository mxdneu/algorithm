//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let arr = [];
    while(head){
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}

//输入一个链表，输出该链表中倒数第k个结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k){
    // write code here
    if(head == null){
        return false
    }
    var currentNode = head;
    var arr = [];
    while(currentNode != null){
        arr.push(currentNode);
        currentNode = currentNode.next;
    }
    return arr[arr.length -k];
}