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

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

const dotsContainer = document.querySelector(".dots");
const numSlides = slides.length;

const bannerImg =  document.querySelector(".banner-img");
const bannerTagline = document.querySelector("#banner p");

// Create dots for each slide that take on the appropriate classes, and adds Event Listeners
for (let i = 0; i < numSlides; i++) {
    const createDots = document.createElement("div");
    createDots.classList.add("dot");
        
    if (i === 0) {
        createDots.classList.add("dot_selected");
    }
     
    createDots.addEventListener("click", function() {
        currentSlide = i;
        console.log("Click on point " + (i + 1));
        updateBanner();
    });
    dotsContainer.appendChild(createDots);
    }

// Event listeners for the left and right arrows

arrow_left.addEventListener("click", function() {
    currentSlide = (currentSlide -1);
    console.log("left click");
    updateBanner();     });

arrow_right.addEventListener("click", function() {
    currentSlide= (currentSlide +1);
    console.log("right click");
    updateBanner();     });

function updateBanner() {
    // Obtain the current slide object
    const slide = slides[currentSlide];

    // Update the banner image and tagline
    bannerImg.src = "./assets/images/slideshow/" + slide.image;
    bannerTagline.innerHTML = slide.tagLine;

    // Update the dots
    const newSelectedDot = dotsContainer.children[currentSlide];
    let SelectedDots = document.querySelectorAll(".dot.dot_selected");

    for (let dot of SelectedDots) {
        dot.classList.remove("dot_selected");}

    newSelectedDot.classList.add("dot_selected");
    };

// Update the banner image and tagline
updateBanner();

