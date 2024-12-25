import * as presets from "./presets.js";

export const create = function(id, element, class_list) {
	return {
		id: `${id}-containter`,
		element: element,
		class_list: class_list,
	};
}

export const create_gen = function(id, element) {
	return create(id, element, "");
}

export const create_div = function(id, class_list) {
	return create(id, "div", class_list);
}

export const create_fluid = function(id, element) {
	return create(id, element, presets.container.class_fluid);
}

export const generate_html = function(container) {
	return `<${container.element} id="${container.id}" class="${container.class_list}"></${container.element}>`;
}

export const generate_html_content = function(container, content) {
	return `<${container.element} id="${container.id}" class="${container.class_list}">${content}</${container.element}>`;
}