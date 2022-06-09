import { useState } from "react";
import Card from "../../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/Modal/ErrorModal";

const AddUser = (props) => {
	//callled array destructuring
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState();

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		let isValid = true;
		//console.log(event)

		if (username.trim().length === 0 || age.length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid Username and Age!",
			});
			isValid = false;
		}
		if (parseInt(age) < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid Age ( > 0)!",
			});
			isValid = false;
		}

		if (isValid) {
			props.onAddUser({ name: username, age: age });
			setAge("");
			setUsername("");
		}
	};

	const errorHandler = () => {
		setError();
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				></ErrorModal>
			)}

			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="Text"
						id="username"
						onChange={usernameChangeHandler}
						value={username}
					></input>
					<label htmlFor="age">Age(Years)</label>
					<input
						type="number"
						id="age"
						onChange={ageChangeHandler}
						value={age}
					></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
