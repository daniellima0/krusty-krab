import './contact.css';

function addContact() {
	const container = document.createElement('div');
	container.id = 'contact';

	const paragraph = document.createElement('p');
	paragraph.innerHTML = 'this is the contact';

	container.append(paragraph);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addContact;
