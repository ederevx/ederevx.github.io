import { set_navbar_content } from "./navbar.js";
import { set_main_content } from "./main.js";
import { set_footer_content } from "./footer.js";

function set_root_content(element) {
	let navbar_container = `<div id="navbar-container"></div>`;
	let main_container = `<main id="main-container"></main>`;
	let footer_container = `<footer id="footer-container"></footer>`;

	element.classList.add("container-fluid");
	element.innerHTML = navbar_container + main_container + footer_container;
}

/* Configure the root-container */
set_root_content(document.getElementById("root-container"));

/* Configure the navbar-container */
set_navbar_content(document.getElementById("navbar-container"));

/* Configure the main-container */
set_main_content(document.getElementById("main-container"));

/* Configure the footer-container */
set_footer_content(document.getElementById("footer-container"));