function display(data){
    console.log(data)
    data.forEach(user => {
       var tr = document.createElement("tr")
       var td1 = document.createElement("td")
       var td2 = document.createElement("td")
       var td3 = document.createElement("td")
       var td4 = document.createElement("td")
 
       td1.innerHTML= `${user.id}`
       td2.innerHTML= `${user.name}`
       td3.innerHTML= `${user.username}`
       td4.innerHTML= `${user.email}`
 
       tr.appendChild(td1)
       tr.appendChild(td2)
       tr.appendChild(td3)
       tr.appendChild(td4)
 
 document.querySelector('tbody').appendChild(tr)
           });
    
 }
 
 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
     return res.json();
  })
  .then(data => {
     display(data)
 
  })
  .catch(error => console.log(error));