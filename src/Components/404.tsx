function E404({ theme }) {
	let css = {};
	if (theme === 'dark') {
		css = {
			color: '#F5FEF5'
		}
	}
	return (
		<div style={css}>
			La page que vous cherchez n'existe pas.
		</div>
	)
}

export default E404;