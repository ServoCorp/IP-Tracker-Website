var map = L.map('map').setView([51.5, -0.09], 13);
var baseurl = "http://api.ipstack.com/"
var apiKey = "?access_key=" + config.apiKey;
var span = document.getElementsByClassName("lower").innerText;
var apiURL = "http://ip-api.com/json/"

var cordX = getLat().then(lat => cordX = lat);
var cordY = getLong().then(lon => cordY = lon);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


// >.> sorry
 function search() {
    var letters = /^[\D\s]+$/; // Any non whitepsace character & Any non digit character Regex
    var input = document.getElementById('searchBar').value; // Search input

    
    if (input.match(letters)) // see if it matches regex
    {
        window.alert("Please only use IPV4. Example: 192.168.1.1");
    } 
    
    else if (input.length == 0) // see if empty
    {
        window.alert("Please input an IP Address.");
    } 
    
    else // success :)
    {
        fetch(baseurl + input + apiKey)
        .then(response => response.json())
        .then(json => console.log(json));

        console.log(input);
        console.log("hello");

    }
}

function showStats() {
    //var latLng = cordX + ", " + cordY;
    showIP();
    getLocation();
    getTimezone();
    getISP();
    //returnLat();
    //returnLong();
    test();
    //console.log(latLng)
    console.log(cordX  + cordY);
    //map.setView(latLng, 13, { animation: true })
}

function showIP() { //using another free third party api so it doesn't use all api calls when visitor loads page >.>
    data = new XMLHttpRequest();
    data.responseType = 'json';
    data.open("GET", 'http://ip-api.com/json/');
    data.onload = function() {
    var mySpan = document.getElementsByClassName("ipAddr")[0];
    var txt = document.createTextNode(data.response.query);
    mySpan.appendChild(txt);  
};
data.send();
}


function getLocation() {
    var data = new XMLHttpRequest();
    data.responseType = 'json';
    data.open("GET", 'http://ip-api.com/json/');
    data.onload = function() {
    var mySpan = document.getElementsByClassName("userLoc")[0];
    var txt = document.createTextNode(data.response.city + ", " + data.response.regionName);
    mySpan.appendChild(txt);
    //console.log(data.response)  
};
data.send();
}

function getTimezone() {
    var data = new XMLHttpRequest();
    data.responseType = 'json';
    data.open("GET", 'http://ip-api.com/json/');
    data.onload = function() {
    var mySpan = document.getElementsByClassName("userTime")[0];
    var txt = document.createTextNode(data.response.timezone);
    mySpan.appendChild(txt);
};
data.send();
}

function getISP() {
    var data = new XMLHttpRequest();
    data.responseType = 'json';
    data.open("GET", 'http://ip-api.com/json/');
    data.onload = function() {
    var mySpan = document.getElementsByClassName("userIsp")[0];
    var txt = document.createTextNode(data.response.isp);
    mySpan.appendChild(txt);
};
data.send();
}

//http://ip-api.com/json/


function returnInfo() { // working >.>
    var uri = "http://ip-api.com/json/"

    return fetch(uri)
    .then((response) => {
        return response.json().then((data) => {
            //console.log(data.lat);
            return data
        })
    })
    
};


async function test() {
//console.log(returnLatLong())

var mySpan = document.getElementsByClassName("latLon")[0];
var promise = await returnInfo();
res = JSON.stringify(promise.lat + ", " + promise.lon)
var resReplaced = res.replace(/\"/g, "")
var txt = document.createTextNode(resReplaced);
mySpan.appendChild(txt);

//console.log(getLat())
}

async function getLat() {
    var promise = await returnInfo();
    res = JSON.stringify(promise.lat)
    //console.log(promise.lat)
    return promise.lat;
}
async function getLong() {
    var promise = await returnInfo();
    res = JSON.stringify(promise.lon)
    return promise.lon;
}