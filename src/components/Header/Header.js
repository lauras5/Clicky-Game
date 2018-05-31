import React from 'react';
import './Header.css'

const Header = props =>
    <div id='jumbo' className='jumbotron'>

        <div className="row">
            <div className='col-md'>
                <h1>The Clicky Game</h1>
                <p>Don't click on the same image twice!</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md'>
                <p>{props.message} </p>
            </div>
            <div className='col-md'>
                <p>Score : {props.score}| Top Score :{props.topScore} </p>
            </div>
        </div>
    </div>

export default Header;