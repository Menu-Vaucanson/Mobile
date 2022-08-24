import Dish from './Dish';

import InformationsLight from '../Themes/Informations/Light';
import InformationsDark from '../Themes/Informations/Dark';

function Informations({ theme }) {
	const dish1 = {
		name: 'Qui sommes-nous ?',
		content: 'Nous sommmes des élèves de terminal.',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish2 = {
		name: 'La réalisation',
		content: 'Le site est réalisé en HTML, CSS et Javascript avec react. Le code source est disponible sur GitHub.',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish3 = {
		name: 'Des questions ?',
		content: 'Si vous avez une idée, une suggestion, un bug à rapporter, etc... vous pouvez nous contacter via la page de contact.',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish4 = {
		name: 'Fiabilitée',
		content: 'Le menu affiché n’est qu’une copie de ceux publiés par l\'établissement, aucune information n’est donc garantie',
		style: 'blue',
		styleDark: 'blueDark'
	}
	const dish5 = {
		name: 'Publication',
		content: 'Nous récuperons les menus manuellement. Ils seront donc disponibles entre vendredi soir et mardi.',
		style: 'blue',
		styleDark: 'blueDark'
	}

	let css = InformationsLight;
	if (theme === 'dark') {
		css = InformationsDark;
	}

	return (
		<div className="Contact" style={css}>
			<Dish key={1} dish={dish1} theme={theme} />
			<Dish key={2} dish={dish2} theme={theme} />
			<Dish key={3} dish={dish3} theme={theme} />
			<Dish key={4} dish={dish4} theme={theme} />
			<Dish key={5} dish={dish5} theme={theme} />
		</div>
	)
}

export default Informations;