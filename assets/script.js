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
const bannerImg =  document.querySelector(".banner-img");
const bannerTagline = document.querySelector("#banner p");

// Create dots for each slide that take on the appropriate classes, and add event listeners
for (let i = 0; i < numSlides; i++) {
	const createDots = document.createElement("div");
	createDots.classList.add("dot");

	// If it's the first point, also add the class "dot_selected"
	if (i === 0) {
		createDots.classList.add("dot_selected");
	}

	createDots.addEventListener("click", function() {
		// Find currently selected dot and remove "dot_selected" class
		let selectedDot = document.querySelector(".dot.dot_selected");
		if (selectedDot) {
			selectedDot.classList.remove("dot_selected");
		}
		
		//Add the 'dot_selected' class to the clicked dot
		this.classList.add("dot_selected");

		// Set the current slide to the index of the clicked dot
		currentSlide = i;
		console.log("Click on point " + (i + 1));

		// Update the banner image and tagline
		updateBanner();
	});

	// Add the new div element to the parent container
	dotsContainer.appendChild(createDots);
}

// Add arrow click event listeners

arrow_left.addEventListener("click", function(){
	// Decrease the index of the current slide
	currentSlide = (currentSlide - 1 + numSlides) % numSlides;

	// Update the banner image and tagline
	updateBanner();

	console.log("left click");
});

arrow_right.addEventListener("click", function(){
	// Increase the index of the current slide
	currentSlide = (currentSlide + 1) % numSlides;

	// Update the banner image and tagline
	updateBanner();

	console.log("right click");
});

// Function to update the banner image and tagline
function updateBanner() {
	// Obtain the current slide object
	const slide = slides[currentSlide];

	// Update the banner image
	bannerImg.src = "./assets/images/slideshow/" + slide.image;

	// Update the banner tagline
	bannerTagline.innerHTML = slide.tagLine;

	let selectedDots = document.querySelectorAll(".dot.dot_selected");
	for (let dot of selectedDots) {
		dot.classList.remove("dot_selected");
	}

	const newSelectedDot = dotsContainer.children[currentSlide];
	newSelectedDot.classList.add("dot_selected");
}

// Update the banner image and tagline for the first time
updateBanner();
