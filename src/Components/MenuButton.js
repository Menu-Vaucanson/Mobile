import { useState } from 'react';

import SideMenu from '../Components/SideMenu';

function MenuButton({ theme }) {
	const [isActive, setisActive] = useState(false);
	function Click() {
		setisActive(old => !old);
	}

	return (
		<div>
			<SideMenu active={isActive} theme={theme} isActive={setisActive} />
			<div className="MenuButton" onClick={Click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default MenuButton;