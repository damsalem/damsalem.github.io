// Used by typed.min.js
const typed = new Typed("#typed", {
	stringsElement: "#typed-strings",
	startDelay: 500,
	typeSpeed: 100,
	backSpeed: 50,
	backDelay: 1200,
	shuffle: true,
	loop: true,
});

const year = document.querySelector("#year");

year.innerHTML = new Date().getFullYear();
