import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
	const cardIndex = props.match.params.index;
	console.log("DANS LE CARD COMPNEnt !!!!!")
	console.log("cardIndex", cardIndex);
	return  (
		<div>
			<p>i'm a card component</p>
			<Link to='/'>Back</Link>
		</div>
	);
}

export default Card