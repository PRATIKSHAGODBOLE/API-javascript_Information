

function display(data) {
    // create container div
    const containerDiv = document.createElement("div");
    containerDiv.style.backgroundColor = "lightblue";
    containerDiv.style.width = "600px";
    containerDiv.style.height = "350px";
    document.body.appendChild(containerDiv);
  
    // create heading
    const heading = document.createElement("h1");
    heading.textContent = "Fetching data using Covid API";
    heading.style.backgroundColor = "black";
    heading.style.color = "white";
    heading.style.borderRadius = "10px"
    heading.style.marginTop = "20px"
    containerDiv.appendChild(heading);
  
    // create main div
    const mainDiv = document.createElement("div");
    mainDiv.style.backgroundColor = "orange";
    mainDiv.style.width = "400px";
    mainDiv.style.margin = "auto";
    containerDiv.appendChild(mainDiv);
  
    var newh1 = document.createElement("h2");
    newh1.innerHTML = "Today Covid Cases";
    newh1.style.color = "black";
    //mainDiv.style.padding = "30px, 30px, 0 ,30px"
    mainDiv.style.paddingLeft = "70px"
    mainDiv.appendChild(newh1);
  
    var newp1 = document.createElement("p");
    newp1.innerHTML = "Country Name: " + data.Country;
    mainDiv.appendChild(newp1);
    newp1.style.color = "white";
  //--------------------date------------
    var currentDate = new Date(data.Date);
    var formattedDate = currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' });

    var newp2 = document.createElement("p");
    newp2.innerHTML = "Date: " + formattedDate;
    mainDiv.appendChild(newp2);
    newp2.style.color = "white";
    //----------------------date----------------
  
    var newp3 = document.createElement("p");
    newp3.innerHTML = "Total Cases: " + data.TotalConfirmed;
    mainDiv.appendChild(newp3);
    newp3.style.color = "white";
  
    var newp4 = document.createElement("p");
    newp4.innerHTML = "Total Deaths: " + data.TotalDeaths;
    mainDiv.appendChild(newp4);
    newp4.style.color = "white";
  
    var newp5 = document.createElement("p");
    newp5.innerHTML = "New Cases: " + data.NewConfirmed;
    mainDiv.appendChild(newp5);
    newp5.style.color = "white";
  
    var newp6 = document.createElement("p");
    newp6.innerHTML = "New Deaths: " + data.NewDeaths;
    mainDiv.appendChild(newp6);
    newp6.style.color = "white";
  }
  
  


  const covidUrl = "https://api.covid19api.com/summary"

async function getDataForIndia() {
  try {
    let data = await fetch(covidUrl);
    let result = await data.json();

    console.log(result)

    let indiaData = result.Countries.find(country => country.CountryCode === "IN");
    if (indiaData) {
      display(indiaData);  //03 line
    } else {
      console.error("India data not found.");
    }
  } catch (error) {
    console.error(error);
  }
}

getDataForIndia();

  