var arr = [5,6,1,3,2,9,8];

var maxSum = 0;
var flag = true;//��ʶ�Ƿ���Կ�ʼ����
var sum = 0;

//ѭ����ȡ�߶�
for(var i=0;i<arr.length;i++){
	//���ó�ʼֵ
	flag = true;//��ʶ�Ƿ���Կ�ʼ����
	sum = 0;

	for(var j=0;j<arr.length;j++){
		//����
		if(arr[j]>arr[i] && flag==true){
				sum++;
				flag = false;
		}
		//���ñ�ʶλ
		if( arr[j] <= arr[i] && flag==false){
				flag = true;
		}
	}

	if(sum>maxSum){
		maxSum = sum;
	}
}

console.log('island number:',maxSum);
