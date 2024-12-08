const apiKey ="a374f90b04ee202ed002f28d4018bcf8";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox= document.getElementById('inputfield');
const searchBtn= document.getElementById('inputBtn');
const weatherIcon= document.querySelector(".weather-icon");
const showWeather= document.querySelector(".weather");


async function checkWeather(city) {
    const response= await fetch(apiUrl+ city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        showWeather.style.display= "none";
    }
    else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML = data.wind.speed+ "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src= "images/clouds.png";
        }
    
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src= "images/clears.png";
        }
    
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src= "images/rain.png";
        }
    
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "images/drizzle.png";
        }
    
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src= "images/mist.png";
        }

        document.querySelector(".error").style.display= "none";
    
        showWeather.style.display= "block";
    }
    }
   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})






