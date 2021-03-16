function getData() {
  console.log("Started getData");
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      console.log("Inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("Inside second then");
      console.log(data);
    });
}

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"harglry347485945","salary":"123","age":"23"}';
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
//body_always accepts string
// console.log("Before running getData")
// getData()
// console.log("After running getData")
postData();

// Syncchronous fetch using async/await


//Usual way
const jsonData = fetch("URL")
  .then((res) => res.json())
  .then((json) => console.log(json));

  //Using await

const jsonData = await fetch('URL').then(res=>res.json());

//using await shorter syntax

const jsonData = await (await fetch('URL')).json()