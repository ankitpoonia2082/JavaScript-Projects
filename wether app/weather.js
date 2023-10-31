// Getting elements by Id ****************
let city = document.getElementById('searchbox');
let cityname = document.getElementById('city');
let searchbtn = document.getElementById('searchbtn');
let loc = city.value;


// getting display area elements**********
let temp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let windspeed = document.getElementById('wind');


// Api Key and Url ***********************
const api = 'https://api.tomorrow.io/v4/weather/realtime?location=Hisar&apikey=gxbdJR5U33CyXqrpZxnknIfzPi6Vym1b';

// Default weather Hisar
function defaultwether() {

    const weather = fetch(api);

    weather.then(res => {
        return res.json();
    })
        .then((data) => {
            console.log(data)

            temp.innerHTML = data.data.values.temperature + "°C";
            cityname.innerHTML = "HISAR"
            humidity.innerHTML = data.data.values.humidity + "%";
            windspeed.innerHTML = data.data.values.wind + "%";

        })

}
defaultwether()

// Async Function*************************
async function weathersearch() {
    loc = city.value
    console.log(loc)
    if (loc === "") {
        alert("Enter City name to get weather")
    }
    else {
        const api = `https://api.tomorrow.io/v4/weather/realtime?location=${loc}&apikey=gxbdJR5U33CyXqrpZxnknIfzPi6Vym1b`;
        const response = await fetch(api)
        // + `?location=${loc}`
        const data = await response.json();
        console.log(data);
        if (data.data.values) {
            temp.innerHTML = data.data.values.temperature + "°C"
            cityname.innerHTML = loc.toUpperCase()
            humidity.innerHTML = data.data.values.humidity + "%";
            windspeed.innerHTML = data.data.values.wind + "%";

        }

    }
}

searchbtn.addEventListener('click', weathersearch);