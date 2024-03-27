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
//Global variables
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots");
const numSlides = slides.length;
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// Create dots for each slide that take on the appropriate classes, and add event listeners
for (let i = 0; i < numSlides; i++) {
	const createDots = document.createElement("div");
	createDots.classList.add("dot");

	// If its the first point, also add the class "dot_selected"
	if (i === 0) {
		createDots.classList.add("dot_selected");
	}

	createDots.addEventListener("click", function() {
		// Find the currently selected dot and remove the 'dot_selected' class
		let selectedDot = document.querySelector(".dot.dot_selected");
		if (selectedDot) {
			selectedDot.classList.remove("dot_selected");
		}
		// Add the 'dot_selected' class to the clicked dot
		this.classList.add("dot_selected");

		// Set the current slide to the index of the clicked dot
		currentSlide = i;
		console.log("Click on point " + (i + 1));
	});

	// Add the new div element to the parent container
	dotsContainer.appendChild(createDots);
}

// Add arrow click event listeners

arrow_left.addEventListener("click", function(){
	console.log("left click");
});

arrow_right.addEventListener("click", function(){
	console.log("right click");
});

