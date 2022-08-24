import { useState } from 'react';

import SideMenu from '../Components/SideMenu';

function MenuButton({ theme }) {
	const [isActive, setisActive] = useState(true);
	function Click() {
		setisActive(old => !old);
	}

	return (
		<div>
			<SideMenu active={isActive} theme={theme} />
			<div className="MenuButton" onClick={Click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default MenuButton;