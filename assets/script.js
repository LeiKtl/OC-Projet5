// Les variables //
const banner = document.getElementById("banner");

const arrowLeft = document.createElement("img");
arrowLeft.classList.add("arrow", "arrow_left");
arrowLeft.src = "../assets/images/arrow_left.png";
arrowLeft.alt = "flèche pour cliquer à gauche";
banner.appendChild(arrowLeft);

const arrowRight = document.createElement("img");
arrowRight.classList.add("arrow", "arrow_right");
arrowRight.src = "../assets/images/arrow_right.png";
arrowRight.alt = "flèche pour cliquer à droite";
banner.appendChild(arrowRight);

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

let slidePosition = 0 ;
const numbSlide = slides.length;

//Click gauche
arrowLeft.addEventListener("click", function() {
	slidePosition --;
	if (slidePosition < 0) {
		slidePosition = numbSlide -1;
	}
	slideChanges();
})
	
//Click droit
arrowRight.addEventListener("click", function() {
	slidePosition ++;
	if (slidePosition === numbSlide) {
		slidePosition = 0;
	}
	slideChanges();
})

// Création des dots
for (i=0 ; i < numbSlide ; i++) {
	const dots = document.querySelector(".dots");
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
	if (i === slidePosition) {
		dot.classList.add("dot_selected");
	}
}

// Fonction pour selection image, texte et dot selon position slide
function slideChanges() {
	const image = document.querySelector(".banner-img");
	const text = document.querySelector(".banner-text");
	image.src = `./assets/images/slideshow/${slides[slidePosition].image}`;
	text.innerHTML = slides[slidePosition].tagLine;
	selectedDot();
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