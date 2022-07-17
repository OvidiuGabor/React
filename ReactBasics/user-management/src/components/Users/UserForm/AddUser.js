import { useState, useRef } from "react";
import Card from "../../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/Modal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	//callled array destructuring
//	const [username, setUsername] = useState("");
	//const [age, setAge] = useState("");
	const [error, setError] = useState();

/* 	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	}; */
/* 	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};
 */
	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		let isValid = true;
		//console.log(event)

		if (enteredName.trim().length === 0 || enteredAge.length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid Username and Age!",
			});
			isValid = false;
		}
		if (parseInt(enteredAge) < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid Age ( > 0)!",
			});
			isValid = false;
		}

		if (isValid) {
			props.onAddUser({ name: enteredName, age: enteredAge });
		/* 	setAge("");
			setUsername(""); */
			nameInputRef.current.value = "";
			ageInputRef.current.value = "";
		}
	};

	const errorHandler = () => {
		setError();
	};

	return (
		<Wrapper>
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
					/* 	onChange={usernameChangeHandler}
						value={username} */
						ref={nameInputRef}
					></input>
					<label htmlFor="age">Age(Years)</label>
					<input
						type="number"
						id="age"
					/* 	onChange={ageChangeHandler}
						value={age} */
						ref={ageInputRef}
					></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);

	//Alternative for using a wraping DIV when youi want to return multiple jsx code, but not with a root element.
	//You can return an Array of jsx elements, will work just fine, the only issue is that you always need to add the "key" tag, because React always need the key, when displaying an array of items.

	/* 	return[
		error && (
			<ErrorModal
				key = "error-modal"
				title={error.title}
				message={error.message}
				onConfirm={errorHandler}
			></ErrorModal>
		),
		<Card key="user-imput-form" className={styles.input}>
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

	] */
};

export default AddUser;
