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

// 冒泡排序算法2
// 时间复杂度，最好O(n), 最坏O(n²), 平均O(n²)
function bubbleSort1(arr) {
	const len = arr.length;
	let exchange, tem;
	for(let i = 0;i < len;i++) {
		exchange = false;
		for(let j = 0;j < len - i -1;j++) {
			if (arr[j] > arr[j+1]) {
				tem = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = tem;
				exchange = true;
			}
		}
		if (!exchange) {
			return arr;
		}
	}
	return arr;
}

// 选择排序，时间复杂度稳定为O(n²),适用于小数量
function chooseSort(arr){
	const len = arr.length;
	let minNum, tem;
	for(let i = 0;i < len - 1;i++) {
		minNum = i;
		for(let j = i + 1;j < len;j++) {
			if(arr[i] > arr[j]) {
				minNum = j;
			}
		}
		tem = arr[i];
		arr[i] = arr[minNum];
		arr[minNum] = tem;
	}
	return arr;
}

// 插入排序
// 类似打扑克牌的抓牌理牌的顺序
function insertSort(arr) {
	const len = arr.length;
	let preIndex, current;
	for (let i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--; 
		}
		arr[preIndex + 1] = current;
	}
	return arr;
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