import * as con from "./common/container.js";

const local_props = {
	name: "navbar",
}

export const props = {
	name: local_props.name,
	container: con.create_fluid(local_props.name, "div"),
}

export function set_content(element) {
	element.innerHTML = navbar_content;
}

let navbar_content = `
	<nav id="nav-bar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<header id="header" class="px-5 container-fluid">
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
		</header>
	</nav>
`;
