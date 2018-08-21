
import React from 'react';
import './Header.css';

const Header = ({ adjective = 'Cool' }) => {

    return (

            <div className="header">
                <a href="#default" className="logo">Robot Service</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#lang">Lang</a>
                </div>
                <br />
                <br />
                <p>[Header stops here]</p>
            </div> 
    )
}

export default Header;
