import * as con from "./common/container.js";

const local_props = {
	name: "footer",
};

export const props = {
	name: local_props.name,
	container: con.create_fluid(local_props.name, "footer"),
}

export function set_content(element) {
	element.innerHTML = footer_content;
}

let footer_content = `<p class="text-muted text-center">Copyright (C) 2024, Edrick Sinsuan</p>`;
