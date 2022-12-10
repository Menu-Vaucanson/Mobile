import blue from '../Themes/Menus/blue';
import green from '../Themes/Menus/green';
import red from '../Themes/Menus/red';
import yellow from '../Themes/Menus/yellow';

import blueDark from '../Themes/Menus/blueDark';
import greenDark from '../Themes/Menus/greenDark';
import redDark from '../Themes/Menus/redDark';
import yellowDark from '../Themes/Menus/yellowDark';

import halloween from '../Themes/Menus/halloween';
import halloweenDark from '../Themes/Menus/halloweenDark';


import ChristmasBlue from '../Themes/Menus/ChristmasBlue';
import ChristmasRed from '../Themes/Menus/ChristmasRed';
import ChristmasGreen from '../Themes/Menus/ChristmasGreen';
import ChristmasYellow from '../Themes/Menus/ChristmasYellow';

function Dish({ dish, theme }) {

	let css = {};
	if (theme === 'dark') {
		if (dish.styleDark === 'blueDark') {
			css = blueDark;
		} else if (dish.styleDark === 'redDark') {
			css = redDark;
		} else if (dish.styleDark === 'greenDark') {
			css = greenDark;
		} else if (dish.styleDark === 'yellowDark') {
			css = yellowDark;
		} else if (dish.styleDark === 'halloweenDark') {
			css = halloweenDark;
		} else if (dish.styleDark === 'ChristmasBlue') {
			css = ChristmasBlue;
		} else if (dish.styleDark === 'ChristmasRed') {
			css = ChristmasRed;
		} else if (dish.styleDark === 'ChristmasGreen') {
			css = ChristmasGreen;
		} else if (dish.styleDark === 'ChristmasYellow') {
			css = ChristmasYellow;
		}
	} else {
		if (dish.style === 'blue') {
			css = blue;
		} else if (dish.style === 'red') {
			css = red;
		} else if (dish.style === 'green') {
			css = green;
		} else if (dish.style === 'yellow') {
			css = yellow;
		} else if (dish.style === 'halloween') {
			css = halloween;
		} else if (dish.styleDark === 'ChristmasBlue') {
			css = ChristmasBlue;
		} else if (dish.styleDark === 'ChristmasRed') {
			css = ChristmasRed;
		} else if (dish.styleDark === 'ChristmasGreen') {
			css = ChristmasGreen;
		} else if (dish.styleDark === 'ChristmasYellow') {
			css = ChristmasYellow;
		}
	}


	return (
		<div className='Dish' style={css}>
			<div className='DishTitle'>
				{dish.name}
			</div>
			<div className='DishContent'>
				{dish.content}
			</div>
		</div>
	);
}

export default Dish;