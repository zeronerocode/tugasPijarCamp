const name = [
    "Abigail","Alexandra","Alison",
    "Amanda","Angela","Bella",
    "Caarol","Caroline","Carolyn",
    "Deirde","Diana","Elizabeth",
    "Ella","Faith","Olivia","Penelope"
]


function searchName(subStr,batas, callback){
    let data = [];
    for (let i=0; i < name.length ; i++){
        if (name[i].toLowerCase().includes(subStr)){
            data.push(name[i])
            
        }          
    }
    callback(data,batas);
}

function showName(data, batas){
    console.log(data.slice(0,batas))
}

searchName("an",2, showName)


