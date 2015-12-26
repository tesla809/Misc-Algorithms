/* 
Write a program that can take any year number (ie. 2015), 
which you can refer to as YEAR. 
The program should find and print the next 20 leap years 
after YEAR.
*/

function findLeapYears(year, numOfLeapYears){
    var leapYearArray = [];
    var answer = "";
    // find leap years
    function leapYear(year){
        if (year % 4 === 0 && year % 100 === 0){
            if (year % 400 === 0){
                return year;
            } else {
                return 0;
            }
        } else if (year % 4 === 0){
            return year;
        } else {
            return 0;
        }
    }
        
    // find 20 leap years after var year;
    for(var i = year; leapYearArray.length <= numOfLeapYears; i++){
        if (leapYear(i) === 0){
            continue;
        } else {
            leapYearArray.push(leapYear(i));
        }
    }
    
    // order leap years
    function orderLeaps(leapYearArray){
        var stringOutput = "\n";
        var numberList = leapYearArray.length;
        for(var i = 1; i < numberList; i++){
            stringOutput += "\n"+i.toString() + ":  " + leapYearArray[i-1].toString();
        }

        return stringOutput; 
    }
    answer = orderLeaps(leapYearArray);
    return answer;
    
}
var year = 2015; 
var numOfLeaps = 50;
var problemAnswer = findLeapYears(year, numOfLeaps);

console.log(problemAnswer);


