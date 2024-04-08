const apiurl = ('https://jsonplaceholder.typicode.com/todos')

function getapidetails(url){
    fetch(url)
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data)
        data.forEach((todo)=>{
            var tr = document.createElement("tr")
            // var td1 = document.createElement("td")
            var td2 = document.createElement("td")
            var td3 = document.createElement("td")
            var td4 = document.createElement("td")
            
            // td1.innerHTML = `${todo.userId}`
            td2.innerHTML = `${todo.id}`
            td3.innerHTML = `${todo.title}`
            td4.innerHTML = `${todo.completed}`

            // tr.appendChild(td1)            
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)

          document.querySelector(".getOutput").appendChild(tr)

        })

    })
    .catch((err)=>console.log(err))
}

getapidetails(apiurl)