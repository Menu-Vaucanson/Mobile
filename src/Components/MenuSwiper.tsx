import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";

import Dish from './Dish';
import Rate from './Rate';

function setMenu(d: string) {
	const today = new Date();
	const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

	const date = new Date(today.getFullYear(), parseInt(d?.substring(3, 5)) - 1, parseInt(d?.substring(0, 2)));

	const Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

	if (today.getDate() === date.getDate()) {
		return 'Menu du Jour';
	} else if (tomorrow.getDate() === date.getDate()) {
		return 'Menu de Demain';
	} else {
		return 'Menu de ' + Days[date.getDay()];
	}
}

function setMenuEvening(d: string) {
	const today = new Date();
	const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

	const date = new Date(today.getFullYear(), parseInt(d?.substring(3, 5)) - 1, parseInt(d?.substring(0, 2)));

	const Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

	if (today.getDate() === date.getDate()) {
		return 'Menu de ce soir';
	} else if (tomorrow.getDate() === date.getDate()) {
		return 'Menu de demain soir';
	} else {
		return 'Menu de ' + Days[date.getDay()] + ' soir';
	}
}

function MenuSwiper({ menus, isEvening, css, theme }) {
	const rMenus: Array<JSX.Element> = [];

	menus.forEach((menu: { menu: Array<JSX.Element>, evening: Array<JSX.Element>, error: number, date: string, errorMessage: string, month: number, day: number, errorEvening: string, errorEveningMessage: string }, i: number) => {
		const title = setMenu(menu.date);
		if (menu.error) {
			rMenus.push(
				<SwiperSlide key={i} style={css}>
					<div className="Menu">
						<div className="MenuTitle">
							{title}
						</div>
						<div className="MenuError">
							{menu.errorMessage}
						</div>
					</div>
				</SwiperSlide>
			);
		} else {
			rMenus.push(
				<SwiperSlide key={i} style={css}>
					<div className="Menu">
						<div className="MenuTitle">
							{title}
						</div>
						<div className='MenuDishs'>
							{menu.menu.map((dish: {}, i: number) => {
								return (
									<Dish key={i} dish={dish} theme={theme} />
								);
							})}
						</div>
						<Rate month={menu.month} day={menu.day} evening={false} />
					</div>
				</SwiperSlide>
			);
		}
		if (isEvening) {
			const titleEvening = setMenuEvening(menu.date.toString());
			if (menu.errorEvening) {
				if (typeof menu.errorEveningMessage != 'undefined') {
					rMenus.push(
						<SwiperSlide key={i + 0.1} style={css}>
							<div className="Menu">
								<div className="MenuTitle">
									{titleEvening}
								</div>
								<div className="MenuError">
									{menu.errorEveningMessage}
								</div>
							</div>
						</SwiperSlide>
					);
				}
			} else {
				rMenus.push(
					<SwiperSlide key={i + 0.1} style={css}>
						<div className="Menu">
							<div className="MenuTitle">
								{titleEvening}
							</div>
							<div className='MenuDishs'>
								{menu.evening.map((dish, i) => {
									return (
										<Dish key={i} dish={dish} theme={theme} />
									);
								})}
							</div>
							<Rate month={menu.month} day={menu.day} evening={true} />
						</div>
					</SwiperSlide>
				);
			}
		}
	});
	return (
		<Swiper effect={"cards"} modules={[EffectCards]}>
			{rMenus}
		</Swiper>
	);
}


export default MenuSwiper;