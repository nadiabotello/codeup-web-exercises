"use strict";

var darkSkyUrl = "https://api.darksky.net/forecast/";
var darkSkyAPIKey = darkSkyAPI;
var corsUrl = "https://cors-anywhere.herokuapp.com/";

var lat = 29.4241;
var lng = -98.4936;

var lang = '?lang=eo';

var seconds = 1556720525;

var dateObject = new Date(seconds * 1000);
console.log(dateObject.toString());

var icons = {
    "clear-day" : "icon/SVG/Sun.svg",
    "clear-night" : "icon/SVG/Moon-Full.svg",
    "rain" : "icon/SVG/Cloud-Rain.svg",
    "snow" : "icon/SVG/Cloud-Snow.svg",
    "sleet" : "icon/SVG/Cloud-Hail.svg",
    "wind" : "icon/SVG/Wind.svg",
    "fog" : "icon/SVG/Cloud-Fog-Alt.svg",
    "cloudy" : "icon/SVG/Cloud.svg",
    "partly-cloudy-day" : "icon/SVG/Cloud-Sun.svg",
    "partly-cloudy-night" : "icon/SVG/Cloud-Moon.svg"
    };

// $.get(corsUrl + darkSkyUrl + darkSkyAPIKey + "/" + lat + "," + lng + "/" + lang).done(function(data) {
//     console.log(data);
// });

function postsHtml(posts) {

    var html = '';
    var i;

    for (i = 0; i <= 2; i++) {
        html += '<div class="currentSA">';
        html += '<h1>' + posts.daily.data[i].temperatureHigh + "/";
        html += posts.daily.data[i].temperatureLow + '</h1>';
        html += '<img src="' + icons[posts.daily.data[i].icon] + '">';
        html += '<h5>Clouds: ' + posts.daily.data[i].cloudCover + '</h5>';
        html += '<h5>Humidity: ' + posts.daily.data[i].humidity + '</h5>';
        html += '<h5>Wind: ' + posts.daily.data[i].windGust + '</h5>';
        html += '<h5>Pressure: ' + posts.daily.data[i].pressure + '</h5>';
        html += '</div>';
    }


    return html;
}

$.get(corsUrl + darkSkyUrl + darkSkyAPIKey + "/" + lat + "," + lng + "/" + lang, {
    daily: {
        data: {
            temperatureHigh: "",
            temperatureLow: "",
            cloudCover: "",
            humidity: "",
            windGust: "",
            pressure: ""
        }
    }

}).done(function(data) {
    console.log(data);
    $('.currentSA').html(postsHtml(data));
});





mapboxgl.accessToken = mapboxKey;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 10,
    center: [-98.4916, 29.4252]
});