import React from "react";
import "./App.css";
import ExpenseItemContainer from "./Components/Expenses/ExpenseItemContainer";

//function App() { 
const App = () => { //Arrow function that have been implemented on ES6
	const expense = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];
	//Alternativ to JSX
	//Sort off the same as Document.createElement from javascript.
	return React.createElement(
		"div",
		{},
		React.createElement("h2", {}, "Let's get started"),
		React.createElement(ExpenseItemContainer, {data: expense})
	);

	/* 	return (
		<div>
			<h2>Let's get started</h2>
			<ExpenseItemContainer data = {expense}></ExpenseItemContainer>
		</div>
	); */
}

export default App;
