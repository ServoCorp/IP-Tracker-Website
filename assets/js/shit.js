var map = L.map('map').setView([51.505, -0.09], 13);
var baseurl = "http://api.ipstack.com/"
var apiKey = "?access_key=" + config.apiKey;

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
    showIP();
    getLocation();
    getTimezone();
    getISP();
    returnLatLong();
    test();
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

!async function returnLatLong() {
    var uri = "http://ip-api.com/json/"

    let data = fetch(uri)
    .then((response) => response.json())
    .then(data => {
        // do some stuff
        return data;
    })
    .catch(error => {
        return error;
    });

};

function test() {
 returnLatLong();
}
