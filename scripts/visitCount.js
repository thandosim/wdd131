const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.innerHTML = numVisits;
} else {
	visitsDisplay.innerText = `This is the first review.`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
