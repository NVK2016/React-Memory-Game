import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Card from "../Card";

function Board({cards, flipped, handleClick}){
    return ( 
        <div className="board">
{
    cards.map((card) =>{
        <Card 
     id={card.id}
     //basically holds the text value of the card 
     type={card.type}
     width={card.width}
     heigh={card.height} 
    //  back={card.back} 
    //  front={"https://static.vecteezy.com/system/resources/thumbnails/000/553/435/small/apple_006.jpg"}
     flipped={flipped.includes(card.id)}
     handleClick={() => {handleClick(card.id)}}
     />
    })
}
        </div>
    )
}

export default Board;

