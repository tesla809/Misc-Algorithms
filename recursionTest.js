function iterative(number){
    for (var i = 0; i <= 20; i++){
        console.log(i);
    }
}

function whileIterative(number){
    var i = 0;
    while(i <= number){
        console.log(i);
        i++;
    }
}

function recursive(number){
    if(number >= 0){
        console.log(number);
        return recursive(number-1);
    } else{
        return number + 1;
    }
}

iterative(20);
whileIterative(20);

console.log('recursive:');
recursive(20);