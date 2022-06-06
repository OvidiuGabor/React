import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	// this useState is used for making react aware that something changed, and need to refres the component.
	// it should always be called from inside the Component function. It is not working if you call this function outside of it.
	// the function should receive an argument that should be the element that you want to change its state/value
	// the useState always return an array, witht eh first element as the value that is passed to it, and the second element it is a function that can be called to ge the new value.
	const [title, setTitle] = useState(props.title);
	const [price, setPrice] = useState(props.amount);

	//let expenseTitle = props.title;
	//const expenseAmount = props.amount;

	const clickhandler = () => {
		//expenseTitle = "Updated!";
		setTitle("Updated!")
		console.log(title);
	};

	const clickPriceHandler = () => {
		setPrice(785);
	}
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${price}</div>
			</div>
			<button onClick={clickhandler}>Change Title</button>
			<button onClick={clickPriceHandler}>Change Price</button>
		</Card>
	);
}

export default ExpenseItem;
