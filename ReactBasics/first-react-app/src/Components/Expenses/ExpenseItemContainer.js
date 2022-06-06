import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseItemContainer.css";
import Card from "../UI/Card";

function ExpenseItemContainer(props) {
	const [selectedYear, setSelectedYear] = useState("2022");

	const yearChangedHandler = (changedYear) => {
		setSelectedYear(changedYear);
		console.log(changedYear);
	};
	return (
		<div className="expenses">
			<ExpenseFilter  selected = {selectedYear} onYearChanged={yearChangedHandler}></ExpenseFilter>
			<Card>
				<ExpenseItem
					title={props.data[0].title}
					amount={props.data[0].amount}
					date={props.data[0].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.data[1].title}
					amount={props.data[1].amount}
					date={props.data[1].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.data[2].title}
					amount={props.data[2].amount}
					date={props.data[2].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.data[3].title}
					amount={props.data[3].amount}
					date={props.data[3].date}
				></ExpenseItem>
			</Card>
		</div>
	);
}

export default ExpenseItemContainer;
