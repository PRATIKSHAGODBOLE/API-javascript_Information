//https://home.openweathermap.org/api_keys = you can get api from this website
const apikey = "acce7d703d496288cebd2fe226027c32"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`); //add api key and we are adding city
    //wrong city name js code
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    
    var data = await response.json();

    // console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C"; /*math.random me main data temp ko add kr diya*/
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // update the image weather conditions
    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main === 'Clear'){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main === 'Rain'){
        weatherIcon.src="images/rain.png";
    } 
     else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src="images/drizzle.png";
    } 
    else if(data.weather[0].main === 'Mist'){
        weatherIcon.src="images/mist.png";
    }
   document.querySelector(".weather").style.display = "block"  // enter city and click and show
   document.querySelector(".error").style.display = "none";

 }
} 

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);//call the function
})