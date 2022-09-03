import Unel from '../Assets/Unel.png'
import Wiwok from '../Assets/Wiwok.png'
import Corinan from '../Assets/Corinan.png'


function Motivation() {
	return (
		<div className='Motivation'>
			<div className="MotivationTitle">Motivation</div>
			<div className="MotivationText">
				Le site a été créé, car chaque matin, nous allions consulter le menu avant de l’oublier quelques instants plus tard.<br />
				Ce site a donc été créé dans l’optique d’être un menu de poche, pratique à l’utilisation.
			</div>
		</div>
	)
}

function Contributor({ name, desc, img }) {
	return (
		<div className='ContributorBox'>
			<img src={img} className="ContributorIcon" alt={name} />
			<div className='ContributorName'>{name}</div>
			<div className='ContributorDescription'>{desc}</div>
		</div>
	)
}

function Contributors() {
	let Contributors = [{ name: 'Wiwok', desc: 'Fondateur, Développeur, Designer', img: Wiwok }, { name: 'Unel', desc: 'Développeur, Designer', img: Unel }, { name: 'Corinan', desc: 'Designer, Testeur', img: Corinan }];


	Contributors = Contributors.map((c, i) => {
		return <Contributor name={c.name} desc={c.desc} img={c.img} key={i} />
	})

	return (
		<div className='ContributorsBox'>
			<div className='ContributorTitle'>Contributeurs</div>
			{Contributors}
		</div>
	)
}

function Project({ theme }) {
	return (
		<div className='ProjectBox'>
			<Motivation />
			<Contributors />
		</div>
	)
}

export default Project;