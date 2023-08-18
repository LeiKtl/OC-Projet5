// Les variables //
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const text = document.querySelector(".banner-text");
const dots = document.querySelector(".dots");
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slidePosition = 0 ;
const numbSlide = slides.length;

//Click gauche
arrowLeft.addEventListener("click", function() {
	slidePosition --;
	image.src = slides[slidePosition].image;
	text.innerHTML = slides[slidePosition].tagLine;
	console.log("gauche");
})
	
//Click droit
arrowRight.addEventListener("click", function() {
	slidePosition ++;
	image.src = slides[slidePosition].image;
	text.innerHTML = slides[slidePosition].tagLine;
	console.log("droite");
})

// Creation des dots
for (i=0 ; i < numbSlide ; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);	
	if (i === slidePosition) {
		dot.classList.add("dot_selected");
	}
}

//function dotChange() {
//	if (i === slidePosition) {
//			dot.classList.add("dot_selected");
//		} else {
//			dot.classList.remove("dot_selected");
//		}
//		console.log("ca marche!");
//}