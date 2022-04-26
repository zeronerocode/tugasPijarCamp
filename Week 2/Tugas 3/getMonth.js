const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = true
        let month = ['January','February','Maret','April','May','Juni','Juli','Agustus',
                       'September','Oktober','November','Desember' ]
        if (!error){
            callback (null,month);
        }else {
            callback (new Error('Sorry Data not Found'),[])
        }
    },4000)
}

getMonth((error,data)=>{
    if(!error){
        data.map((item)=>{
            console.log(item);
        })
    }else{
        console.log(error);
    }

})