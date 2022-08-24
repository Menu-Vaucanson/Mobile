import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Stylesheets/index.css';

import Main from './Components/Main';


//window.localStorage.setItem('theme', JSON.stringify('dark'));
//window.localStorage.clear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter >
);