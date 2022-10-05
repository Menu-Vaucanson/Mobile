function Star({ state, number, onClick }) {
	let color = 'black';
	if (state) {
		color = 'yellow';
	}

	return (
		<svg onClick={() => onClick(number)} className="Star" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 95.11">
			<polygon fill={color}
				points="50 0 61.8 36.33 100 36.33 69.1 58.78 80.9 95.11 50 72.65 19.1 95.11 30.9 58.78 0 36.33 38.2 36.33 50 0" />
		</svg>
	);
}

export default Star;