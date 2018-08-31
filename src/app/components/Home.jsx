import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
	return (
	<div className='home'>
		<h3><Link to='/list'>Robot list</Link></h3>
	</div>
	);
}

export default Home