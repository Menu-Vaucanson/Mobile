import React from 'react';

import BlackStar from '../Assets/Black Star.svg';
import YellowStar from '../Assets/Yellow Star.svg';

function Star({ state, number, onClick }) {
	let color: string;
	if (state) {
		color = YellowStar;
	} else {
		color = BlackStar;
	}

	return (
		<img src={color} alt={`${number}/5`} className="Star" onClick={() => {
			onClick(number);
		}} />
	)
}

export default Star;