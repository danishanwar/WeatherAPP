$(function(){
	$('#myLocation').click(function(){
	var loc;
	$.getJSON('http://ipinfo.io', function(d){
		loc = d.loc.split(",");
		console.log(loc);

		$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?lat=" + loc[0] + "&lon=" + loc[1] + "&units=metric&appid=074e92ad791a30d9c4352ab6f05dcc70",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
					var widget = shows(data);
					$("#show").html(widget);
					$("#city").val('');
				}
			});
		});
	});
});

http://api.openweathermap.org/data/2.5/weather?lat=23.4833&lon=87.3167&appid=074e92ad791a30d9c4352ab6f05dcc70


$(document).ready(function(){
	$('#submitWeather').click(function(){

		var city = $("#city").val();
		if(city != ''){
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=074e92ad791a30d9c4352ab6f05dcc70",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
					var widget = show(data);
					$("#show").html(widget);
					$("#city").val('');
				}
			});


			}else{
				$("#error").html("<div class='alert alert-danger'><a href='./index.html' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Search Field cannot be empty.</div>");
			}
		});
});

function show(data){
	return "<h3 style='font-size:40px;' class='text-center'>Current Weather for <span style='color:green; font-weight:bold;'>"+ data.name + "</span></h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Weather</strong>: "+ data.weather[0].main +"</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Description</strong>: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+ data.weather[0].description + "</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Pressure</strong>: "+ data.main.pressure +" hPa</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Humidity</strong>: "+ data.main.humidity +" %</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Minimum Temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Maximum Temperature</strong>: "+ data.main.temp_max +"&deg;C</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Wind Speed</strong>: "+ data.wind.speed +" m/s</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Wind Direction</strong>: "+ data.wind.deg +"&deg</h3>" ;
}

function shows(data){
	return "<h3 style='font-size:40px;' class='text-center'>Current Weather for Your Location <span style='color:green; font-weight:bold;'>("+ data.name + ")</span></h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Weather</strong>: "+ data.weather[0].main +"</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Description</strong>: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+ data.weather[0].description + "</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Pressure</strong>: "+ data.main.pressure +" hPa</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Humidity</strong>: "+ data.main.humidity +" %</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Minimum Temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Maximum Temperature</strong>: "+ data.main.temp_max +"&deg;C</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Wind Speed</strong>: "+ data.wind.speed +" m/s</h3>" +
		   "<h3 style='padding-left:40px;'><strong style='color:blue;'>Wind Direction</strong>: "+ data.wind.deg +"&deg</h3>" ;
}
