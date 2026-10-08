import { useEffect, useState } from "react";
import { gifIds } from "./data/gifIds";
import { fetchGifsByIds } from "./services/giphyApi";
import "./styles/index.css";
import { shuffleCards } from "./utils/shuffleCards";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import Header from "./components/Header";


function App() {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const currentScore = clickedCardIds.length;

  function handleCardClick(cardId) {
    const alreadyClicked = clickedCardIds.includes(cardId);

    if (alreadyClicked) {
      setClickedCardIds([]);
    } else {
      const newClickedCardIds = [...clickedCardIds, cardId];
      const newScore = newClickedCardIds.length;

      setClickedCardIds(newClickedCardIds);
      setBestScore((previousBestScore) =>
        Math.max(previousBestScore, newScore)
      );
    }

    setCards((currentCards) => shuffleCards(currentCards));
  }

	useEffect(() => {
		async function loadCards() {
			try {
				const gifs = await fetchGifsByIds(gifIds);

				const shuffledGifs = shuffleCards(gifs);

        setCards(shuffledGifs);
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
      <div className="app__content">
        <Header />

        <section className="game">
          <Scoreboard
            currentScore={currentScore}
            bestScore={bestScore}
          />

          <GameBoard
            cards={cards}
            onCardClick={handleCardClick}
          />
        </section>

        <footer className="app-footer">
          <p className="app-footer__attribution">
            Powered by GIPHY
          </p>
        </footer>
      </div>
    </main>
  );
}
export default App;
