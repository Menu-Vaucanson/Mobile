import SideMenuLight from '../Themes/SideBar/Light';
import SideMenuDark from '../Themes/SideBar/Dark';

import SideMenuButtonLight from '../Themes/SideMenuButton/Light';
import SideMenuButtonDark from '../Themes/SideMenuButton/Dark';

function SideMenu({ active, theme }) {
	let css = Object.assign({}, SideMenuLight, { 'transform': '' });
	if (active) {
		css = Object.assign({}, css, { 'transform': 'translateX(100vw)' });
	}

	if (theme === 'dark') {
		css = Object.assign({}, css, SideMenuDark);
	}

	let Css = SideMenuButtonLight;
	if (theme === 'dark') {
		Css = SideMenuButtonDark;
	}

	return (
		<div className="SideMenu" style={css}>
			<div style={Css}>Menu du soir</div>
			<div style={Css}>Paramètres</div>
			<div style={Css}>Informations</div>
			<div style={Css}>Contact</div>
		</div>
	)
}

export default SideMenu;