import React, { useState, useEffect } from 'react';
import './App.css';
import Board from "./components/Board";
import initializeDeck from './deck';

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);

  //useEffect is used simulate a componetDidmount/upodate or will
  // we give a second agrument so that it doesn't get called again and again 
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
    // console.log("pp", cards);
  }, [])

  // console.log("App", cards)
  const handleClick = (id) => setFlipped([...flipped, id]);

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    )
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Memory Game</h1>
        <h2>Can you remember where the cards are?</h2>
      </div>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
