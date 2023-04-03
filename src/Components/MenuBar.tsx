import { Link } from 'react-router-dom';

import Logo from '../Assets/Logo.svg';
import MenuBarDark from '../Themes/MenuBar/Dark';
import MenuBarLight from '../Themes/MenuBar/Light';
import MenuButton from './MenuButton';


function MenuBar({ theme }) {
	const css = theme === 'dark' ? MenuBarDark : MenuBarLight;

	return (
		<div className="MenuBar" style={css}>
			<MenuButton theme={theme} />
			<Link className='MenuBarTitle' style={css} to='/'>Menu Vaucanson</Link>
			<a className='MenuLogo' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>
				<img className='MenuLogo' src={Logo} alt='Logo' />
			</a>
		</div>
	);
}

export default MenuBar;