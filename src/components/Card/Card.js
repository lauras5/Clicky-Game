import React from 'react';
import './Card.css';

const Card = props => (
        <div className="card">
            <div id='imgBox' className="img-container">
                <img
                    id={props.id}
                    alt={props.name}
                    src={props.img}
                />
            </div>
        </div>
)

export default Card;


