// Les variables //
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const text = document.querySelector("#banner").getElementsByTagName("p");
const dots = document.querySelector(".dots");
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
let numbSlide = slides.length;

// Creation des dots
for (i=0 ; i < numbSlide ; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);

	if (i === slidePosition){
		dot.classList.add("dot_selected");
	} else {
		dot.classList.remove("dot_selected");
	}
}

//Click gauche
arrowLeft.addEventListener("click", function() {
	//if (slides.images <= slides.lenght || slides.images > slides.lenght) {
	//	slides[0] ++1;
	//}

	//if image/texte est <= à .lenght du tableau ou > à 0
	// image et texte -1
	// dot = .dot_selected
	console.log("gauche");
})
	
//Click droit
arrowRight.addEventListener("click", function() {
	//if image/texte est >= 0 et < .length
	// image et texte +1
	// dot = .dot_selected
	console.log("droite");
})