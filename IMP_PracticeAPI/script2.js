const covidapi = 'https://data.covid19india.org/v4/min/data.min.json';

function display(confirmed, deceased, other, recovered, tested, vaccinated1, vaccinated2){

    var ul = document.createElement('ul')
    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    var li3 = document.createElement('li')
    var li4 = document.createElement('li')
    var li5 = document.createElement('li')
    var li6 = document.createElement('li')
    var li7 = document.createElement('li')

    li1.innerHTML = "Confirmed :" + confirmed;
    li2.innerHTML = "Deceased :" + deceased;
    li3.innerHTML = "Other :" + other;
    li4.innerHTML = "Recovered :" + recovered;
    li5.innerHTML = "Tested :" + tested;
    li6.innerHTML = "Vaccine 1 Dose :" + vaccinated1;
    li7.innerHTML = "Vaccine 2 Doses :" + vaccinated2;
   
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);

    document.querySelector('.List').appendChild(ul)

}

async function getapidetails(url){
    let res = await fetch(url)
    let data = await res.json()

    console.log(data.MH.total)
    display(
       data.MH.total.confirmed,
       data.MH.total.deceased,
       data.MH.total.other,
       data.MH.total.recovered,
       data.MH.total.tested,
       data.MH.total.vaccinated1,
       data.MH.total.vaccinated2
    )
}
getapidetails(covidapi)
