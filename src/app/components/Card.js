import React from "react";
import { Link } from 'react-router-dom';

function Card(props) {
	return  (
		<div>
			<p>i'm a {props.name} card component</p>
			<Link to='/'>Back</Link>
		</div>
	);
}

export default Card