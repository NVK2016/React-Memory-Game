import React, { useState} from 'react'; 
import './App.css';
import Board from "./components/Board";

function App() {
const [flipped, setFlipped] = useState([]);
const handleClick = (id) => setFlipped([...flipped, id])
  return (
    <div className="App">
     <h1>Memory Game</h1>
     <h2>Can you remember where the cards are?</h2>
     <Board />
    </div>
  );
}

export default App;
