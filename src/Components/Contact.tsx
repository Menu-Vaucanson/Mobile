import Dish from "./Dish.tsx";

import ContactLight from '../Themes/Contact/Light.ts';
import ContactDark from '../Themes/Contact/Dark.ts';

function Contact({ theme }) {
	const dish1 = {
		name: 'E-mail',
		content: 'contact@menuvox.fr',
		style: 'green',
		styleDark: 'greenDark'
	}
	const dish2 = {
		name: 'Discord',
		content: 'Wiwok: Wiwok#2553\nUnel: Unel#1527',
		style: 'green',
		styleDark: 'greenDark'
	}
	const dish3 = {
		name: 'Rencontre',
		content: 'Vous pouvez nous trouver en TSTI2D2 au lycée Vaucanson',
		style: 'green',
		styleDark: 'greenDark'
	}
	const dish4 = {
		name: 'Github',
		content: 'Cliquez ici pour accéder à l\'organisation Github du projet.',
		style: 'green',
		styleDark: 'greenDark'
	}

	let css = ContactLight;
	if (theme === 'dark') {
		css = ContactDark;
	}

	return (
		<div className="Contact" style={css}>
			<Dish key={1} dish={dish1} theme={theme} />
			<Dish key={2} dish={dish2} theme={theme} />
			<Dish key={3} dish={dish3} theme={theme} />
			<a href="https://github.com/Menu-Vaucanson"><Dish key={4} dish={dish4} theme={theme} /></a>
		</div>
	)
}

export default Contact;