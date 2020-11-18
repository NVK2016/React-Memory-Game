import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

//instead of sending props we are destructing to send the exact props required 
export default function Card({ handleClick, id, disabled, flipped, solved, type,  height, width }) {
// console.log(type, height,width)
    return (
        // <div className={`flip-container ${flipped ? "flipped" : ""}`}
        <div className="flip-container"
            style={{ width, height }}
            onClick={() => (disabled ? null : handleClick(id))}>
            <div className="flipper">
                {/* backside of the card  */}
                <p  className={flipped ? "back" : "front"} >{type}</p>
                <img 
                alt={type}
                style={{ width, height }} 
                className={flipped ? "front" : "back"} 
                // src={ flipped ? front : back}
                src={ flipped || solved ?  {type} : "/images/apple_006.jpg"}
                 />
            </div>
        </div>
    )
}

Card.propTypes = {
    handleClick:PropTypes.func.isRequired, 
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired, 
    // back: PropTypes.string.isRequired, 
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
}