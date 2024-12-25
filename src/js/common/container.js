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

export const create_fluid = function(id, element) {
	return create(id, element, "container-fluid");
}

export const generate_html = function(container) {
	return `<${container.element} id="${container.id}" class="${container.class_list}"></${container.element}>`;
}