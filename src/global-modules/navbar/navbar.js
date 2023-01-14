import './navbar.css';

function addNavbar() {
	const nav = document.createElement('nav');

	const home = document.createElement('a');
	home.textContent = 'Home';

	const menu = document.createElement('a');
	menu.textContent = 'Menu';

	const contact = document.createElement('a');
	contact.textContent = 'Contact';

	nav.append(home, menu, contact);

	const contentDiv = document.getElementById('content');
    contentDiv.append(nav);
}

export default addNavbar;
