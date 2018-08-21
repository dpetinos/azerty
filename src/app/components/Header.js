
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './Card';
import './Header.css';

const Header = ({ adjective = 'Cool' }) => {

    return (

            <div className="header">
                <a href="#default" className="logo">Robot Service</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#lang">Lang</a>

                    <li><Link to='/'>Home</Link></li>

                    <Route path='/card' render={(props) => (
                      <Card {...props} data={props.name="Samy"}/>
                    )}/>


                </div>
                <br />
                <br />
                <p>[Header stops here]</p>
            </div> 
    )
}

export default Header;
