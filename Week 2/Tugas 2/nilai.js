function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    let panjangArray = dataArray.length
    if (nilaiAkhir < nilaiAwal){
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }else if (panjangArray < 5) {
        console.log("Data harus lebih dari 5")
    }else {
        dataArray.sort((a,b)=>(a-b))
        data = dataArray.filter(check)
        if (data.length === 0){
            console.log("Data tidak ditemukan")
        }else{
            console.log(data); 
        }
               
    }
    function check(dataArray){
        if(dataArray >= nilaiAwal && dataArray <= nilaiAkhir){
            return dataArray
        }
    }

}

seleksiNilai(5 , 20,[2,25,4,14,17,30,8])
 //seleksiNilai(15 , 3,[2,25,4,14,17,30,8])
 //seleksiNilai(5,17,[2,25,4])
//seleksiNilai(5,17,[2,25,4,1,30,18])
