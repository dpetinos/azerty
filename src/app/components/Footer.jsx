
import React from 'react';
import './Footer.css';
import logo from '../../img/logo-color-sb.png';

const Footer = () => {
    return (
        <footer className='root_element'>
            <div className='copyright'>
                Copyright ©2017 SoftBank Robotics - User Service v.0.0.1 - All rights reserved.
            </div>
            <div className='logo'>
                <img
                    src={logo}
                    alt='SoftBank Robotics Logo'
                />
            </div>
        </footer>
    );
};

export default Footer;
