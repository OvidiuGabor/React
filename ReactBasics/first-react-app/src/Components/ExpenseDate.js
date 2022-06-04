import "./ExpenseDate.css";
function ExpenseDate(props) {
	const convertedDate = convertDateforUser(props.date);
	return (
		<div className="expense-date">
			<div className="expense-date__month">{convertedDate.month}</div>
			<div className="expense-date__year">{convertedDate.year}</div>
			<div className="expense-date__day">{convertedDate.day}</div>
		</div>
	);
}

//Convert the date as a cusotm object so that we can display it to the user
function convertDateforUser(dateToConvert) {
	return {
		month: dateToConvert.toLocaleString("en-Us", { month: "long" }),
		day: dateToConvert.toLocaleString("en-US", { day: "2-digit" }),
		year: dateToConvert.getFullYear(),
	};
}

export default ExpenseDate;
