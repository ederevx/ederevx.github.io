import { get_navbar_content } from "./navbar.js";
import { get_main_content } from "./main.js";
import { get_footer_content } from "./footer.js";

let navbar_container = `<div id="navbar-container"></div>`;
let main_container = `<main id="main-container"></main>`;
let footer_container = `<footer id="footer-container"></footer>`;

/* Configure the root-container */
document.getElementById("root-container").classList.add("container-fluid");
document.getElementById("root-container").innerHTML = navbar_container + main_container + footer_container;

/* Configure the navbar-container */
document.getElementById("navbar-container").innerHTML = get_navbar_content();

/* Configure the main-container */
document.getElementById("main-container").innerHTML = get_main_content();

/* Configure the footer-container */
document.getElementById("footer-container").innerHTML = get_footer_content();