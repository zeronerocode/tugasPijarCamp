const divideAndSort = (angka) => {
  const convert = angka
    .toString()
    .split("0")
    .map((item) => {
      item = item.split("").sort().join("");
      return item;
    })
    .join("");

  console.log(convert);
};

divideAndSort(73160315061351);
