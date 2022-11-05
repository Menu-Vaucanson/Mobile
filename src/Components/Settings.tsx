import { useState } from 'react';

import CustomCheck from "./CustomCheck";

function Settings({ theme, setTheme }) {
	let actualTheme = false
	if (theme === 'dark') {
		actualTheme = true;
	}

	const actualEvening = JSON.parse(window.localStorage.getItem('evening') as string);


	const [Button1, setButton1] = useState(actualTheme);
	const [Button2, setButton2] = useState(actualEvening);

	function DarkClick() {
		setButton1(old => {
			if (old) {
				setTheme('light');
				window.localStorage.setItem('theme', JSON.stringify('light'));
				return false;
			} else {
				setTheme('dark');
				window.localStorage.setItem('theme', JSON.stringify('dark'));
				return true;
			}
		});
	}

	function EveningClick() {
		setButton2((old: any) => {
			if (old) {
				window.localStorage.setItem('evening', JSON.stringify(false));
				return false;
			} else {
				window.localStorage.setItem('evening', JSON.stringify(true));
				return true;
			}
		});
	}

	function CleanClick() {
		window.sessionStorage.clear();
	}

	function DeleteClick() {
		setTheme('light');
		setButton1(false)
		setButton2(false);
		window.localStorage.clear();
		window.sessionStorage.clear();
	}

	return (
		<div className="Settings">
			<div className='Setting' onClick={DarkClick}>Mode sombre<CustomCheck type={Button1} /></div>
			<div className='Setting' onClick={EveningClick}>Mode interne <CustomCheck type={Button2} /></div>
			<div className='Setting' onClick={CleanClick}>Effacer le cache</div>
			<div className='Setting red' onClick={DeleteClick}>Effacer toute les données</div>
		</div>
	);
}

export default Settings;