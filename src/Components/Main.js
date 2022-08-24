import { Routes, Route } from 'react-router-dom';

import MenuBar from './MenuBar';
import Menu from './Menu';
import E404 from './404';
import Data from '../data.json';
import Contact from './Contact';
import Informations from './Informations';
import Settings from './Settings';

import App from '../Themes/App';
import AppDark from '../Themes/AppDark';

import { useState } from 'react';

function Main() {
	let [theme, settheme] = useState(JSON.parse(window.localStorage.getItem('theme')));
	if (theme !== 'dark' && theme !== 'light') {
		theme = 'light';
	}

	let css = App;
	if (theme === 'dark') {
		css = AppDark;
	}
	return (
		<div>
			<MenuBar text='Menu Vaucanson' theme={theme} />
			<div className='App' style={css}>
				<Routes>
					<Route path='/' element={<Menu Title={"Menu du jour"} menu={Data} theme={theme} />}></Route>
					<Route path='/Contact' element={<Contact theme={theme} />}></Route>
					<Route path='/Informations' element={<Informations theme={theme} />}></Route>
					<Route path='/Settings' element={<Settings theme={theme} settheme={settheme} />}></Route>
					<Route path='/*' element={<E404 />}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default Main;