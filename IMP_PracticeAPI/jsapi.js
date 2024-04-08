let apikey = 'be58e108fab3d11eda0130ab7f9e1968a9cc15d3cb7e99b5c83473f5';
const apiurl = `https://api.ipdata.co?api-key=${apikey}`


let btn = document.querySelector('#myButton')
let map = document.querySelector('#map')

btn.addEventListener("click", function() {
    
    getapidetails(apiurl); 
    map.style.display = 'block'; 

  });
  


// Latitude
// Longitude
// City
// Region
// Time Zone

function getapidetails(url){

    fetch(url)
    .then((res)=> { return res.json();})
        .then((data)=>{
            console.log('Data', data);
            var ol = document.createElement('ol')
            var li1 = document.createElement('li')
            var li2 = document.createElement('li')
            var li3 = document.createElement('li')
            var li4 = document.createElement('li')
            var li5 = document.createElement('li')


            li1.innerHTML = `Latitude - ${data.latitude}`
            li2.innerHTML = `Longitude - ${data.longitude}`
            li3.innerHTML = ` City - ${data.city}`
            li4.innerHTML = ` Postal - ${data.postal}`
            li5.innerHTML = ` Region - ${data.region}`

            ol.appendChild(li1)
            ol.appendChild(li2)
            ol.appendChild(li3)
            ol.appendChild(li4)
            ol.appendChild(li5)

            document.querySelector('.container').appendChild(ol)



        })

        .catch((err)=>{console.log(err)})
}

