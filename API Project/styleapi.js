const covidURL = "https://data.covid19india.org/v4/min/data.min.json";


function display(confirme, deceased, others, recovered, tested, vaccinated1,vaccinated2)
//(date, TotalConfirmed, TotalDeaths, NewConfirmed, NewDeaths) 
{
    // var cDate = new Date(date);
    var newDiv = document.createElement('div');
    newDiv.id = "main";

    var newh1 = document.createElement('h1');
    var newh2 = document.createElement('h1');
    var newh3 = document.createElement('h1');
    var newh4 = document.createElement('h1');
    var newh5 = document.createElement('h1');
    var newh6 = document.createElement('h1');
    var newh7 = document.createElement('h1');
    var newh8 = document.createElement('h1');

    // newh1.innerHTML = "Date: " + cDate.toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' });
    newh2.innerHTML = "Confirmed : " + confirme;
    newh3.innerHTML = "Deceased : " + deceased;
    newh4.innerHTML = "Others : " + others;
    newh5.innerHTML = "Recovered : " + recovered;
    newh6.innerHTML = "Tested  : " + tested;
    newh7.innerHTML = "Vaccinated1 : " + vaccinated1;
    newh8.innerHTML = "Vaccinated2  : " + vaccinated2;


    document.getElementById('covidData').appendChild(newDiv);
    newDiv.appendChild(newh1);
    newDiv.appendChild(newh2);
    newDiv.appendChild(newh3);
    newDiv.appendChild(newh4);
    newDiv.appendChild(newh5);
    newDiv.appendChild(newh6);
    newDiv.appendChild(newh7);
    newDiv.appendChild(newh8);

}

async function getDataFromAPI(url) {
    let data = await fetch(url);
    let result = await data.json();

    console.log(result.MH.total);
    display(
        result.MH.total.confirmed, 
        result.MH.total.deceased, 
        result.MH.total.other, 
        result.MH.total.recovered, 
        result.MH.total.tested, 
        result.MH.total.vaccinated1,
        result.MH.total.vaccinated2);
}

getDataFromAPI(covidURL);
