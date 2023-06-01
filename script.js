var startIcon = L.icon({
    iconUrl: 'style-image/s1icon.png',

    iconSize:     [28, 28], // size of the icon
    iconAnchor:   [14, 14], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});
var midIcon = L.icon({
    iconUrl: 'style-image/s2icon.png',

    iconSize:     [36, 28], // size of the icon
    iconAnchor:   [18, 14], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});
var endIcon = L.icon({
    iconUrl: 'style-image/s3icon.png',

    iconSize:     [33, 28], // size of the icon
    iconAnchor:   [16, 14], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});


var map = L.map('map').setView([25.082565, 121.547279], 16);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



var l11 = L.polyline(l1_1, { color: "rgb(0,0,220)" }).addTo(map);
var l12 = L.polyline(l1_2, { color: "rgb(0,0,220)" }).addTo(map);
var l13 = L.polyline(l1_3, { color: "rgb(0,0,220)" }).addTo(map);

var l21 = L.polyline(l2_1, { color: "rgb(0,0,220)" }).addTo(map);
var l31 = L.polyline(l3_1, { color: "rgb(0,0,220)" }).addTo(map);
var l41 = L.polyline(l4_1, { color: "rgb(0,0,220)" }).addTo(map);

// --icon--頭-----
var l11_0 = L.marker( l1_1[0] ,{icon: startIcon}).addTo(map);

var l21_0 = L.marker( l2_1[0],{icon: startIcon}).addTo(map);
var l31_0 = L.marker( l3_1[0],{icon: startIcon}).addTo(map);
var l41_0 = L.marker( l4_1[0],{icon: startIcon}).addTo(map);

// --icon--中-----

var l12_0 = L.marker( l1_2[0],{icon: midIcon}).addTo(map);

var l13_0 = L.marker( l1_3[0],{icon: midIcon}).addTo(map);

// --icon--尾-----
var l11_9 = L.marker( l1_1[l1_1.length-1] ,{icon: endIcon}).addTo(map);
var l12_0 = L.marker( l1_2[0],{icon: startIcon}).addTo(map);
var l13_9 = L.marker( l1_3[l1_3.length-1],{icon: endIcon}).addTo(map);

var l21_9 = L.marker( l2_1[l2_1.length-1],{icon: endIcon}).addTo(map);
var l31_9 = L.marker( l3_1[l3_1.length-1],{icon: endIcon}).addTo(map);
var l41_9 = L.marker( l4_1[l4_1.length-1],{icon: endIcon}).addTo(map);













