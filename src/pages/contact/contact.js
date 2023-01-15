import './contact.css';
import patrickImagePath from '../../assets/images/patrick.png';
import squidwardImagePath from '../../assets/images/squidward.png';

function addContact() {
	const container = document.createElement('div');
	container.className = 'contact';

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

	const illustrationContainer = document.createElement('div');
	illustrationContainer.className = 'contact__illustration';

	const patrickImage = document.createElement('img');
	patrickImage.src = patrickImagePath;
	patrickImage.className = 'contact__illustration__patrick';

	const patrickText = document.createElement('p');
	patrickText.innerHTML = 'The most efficient service of the Seven Seas!';
	patrickText.className = 'contact__illustration__text';

	const squidwardImage = document.createElement('img');
	squidwardImage.src = squidwardImagePath;
	squidwardImage.className = 'contact__illustration__squidward';

	const squidwardText = document.createElement('p');
	squidwardText.innerHTML = 'Our workers will be happy to take your order!';
	squidwardText.className = 'contact__illustration__text';

	illustrationContainer.append(patrickText, patrickImage);

	container.append(illustrationContainer, contactInfo);

	const contentDiv = document.getElementById('content');
	contentDiv.append(container);
}

export default addContact;
