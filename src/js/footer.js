import * as con from "./common/container.js";
import * as presets from "./common/presets.js";

const local_props = {
	name: "footer",

	footer_content: {
		container: con.create("footer-content", "p", "text-muted text-center"),
	},
};

export const props = {
	name: local_props.name,
	container: con.create_fluid(local_props.name, "footer"),
}

export function set_content(element) {
	element.innerHTML = con.generate_html_content(local_props.footer_content.container, footer_content);
}

let footer_content = `Copyright (C) 2024, Edrick Sinsuan`;
