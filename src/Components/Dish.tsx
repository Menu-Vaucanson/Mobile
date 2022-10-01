import React from 'react';

// @ts-ignore
import blue from '../Themes/Menus/blue.ts';
// @ts-ignore
import red from '../Themes/Menus/red.ts';
// @ts-ignore
import green from '../Themes/Menus/green.ts';
// @ts-ignore
import yellow from '../Themes/Menus/yellow.ts';

// @ts-ignore
import blueDark from '../Themes/Menus/blueDark.ts';
// @ts-ignore
import redDark from '../Themes/Menus/redDark.ts';
// @ts-ignore
import greenDark from '../Themes/Menus/greenDark.ts';
// @ts-ignore
import yellowDark from '../Themes/Menus/yellowDark.ts';

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
	)
}

export default Dish;