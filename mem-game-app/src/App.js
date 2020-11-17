import React, { useState, useEffect } from 'react';
import './App.css';
import Board from "./components/Board";
import initializeDeck from './deck';

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  //useEffect is used simulate a componetDidmount/upodate or will
  // we give a second agrument so that it doesn't get called again and again 
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
    // console.log("pp", cards);
  }, [])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize',resizeBoard);
    //componet didunmout()  we have use return keywork here 
    return () => window.removeEventListener('resize', resizeListener)
  }); 
  // console.log("App", cards)
  const handleClick = (id) => {
    setDisabled(true);
    //at any given time can only flip two cards at once 
    if(flipped.length === 0){
      setFlipped([id]);
    setDisabled(false);

    }else { 
      //if clicked card twice 
      if(sameCardClicked(flipped, id)) return 
    }
    
  }
  const sameCardClicked = (id) => flipped.includes(id);
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
        disabled={disabled}
      />
    </div>
  );
}

export default App;
