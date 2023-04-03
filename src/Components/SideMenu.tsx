import { Link } from 'react-router-dom';

import SideMenuDark from '../Themes/SideBar/Dark';
import SideMenuLight from '../Themes/SideBar/Light';

import SideMenuButtonDark from '../Themes/SideMenuButton/Dark';
import SideMenuButtonLight from '../Themes/SideMenuButton/Light';

function SideMenu({ active, theme, isActive }) {
	let css = Object.assign({}, SideMenuLight, { 'transform': '' });
	let Css = Object.assign({}, SideMenuButtonLight);

	if (active) {
		css = Object.assign({}, css, { 'transform': 'translateX(110vw)' });
		Css = Object.assign({}, Css, { 'transform': '' });
	}

	if (theme === 'dark') {
		css = Object.assign({}, css, SideMenuDark);
		Css = Object.assign({}, Css, SideMenuButtonDark);
	}

	function Click() {
		isActive((old: boolean) => !old);
	}

	const list: Array<{ title: string, link: string }> = [
		{
			title: 'Accueil',
			link: '/'
		},
		{
			title: 'Projet',
			link: '/Project'
		},
		{
			title: 'Informations',
			link: '/Informations'
		},
		{
			title: 'Paramètres',
			link: '/Settings'
		}
	];

	return (
		<div className="SideMenu" style={css}>
			{list.map((element, i) => {
				return <Link to={element.link} key={i} className='SideMenuElement' onClick={Click}><div style={Css}>{element.title}</div></Link>
			})}
		</div>
	);
}

export default SideMenu;