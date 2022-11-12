
let weather ={
    "apiKey" : "aa73e3014efee88577ca06636a389f0b",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
        .then((response)=>response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".temp").innerText = Math.round(temp) + "° C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description.charAt(0).toUpperCase()+description.slice(1);
        document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText = "Wind Speed: "+ speed + " km/hr";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    },
    changebg: function(){
        let bgs = ["bg1.png" , "bg2.png", "bg3.png", "bg4.png", "bg5.png", "bg6.png"];
        let randomnum = Math.floor(Math.random()*6);
        document.body.style.backgroundImage = "url(assets/"+bgs[randomnum]+")";
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.changebg();
    weather.search();
});

document.querySelector(".searchBar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
        weather.changebg();
    }
});
weather.changebg();
weather.fetchWeather("Manila");
