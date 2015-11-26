/* sum of all numbers divisble by 3 and 5 till 1000*/
// now solve in Python

function sumAll(num){
	var sumNums = 0;

	for(var i = 0; i < num; i++){
		if(i % 3 === 0 && i % 5 === 0){
			sumNums = sumNums + i;
		}
	}

	return sumNums;
}

var requiredNum = 1000;

console.log(sumAll(requiredNum));