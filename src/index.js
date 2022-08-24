import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Stylesheets/index.css';
import MenuBar from './Components/MenuBar';

import Menu from './Components/Menu';
import E404 from './Components/404';
import Data from './data.json';

import App from './Themes/App';
import AppDark from './Themes/AppDark';
import Contact from './Components/Contact';


//window.localStorage.setItem('theme', JSON.stringify('dark'));
window.localStorage.clear();

let theme = JSON.parse(window.localStorage.getItem('theme'));
if (theme !== 'dark' && theme !== 'light') {
	theme = 'light';
}

let css = App;
if (theme === 'dark') {
	css = AppDark;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<MenuBar text='Menu Vaucanson' theme={theme} />
		<div className='App' style={css}>
			<Routes>
				<Route path='/' element={<Menu Title={"Menu du jour"} menu={Data} theme={theme} />}></Route>
				<Route path='/Contact' element={<Contact theme={theme} />}></Route>
				<Route path='/*' element={<E404 />}></Route>
			</Routes>
		</div>
	</BrowserRouter >
);