import './contact.css';
import patrickImagePath from '../../assets/images/patrick.png';
import squidwardImagePath from '../../assets/images/squidward.png';

function addContact() {
	const container = document.createElement('div');
	container.className = 'contact';

	const titleContainer = document.createElement('div');
	titleContainer.className = 'contact__title-container';

	const titleImage = document.createElement('img');
	titleImage.src = patrickImagePath;
	titleImage.className = 'contact__title-container__image';

	const title = document.createElement('h1');
	title.innerHTML = 'The most efficient service of the Seven Seas!';
	title.className = 'contact__title-container__title';

	titleContainer.append(title, titleImage);

	const contactInfo = document.createElement('ul');
	contactInfo.className = 'contact__info';

	const address = document.createElement('li');
	address.textContent = '📍 Bikini Bottom, 124 Conch Street';
	address.className = 'contact__info__item';

	const hours = document.createElement('li');
	hours.textContent = '🕑 Mon - Sat: 8am - 6pm (Tuesday closes 8pm)';
	hours.className = 'contact__info__item';

	const phone = document.createElement('li');
	phone.textContent = '📞 (715) 820-3420';
	phone.className = 'contact__info__item';

	contactInfo.append(address, hours, phone);

	container.append(titleContainer, contactInfo);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addContact;
