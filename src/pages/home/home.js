import './home.css';

function addHome() {
	const container = document.createElement('div');
	container.id = 'home';

	const paragraph = document.createElement('p');
	paragraph.innerHTML = 'this is the homepage';
	
	container.append(paragraph);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addHome;
