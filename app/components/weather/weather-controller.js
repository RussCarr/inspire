function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		var template = ''
		var kelvin = weather.main.temp
		var tempCovertedToFahernheit = ((kelvin * 9)/5-459.67)
		var currentTemp = Math.floor(tempCovertedToFahernheit);
		tempElem= document.getElementById('weather')
		template = `
		<div class="weather-bg">
		<h3>${weather.name}</h3>
		<h4>${currentTemp}</h4>
			</div>	
		`
		tempElem.innerHTML = template
		//What can you do with this weather object?
	})

}
