import MenuButton from '../Components/MenuButton';

import MenuBarLight from '../Themes/MenuBar/Light';
import MenuBarDark from '../Themes/MenuBar/Dark';

function MenuBar({ theme }) {
	let css = MenuBarLight;
	if (theme === 'dark') {
		css = MenuBarDark;
	}

	return (
		<div className="MenuBar" style={css}>
			<MenuButton theme={theme} />
			<div className='MenuBarTitle'>
				Menu Vaucanson
			</div>
		</div>
	)
}

export default MenuBar;