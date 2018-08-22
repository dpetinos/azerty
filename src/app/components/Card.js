import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
	const index = props.match.params;
	console.log(index);
	console.log();
	return  (
		<div>
			<p>i'm a card component</p>
			<Link to='/'>Back</Link>
		</div>
	);
}

export default Card