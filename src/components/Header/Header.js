import React from 'react';
import './Header.css'

const Header = props =>
    <div className='jumbotron'>

        <div className="row">
            <div className='col-md-4'>
                <h2>The Clicky Game</h2>
            </div>
            <div className='col-md-4'>
                <p>{props.message} </p>
            </div>
            <div className='col-md-4'>
                <p>Score : {props.score}| Top Score :{props.topScore} </p>
            </div>
        </div>
    </div>

export default Header;