import React, { useState } from "react";
import "./CourseGoalInput.css";
import Button from "../../UI/Button/Button";

const CourseGoalInput = (props) => {
	const [goalinput, setGoalInput] = useState("");
	const goalInputHandler = (event) => {
		setGoalInput(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		//console.log(goalinput);
		setGoalInput("");
        props.onGoalSubmited(goalinput);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className="form-control">
				<label>Course Goal Item</label>
				<input type="text" onChange={goalInputHandler} value={goalinput} />
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseGoalInput;
