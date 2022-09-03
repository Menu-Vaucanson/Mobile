import BlackStar from '../Assets/Black Star.png';
import YellowStar from '../Assets/Yellow Star.png';

function Star({ state, number, onClick }) {
	let color;
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