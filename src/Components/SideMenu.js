import { Link } from 'react-router-dom';

import SideMenuLight from '../Themes/SideBar/Light';
import SideMenuDark from '../Themes/SideBar/Dark';

import SideMenuButtonLight from '../Themes/SideMenuButton/Light';
import SideMenuButtonDark from '../Themes/SideMenuButton/Dark';

function SideMenu({ active, theme, isActive }) {
	let css = Object.assign({}, SideMenuLight, { 'transform': '' });

	if (active) {
		css = Object.assign({}, css, { 'transform': 'translateX(110vw)' });
	}

	if (theme === 'dark') {
		css = Object.assign({}, css, SideMenuDark);
	}

	let Css = SideMenuButtonLight;
	if (theme === 'dark') {
		Css = SideMenuButtonDark;
	}

	function Click() {
		isActive(old => !old);
	}

	return (
		<div className="SideMenu" style={css}>
			<Link to={'/'} className='SideMenuElement' onClick={Click}><div style={Css}>Menu du jour</div></Link>
			<Link to={'/Soir'} className='SideMenuElement' onClick={Click}><div style={Css}>Menu du soir</div></Link>
			<Link to={'/Settings'} className='SideMenuElement' onClick={Click}><div style={Css}>Paramètres</div></Link>
			<Link to={'/Infos'} className='SideMenuElement' onClick={Click}><div style={Css}>Informations</div></Link>
			<Link to={'/Contact'} className='SideMenuElement' onClick={Click}><div style={Css}>Contact</div></Link>
		</div>
	)
}

export default SideMenu;