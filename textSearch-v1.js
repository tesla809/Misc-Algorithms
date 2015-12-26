function search(text, key){
    var searchLength = key.length;
    var result = '';
    for(var i = 0; i < text.length; i++){
        result = text.slice(i, searchLength + i);  
        if(result === key){
            return 'found';
        }
    }
    return 'not found';
}

search("Yo, what up. hello", "hell");