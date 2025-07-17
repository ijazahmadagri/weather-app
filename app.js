const API_KEY = `Z9K635YUWPUZRES7FZ5BEL2MT`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const card = document.querySelector(".card")
const template = document.querySelector("#weather-template")
const container = document.querySelector(".card-container")
const cardcontainer = document.querySelector(".card-container")

//console.log(template.querySelector('#condition_temperature').innerText)
//template.querySelector('#condition_image').setAttribute('src', './images/clouds.png')


const getWeather = async (city) => {
    
    //template1.innerHTML = `<h2> Loading... <h2>`
    
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

    template.querySelector('#condition_image').setAttribute('src', `./images/${data.currentConditions.icon}.png`)
    template.querySelector('#condition_temperature').innerText = `${data.currentConditions.temp} °F`;
    template.querySelector('#current_condition').innerText = `${data.currentConditions.conditions}`;
    card.querySelector('.city').innerText = `${data.address} `;
    card.querySelector('.state').innerText = `${data.resolvedAddress} `;
    card.querySelector('.card-img').setAttribute('src', `./images/${data.currentConditions.icon}.png`)
    card.querySelector('.temp-card').innerText = `${data.currentConditions.temp} °F`;
    card.querySelector('.desc2').innerText = `${data.days[0].feelslike}°F `;
    card.classList.remove('hide')



}

   
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
 