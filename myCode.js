var height = 2.3;
var arr = [5,6,1,3,2,9,8];

var flag = true;//��ʶ�Ƿ���Կ�ʼ����
var sum = 0;

for(var i=0;i<arr.length;i++){
		//����
		if(arr[i]>height && flag==true){
				sum++;
				flag = false;
		}
		//���ñ�ʶλ
		if( arr[i] <= height && flag==false){
				flag = true;
		}
}

console.log('island number:',sum);
