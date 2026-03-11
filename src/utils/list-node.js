class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function buildLinkedList(values) {
  const dummy = new ListNode();
  let current = dummy;
  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  const output = [];
  let current = head;
  while (current) {
    output.push(current.val);
    current = current.next;
  }
  return output;
}

module.exports = { ListNode, buildLinkedList, linkedListToArray };
