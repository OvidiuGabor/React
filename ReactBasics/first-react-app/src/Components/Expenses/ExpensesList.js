import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	let expensesContent = (
		<h2 className="expenses-list__fallback">No Items found!</h2>
	);
	if (props.items.length === 0) {
		return expensesContent;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				></ExpenseItem>
			))}
			;
		</ul>
	);
};

export default ExpensesList;
