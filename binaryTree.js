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
        const rightL = vin.length - leftL - 1;
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


function VerifySquenceOfBST1(sequence)
{
  // write code here
  if(!sequence.length){
      return false;
  }
  return judgeSquence(sequence,0,sequence.length-1);
}

function judgeSquence(seq,start,end){
  if(start >= end){
      return true;
  }
  var i = start;
  while(i < end && seq[i] < seq[end]){
      i++;
  }
  for(var j = i;j < end;j++){
      if(seq[j] < seq[end]){
          return false;
      }
  }
  return judgeSquence(seq,start,i-1) && judgeSquence(seq,i,end-1);
}

// 有问题
function VerifySquenceOfBST(sequence) {
  // write code here
  if (!sequence.length) {
    return false;
  }
  return SubOfBST(sequence, 0, sequence.length - 1);
}

function SubOfBST(arr, startIndex, endIndex) {
  if (startIndex >= endIndex || (endIndex - startIndex <= 1 && arr[startIndex] < arr[endIndex])) {
    return true;
  }
  const root = arr[endIndex];
  let rightStart, rightEnd, leftStart, leftEnd;
  for(var i = startIndex; i <= endIndex; i++) {
    if (arr[i] > root) {
      rightEnd = i - 1;
      leftStart = i;
      leftEnd = endIndex - 1;
      rightStart = startIndex;
      break;
    }
  }
  for(var j = i; j <= endIndex; j++) {
    if (root > arr[j]) {
      return false;
    }
  }
  return SubOfBST(arr, rightStart, rightEnd) && SubOfBST(arr, leftStart, leftEnd);
}

// 是否是平衡二叉树

function IsBalanced_Solution(pRoot)
{
    // write code here
    if (!pRoot) {
        return true;
    }
    return (Math.abs(treeHeight(pRoot.left) - treeHeight(pRoot.right)) <= 1) 
    && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}

function treeHeight(root) {
    if(!root){
        return 0;
    }
    const left = treeHeight(root.left) + 1;
    const right = treeHeight(root.right) + 1;
    return Math.max(left, right);
}

// 判断一个二叉树是否是对称的，就是二叉树和他的镜像二叉树是否相等
function isSymmetrical(pRoot)
{
    if(!pRoot){return true}
    return judge(pRoot.left,pRoot.right)
    // write code here
}
function judge(left,right){
    if(right===null&&left===null){
        return true
    }
     if(right!=null&&left!=null){
        if(right.val===left.val){
            return judge(right.left,left.right)&&judge(right.right,left.left)
        }else{
            return false
        }
    }
     
    return false
}

// 给定一个二叉搜索树，找出第k小的节点

function KthNode(pRoot, k)
{
    // write code here
  let result = [];
  function ldr(pRoot) {
    if(pRoot !== null){
      ldr(pRoot.left);
      result.push(pRoot);
      ldr(pRoot.right);
    }
  }
  ldr(pRoot);
  if (k > 0 && k <= result.length) {
    return result[k - 1];
  }
  return null;
}

// 从上到下打印二叉树，一行为一个数组
function Print(pRoot)
{
    // write code here
  let result = [];
  let floor = [];
  if (pRoot) {
    floor.push(pRoot);
  }
  while(floor.length) {
    let len = floor.length;
    let arr = [];
    // 和上边的不一样，一层进行一次循环
    for(let i = 0; i < len; i++) {
      const node = floor.shift();
      arr.push(node.val);
      if (node.left) {
        floor.push(node.left);
      }
      if (node.right) {
        floor.push(node.right);
      }
    }
    result.push(arr);
  }
  return result;
}

// 二叉树中序遍历
var inorderTraversal = function(root) {
  let result = [];
  let inorder = node => {
      if (node) {
          inorder(node.left);
          result.push(node.val);
          inorder(node.right);
      }
  }
  inorder(root);
  return result;
};

// 判断两个二叉树是否完全相等
var isSameTree = function(p, q) {
  if (p === null && q === null) {
      return true;
  }
  if (p === null || q === null) {
      return false;
  }
  if (p.val !== q.val) {
      return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 判断一个数，是否是一个二叉树的路径和
var hasPathSum = function(root, sum) {
  if (!root) return false;
  if (root.left === null && root.right === null) {
      return root.val - sum === 0;
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};


// 二叉树的右视图，利用bfs
var rightSideView = function(root) {
  let floor = [];
  let result = [];
  let right = [];
  if (root) {
      floor.push(root);
  }
  while (floor.length) {
      let arr = [];
      let len = floor.length;
      for(let i = 0; i < len; i++) {
          const node = floor.shift();
          arr.push(node.val);
          if (node.left) {
              floor.push(node.left);
          }
          if (node.right) {
              floor.push(node.right);
          }
      }
      result.push(arr);
  }
  result.forEach(item => {
      let len = item.length;
      right.push(item[len - 1]);
  })
  return right;
};

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

// leetcode 108，将排序数组转换成二叉搜索树，同时满足是平衡二叉树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const mid = Math.floor((nums.length)/2)
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));
  return node;
};