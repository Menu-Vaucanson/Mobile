import { useState } from 'react';

import SideMenu from '../Components/SideMenu';

import Dark from '../Themes/SideMenuButtonDiv/Dark';
import Light from '../Themes/SideMenuButtonDiv/Light';

function MenuButton({ theme }) {
	const [isActive, setIsActive] = useState(false);
	function Click() {
		setIsActive(old => !old);
	}

	let css1 = {};
	let css2 = {};
	if (isActive) {
		css1 = { 'transform': 'translateX(1.5vmax)' }
		css2 = { 'transform': 'translateX(3vmax)' }
	}

	const cssButton = theme === 'dark' ? Dark : Light;

	Object.assign(css1, cssButton);
	Object.assign(css2, cssButton);


	return (
		<div>
			<SideMenu active={isActive} theme={theme} isActive={setIsActive} />
			<div className="MenuButton " onClick={Click}>
				<div style={cssButton}></div>
				<div style={css1}></div>
				<div style={css2}></div>
			</div>
		</div>
	);
}

export default MenuButton;