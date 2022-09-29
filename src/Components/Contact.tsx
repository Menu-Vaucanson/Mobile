import React from "react";

// @ts-ignore
import Dish from "./Dish.tsx";

// @ts-ignore
import ContactLight from '../Themes/Contact/Light.ts';
// @ts-ignore
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

	let css = ContactLight;
	if (theme === 'dark') {
		css = ContactDark;
	}

	return (
		<div className="Contact" style={css}>
			<Dish key={1} dish={dish1} theme={theme} />
			<Dish key={2} dish={dish2} theme={theme} />
			<Dish key={3} dish={dish3} theme={theme} />
		</div>
	)
}

export default Contact;