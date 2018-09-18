function Find(target, array)
{
    var bool = false;
    // write code here
    for(var i = 0;i < array.length;i++){
        var index = i;
        for(var j = 0;j < array[index].length;j++){
            if(target === array[index][j]){
                bool = true;
            }
        }
    }
    return bool;
}

//题目描述
//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix){
    // write code here
    var m=matrix.length;
    var n=matrix[0].length;
    if(m==0||n==0){
        return res
    }
    var res=[];
    var left=0,top=0,right=n-1,bottom=m-1;
    while(left<=right&&top<=bottom){
        for(var i=left;i<=right;i++){
            res.push(matrix[top][i])
        }
        for(var i=top+1;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        if(top!=bottom){
            for(var i=right-1;i>=left;i--){
                res.push(matrix[bottom][i])
            }
        }
        if(left!=right){
            for(var i=bottom-1;i>top;i--){
                res.push(matrix[i][left])
            }
        }
        left++;
        right--;
        top++;
        bottom--;   
    }
    return res;
}
