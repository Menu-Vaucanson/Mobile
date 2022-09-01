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
			menus.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, date: new Date().getDate().toString() });
			break;

		default:
			menus.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, date: new Date().getDate().toString() });
			break;
	}
	return menus;
}

function getMenu(month, day) {
	return new Promise(resolve => {
		axios.get(`${url}/menus/${month + 1}/${day}`).catch(err => {
			console.log(err);
			resolve(null);
		}).then(response => {
			if (typeof response == 'undefined') {
				resolve(null);
			} else {
				const data = response.data.data;
				data.month = month;
				data.day = day;
				resolve(data);
			}
		});
	});
}

function Menu({ theme }) {
	let css = MenuLight;
	if (theme === 'dark') {
		css = MenuDark;
	}
	const [menu, setMenu] = useState(
		<div className="MenuWaiting" style={css}>
			<div className="WaitingError">
				Récupération des menus en cours...
			</div>
		</div>
	);

	useEffect(() => {
		const isEvening = JSON.parse(window.localStorage.getItem('evening'));

		const cache = JSON.parse(sessionStorage.getItem('menuCache'));
		if (cache) {
			if (cache.length) {
				setMenu(
					<div className="Menu">
						<div className="MenuTitle">
							Aucun menu à afficher
						</div>
					</div>
				);
				return;
			}
			setMenu(<MenuSwiper menus={cache} isEvening={isEvening} css={css} theme={theme} />);
			return;
		}

		Promise.all(getMenusDate()).then(data => {
			const datas = [];
			data.forEach(d => {
				if (d) {
					datas.push(d);
				}
			})
			if (!datas.length) {
				setMenu(
					<div className="MenuWaiting" style={css}>
						<div className="WaitingError">
							Aucun menu à afficher
						</div>
					</div>
				);
				return;
			}
			sessionStorage.setItem('menuCache', JSON.stringify(datas));
			setMenu(<MenuSwiper menus={datas} isEvening={isEvening} css={css} theme={theme} />);
		})
	}, [theme, css])
	return (menu);
}

export default Menu;