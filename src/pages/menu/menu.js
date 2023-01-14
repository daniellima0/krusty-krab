import './menu.css';

function addMenu() {
	const container = document.createElement('div');
	container.id = 'menu';

	const paragraph = document.createElement('p');
	paragraph.innerHTML = 'this is the menu';

	container.append(paragraph);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addMenu;
