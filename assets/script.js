var apiKey = "b5c126ca4e5f775ba98ac95c438b0237";
var userFormE1 = $("citySearch");

var updateCurrentWeather = function(response) {
    

    var dateEl = $("#currentDate");
    var tempEl = $("#currentTemp");
    var humidityEl = $("#currentHumidity");
    var windSpeedEl = $("#currentWindSpeed");
    var iconEl = $("#currentIcon");

    var currentTemp = response.main.temp;
    var currentHumidity = response.main.humidity;
    var currentWindSpeed = response.wind.speed;
    var currentTimeCodeUnix = response.dt;
    var currentDate = new Date(currentTimeCodeUnix*1000).toLocaleDateString("en-US");
    var currentIcon = response.weather[0].icon;
    
    dateEl.text(currentDate);
    tempEl.text(currentTemp);
    humidityEl.text(currentHumidity);
    windSpeedEl.text(currentWindSpeed);
    iconEl.attr("src", "https://openweathermap.org/img/w/" + currentIcon + ".png");

    var currentTimeCodeUnix = response.dt;
    var s = new Date(currentTimeCodeUnix*1000).toLocaleDateString("en-US")

    var locationArray = {
        lat: response.coord.lat,
        long: response.coord.lon
    }
    
    return locationArray;
  

}; 