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

// 输入一个链表，反转链表后，输出新链表的表头

function ReverseList(pHead){
    if(pHead === null){
        return false;
    }

    let p1 = pHead;
    let p2 = null,
      temp = null;
    while(p1){
        temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}