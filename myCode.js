//��ȡ��ȡ�ļ�������
var fileNameArr = process.argv.splice(2);
var fileName = fileNameArr[0];
//��ȡ�ļ�����
var rf=require("fs");  
var data=rf.readFileSync(fileName,"utf-8");  

//���з�λ��
var index = data.indexOf('\n');

//���鳤��
var arrLength = "";
for(var i=0;i<index;i++){
	arrLength+=data[i];
}
arrLength = parseInt(arrLength);

//��ȡ�ļ�����
var fileArr = new Array();
var num = "";
for(var i=index+1;i<data.length;i++){
	if(data[i]!=" " && data[i]!="\n"){
		num+=data[i];
	}else{
			if(num!=""){
				fileArr.push(parseInt(num));
				num = "";
			}
	}
}


//��ȡ�������߶Ȳ�
//var minH = Math.min.apply(null, fileArr);
//var maxH = Math.max.apply(null, fileArr);
var minH = 0;
var maxH;
for(var i=0;i<fileArr.length;i++){
	if(fileArr[i]>fileArr[i+1]){
			var t = fileArr[i];
			fileArr[i] = fileArr[i+1];
			fileArr[i+1] = t;
	}
}
maxH = fileArr[fileArr.length-1];


//��ȡ�������
function max(arr){
	var maxSum = 0;
	var flag = true;//��ʶ�Ƿ���Կ�ʼ����
	var sum = 0;
	
	//ѭ����ȡ�߶�
	for(var i=minH;i<=maxH;i++){
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
	
	return maxSum;
}

//��ӡ���
console.log(max(fileArr));


