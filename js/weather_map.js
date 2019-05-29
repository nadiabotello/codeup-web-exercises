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
    "clear-day": "icon/SVG/Sun.svg",
    "clear-night": "icon/SVG/Moon-Full.svg",
    "rain": "icon/SVG/Cloud-Rain.svg",
    "snow": "icon/SVG/Cloud-Snow.svg",
    "sleet": "icon/SVG/Cloud-Hail.svg",
    "wind": "icon/SVG/Wind.svg",
    "fog": "icon/SVG/Cloud-Fog-Alt.svg",
    "cloudy": "icon/SVG/Cloud.svg",
    "partly-cloudy-day": "icon/SVG/Cloud-Sun.svg",
    "partly-cloudy-night": "icon/SVG/Cloud-Moon.svg"
};

function postsHtml(posts) {

    var html = '';
    var i;


    for (i = 0; i <= 2; i++) {
        html += '<div class="currentSA">';
        html += '<h4>' + posts.daily.data[i].temperatureHigh + "/";
        html += posts.daily.data[i].temperatureLow + '<img src="' + icons[posts.daily.data[i].icon] + '"></h4>';
        // html += '<img src="' + icons[posts.daily.data[i].icon] + '">';
        html += '<h6>Clouds: ' + posts.daily.data[i].cloudCover + '</h6>';
        html += '<h6>Humidity: ' + posts.daily.data[i].humidity + '</h6>';
        html += '<h6>Wind: ' + posts.daily.data[i].windGust + '</h6>';
        html += '<h6>Pressure: ' + posts.daily.data[i].pressure + '</h6>';
        html += '</div>';
        // html += '<br>';
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

}).done(function (data) {
    console.log(data);
    $('.currentSA').html(postsHtml(data));
});


mapboxgl.accessToken = mapboxKey;


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nadbot/cjv5l7j4a1k1l1fqof618dtg2',
    center: [-98.4916, 29.4252],
    zoom: 4
});

map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: false
    }).on('result', function (data) {
        marker.setLngLat(data.result.center);
        onDragEnd();
    })
);

var marker = new mapboxgl.Marker({
    draggable: true,
    icon: "#1034A6"
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);


function onDragEnd() {
    var lngLat = marker.getLngLat();

    $.get(corsUrl + darkSkyUrl + darkSkyAPIKey + "/" + lngLat.lat + "," + lngLat.lng + "/" + lang, {
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

    }).done(function (data) {
        console.log(data);
        $('.currentSA').html(postsHtml(data));
    });
}

marker.on('dragend', onDragEnd);