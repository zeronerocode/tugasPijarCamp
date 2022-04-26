const bilanganPrima = (angka) => {
  let pembagi = 0;
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= angka; i++) {
      if (angka % i == 0) {
        pembagi++;
      }
    }
    if (pembagi == 2) {
      resolve(angka);
    } else {
      reject(new Error("bukan bilangan prima"));
    }
  });
};

// bilanganPrima(7)
// .then((angka)=>{
//     console.log(angka+" adalah bilangan prima");
// })
// .catch((error)=>{
//     console.log(error);
// })

const isMusafir = (jarak) => {
  return new Promise((resolve, reject) => {
    if (jarak >= 80) {
      resolve(jarak);
    } else {
      reject(new Error("Anda Bukan Musafir"));
    }
  });
};

isMusafir(70)
  .then((jarak) => {
    console.log(`Anda adalah Musafir ${jarak} lebih dari 80 KM`);
  })
  .catch((error) => {
    console.log(error);
  });
