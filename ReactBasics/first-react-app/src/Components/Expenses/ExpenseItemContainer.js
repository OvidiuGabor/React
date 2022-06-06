import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseItemContainer.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

function ExpenseItemContainer(props) {
	const [selectedYear, setSelectedYear] = useState("2021");
	/* const [expensesFilter, setExpensesFilter] = useState(props.data); */

	const yearChangedHandler = (changedYear) => {
		setSelectedYear(changedYear);
		//console.log(changedYear);
		/* 	setExpensesFilter(props.data);
		setExpensesFilter((prev) => {
			return prev.filter((el) => {
				//console.log(el.date.getFullYear());
				return el.date.getFullYear() == parseInt(changedYear);
			});
		}); */
	};
	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear() === parseInt(selectedYear);
	});

	return (
			<Card className="expenses">
				<ExpenseFilter
					selected={selectedYear}
					onYearChanged={yearChangedHandler}
				></ExpenseFilter>
				<ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
				<ExpensesList items={filteredExpenses}></ExpensesList>
			</Card>
	);
}

export default ExpenseItemContainer;
