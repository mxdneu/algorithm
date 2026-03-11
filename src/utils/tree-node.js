class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTreeFromLevelOrder(values) {
  if (!values.length || values[0] == null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue = [root];
  let index = 1;

  while (queue.length && index < values.length) {
    const node = queue.shift();
    const leftVal = values[index];
    const rightVal = values[index + 1];

    if (leftVal != null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }

    if (rightVal != null) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }

    index += 2;
  }

  return root;
}

module.exports = { TreeNode, buildTreeFromLevelOrder };
