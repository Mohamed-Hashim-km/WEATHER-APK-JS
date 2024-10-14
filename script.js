const apikey="e712a348bb3f9dad36bc61c140d59c63";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const wicon=document.querySelector(".wicon");
const bodys=document.querySelector("body");


async function checkweather(city){
    const response=await fetch(apiurl + city+ `&appid=${apikey}`);
    if(response.status == 404){
           document.querySelector(".error").style.display="block"
           document.querySelector(".wether").style.display="none"
    }
    else if(searchbox.value.trim()===""){
        document.querySelector(".error").style.display="block"
        document.querySelector(".wether").style.display="none" 
    }
    else{
        var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round( data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        wicon.src ="./ASSETS/images/clouds.png";
    bodys.style.backgroundImage="url('https://i.makeagif.com/media/8-26-2023/cjaI99.gif')"
    bodys.style.backgroundRepeat="no-repeat";
    bodys.style.backgroundSize="cover"

    }
    else if(data.weather[0].main=="Rain"){
        wicon.src ="./ASSETS/images/rain.png";
        bodys.style.backgroundImage="url('https://cdn.pixabay.com/animation/2023/03/05/12/05/12-05-54-62_512.gif')"
        bodys.style.backgroundRepeat="no-repeat";
        bodys.style.backgroundSize="cover"

    }
    else if(data.weather[0].main=="Drizzle"){
        wicon.src ="./ASSETS/images/drizzle.png";
        bodys.style.backgroundImage="url('https://media.tenor.com/-JhyTmzsNNQAAAAM/j13dvo-jami3.gif')"
        bodys.style.backgroundRepeat="no-repeat";
        bodys.style.backgroundSize="cover"
    }
    else if(data.weather[0].main=="Mist"){
        wicon.src ="./ASSETS/images/mist.png";
        bodys.style.backgroundImage="url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzUwMWNpMHM5ODV6NHNpcjdqMHlvNTc1b2l3aDZyMjV3d2QwcjBicCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z98zIhtiePuIo/giphy.webp')"
        bodys.style.backgroundRepeat="no-repeat";
        bodys.style.backgroundSize="cover"
    }

    document.querySelector(".wether").style.display="block"
    document.querySelector(".error").style.display="none"
    
    }
    
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
}) 


