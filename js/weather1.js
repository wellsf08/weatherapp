// api.openweathermap.org/data/2.5/weather?zip=53590,US&appid=bf12409cb9c22bf3ebf6fc88ae067747  

//api key: bf12409cb9c22bf3ebf6fc88ae067747  

//Zip Code api call: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

$("#search_btn").click(function() {
	
	var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey = 'bf12409cb9c22bf3ebf6fc88ae067747';
	var zipInput = $('#zipCode').val() + ',us';
	var units = '&units=imperial';
	var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + units;
	
	console.log(apiURL)
	
	$.get(apiURL, function(responseFromOW){
		console.log(responseFromOW);
		console.log("temp:", responseFromOW.main.temp);
		console.log("city", responseFromOW.name);
		console.log("condition", responseFromOW.weather[0].main);
		
		var temp = responseFromOW.main.temp;
		var city = responseFromOW.name;
		var condition = responseFromOW.weather[0].main;
		
		$.ajax({
        url: apiURL,
        success: function(weather) {
        console.log(weather);
        $("#icon").html('<h2>' + city + '</h2>')
			if (condition == "Clouds"){
				document.getElementById('icon').innerHTML = "<img src='icon_cloudy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('cloudy.jpg')";
			} else if (condition == "Clear"){
				document.getElementById('icon').innerHTML = "<img src='icon_sunny.png'>";
				document.querySelector('.container').style.backgroundImage = "url('clearsky.jpg')";
			} else if (condition == "Haze"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Fog"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Mist"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Smoke"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Dust"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Sand"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Ash"){
				document.getElementById('icon').innerHTML = "<img src='icon_foggy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Squall"){
				document.getElementById('icon').innerHTML = "<img src='icon_windy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('foggy.jpg')";
			} else if (condition == "Tornado"){
				document.getElementById('icon').innerHTML = "<img src='icon_tornado.png'>";
				document.querySelector('.container').style.backgroundImage = "url('tornado.jpg')";
			} else if (condition == "Rain"){
				document.getElementById('icon').innerHTML = "<img src='icon_rain.png'>";
				document.querySelector('.container').style.backgroundImage = "url('rainy.jpg')";
			} else if (condition == "Drizzle"){
				document.getElementById('icon').innerHTML = "<img src='icon_rain.png'>";
				document.querySelector('.container').style.backgroundImage = "url('rainy.jpg')";
			} else if (condition == "Snow"){
				document.getElementById('icon').innerHTML = "<img src='icon_snow.png'>";
				document.querySelector('.container').style.backgroundImage = "url('snow.jpg')";
			} else if (condition == "Thunderstorm"){
				document.getElementById('icon').innerHTML = "<img src='icon_stormy.png'>";
				document.querySelector('.container').style.backgroundImage = "url('thunderstorm.jpg')";
			}
			
		$("#number").html('<h3>' +(Math.round(temp)) +'&deg;');
		$("#status").html('<h4>' + condition + '</h4>');
        }
		});
	});
});
