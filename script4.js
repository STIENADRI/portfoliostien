// hier komt je code
// console.log("Hallo wereld!");
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";}
    else {
		navMenu.style.display = "flex";
    console.log("klik werkt")}
}

menuKnop.addEventListener("click",toonMenu);
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
  console.log("klik 2 werkt")
}
mainGedeelte.addEventListener("click",verbergMenu);
