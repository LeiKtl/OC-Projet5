// Les variables //
const banner = document.getElementById("banner");

const arrowLeft = document.createElement("img");
arrowLeft.classList.add("arrow", "arrow_left");
arrowLeft.src = "../assets/images/arrow_left.png";
banner.appendChild(arrowLeft);

const arrowRight = document.createElement("img");
arrowRight.classList.add("arrow", "arrow_right");
arrowRight.src = "../assets/images/arrow_right.png";
banner.appendChild(arrowRight);

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
	if (slidePosition < 0) {
		slidePosition = numbSlide -1;
	}
	image.src = slides[slidePosition].image;
	text.innerHTML = slides[slidePosition].tagLine;
	console.log("gauche");
	selectedDot();
})
	
//Click droit
arrowRight.addEventListener("click", function() {
	slidePosition ++;
	if (slidePosition === numbSlide) {
		slidePosition = 0;
	}
	image.src = slides[slidePosition].image;
	text.innerHTML = slides[slidePosition].tagLine;
	console.log("droite");
	selectedDot();
	
})

// Création des dots
for (i=0 ; i < numbSlide ; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
	if (i === slidePosition) {
		dot.classList.add("dot_selected");
	}
}

// Fonction pour afficher la dot selectionnée
function selectedDot() {
	const allDots = document.querySelectorAll(".dot");
	allDots.forEach((dot, i)=>{
		if(i === slidePosition){
			dot.classList.add("dot_selected");	
		}else{
			dot.classList.remove("dot_selected");
		}
	})
}