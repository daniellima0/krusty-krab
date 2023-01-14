import addHome from './pages/home/home';
import addMenu from './pages/menu/menu';
import addContact from './pages/contact/contact';

const contentDiv = document.getElementById('content');

const nav = document.createElement('nav');

const homeLink = document.createElement('a');
homeLink.textContent = 'Home';

homeLink.addEventListener('click', () => {
	contentDiv.textContent = '';
    contentDiv.append(nav);
	addHome();
});

const menuLink = document.createElement('a');
menuLink.textContent = 'Menu';
menuLink.addEventListener('click', () => {
	contentDiv.textContent = '';
    contentDiv.append(nav);
	addMenu();
});

const contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.addEventListener('click', () => {
	contentDiv.textContent = '';
    contentDiv.append(nav);
	addContact();
});

nav.append(homeLink, menuLink, contactLink);

contentDiv.append(nav);
addHome();