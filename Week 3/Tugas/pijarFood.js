const pijarFood = (harga, voucher, jarak, pajak) => {
  let diskon = 0;
  let ongkir = 5000;
  let pjk = 0;
  if (voucher.toUpperCase() === "PIJARFOOD5") {
    diskon = harga - (harga * 50) / 100;
    if (diskon >= 50000) {
      diskon = 50000;
    }
  } else if (voucher.toUpperCase() === "DITRAKTIRPIJAR") {
    if (harga >= 25000) {
      diskon = harga - (harga * 60) / 100;
      if (diskon >= 30000) {
        diskon = 30000;
      }
    }
  }

  for (i = 3; i <= jarak; i++) {
    ongkir += 3000;
  }

  if (pajak === true) {
    pjk = (harga * 5) / 100;
  }

  subTotal = harga - diskon + ongkir + pjk;
  console.log(`---Total Harga---
  Harga : ${harga}
  Potongan : ${diskon}
  Biaya Antar : ${ongkir}
  Pajak : ${pjk}
  SubTotal : ${subTotal}`

  );
  //   console.log(subTotal);
};

pijarFood(100000, "DITRAKTIRPIJAR", 5, true)

//pijarFood(100000, "PIJARFOOD5", 5, true)
