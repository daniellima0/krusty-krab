import './home.css';

function addHome() {
	const container = document.createElement('div');
	container.className = 'home';

	const paragraph = document.createElement('h1');
	paragraph.className = 'home__title'
	paragraph.innerHTML = 'Come aboard the Krusty Krab';
	
	const button = document.createElement('button');
	button.textContent = 'Order Now';
	button.className = 'home__button';

	container.append(paragraph, button);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addHome;
