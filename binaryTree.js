//输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

function Node(x){
	this.val = x;
	this.left = null;
	this.right = null;
}

function reConstructBinaryTree(pre, vin){
	var result =null;
    if(pre.length>1){
        var root = pre[0];
        var vinRootIndex = vin.indexOf(root);
        var vinLeft = vin.slice(0,vinRootIndex);
        var vinRight = vin.slice(vinRootIndex+1,vin.length);
        pre.shift();
        var preLeft = pre.slice(0,vinLeft.length);
        var preRight = pre.slice(vinLeft.length,pre.length);
        result={
            val:root,
            left:reConstructBinaryTree(preLeft,vinLeft),
            right:reConstructBinaryTree(preRight,vinRight)
        }
      
    }else if(pre.length ===1){
        result= {
            val :pre[0],
            left:null,
            right:null
        }
    }
    return result;
}

// 20200615
function reConstructBinaryTree1(pre, vin)
{
    // write code here
    let result = null;
    if(pre.length > 1) {
        const root = pre[0];
        const leftL = vin.indexOf(root);
        const rightL = vin.lenght - leftL - 1;
        const leftPre = pre.slice(1, leftL + 1);
        const rightPre = pre.slice(1 + leftL);
        const leftVin = vin.slice(0, leftL);
        const rightVin = vin.slice(leftL + 1);
        result = {
            val: root,
            left: reConstructBinaryTree1(leftPre, leftVin),
            right: reConstructBinaryTree1(rightPre, rightVin),
        }
    } else if(pre.length === 1) {
        result = {
            val: pre[0],
            left: null,
            right: null,
        }
    }
    return result;
}

//操作给定的二叉树，将其变换为源二叉树的镜像
function Mirror(root) {
  // write code here
  if(root){
      let tem = {};
      tem = root.left;
      root.left = root.right;
      root.right = tem;
      Mirror(root.left);
      Mirror(root.right);
  }
}

// 层序遍历二叉树，从上到下，从左到右

function PrintFromTopToBottom(root) {
  const point = [];
  const result = [];
  if (root) {
    point.push(root);
  }
  while(point.length) {
    const node = point.shift();
    if (node.left) {
      point.push(node.left);
    }
    if (node.right) {
      point.push(node.right);
    }
    result.push(node.val);
  }
  return result;
}

function treeDepth(root) {
  if (!root) {
    return 0;
  }
  const left = treeDepth(root.left) + 1;
  const right = treeDepth(root.right) + 1;
  return Math.max(left, right);
}