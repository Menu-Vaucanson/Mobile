import { Link } from 'react-router-dom';

import Dish from './Dish';

import InformationsDark from '../Themes/Informations/Dark';
import InformationsLight from '../Themes/Informations/Light';

function Informations({ theme }) {
	const info1 = {
		name: 'Contact',
		content: 'Vous pouvez nous contacter ici.'
	}

	const info2 = {
		name: 'Légal',
		content: 'Cliquez ici pour accéder aux mentions légales.'
	}

	const info3 = {
		name: 'Le code',
		content: 'Le site est réalisé en HTML, CSS et JavaScript (TypeScript) avec React. Le code source est disponible sur GitHub.'
	}

	const info4 = {
		name: 'Des questions ?',
		content: 'Si vous avez une idée, une suggestion, un bug à rapporter, etc... vous pouvez nous contacter via la page de contact.'
	}

	const info5 = {
		name: 'Fiabilité',
		content: 'Les menus affichés ne sont que des copies de ceux fournis par l\'établissement. Ils sont également sous réserve de modification.'
	}

	const info6 = {
		name: 'Publication',
		content: 'Les menus nous sont transmis par l\'établissement. Ils seront disponibles en fin de semaine.'
	}

	let css = InformationsLight;
	if (theme === 'dark') {
		css = InformationsDark;
	}

	return (
		<div className="Contact" style={css}>
			<Link to='../Contact'><Dish key={1} dish={info1} theme={theme} /></Link>
			<Link to='../legal'><Dish key={1} dish={info2} theme={theme} /></Link>
			<Dish key={3} dish={info3} theme={theme} />
			<Dish key={4} dish={info4} theme={theme} />
			<Dish key={5} dish={info5} theme={theme} />
			<Dish key={6} dish={info6} theme={theme} />
		</div>
	);
}

export default Informations;