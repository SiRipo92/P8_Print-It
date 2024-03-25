const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Add arrow click event
let arrow_left = document.getElementsByClassName("arrow arrow_left")[0];
let arrow_right = document.getElementsByClassName("arrow arrow_right")[0];

arrow_left.addEventListener("click", function(){
	console.log("left click");
});

arrow_right.addEventListener("click", function(){
	console.log("right click");
});

// Recover parent element with the class "dots"
let dotsContainer = document.querySelector(".dots");

// Use the length of slides in table to determine the number of points to create
let numSlides = slides.length;

// Create a loop to create the number of points
for (let i = 0; i < numSlides; i++) {
	// Create a new div element
	let dot = document.createElement("div");
	// Add the class "dot" to the new div element
	dot.classList.add("dot");
	// If its the first point, also add the class "dot_selected"
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	// Add the new div element to the parent container
	dotsContainer.appendChild(dot);
}