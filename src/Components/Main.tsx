import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MenuBar from './MenuBar.tsx';
import Menu from './Menu.tsx';
import E404 from './404.tsx';
import Contact from './Contact.tsx';
import Informations from './Informations.tsx';
import Settings from './Settings.tsx';
import Project from './Project.tsx'

import App from '../Themes/App.ts';
import AppDark from '../Themes/AppDark.ts';

function Main() {
	let [theme, settheme] = useState(JSON.parse(window.localStorage.getItem('theme') as string));
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
					<Route path='/Settings' element={<Settings theme={theme} settheme={settheme} />}></Route>
					<Route path='/Project' element={<Project />}></Route>
					<Route path='/*' element={<E404 theme={theme} />}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default Main;