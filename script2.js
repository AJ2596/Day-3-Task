// Question No-1

var xhr = new XMLHttpRequest();
var method = "GET";
var url = "https://restcountries.com/v3.1/all";

xhr.open(method, url);

xhr.onload = function () {
  if (xhr.status === 200) {
    var countries = JSON.parse(xhr.responseText);
    countries.forEach(function (country) {
      console.log("country flag: " + country.flag);
      console.log("Country Name: " + country.name.common);
      console.log("Region: " + country.region);
      console.log("Subregion: " + country.subregion);
      console.log("=============");
    });
  } else {
    console.log("Request failed with status code: " + xhr.status);
  }
};

xhr.send();
