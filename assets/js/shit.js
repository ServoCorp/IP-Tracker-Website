const map = L.map('map').setView([51.5, -0.09], 13);
const apiURL = "http://ip-api.com/json/"

const apiKey = "?access_key=" + config.apiKey;
const searchTerm = document.getElementById("searchBar")

function setStats() {
    console.log("Loaded setstats()")
    //first we have to get the stats
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //set the stats
            document.getElementsByClassName("ipAddr")[0].innerHTML = data.query;
            document.getElementsByClassName("userLoc")[0].innerHTML = data.city + ", " + data.regionName + " | " + data.countryCode;
            document.getElementsByClassName("userTime")[0].innerHTML = data.timezone;
            document.getElementsByClassName("userIsp")[0].innerHTML = data.isp;
            document.getElementsByClassName("latLon")[0].innerHTML = data.lat + ", " + data.lon;
        })
        console.log("==================")
        console.log(lat())
}

let lat = () => {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            return "test"
        })
}



L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//After learning some more about javascript I've come back to redo this code.



function search() {
    console.log("Executed search()")
    const ipInput = searchTerm.value;


}