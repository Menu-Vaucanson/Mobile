import { useState, useEffect } from 'react';
import axios from 'axios';

import "swiper/css";
import "swiper/css/effect-cards";

import MenuLight from '../Themes/Menu/Light';
import MenuDark from '../Themes/Menu/Dark';

import MenuSwiper from './MenuSwiper';

const url = 'https://menuvox.fr:8080';

function getMenusDate() {
	const menus = [];
	const date = new Date();
	const date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
	const date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
	const date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
	const date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
	switch (date.getDay()) {
		case 1:
			menus.push(getMenu(date.getMonth(), date.getDate()));
			menus.push(getMenu(date1.getMonth(), date1.getDate()));
			menus.push(getMenu(date2.getMonth(), date2.getDate()));
			menus.push(getMenu(date3.getMonth(), date3.getDate()));
			menus.push(getMenu(date4.getMonth(), date4.getDate()));
			break;

		case 2:
			menus.push(getMenu(date.getMonth(), date.getDate()));
			menus.push(getMenu(date1.getMonth(), date1.getDate()));
			menus.push(getMenu(date2.getMonth(), date2.getDate()));
			menus.push(getMenu(date3.getMonth(), date3.getDate()));
			break;

		case 3:
			menus.push(getMenu(date.getMonth(), date.getDate()));
			menus.push(getMenu(date1.getMonth(), date1.getDate()));
			menus.push(getMenu(date2.getMonth(), date2.getDate()));
			break;

		case 4:
			menus.push(getMenu(date.getMonth(), date.getDate()));
			menus.push(getMenu(date1.getMonth(), date1.getDate()));
			break;

		case 5:
			menus.push(getMenu(date.getMonth(), date.getDate()));
			break;

		case 6:
			menus.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, errorEveningMessage: 'Bon week-end !', date: new Date().getDate().toString() });
			break;

		default:
			menus.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, errorEveningMessage: 'Bon week-end !', date: new Date().getDate().toString() });
			break;
	}
	return menus;
}

function getMenu(month, day) {
	return new Promise(resolve => {
		axios.get(`${url}/menus/${month + 1}/${day}`).catch(err => {
			resolve(null);
		}).then(response => {
			resolve(response.data.data);
		});
	});
}

function Menu({ theme }) {
	const [menu, setMenu] = useState('');

	useEffect(() => {
		const isEvening = JSON.parse(window.localStorage.getItem('evening'));

		let css = MenuLight;
		if (theme === 'dark') {
			css = MenuDark;
		}
		const cache = JSON.parse(sessionStorage.getItem('menuCache'));
		if (cache) {
			setMenu(<MenuSwiper menus={cache} isEvening={isEvening} css={css} theme={theme} />);
			return;
		}

		Promise.all(getMenusDate()).then(data => {
			const datas = [];
			data.forEach(d => {
				console.log(d);
				if (d) {
					datas.push(d);
				}
			})
			sessionStorage.setItem('menuCache', JSON.stringify(datas));
			setMenu(<MenuSwiper menus={datas} isEvening={isEvening} css={css} theme={theme} />);
		})
	}, [theme])

	return (menu);
}

export default Menu;