import React from 'react'; 
// import './style.css';

function Card(props){

    return(
        <div>
            <h3>Sample Card</h3>
            <img src={props.front} />
        </div>
    )
}

export default Card; 