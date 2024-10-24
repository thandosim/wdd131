var date = new Date();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},

	{
		templeName: "Durban South Africa",
		location: "Durban, South Africa",
		dedicated: "2020, February, 16",
		area: 631184,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/3-4040af740b4eba8715bd22bc33359ce8e2bfbd4e.jpg"
	  },
	  {
		templeName: "Johhanesburg South Africa",
		location: "Johhanesburg, South Africa",
		dedicated: "1985, August, 24",
		area: 43560,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
	  },
	  {
		templeName: "Hamilton New Zealand",
		location: "Hamilton, New Zealand",
		dedicated: "1958, April, 20",
		area: 1524600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton_new_zealand_temple_lds.jpg"
	  },
	
  ];

  const oldButton = document.querySelector("#old");
  const newButton = document.querySelector("#new");
  const largeButton = document.querySelector("#large");
  const smallButton = document.querySelector("#small");

  temples.forEach(temple => {
	document.getElementById("card").innerHTML += (card(temple));
  });
  

  oldButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let old = temples.filter(temple => parseInt(temple.dedicated.substring(0,4))<1900);
	old.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  newButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let newones = temples.filter(temple => parseInt(temple.dedicated.substring(0,4))>2000);
	newones.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  largeButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let large = temples.filter(temple => temple.area>90000);
	large.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  smallButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let small = temples.filter(temple => temple.area<10000);
	small.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  function card(temple) {
	var name = `<h3>${temple.templeName}</h3> <br>`;
	var location = `<p>Location: ${temple.location}</p> <br>`;
	var date = `<p>Dedicated: ${temple.dedicated}</p> <br>`;
	var area = `<p>Size: ${temple.area} Square feet</p> <br>`;
	var url = `<img src="${temple.imageUrl}" loading="lazy" alt="picture of the ${temple.templeName} temple." > <br>`;
	var figure = `<figure>${name}${location}${date}${area}${url}</figure>`
	return figure;
  }

