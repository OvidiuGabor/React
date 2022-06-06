import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	//functions used to receive the data from a child when an  event happends.
	//this works same as a passing data from the parent to the child with the help of props.
	//only this time, in the prop we pass a pointer to this function, and in the child component we call this function with the arguments required to pass.
	//and at that moment this function will be executed on this component, hence the data is passed to the parent.
	const saveExpenseDataHandler = (submitedExpenseData) => {
		const expenseData = {
			...submitedExpenseData,
			id: "e" + Math.random().toString(),
		};

        props.onExpenseSend(expenseData);
		//console.log(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onFormSubmit={saveExpenseDataHandler}></ExpenseForm>
		</div>
	);
};

export default NewExpense;
