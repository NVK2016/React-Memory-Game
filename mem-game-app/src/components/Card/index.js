import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

//instead of sending props we are destructing to send the exact props required 
function Card({ handleClick, id, flipped, back, front, height, width }) {

    return (
        <div className={`flip-container ${flipped ? "flipped" : ""}`}
            style={{ width, height }}
            onClick={() => { handleClick(id) }}>
            <div className="flipper">
                <h3>Sample Card- {flipped}</h3>
                <img 
                style={{ width, height }} 
                className={flipped ? "front" : "back"} 
                src={ flipped ? front : back} />
            </div>
        </div>
    )
}

export default Card; 

// Card.propTypes = {
//     flipped: 
// }