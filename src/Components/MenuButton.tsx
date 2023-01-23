import { useState } from 'react';

import SideMenu from '../Components/SideMenu';

import Dark from '../Themes/SideMenuButtonDiv/Dark';
import Light from '../Themes/SideMenuButtonDiv/Light';

function MenuButton({ theme }) {
	const [isActive, setisActive] = useState(false);
	function Click() {
		setisActive(old => !old);
	}

	let css1 = {};
	let css2 = {};
	if (isActive) {
		css1 = { 'transform': 'translateX(1.5vmax)' }
		css2 = { 'transform': 'translateX(3vmax)' }
	}

	let cssButton = Light;
	if (theme === 'dark') {
		cssButton = Dark;
	}

	Object.assign(css1, cssButton);
	Object.assign(css2, cssButton);


	return (
		<div>
			<SideMenu active={isActive} theme={theme} isActive={setisActive} />
			<div className="MenuButton " onClick={Click}>
				<div style={cssButton}></div>
				<div style={css1}></div>
				<div style={css2}></div>
			</div>
		</div>
	);
}

export default MenuButton;