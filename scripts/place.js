var date = new Date();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").textContent = document.lastModified;

var chill
var wind = 10;
var temperature = 9;

function calculateWindChill(wind,temperature) {
    if (temperature <= 10 && wind > 4.8){
        return Math.round(13.12+(0.6215*temperature)-(11.37*wind**0.16)+(0.3965*temperature*wind**0.16));
    } else {
        return "N/A"
    }
}
chill = calculateWindChill(wind,temperature);
document.getElementById("windChill").textContent =chill;