import { useState } from 'react';

import SideMenu from '../Components/SideMenu.tsx';

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


	return (
		<div>
			<SideMenu active={isActive} theme={theme} isActive={setisActive} />
			<div className="MenuButton" onClick={Click}>
				<div></div>
				<div style={css1}></div>
				<div style={css2}></div>
			</div>
		</div>
	)
}

export default MenuButton;