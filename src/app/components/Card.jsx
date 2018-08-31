import React from "react";
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from "../../Utils";


const Card = (props) => {
	const cardIndex = props.match.params.index;

	console.log( "cardIndex", cardIndex );
	console.log("Dans le Card Component");
	console.log("A ROW WAS CLICKED BY MEEEEEEE 33333333 !");
    console.log("history", props.history);
    console.log("location", props.location);
    console.log("rowInfo", props.history.location.rowInfo);

    const firstName = capitalizeFirstLetter(props.history.location.rowInfo.row.firstName);
    const lastName = capitalizeFirstLetter(props.history.location.rowInfo.row.lastName);
    const age = props.history.location.rowInfo.row.age;

    
	return  (
		<div>
			<p>i'm a card component</p>
			<p>My name is {firstName} {lastName}, and I'm {age} years old.</p>
			<p>The card component neds to actually be displaying information about robots.</p>
			<p> yeah, I know Jim...</p>
			<Link to='/list'>Back</Link>
		</div>
	);
}

export default Card