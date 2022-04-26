const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        console.log(user.name);
      });
    })
    .catch((err) => console.log(err));
};

getData();
