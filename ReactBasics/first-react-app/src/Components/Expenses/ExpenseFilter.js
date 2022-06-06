import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
	//const [year, setYear] = useState("");
	const yearChangeHandler = (event) => {
		//setYear(event.target.value);
		//console.log(event);
        props.onYearChanged(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by Year</label>
				<select value = {props.selected} onChange={yearChangeHandler}>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
