const productList = document.querySelector('#productList');

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

products.forEach(product => {
    document.getElementById("productList").innerHTML += options(product);
});


function options(product) {
    var singleItem = `<option value="${product.id}">${product.name}</option>`;
    return singleItem;
}

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.innerHTML = numVisits;
} else {
	visitsDisplay.innerHTML = `This is the first review.`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
