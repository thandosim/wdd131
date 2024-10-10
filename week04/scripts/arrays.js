//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;//the html string made from step
}
const myList = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = myList.join();// set the innerHTML


const grades = ['A','B','C'];
function calculateGpa(letter) {
    if (letter == "A") {
        return 4;
    } else if (letter == "B") {
        return 3;
    } else if (letter = "C") {
        return 2;
    } else if (letter = "D") {
        return 1;
    } else {
        return 0;
    }
}
const gpa = grades.map(calculateGpa);

const averageGpa = gpa.reduce((total, points) => total + points)/gpa.length;

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
const shortWords2 = words.filter((word) => word.length < 6);


const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

comp