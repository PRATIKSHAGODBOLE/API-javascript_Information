const apiurl = 'https://jsonplaceholder.typicode.com/users'

function getapidetails(url){
    fetch(url)
    .then((res)=> res.json())

    .then((data)=>{
        console.log(data)
        data.forEach((user)=>{
        setTimeout(function getapidetails(){

        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        var td4 = document.createElement('td')
        var td5 = document.createElement('td')

        td1.innerHTML = `${user.id}`
        td2.innerHTML = `${user.name}`
        td3.innerHTML = `${user.username}`
        td4.innerHTML = `${user.email}`
        td5.innerHTML = `${user.address.street}, ${user.address.city}`


        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)

        document.querySelector('.getOutput').appendChild(tr)
        }, 3000)

        })
        
    })
    .catch((err)=>{console.log(err)})
}

getapidetails(apiurl)