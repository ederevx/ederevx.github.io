import * as con from "./common/container.js";
import * as presets from "./common/presets.js";

const local_props = {
	name: "navbar",

	inner_nav: {
		container: con.create("inner-nav", "nav", "navbar navbar-expand-lg navbar-light bg-light fixed-top"),
		header: {
			container: con.create("header", "header", "px-5 container-fluid"),
		},
	}
}

export const props = {
	name: local_props.name,
	container: con.create_fluid(local_props.name, "div"),
}

export function set_content(element) {
	let content;

	content = con.generate_html_content(local_props.inner_nav.header.container, navbar_content);
	element.innerHTML = con.generate_html_content(local_props.inner_nav.container, content);
}

let navbar_content = `
	<a class="navbar-brand display-1 fs-2" href="#">Edrick Sinsuan</a>
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbar-content">
		<ul class="navbar-nav navbar-nav-scroll">
		<li class="nav-item">
			<a class="nav-link" href="#about">About</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#projects">Projects</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#contact">Contact</a>
		</li>
		<ul>
	</div>
`;
