function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    data = [];
    if (nilaiAkhir < nilaiAwal){
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    }else if (dataArray.length < 5) {
        console.log("Data harus lebih dari 5");
    }else {
        dataArray.sort((a,b)=>(a-b))
        for(let i=0; i < dataArray.length; i++){
            if (dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir ){
                data.push(dataArray[i]);
            }else if (dataArray[i] <= nilaiAwal || dataArray[i] >= nilaiAkhir) {
                console.log('nilai tidak ditemukan')
            }
        }
        console.log(data);
    }

}

seleksiNilai(5 , 20,[2,25,4,14,17,30,8])
// seleksiNilai(15 , 3,[2,25,4,14,17,30,8])
// seleksiNilai(5,17,[2,25,4])
// seleksiNilai(5,17,[2,25,4,1,30,18])


