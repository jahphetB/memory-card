import Card from "./Card";

function GameBoard({ cards, onCardClick }) {
	return (
		<section className="game-board">
			<div className="game-board__cards">
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						onClick={onCardClick}
					/>
				))}
			</div>
		</section>
	);
}

export default GameBoard;