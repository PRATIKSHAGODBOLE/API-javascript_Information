const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function display(url){
  
let res = await fetch(url)
let data = await res.json()
console.log(data)

let tableBody = document.getElementById("tableBody")
data.forEach((item) =>{

    const newRow = tableBody.insertRow();

    newRow.insertCell().innerHTML = item.id;
              newRow.insertCell().innerHTML = item.name;
              newRow.insertCell().innerHTML = item.username;
              newRow.insertCell().innerHTML = item.email;
              newRow.insertCell().innerHTML = `${item.address.street}, ${item.address.city}, ${item.address.zipcode}`;
})

return data;

}

display(apiUrl)