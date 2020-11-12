import './App.css';
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
     <h1>Memory Game</h1>
     <h2>Can you remember where the cards are?</h2>
     <Card 
     id={1}
     width={100}
     heigh={100} 
     back={""} 
     front={"https://static.vecteezy.com/system/resources/thumbnails/000/553/435/small/apple_006.jpg"}
    //  flipped={flipped.includes(1)}
    //  handleClick={() => {handleClick(1)}}
     />
    </div>
  );
}

export default App;
