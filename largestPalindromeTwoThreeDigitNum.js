/* Find the largest palindrome made from the product of two 3-digit numbers*/

// this is linear, REALLY suboptimal.
// how to make logrithmic time?

/*
Doesn't state which number. There is only one product between two numbers.
So the only thing that is fixed is the two numbers, and that they are 3 digits.
So they are variable. 
The point is to find the largest palindrome when two 3 digit numbers are multiplied.
*/

function largestPalindrome(min, max){
    //answer object
    var answerObj = {
        factor1: [],
        factor2: [],
        palindromeArray: [],
        largestNumber: 0,
        largestFactor1: 0,
        largestFactor2 : 0
    };
    
    //number to array in order to reverse
    function numToArray(num){
        var array = [];
        var numToString = num.toString();
        for(var i = 0; i < numToString.length; i++){
		    array.push(numToString.charAt(i));
	    }
	    
	    for(var j = 0; j < numToString.length; j++){
	        array[j] = parseInt(array[j]);
	    }
	    return array;
    }
    
    //checks for palindrome
    function isPalindrome(num){
        var arrayNum = numToArray(num);
        var numRev = parseInt(arrayNum.reverse().join(""));
        
        // returns boolean response
        if (num === numRev){
            return true;
        } else {
            return false;
        }
        
    }
    
    //if working backwards, the first hit should be it.
    for(var i = max; i >= min; i--){
        for(var j = max; j >=min; j--){
            var answer = i * j;
            if(isPalindrome(answer) === true){
                answerObj.palindromeArray.push(answer);
                answerObj.factor1.push(i);
                answerObj.factor2.push(j);
                
                // compares only two elements. Keeps set to two numbers
                if(answerObj.palindromeArray[0] > answerObj.palindromeArray[1]){
                	// elminates second number if not bigger than first
                    answerObj.palindromeArray.pop();
                    answerObj.factor1.pop();
                    answerObj.factor2.pop();
                } else if (answerObj.palindromeArray[0] < answerObj.palindromeArray[1]){
                	// eliminates first number if not bigger than second
                    answerObj.palindromeArray.shift();
                    answerObj.factor1.shift();
                    answerObj.factor2.shift();
                } else{
                	// keeps on sequence
                    continue;
                }
                
                answerObj.largestNumber = answerObj.palindromeArray[0];
                answerObj.largestFactor1 = answerObj.factor1[0];
                answerObj.largestFactor2 = answerObj.factor2[0];
                }
        }
    }
    
    return{
        largestPalindrome : answerObj.largestNumber,
        largestFactor1 : answerObj.largestFactor1,
        largestFactor2 : answerObj.largestFactor2
    };
}

var min = 100;
var max = 999;
problemAnswer = largestPalindrome(min, max);
console.log(problemAnswer);

