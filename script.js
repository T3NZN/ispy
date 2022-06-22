function findUnordered(index) {
	return document.querySelector(`[data-ordered="${index}"]`);
}

function clickHandler(event) {
	const targetElement = findUnordered(event.target.dataset.unordered);
	targetElement.classList.add("selected");
}

function findAllOrdered() {
	return document.querySelectorAll(`[data-ordered]`);
}

function reset() {
	const elements = findAllOrdered();
	elements.forEach((element) => {
		element.classList.remove("selected");
	});
}
