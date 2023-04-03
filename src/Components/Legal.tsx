function Legal({ theme }) {
	const legalList = [
		{
			name: 'Utilisation',
			content: "Les serveurs, pour leurs bons fonctionnements, enregistrent des données telles que votre adresse IP et les notes que vous attribuez aux menus. La récupération de cette adresse ne sert qu’à deux choses : Faire des statistiques de fréquentation ainsi qu'éviter les notes dupliqués."
		},
		{
			name: 'La récuperation',
			content: "Votre adresse IP est récupérée lorsque vous accédez aux menus. Elle est aussi récupérée lorsque vous notez un menu."
		},
		{
			name: 'Nos engagements',
			content: "Nous nous engageons à ne jamais revendre ou partager ces données en dehors de l’équipe du site, hors cadre légal."
		},
		{
			name: 'Des questions ?',
			content: "Si l’enregistrement de l’une de ces données vous pose un problème, vous pouvez nous contacter ici : contact@menuvox.fr"
		}
	];

	return (
		<div className="legalPage">
			<div className={theme === 'dark' ? "legalBoxs legalBoxsDark" : 'legalBoxs'}>
				{legalList.map((Element: { name: string, content: string }, i) => {
					return (
						<div className="legalBox" key={i}>
							<div className="legalTitle">
								{Element.name}
							</div>
							<div className="legalContent">
								{Element.content}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Legal;