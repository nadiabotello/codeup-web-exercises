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


$.get(corsUrl + darkSkyUrl + darkSkyAPIKey + "/" + lat + "," + lng + "/" + lang).done(function(data) {
    console.log(data);

});

