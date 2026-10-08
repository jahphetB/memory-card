function Card({ card, onClick }) {
	return (
		<button
			className="memory-card"
			type="button"
			onClick={() => onClick(card.id)}
		>
			<img
				className="memory-card__image"
				src={card.imageUrl}
				alt={card.title}
			/>
			<p className="memory-card__title">
				{card.title || "Untitled GIF"}
			</p>
		</button>
	);
}

export default Card;