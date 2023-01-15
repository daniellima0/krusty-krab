import homeBackgroundImagePath from './assets/images/krusty-krab.jpg';
import menuBackgroundImagePath from './assets/images/krusty-krab-inside.png';
import contactBackgroundImagePath from './assets/images/bikini-bottom.jpg';
import addHome from './pages/home/home';
import addMenu from './pages/menu/menu';
import addContact from './pages/contact/contact';
import './reset.css';
import './index.css';

const contentDiv = document.getElementById('content');

const homeBackgroundImage = document.createElement('img');
homeBackgroundImage.src = homeBackgroundImagePath;
homeBackgroundImage.className = 'background-image';

contentDiv.append(homeBackgroundImage);

const navbar = document.createElement('header');
navbar.className = 'navbar';

const nav = document.createElement('nav');
nav.className = 'navbar__nav';

const homeLink = document.createElement('a');
homeLink.className = 'navbar__nav__item';
homeLink.textContent = 'Home';

homeLink.addEventListener('click', () => {
	contentDiv.textContent = '';
	homeLink.className = 'navbar__nav__item navbar__nav__item--active';
	menuLink.className = contactLink.className = 'navbar__nav__item';
	contentDiv.append(homeBackgroundImage);
	contentDiv.append(navbar);
	addHome();
});

const menuBackgroundImage = document.createElement('img');
menuBackgroundImage.src = menuBackgroundImagePath;
menuBackgroundImage.className = 'background-image';

const menuLink = document.createElement('a');
menuLink.className = 'navbar__nav__item';
menuLink.textContent = 'Menu';
menuLink.addEventListener('click', () => {
	contentDiv.textContent = '';
	menuLink.className = 'navbar__nav__item navbar__nav__item--active';
	homeLink.className = contactLink.className = 'navbar__nav__item';
	contentDiv.append(menuBackgroundImage);
	contentDiv.append(navbar);
	addMenu();
});

const contactBackgroundImage = document.createElement('img');
contactBackgroundImage.src = contactBackgroundImagePath;
contactBackgroundImage.className = 'background-image';

const contactLink = document.createElement('a');
contactLink.className = 'navbar__nav__item';
contactLink.textContent = 'Contact';
contactLink.addEventListener('click', () => {
	contentDiv.textContent = '';
	contactLink.className = 'navbar__nav__item navbar__nav__item--active';
	homeLink.className = menuLink.className = 'navbar__nav__item';
	contentDiv.append(contactBackgroundImage);
	contentDiv.append(navbar);
	addContact();
});

nav.append(homeLink, menuLink, contactLink);

navbar.append(nav);

contentDiv.append(navbar);
homeLink.className = 'navbar__nav__item navbar__nav__item--active';
addHome();
