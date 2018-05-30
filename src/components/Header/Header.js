import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='jumbotron'>
                <div className="row">
                <div className='col-md-4'>
                    <h2>The Clicky Game</h2>
                </div>
                <div className='col-md-4'>
                    <p>your clicks </p>
                </div>
                <div className='col-md-4'>
                    <p>Score : | Top Score : </p>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;