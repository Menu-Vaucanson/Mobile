import { useState, useEffect } from 'react';
import axios from 'axios';
import JSConfetti from 'js-confetti';

import Star from './Star';

let selected = 0;

const url = 'https://menuvox.fr:8080'

function getRate(month, day, evening) {
	if (evening) {
		return new Promise(resolve => {
			axios.get(`${url}/ratesEvening/${month + 1}/${day}`).catch(err => {
				resolve(null);
			}).then(response => {
				resolve(response.data);
			});
		});
	} else {
		return new Promise(resolve => {
			axios.get(`${url}/rates/${month + 1}/${day}`).catch(err => {
				resolve(null);
			}).then(response => {
				resolve(response.data);
			});
		});
	}
}

function postRate(month, day, rate, evening) {
	if (evening) {
		return new Promise(resolve => {
			axios.post(`${url}/ratesEvening/${month + 1}/${day}`, { rate: rate, pc: false }).catch(err => {
				resolve(null);
			}).then(response => {
				resolve(response?.data);
			});
		});
	} else {
		return new Promise(resolve => {
			axios.post(`${url}/rates/${month + 1}/${day}`, { rate: rate, pc: false }).catch(err => {
				resolve(null);
			}).then(response => {
				resolve(response?.data);
			});
		});

	}
}

function Rate({ month, day, evening }) {
	const [star1, setStar1] = useState(false);
	const [star2, setStar2] = useState(false);
	const [star3, setStar3] = useState(false);
	const [star4, setStar4] = useState(false);
	const [star5, setStar5] = useState(false);

	const [sendButton, setSendButton] = useState('');

	const [StarsCss, setStarsCss] = useState({});

	function sendRate() {
		let rates = JSON.parse(window.localStorage.getItem('rates'));
		if (rates == null) {
			rates = [];
		}
		if (evening) {
			rates.push(`${month}/${day}e`);
		} else {
			rates.push(`${month}/${day}`);
		}
		window.localStorage.setItem('rates', JSON.stringify(rates));
		setStarsCss({ 'display': 'none' });
		setSendButton(
			<div className='MenuRate'>
				<div className='RateText'>
					Envoi en cours...
				</div>
			</div>
		);
		postRate(month, day, selected, evening);
		setSendButton(
			<div className='MenuRate'>
				<div className='RateText'>
					Récupération en cours...
				</div>
			</div>
		);
		getRate(month, day, evening).then(rate => {
			const jsConfetti = new JSConfetti();
			if (selected === 1) {
				jsConfetti.addConfetti({ emojis: ['💩'] });
			} else if (selected === 2) {
				jsConfetti.addConfetti({ emojis: ['🍴'] });
			} else if (selected === 4) {
				jsConfetti.addConfetti({ emojis: ['⭐'] });
			} else if (selected === 5) {
				jsConfetti.addConfetti({ emojis: ['🤩'] });
			} else {
				jsConfetti.addConfetti({
					confettiColors: [
						'#4775FF', '#E74855', '#08A47C', '#FFC482'
					],
					confettiNumber: 500,
					confettiRadius: 10
				});
			}
			if (rate != null && rate.rate != null) {
				setSendButton(
					<div className='MenuRate'>
						<div className='RateText'>
							La moyenne est de {rate.rate}
						</div>
					</div>);
			} else {
				setSendButton(
					<div className='MenuRate'>
						<div className='RateText'>
							Merci !
						</div>
					</div>
				);
			}
		});
	}

	function SendButton() {
		return (
			<div className='SendButton' onClick={sendRate}>
				Envoyer
			</div>
		)
	}

	function setStar(number) {
		if (number === selected) {
			selected = 0;
			setStar1(false);
			setStar2(false);
			setStar3(false);
			setStar4(false);
			setStar5(false);
			setSendButton('');
		} else if (number === 1) {
			selected = 1;
			setStar1(true);
			setStar2(false);
			setStar3(false);
			setStar4(false);
			setStar5(false);
			setSendButton(<SendButton />);
		} else if (number === 2) {
			selected = 2;
			setStar1(true);
			setStar2(true);
			setStar3(false);
			setStar4(false);
			setStar5(false);
			setSendButton(<SendButton />);
		} else if (number === 3) {
			selected = 3;
			setStar1(true);
			setStar2(true);
			setStar3(true);
			setStar4(false);
			setStar5(false);
			setSendButton(<SendButton />);
		} else if (number === 4) {
			selected = 4;
			setStar1(true);
			setStar2(true);
			setStar3(true);
			setStar4(true);
			setStar5(false);
			setSendButton(<SendButton />);
		} else {
			selected = 5;
			setStar1(true);
			setStar2(true);
			setStar3(true);
			setStar4(true);
			setStar5(true);
			setSendButton(<SendButton />);
		}
	}

	useEffect(() => {
		const rates = JSON.parse(window.localStorage.getItem('rates'));
		if (rates != null) {
			if (evening) {
				if (rates.includes(`${month}/${day}e`)) {
					setStarsCss({ 'display': 'none' });
					getRate(month, day, evening).then(rate => {
						if (rate != null && rate.rate != null) {
							setSendButton(<div className='RateText'>
								La moyenne est de {rate.rate}
							</div>);
						}
					});
				}
			} else {
				if (rates.includes(`${month}/${day}`)) {
					setStarsCss({ 'display': 'none' });
					getRate(month, day, evening).then(rate => {
						if (rate != null && rate.rate != null) {
							setSendButton(
								<div className='RateText'>
									La moyenne est de {rate.rate}
								</div>);
						}
					});
				}
			}
		}
	}, [day, month, evening]);
	const date = new Date();
	if (month !== date.getMonth() || day !== date.getDate()) {
		return ('');
	}

	const menuDate = new Date(new Date().getFullYear(), month, day, 11, 45);
	const EveningDate = new Date(new Date().getFullYear(), month, day, 19)
	const currentDate = new Date();
	if (evening && EveningDate >= currentDate) {
		return (
			<div className='MenuRate'>
				<div className='RateText'>
					Les votes sont ouverts à 19h00.
				</div>
			</div>
		);
	}
	if (menuDate >= currentDate) {
		return (
			<div className='MenuRate'>
				<div className='RateText'>
					Les votes sont ouverts à 11h45.
				</div>
			</div>
		);
	}
	return (
		<div className='MenuRate'>
			<div className='Stars' style={StarsCss}>
				<Star onClick={setStar} number={1} state={star1} />
				<Star onClick={setStar} number={2} state={star2} />
				<Star onClick={setStar} number={3} state={star3} />
				<Star onClick={setStar} number={4} state={star4} />
				<Star onClick={setStar} number={5} state={star5} />
			</div>
			{sendButton}
		</div >
	);
}

export default Rate;