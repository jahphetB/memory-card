function Scoreboard({ currentScore, bestScore }) {
	return (
		<section className="scoreboard">
			<div className="scoreboard__score scoreboard__score--current">
				<span className="scoreboard__label">Score</span>
				<span className="scoreboard__value">{currentScore}</span>
			</div>

			<div className="scoreboard__score scoreboard__score--best">
				<span className="scoreboard__label">Best Score</span>
				<span className="scoreboard__value">{bestScore}</span>
			</div>
		</section>
	);
}

export default Scoreboard;