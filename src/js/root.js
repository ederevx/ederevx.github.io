import * as con from "./common/container.js";

import * as nav from "./navbar.js";
import * as main from "./main.js";
import * as footer from "./footer.js";

const root_props = {
	name: "root",
	parent: "body",
	container: con.create_fluid("root", "div"),
}

function root_set_content(element) {
	element.innerHTML += con.generate_str(root_props.container);
	element.innerHTML += con.generate_str(nav.props.container);
	element.innerHTML += con.generate_str(main.props.container);
	element.innerHTML += con.generate_str(footer.props.container);
}

/* Configure the root-container */
root_set_content(document.getElementById(root_props.parent));

/* Configure the navbar-container */
nav.set_content(document.getElementById(nav.props.container.id));

/* Configure the main-container */
main.set_content(document.getElementById(main.props.container.id));

/* Configure the footer-container */
footer.set_content(document.getElementById(footer.props.container.id));