const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function getApi(url){

   fetch(url)  //fetch the url
   .then((res)=>{return res.json()})              //value change to json
   .then((data)=>{                                //var data as anonymous all the data put on it
        console.log(data)                         //output in console screen
        setTimeout(()=>{                          //settimeout for delay output
        const tableBody = document.getElementById("tableBody") //target tbody memtioned in htm file
        data.forEach((item)=>{                    //array of objects data nikalne ke liye for each with data 

            const newRow = tableBody.insertRow();  //insertrow in tbody

            newRow.insertCell().innerHTML = item.id
            newRow.insertCell().innerHTML = item.name
            newRow.insertCell().innerHTML = item.username
            newRow.insertCell().innerHTML = item.email
            newRow.insertCell().innerHTML = `${item.address.street}, ${item.address.city},${item.address.zipcode}`
        })
    }, 1000) //set
        
    })

    .catch((err)=>{console.log(err)})  //error msg
    
}

getApi(apiUrl)  //call function
