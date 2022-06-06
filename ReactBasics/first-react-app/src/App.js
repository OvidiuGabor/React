import React from "react";
import "./App.css";
import ExpenseItemContainer from "./Components/Expenses/ExpenseItemContainer";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

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
	const[newExpense, setNewExpense] = useState(expense)

	const addExpenseHandler = (sentExpense) => {
		expense.push(sentExpense)
		console.log(expense)
		setNewExpense(expense)
	}

/* 	return React.createElement(
		"div",
		{},
		React.createElement(NewExpense, {onExpenseSend: {addExpenseHandler}}),
		React.createElement(ExpenseItemContainer, {data: expense})
	); */

		return (
		<div>
			<NewExpense  onExpenseSend={addExpenseHandler}/>
			<ExpenseItemContainer data = {newExpense}></ExpenseItemContainer>
		</div>
	);
}

export default App;
