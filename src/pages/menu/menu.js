import './menu.css';

function addMenu() {
	const container = document.createElement('div');
	container.className = 'menu';

	const title = document.createElement('h1');
	title.innerHTML = 'GALLEY GRUB';
	title.className = 'menu__title';

	const list = document.createElement('ul');
	list.className = 'menu__list';
	const order1 = document.createElement('li');
	order1.textContent = 'Krabby Patty ........ 2.00';
	order1.className = 'menu__list__item';
	const order2 = document.createElement('li');
	order2.textContent = 'Krabby Patty ........ 3.99';
	order2.className = 'menu__list__item';
	const order3 = document.createElement('li');
	order3.textContent = 'Krabby Deluxe ....... 3.00';
	order3.className = 'menu__list__item';
	const order4 = document.createElement('li');
	order4.textContent = 'SeaWeed Salad ....... 1.50';
	order4.className = 'menu__list__item';
	const order5 = document.createElement('li');
	order5.textContent = 'Coral Bits .............. 1.59';
	order5.className = 'menu__list__item';

	list.append(order1, order2, order3, order4, order5);
	container.append(title, list);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addMenu;
