const API_KEY = `Z9K635YUWPUZRES7FZ5BEL2MT`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    
    weather.innerHTML = `<h2> Loading... <h2>`
    
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
           <img src="D:javascript/weather-app/images/clouds.png" >
        </div>
        
        <div>
        <h2>${data.currentConditions.temp} °F</h2>
        <h6> ${data.currentConditions.conditions} </h6>
        </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)