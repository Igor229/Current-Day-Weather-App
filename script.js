// fetch('http://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk&appid=495a2be289b895f208d71cf9a38a5468')
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Ivano-Frankivsk&appid=495a2be289b895f208d71cf9a38a5468')
	.then(function (resp){return resp.json()})
	.then(function (data){

		//get Date
		let date = new Date(data.list[0].dt * 1000)
		let options = { day: 'numeric', weekday: 'long'};
		let day = new Intl.DateTimeFormat('en-US', options).format(date);

		let hour = new Date().getHours()
		let minutes = new Date().getMinutes()
		let currentDate = day + '  ' + hour + ':' + minutes

		//Main content
		document.querySelector('.city-name').innerHTML = data.city.name
		document.querySelector('.date-time').innerHTML = currentDate
		document.querySelector('.weather-icon').innerHTML = `<img src="icons/${data.list[0].weather[0].icon}.png" alt="" class="content-pic">`
		document.querySelector('.main-temp').innerHTML = Math.round(data.list[0].main.temp - 273.15) + '&deg'

		//Second content temp
		document.querySelector('.temp1').innerHTML = Math.round(data.list[0].main.temp - 273.15) + '&deg'
		document.querySelector('.temp2').innerHTML = Math.round(data.list[1].main.temp - 273.15) + '&deg'
		document.querySelector('.temp3').innerHTML = Math.round(data.list[2].main.temp - 273.15) + '&deg'
		//Second Content text
		document.querySelector('.text1').innerHTML = data.list[0].weather[0].description
		document.querySelector('.text2').innerHTML = data.list[1].weather[0].description
		document.querySelector('.text3').innerHTML = data.list[2].weather[0].description

		//Second content icons
		document.querySelector('.pic1').innerHTML = `<img src="icons/${data.list[0].weather[0].icon}.png" alt="" class="content-pic">`
		document.querySelector('.pic2').innerHTML = `<img src="icons/${data.list[1].weather[0].icon}.png" alt="" class="content-pic">`
		document.querySelector('.pic3').innerHTML = `<img src="icons/${data.list[2].weather[0].icon}.png" alt="" class="content-pic">`
	})