var map = L.map('map').setView([51.505, -0.09], 13);

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
    var baseurl = "http://api.ipstack.com/"
    var apiKey = "?access_key=" + config.apiKey;
    

    if (input.match(letters)) // see if it matches regex
    {
        window.alert("Please only use IPV4. Example: 192.168.1.1");
    } 
    
    else if (input.length == 0) // see if empty
    {
        window.alert("Please input an IP Address.")
    } 
    
    else // success :)
    {
        fetch(baseurl + input + apiKey)
        .then(response => response.json())
        .then(json => console.log(json))

        console.log(json)
        console.log(input);
        console.log("hello");

    }


}