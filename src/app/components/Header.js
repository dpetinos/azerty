
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './Card';
import './Header.css';

const Header = () => {

    return (

            <div className="header">
                <div>
                // Add LOGO !!
                    <Link to='/' className="logo">Robot Service</Link>
                </div>
                <div className="header-right">
                    <Link className="active" to='/'>Home</Link>
                    <a href="#lang">Lang</a>

                </div>
                <br />
                <br />
                <p>[Header stops here]</p>
            </div> 
    )
}

export default Header;
