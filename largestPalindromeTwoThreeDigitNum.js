/* Find the largest palindrome made from the product of two 3-digit numbers*/

// this is linear, REALLY suboptimal.
// how to make logrithmic?

/*
Doesn't state which number. There is only one product between two numbers.
So the only thing that is fixed is the two numbers, and that they are 3 digits.
So they are variable. 
The point is to find the largest palindrome when two 3 digit numbers are multiplied.

*/
	// psuedo code
	// only two different ways to multiply
	// solutions placed into array
		// first try this.
			// square everything from 100 to 999
		// 2 dimensional array each going from 100 to 999
			// starting from 100 in outer array
			// and 100 in inner array, up to 999
				// is there a more efficient way?
					//look for tweaks
					// start in reverse from 999 down
					    // select the first palindrome then
	// 	solutions placed into array
		//solution defined as 
		// var x = j * i
		// pass through toArray function
		// pass through arrayRev funciton
		// if(x === xRev) - define palindrome
			// array.push(x);
	// sort from greatest to least
		// use .reduce() or .map(function(a,b){return a - b}?
	// return first element of array;


	// needed: 
	// so need toArray function
	// toArraRev function

function largestPalindrome(min, max){

    var squaredFactorProductObj = {
        factor1: [],
        factor2: [],
        palindromeArray: [],
        largestNumber: 0,
        largestFactor1: 0,
        largestFactor2 : 0
    };
    
    var multiplyAllFactorProductObj = {
        factor1: [],
        factor2: [],
        palindromeArray: [],
        largestNumber: 0,
        largestFactor1: 0,
        largestFactor2 : 0
    };

    //num to array
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
    
    // checks for palindrome
    function isPalindrome(num){
        var arrayNum = numToArray(num);
        var numRev = parseInt(arrayNum.reverse().join(""));
        
        if(num === numRev){
            return true;
        }else{
            return false;
        }
        
    }
    
    function lastElement (element){
        var elementIndex = element[element.length - 1];
        
        return elementIndex;
    }
    
    
    // check for palindrome for both methods, in every number
    // method 1: square everything from min to max
    // theory is that square might have greatest palindrome
    function squared(min, max){
        var square = 0;
        for(var i = min; i <= max; i++){
            square = i * i;
            if(isPalindrome(square) === true){
                squaredFactorProductObj.palindromeArray.push(square);
                squaredFactorProductObj.factor1.push(i);
                squaredFactorProductObj.factor2.push(i);
                
                squaredFactorProductObj.largestNumber = lastElement(squaredFactorProductObj.palindromeArray);
                squaredFactorProductObj.largestFactor1 = lastElement(squaredFactorProductObj.factor1);
                squaredFactorProductObj.largestFactor2 = lastElement(squaredFactorProductObj.factor2);
            }
        }
        return {
            largestNumber: squaredFactorProductObj.largestNumber,
            factor1 : squaredFactorProductObj.largestFactor1,
            factor2 : squaredFactorProductObj.largestFactor2
        };
    }
    
    // method 2: multiply all values between max and min by each other
    function multiplyAll(min, max){
        // 2 dimensional array to find answer
        for(var iRow1 = min; iRow1 <= max; iRow1++){
            for(var jRow2 = min; jRow2 <= max; jRow2++){
                var answer = iRow1 * jRow2;
                // console.log(iRow1 + " * " + jRow2 + " = " + answer);
                
                if(isPalindrome(answer) === true){
                    if(answer > squaredFactorProductObj.largestNumber){
                        multiplyAllFactorProductObj.palindromeArray.push(answer);
                        multiplyAllFactorProductObj.factor1.push(iRow1);
                        multiplyAllFactorProductObj.factor2.push(jRow2);
                        
                        multiplyAllFactorProductObj.largestNumber = lastElement(multiplyAllFactorProductObj.palindromeArray);
                        multiplyAllFactorProductObj.largestFactor1 = lastElement(multiplyAllFactorProductObj.factor1);
                        multiplyAllFactorProductObj.largestFactor2 = lastElement(multiplyAllFactorProductObj.factor2);
                    }
                }
                
            }
        }
        
        return {
            largestNumber: multiplyAllFactorProductObj.largestNumber,
            factor1 : multiplyAllFactorProductObj.largestFactor1,
            factor2 : multiplyAllFactorProductObj.largestFactor2
        };
    }
    
    squared(min,max);
    multiplyAll(min,max);
    
    if (multiplyAllFactorProductObj.largestNumber > squaredFactorProductObj.largestNumber){
        return {
            largestNumber: multiplyAllFactorProductObj.largestNumber,
            largestFactor1: multiplyAllFactorProductObj.largestFactor1,
            largestFactor2: multiplyAllFactorProductObj.largestFactor2
        };
    }  else {
            return {
                largestPalindrome: squaredFactorProductObj.largestNumber,
                largestFactor1: squaredFactorProductObj.largestFactor1,
                largestFactor2: squaredFactorProductObj.largestFactor2
            };
    }
}

var seedMin = 100;
var seedMax = 999;

console.log(largestPalindrome(seedMin,seedMax));



