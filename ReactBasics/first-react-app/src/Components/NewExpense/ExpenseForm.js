import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	/* 	const [newTitle, setNewTitle] = useState("");
	const [newAmount, setNewAmount] = useState("");
	const [newDate, setNewDate] = useState("");
 */
	//Alternative to not use 3 or more useState
	const [userInput, setUserInput] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const titleChangeHandler = (event) => {
		//Always use the spread operator first, so that you can copy the full object before assigning the new value.
		//because when use as a object, when you assign a new value to a Key, you need to add also the opther key => value pair
		//otherwise your all object will be replace with only one item.
		/* 	setUserInput({
			...userInput,
			title: event.target.value,
		}); */
		setUserInput((prevState) => {
			return { ...prevState, title: event.target.value };
		});
	};
	const amountChangeHandler = (event) => {
		//setNewAmount(event.target.value);
		//Always use the spread operator first, so that you can copy the full object before assigning the new value.
		//because when use as a object, when you assign a new value to a Key, you need to add also the opther key => value pair
		//otherwise your all object will be replace with only one item.
		/* setUserInput({
			...userInput,
			amount: event.target.value,
		}); */
		setUserInput((prevState) => {
			return { ...prevState, amount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		//setNewDate(event.target.value);
		//Always use the spread operator first, so that you can copy the full object before assigning the new value.
		//because when use as a object, when you assign a new value to a Key, you need to add also the opther key => value pair
		//otherwise your all object will be replace with only one item.

		/* 		setUserInput({
			...userInput,
			date: event.target.value,
		}); */

		//better approach because React schedule this useState, and if you depend on the previous state, due to this delay your result may be incorrect.
		setUserInput((prevState) => {
			return { ...prevState, date: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		let dateAsDate = new Date(userInput.date);
		let expensedata = userInput;
		expensedata.date = dateAsDate;
        expensedata.amount = +expensedata.amount

		//console.log(expensedata);
		setUserInput({
			title: "",
			amount: "",
			date: "",
		});
		props.onFormSubmit(expensedata);
        resetFormHandler()
	};
    const resetFormHandler = () => {
        props.onResetForm()
    }

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="test"
						value={userInput.title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="Date"
						min="2019-01-01"
						max="2022-12-31"
						value={userInput.date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={resetFormHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
