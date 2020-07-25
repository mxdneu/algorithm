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

//输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
function Merge(pHead1, pHead2)
{
    // write code here
    let list = {}
    if(pHead1 === null){
        return pHead2;
    } else if (pHead2 === null) {
        return pHead1;
    }
    if(pHead1 > pHead2){
        list = pHead2;
        list.next = Merge(pHead1, pHead2.next);
    } else {
        list = pHead1;
        list.next = Merge(pHead2, pHead1.next);
    }
    return list;
}

//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 === null || pRoot2 === null){
        return false
    }
    return isSubTree(pRoot1,pRoot2)||HasSubtree(pRoot1.left,pRoot2)||HasSubtree(pRoot1.right,pRoot2);
}

function isSubTree(root1,root2){
    if(!root2){
        return true;
    }
    if(!root1){
        return false;
    }
    if(root1.val === root2.val){
        return isSubTree(root1.left,root2.left) && isSubTree(root1.right,root2.right);
    }else{
        return false;
    }
}


// 链表去除连续重复
function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead)
{
    // write code here
  if (pHead === null || pHead.next === null) {
    return pHead;
  }
  let Head = new ListNode(0);
  let pre = Head;
  let last = pre.next;
  while(last !== null) {
    if (last.next !== null && last.val === last.next.val) {
      while(last.next !== null && last.val === last.next.val) {
        last = last.next;
      }
      pre.next = last.next;
      last = last.next;
    } else {
      pre = pre.next;
      last = last.next;
    }
  }
  return Head.next;
}
