import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

//instead of sending props we are destructing to send the exact props required 
function Card({ handleClick, id, flipped, type,  height, width }) {
console.log(type, height,width)
    return (
        // <div className={`flip-container ${flipped ? "flipped" : ""}`}
        <div className="flip-container"
            style={{ width, height }}
            onClick={() => { handleClick(id) }}>
            <div className="flipper">
                <h3>Sample Card - {type}</h3>
                <img 
                alt={type}
                style={{ width, height }} 
                className={flipped ? "front" : "back"} 
                // src={ flipped ? front : back}
                src={ flipped ? "https://static.vecteezy.com/system/resources/thumbnails/000/553/435/small/apple_006.jpg" : type}
                 />
            </div>
        </div>
    )
}

export default Card; 

Card.propTypes = {
    handleClick:PropTypes.func.isRequired, 
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired, 
    // back: PropTypes.string.isRequired, 
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}