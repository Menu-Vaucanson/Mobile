import Corinan from '../Assets/Corinan.png';
import Unel from '../Assets/Unel.png';
import Wiwok from '../Assets/Wiwok.png';

function Motivation() {
	return (
		<div className='Motivation'>
			<div className="MotivationTitle">Motivation</div>
			<div className="MotivationText">
				Le site a été créé afin que chacun puisse consulter le menu avant de réserver son repas.
				<br />
				Et également pour satisfaire un besoin de consultation universel : nous ne comptons plus le nombre de fois où nous nous sommes interrogés sur la composition du menu.
				<br />
				<br />
				Il a donc été pensé dans l’optique d’être un menu de poche, pratique à l’utilisation.
			</div>
		</div>
	);
}

function Contributor({ name, desc, img }) {
	return (
		<div className='ContributorBox'>
			<img src={img} className="ContributorIcon" alt={name} />
			<div className='ContributorName'>{name}</div>
			<div className='ContributorDescription'>{desc}</div>
		</div>
	);
}

function Contributors() {
	let contributors = [
		{
			name: 'Wiwok',
			desc: 'Fondateur, Développeur, Designer',
			img: Wiwok
		},
		{
			name: 'Unel',
			desc: 'Développeur, Designer',
			img: Unel
		},
		{
			name: 'Corinan',
			desc: 'Designer, Testeur',
			img: Corinan
		}
	];

	const C = contributors.map((c, i) => {
		return <Contributor name={c.name} desc={c.desc} img={c.img} key={i} />
	});


	return (
		<div className='ContributorsBox'>
			<div className='ContributorsTitle'>Contributeurs</div>
			{C}
		</div>
	);
}

function TimeLineComp({ title, text, date }) {
	return (
		<div className="TimelineElement">
			<div className="TimelineIcon"></div>
			<div className="TimelineBody">
				<div className='TimelineTitle'>{title}</div>
				<p>{text}</p>
				<p className="TimelineDate">{date}</p>
			</div>
		</div>
	);
}

function Timeline() {
	let timelineElements = [
		{
			title: "Début du projet",
			description: "Wiwok écrit les premières lignes de code de ce projet.",
			date: "25 Mars 2022"
		},
		{
			title: "Premier menu en ligne",
			description: "Wiwok met en ligne le premier menu sur le site.",
			date: "4 Avril 2022"
		},
		{
			title: "Unel rejoint le projet",
			description: "Unel rejoint le projet, il aide Wiwok dans le développement.",
			date: "12 Juin 2022"
		},
		{
			title: "Un nouveau site ?",
			description: "Wiwok et Unel réfléchissent sérieusement à refaire l’interface complète du site.",
			date: "10 Juillet 2022"
		},
		{
			title: "Un nouveau site !",
			description: "Il est maintenant décidé que le site doit être refait de manière plus propre. Les premières maquettes sont créées.",
			date: "24 Juillet 2022"
		},
		{
			title: "Corinan nous rejoint",
			description: "On n'a jamais trop d’aide, Corinan vient en renfort sur les maquettes, les corrections, etc...",
			date: "9 Août 2022"
		},
		{
			title: "Le site est en test",
			description: "Le site est terminé, il est en test et des petits fignolages sont en cours.",
			date: "1 Septembre 2022"
		},
		{
			title: "Le projet est open-source",
			description: "Le projet passe en open-source ! Le code est donc ouvert à tout le monde sur GitHub.",
			date: "10 Septembre 2022"
		},
		{
			title: "Le site devient bien plus sécurisé",
			description: "Le site fait un grand bond en termes de sécurité, il est désormais noté A+ par la plupart des audits de sécurité web !",
			date: "3 Octobre 2022"
		},
		{
			title: "Le site dépasse les 1 000 vues mensuelles",
			description: "Le site cummule un total de 1161 vues pour le mois de Novembre, un record !",
			date: "1 Décembre 2022"
		},
		{
			title: "Le site dépasse les 2 000 vues mensuelles",
			description: "Le site cummule un total de 2000 vues pour le mois de Mars, un record !",
			date: "1 Avril 2022"
		}
	];

	const T = timelineElements.map((t: { title: string, description: string, date: string }, i: number) => {
		return <TimeLineComp title={t.title} text={t.description} date={t.date} key={i} />
	});

	return (
		<div className="Timeline">
			{T}
		</div>
	);
}

function Project() {
	return (
		<div className='ProjectBox'>
			<Motivation />
			<Contributors />
			<Timeline />
		</div>
	);
}

export default Project;