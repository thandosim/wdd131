var date = new Date();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").textContent = document.lastModified;

var chill
var wind = 10;
var temperature = 9;


    if (temperature <= 10 && wind > 4.8){
        chill = calculateWindChill(wind,temperature);    
    } else {
        chill = "N/A";
    }

document.getElementById("windChill").textContent =chill;

function calculateWindChill(wind,temperature) {
    return Math.round(13.12+(0.6215*temperature)-(11.37*wind**0.16)+(0.3965*temperature*wind**0.16));
}