/* eslint-disable eqeqeq */
import { SwiperSlide } from 'swiper/react';
import { Swiper } from "swiper/react";
import { EffectCards } from "swiper";

import Dish from './Dish';

function setMenu(d) {
	const today = new Date();
	const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
	const date = d.substring(0, 2);

	if (today.getDate() == date) {
		return 'Menu du jour';
	} else if (tomorrow.getDate() == date) {
		return 'Menu de demain';
	} else {
		return 'Menu du ' + d;
	}
}

function setMenuEvening(d) {
	return 'Menu de ce soir';
}

function MenuSwiper({ menus, isEvening, css, theme }) {
	const rMenus = [];

	menus.forEach((menu, i) => {
		const title = setMenu(menu.date);
		if (menu.error === 1) {
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
			)
		} else {
			rMenus.push(
				<SwiperSlide key={i} style={css}>
					<div className="Menu">
						<div className="MenuTitle">
							{title}
						</div>
						<div className='MenuDishs'>
							{menu.menu.map((dish, i) => {
								return (
									<Dish key={i} dish={dish} theme={theme} />
								);
							})
							}
						</div>
					</div>
				</SwiperSlide>
			)
		}
		if (isEvening) {
			const titleEvening = setMenuEvening(menu.date);
			if (menu.errorEvening === 1) {
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
				)
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
								})
								}
							</div>
						</div>
					</SwiperSlide>
				)
			}
		}
	});
	return (
		<Swiper
			effect={"cards"}
			modules={[EffectCards]}
			className="mySwiper"
		>
			{rMenus}
		</Swiper>
	);
}


export default MenuSwiper;