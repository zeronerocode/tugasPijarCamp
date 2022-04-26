function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    if(str === newString){
        console.log(str+" adalah palindrome")
    }else{
        console.log(str+" bukan palindrome")
    }
}

reverseString('buku');
