import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Card from "../Card";

function Board({ dimension, cards, flipped, handleClick }) {
    return (
        <div className="board">
            {
                cards.map((card) => {
                    // console.log(card);
                    <Card
                        key={card.id}
                        id={card.id}
                        //basically holds the text value of the card 
                        type={card.type}
                        width={dimension / 4.5}
                        height={dimension / 4.5}
                        //  back={card.back} 
                        //  front={"https://static.vecteezy.com/system/resources/thumbnails/000/553/435/small/apple_006.jpg"}
                        flipped={flipped.includes(card.id)}
                        handleClick={() => { handleClick(card.id) }}
                    />
                })
            }
        </div>
    )
}

export default Board;

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
}