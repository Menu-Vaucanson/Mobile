import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import E404 from './404';
import Contact from './Contact';
import Informations from './Informations';
import Legal from './Legal';
import Menu from './Menu';
import MenuBar from './MenuBar';
import Project from './Project';
import Settings from './Settings';

import App from '../Themes/App';
import AppDark from '../Themes/AppDark';

function Main() {
	let [theme, setTheme] = useState(JSON.parse(window.localStorage.getItem('theme') as string));
	if (theme !== 'dark' && theme !== 'light') {
		theme = 'light';
	}

	let css = App;
	if (theme === 'dark') {
		css = AppDark;
	}

	return (
		<div>
			<MenuBar theme={theme} />
			<div className='App' style={css}>
				<Routes>
					<Route path='/' element={<Menu theme={theme} />}></Route>
					<Route path='/Contact' element={<Contact theme={theme} />}></Route>
					<Route path='/Informations' element={<Informations theme={theme} />}></Route>
					<Route path='/Settings' element={<Settings theme={theme} setTheme={setTheme} />}></Route>
					<Route path='/Project' element={<Project />}></Route>
					<Route path='/Legal' element={<Legal theme={theme} />}></Route>
					<Route path='/*' element={<E404 theme={theme} />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default Main;