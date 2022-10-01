import { Link } from 'react-router-dom';

import SideMenuLight from '../Themes/SideBar/Light';
import SideMenuDark from '../Themes/SideBar/Dark';

import SideMenuButtonLight from '../Themes/SideMenuButton/Light';
import SideMenuButtonDark from '../Themes/SideMenuButton/Dark';

function SideMenu({ active, theme, isActive }) {
	let css = Object.assign({}, SideMenuLight, { 'transform': '' });
	let Css = Object.assign({}, SideMenuButtonLight, { 'transform': 'translateX(-30vw)' });

	if (active) {
		css = Object.assign({}, css, { 'transform': 'translateX(110vw)' });
		Css = Object.assign({}, Css, { 'transform': '' })
	}

	if (theme === 'dark') {
		css = Object.assign({}, css, SideMenuDark);
		Css = Object.assign({}, Css, SideMenuButtonDark);
	}

	function Click() {
		isActive(old => !old);
	}

	return (
		<div className="SideMenu" style={css}>
			<Link to={'/'} className='SideMenuElement' onClick={Click}><div style={Css}>Accueil</div></Link>
			<Link to={'/Project'} className='SideMenuElement' onClick={Click}><div style={Css}>Projet</div></Link>
			<Link to={'/Informations'} className='SideMenuElement' onClick={Click}><div style={Css}>Informations</div></Link>
			<Link to={'/Settings'} className='SideMenuElement' onClick={Click}><div style={Css}>Paramètres</div></Link>
		</div>
	)
}

export default SideMenu;