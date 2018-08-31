
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './Card';
import './Header.css';
import logo from '../../img/panier_actif.png';


const Header = () => {
    return (
            <header className='root_element header'>
                <div>
                    <img
                        src={logo}
                        alt='SoftBank Robotics Logo'
                    />
                    <Link to='/' className="logo">Robot Service,,,,,,,,,,,,,,,,,,, [Make real breadcrumb, handle url parameters for robot details]</Link>
                </div>
                <div className="header-right">
                    <Link className="active" to='/'>Home</Link>
                    <a href="#lang">Lang</a>

                </div>
            </header> 
    )
}

export default Header;
