import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Stylesheets/index.css';
import App from './App';
import MenuBar from './Components/MenuBar';

let theme = JSON.parse(window.localStorage.getItem('theme'));
if (theme !== 'dark' && theme !== 'light') {
	theme = 'light';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<MenuBar text='Test' theme={theme} />
		<App />
	</BrowserRouter>
);