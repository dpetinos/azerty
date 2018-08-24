
import React from 'react';
// import './Footer.css';

const Footer = ({ adjective = 'Awesome' }) => {

    return (

        <div>
        	<p>[Footer starts here]</p>
            <p>Youpi So {adjective} !</p>
            <p>Copyright SBR 2018, Robot Service, [version tag], logo SBR </p>
            <br />
            <p>Footer.. Fooooooter.... FFFFOOOOOOOOOOOOOOTTTTEEEERRRRRRRR!!!!!!!</p>
        </div>
    )
}

export default Footer;
