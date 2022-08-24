import Dish from './Dish';

import MenuTitleLight from '../Themes/MenuTitle/Light';
import MenuTitleDark from '../Themes/MenuTitle/Dark';

function Menu({ Title, menu, theme }) {
	if (menu.error === 1) {
		return (
			<div className="Menu">
				<div className="MenuError">
					{menu.errorMessage}
				</div>
			</div>
		)
	}

	const Dishs = menu.menu.map(dish => {
		return (
			<Dish dish={dish} theme={theme} />
		)
	})

	let css = MenuTitleLight;
	if (theme === 'dark') {
		css = MenuTitleDark;
	}

	return (
		<div className="Menu">
			<div className="MenuTitle" style={css}>
				{Title}
			</div>
			<div className='MenuDishs'>
				{Dishs}
			</div>
		</div>
	)
}

export default Menu;