let weather={
    apikey: '06f89bace216464eef97c0c210a1bc90',
    fetchweather: function(city){ 
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=06f89bace216464eef97c0c210a1bc90" 
        )
        .then((response)=> response.json())
        .then((data)=> this.displayweather(data));
    },
    displayweather: function(data){
        const {name} =data;
        const {icon,description}= data.weather[0];
        const {temp,humidity,temp_max,temp_min}= data.main;
        const {speed}= data.wind;
        console.log(data);
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".desc").innerText=description;
        document.querySelector(".temp").innerText= temp + "° C";
        document.querySelector(".maxmin").innerText= "Max/Min : " + Math.floor(temp_max) + "°C / " + Math.floor(temp_min) + "°C";
        document.querySelector(".hum").innerText= "Humidity : " + humidity + " %";
        document.querySelector(".wind").innerText= "Wind Speed : " + speed + " km/h";
        document.querySelector(".hidden").classList.remove("loading");
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/random?' + name +  '" )'
    },
    search: function(){
        this.fetchweather(document.querySelector(".search").value);
    }
};
document.querySelector(".button").addEventListener('click',function(){
weather.search();
});
document.querySelector(".search").addEventListener("keyup", function(event){
    if(event.key== "Enter"){
        weather.search();
    }
});
