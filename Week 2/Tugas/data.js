let data = {
    id : 1,
    name : "Lanne Graham",
    username: "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulas Light",
        siute : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3974",
    },
    phone : "1-770-736-8031x56442",
    website : "hildegard.com"
}


data = {
        ...data,
        name : "Akmal Fadhilah",
        email : "zeronerocode@gmail.com",
        hobby : "ngegame",
        name : "Budi"
    }
//console.log(data)
//const {street, city} = data.address
const city = data.address.city
console.log(city)

