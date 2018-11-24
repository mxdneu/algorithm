// 冒泡排序算法

function bubblesort(arr){
	let len = arr.length,
	i, j, tmp, exchange;

	var result = arr.slice();
	for(i = 0;i < len;i++){
		exchange = 0;
		for(j = len - 1;j > i; j--){
			if(result[j] < result[i]){
				tmp = result[j];
				result[j] = result[i];
				result[i] = tmp;
				exchange = 1;
			}
		}
		if(exchange !== 1){
			return result;
		}
	}
	return result;
}
// 快速排序
function quickssort(arr){
	//var len = arr.length;
	if(arr.length <= 1){return arr;}
	var index = Math.floor(arr.length/2);
	var middle = arr.splice(index,1)[0];
	var left = [];
	var right = [];
	for(let i = 0;i < arr.length;i++){
		if(middle > arr[i]){
			left.push(arr[i]);
		}else {
			right.push(arr[i]);
		}
	}
	return quickssort(left).concat([middle],quickssort(right));
}