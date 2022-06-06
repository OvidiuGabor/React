import React, { useState } from "react";
import classes from"./CourseGoalInput.module.css";
import Button from "../../UI/Button/Button";
import styled from "styled-components";

/* const FormControl = styled.div`
	margin: 0.5rem 0;

	& label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
        color: ${props => props.invalid ? 'red' : 'black'}
	}

	& input {
		display: block;
		width: 100%;
		border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
        background: ${props => props.invalid ? '#ffd7d7': 'transparent'};
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}

	& input:focus {
		outline: none;
		background: #fad0ec;
		border-color: #8b005d;
	}
`; */

const CourseGoalInput = (props) => {
	const [goalinput, setGoalInput] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setGoalInput(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (goalinput.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onGoalSubmited(goalinput);
		setGoalInput("");
	};

	return (
			<form onSubmit={onSubmitHandler}>
			<div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
				<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
				<input
					type="text"
					style={{
						borderColor: !isValid ? "red" : "black",
						background: !isValid ? "salmon" : "transparent",
					}}
					onChange={goalInputHandler}
					value={goalinput}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>

		//<form onSubmit={onSubmitHandler}>
		//	<FormControl className={!isValid && 'invalid'}>
		//		<label>Course Goal</label>
		//		<input type="text" onChange={goalInputHandler} value={goalinput} />
		//	</FormControl> */
          //   <FormControl invalid = {!isValid}>
			//	<label>Course Goal</label>
			//	<input type="text" onChange={goalInputHandler} value={goalinput} />
			//</FormControl>
            
            
		//	<Button type="submit">Add Goal</Button>
		//</form>

        
	);
};

export default CourseGoalInput;
