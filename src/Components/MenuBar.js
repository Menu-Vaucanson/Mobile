import MenuButton from '../Components/MenuButton';
import Logo from '../Assets/Logo.png';
import MenuBarLight from '../Themes/MenuBar/Light';
import MenuBarDark from '../Themes/MenuBar/Dark';

import { Link } from 'react-router-dom';

function MenuBar({ theme }) {
	let css = MenuBarLight;
	if (theme === 'dark') {
		css = MenuBarDark;
	}

	return (
		<div className="MenuBar" style={css}>
			<MenuButton theme={theme} />
			<Link className='MenuBarTitle' to={'/'}>Menu Vaucanson</Link>
			<a className='MenuLogo' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'><img className='MenuLogo' src={Logo} alt='Logo' /></a>
		</div>
	)
}

export default MenuBar;