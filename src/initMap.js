

function initMap() {
    // initialize the map
    let mymap = L.map('map').setView([37.81333290335504, -122.24659186840944], 50);

    // load a tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamViYnkiLCJhIjoiY2t3N2Z3ZDVqYnJwNTJucXBleWNyeWNqYyJ9.GI1Hmt8KZtzS9jNH2z6h2A'
}).addTo(mymap);

    // add a marker
    let marker = L.marker([37.81333290335504, -122.24659186840944]).addTo(mymap);

    // add a popup
    const popupText = "<b>Samurai Sushi Boat</b><br>3336 Grand Ave<br>Oakland, CA 94610<br> \
    <a href='https://tinyurl.com/samuraisushiboat' target='_blank' rel='noopener noreferrer'>View More</a>";
    marker.bindPopup(popupText).openPopup();
}


export default initMap;