function Header() {
	return (
		<header className="game-header">
			<div className="game-header__content">
				<h1 className="game-header__title">Memory Card</h1>

				<p className="game-header__instructions">
					Click each GIF only once. The cards shuffle after every click.
				</p>
			</div>
		</header>
	);
}

export default Header;