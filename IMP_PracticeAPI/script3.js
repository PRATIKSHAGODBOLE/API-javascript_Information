const apiurl = "https://api.postalpincode.in/pincode"

async function getapidetails(url){
    let res = await fetch(url)
    let data = await res.json()
    return data;

}
getapidetails(apiurl).then((data)=>{
    console.log(data);
    })

