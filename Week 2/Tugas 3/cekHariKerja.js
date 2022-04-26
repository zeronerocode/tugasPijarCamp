const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((cek) => {
    console.log(cek);
  })

  .catch((error) => {
    console.log(error);
  });
//then() digunakan apabila kondisi bernilai true atau resolve
//catch() digunakan apabila kondisi bernilai false atau reject

const handleDataPost = async () => {
  try {
    const result = await cekHariKerja("minggu");
    console.log("hello");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
handleDataPost();
