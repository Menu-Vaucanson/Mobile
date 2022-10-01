import React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import Dish from './Dish.tsx';

// @ts-ignore
import InformationsLight from '../Themes/Informations/Light.ts';
// @ts-ignore
import InformationsDark from '../Themes/Informations/Dark.ts';

function Informations({ theme }) {
	const dish1 = {
		name: 'Contact',
		content: 'Vous pouvez nous contacter ici.',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish2 = {
		name: 'Qui sommes-nous ?',
		content: 'Nous sommes des élèves de terminale.',
		style: 'red',
		styleDark: 'redDark'
	}
	const dish3 = {
		name: 'La réalisation',
		content: 'Le site est réalisé en HTML, CSS et Javascript avec React. Le code source est disponible sur GitHub.',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish4 = {
		name: 'Des questions ?',
		content: 'Si vous avez une idée, une suggestion, un bug à rapporter, etc... vous pouvez nous contacter via la page de contact.',
		style: 'red',
		styleDark: 'redDark'
	}
	const dish5 = {
		name: 'Fiabilité',
		content: 'Le menu affiché n’est qu’une copie de ceux publiés par l\'établissement, aucune information n’est donc garantie.',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish6 = {
		name: 'Publication',
		content: 'Nous récupérons les menus manuellement. Ils seront donc disponibles entre le vendredi soir et le mardi.',
		style: 'red',
		styleDark: 'redDark'
	}

	let css = InformationsLight;
	if (theme === 'dark') {
		css = InformationsDark;
	}

	return (
		<div className="Contact" style={css}>
			<Link to={'../Contact'}><Dish key={1} dish={dish1} theme={theme} /></Link>
			<Dish key={2} dish={dish2} theme={theme} />
			<Dish key={3} dish={dish3} theme={theme} />
			<Dish key={4} dish={dish4} theme={theme} />
			<Dish key={5} dish={dish5} theme={theme} />
			<Dish key={6} dish={dish6} theme={theme} />
		</div>
	)
}

export default Informations;