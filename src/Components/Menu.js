import Dish from './Dish';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import MenuLight from '../Themes/Menu/Light';
import MenuDark from '../Themes/Menu/Dark';

function Menu({ menus, theme }) {
	const isEvening = JSON.parse(window.localStorage.getItem('evening'));

	let css = MenuLight;
	if (theme === 'dark') {
		css = MenuDark;
	}

	const rMenus = [];

	menus.forEach(menu => {
		if (menu.error === 1) {
			rMenus.push(
				<SwiperSlide key={1} style={css}>
					<div className="Menu">
						<div className="MenuTitle">
							{menu.date}
						</div>
						<div className="MenuError">
							{menu.errorMessage}
						</div>
					</div>
				</SwiperSlide>
			)
		} else {
			rMenus.push(
				<SwiperSlide key={1} style={css}>
					<div className="Menu">
						<div className="MenuTitle">
							Menu du jour
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
			if (menu.errorEvening === 1) {
				rMenus.push(
					<SwiperSlide key={1} style={css}>
						<div className="Menu">
							<div className="MenuTitle">
								{menu.date}
							</div>
							<div className="MenuError">
								{menu.errorEveningMessage}
							</div>
						</div>
					</SwiperSlide>
				)
			} else {
				rMenus.push(
					<SwiperSlide key={1} style={css}>
						<div className="Menu">
							<div className="MenuTitle">
								Menu du soir
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
	})

	return (
		<Swiper
			effect={"cards"}
			modules={[EffectCards]}
			className="mySwiper"
		>
			{rMenus}
		</Swiper>
	)
}

export default Menu;