import Dish from './Dish';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

function Menu({ Title, menu, theme }) {
	if (menu.error === 1) {
		return (
			<div className="Menu">
				<div className="MenuError">
					{menu.errorMessage}
				</div>
			</div>
		)
	}

	const Dishs = menu.menu.map((dish, i) => {
		return (
			<Dish key={i} dish={dish} theme={theme} />
		)
	});

	return (
		<Swiper
			effect={"cards"}
			modules={[EffectCards]}
			className="mySwiper"
		>

			<SwiperSlide key={1}>
				<div className="Menu">
					<div className="MenuTitle">
						{Title}
					</div>
					<div className='MenuDishs'>
						{Dishs}
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide key={2}>
				<div className="Menu">
					<div className="MenuTitle">
						{Title}
					</div>
					<div className='MenuDishs'>
						{Dishs}
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Menu;