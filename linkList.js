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
    if(pHead1.val > pHead2.val){
        list = pHead2;
        list.next = Merge(pHead1, pHead2.next);
    } else {
        list = pHead1;
        list.next = Merge(pHead2, pHead1.next);
    }
    return list;
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


// 删除排序链表的重复元素

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
