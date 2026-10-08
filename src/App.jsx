import { useEffect, useState } from "react";
import { gifIds } from "./data/gifIds";
import { fetchGifsByIds } from "./services/giphyApi";
import "./styles/index.css";
import { shuffleCards } from "./utils/shuffleCards";

function App() {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadCards() {
			try {
				const gifs = await fetchGifsByIds(gifIds);

				const shuffledGifs = shuffleCards(gifs);

        setCards(shuffledGifs);
        console.log(shuffledGifs);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}

		loadCards();
	}, []);

	if (loading) {
		return (
			<main className="app app--loading">
				<p className="app-status">Loading cards...</p>
			</main>
		);
	}

	if (error) {
		return (
			<main className="app app--error">
				<p className="app-status app-status--error">
					{error}
				</p>
			</main>
		);
	}

	return (
		<main className="app">
			<p className="app-status">
				Loaded {cards.length} cards.
			</p>
		</main>
	);
}

export default App;
