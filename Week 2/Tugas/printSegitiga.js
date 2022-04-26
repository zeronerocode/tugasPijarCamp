
const printSegitiga = 5
if(typeof(printSegitiga) === "number"){

    hasil = "";
    for (let i = printSegitiga; i >= 0 ; i--){
        for (let j = 1 ; j<=i; j++){
            hasil += j ;
        }
        hasil += '\n'
}
console.log(hasil)
}else{
    console.log('bukan angka')
}