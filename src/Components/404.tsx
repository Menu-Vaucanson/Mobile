function E404({ theme }) {
	const css = theme === 'dark' ? { color: '#F5FEF5' } : {};

	return (
		<div style={css}>
			La page que vous cherchez n'existe pas.
		</div>
	);
}

export default E404;