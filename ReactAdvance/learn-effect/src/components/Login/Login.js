import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../state/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "USER_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	console.log(action.val);
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "USER_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const Login = (props) => {
	/* const [enteredEmail, setEnteredEmail] = useState("");
	const [emailIsValid, setEmailIsValid] = useState(); */
	//const [enteredPassword, setEnteredPassword] = useState("");
	//const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: false,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: false,
	});

	const emailImputRef = useRef();
	const passwordInputRef = useRef();
	const ctx = useContext(AuthContext);

	//object destructuring
	const { isValid: emailValid } = emailState;
	const { isValid: passwordValid } = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("Form Validity Check");
			setFormIsValid(emailValid && passwordValid);
		}, 500);
		return () => {
			console.log("CleanUP");
			clearTimeout(identifier);
		}; //clean up function. This function run before any useEffect function run, except for the first run.
	}, [emailValid, passwordValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });

		/* setFormIsValid(
			emailState.value.includes("@") && passwordState.isValid
		); */
	};

	const passwordChangeHandler = (event) => {
		//setEnteredPassword(event.target.value);
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });

		console.log(passwordState.value.trim().length + " " + emailState.isValid);

		//setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		//setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: "USER_BLUR" });
	};

	const validatePasswordHandler = () => {
		//setPasswordIsValid(enteredPassword.trim().length > 6);
		dispatchEmail({ type: "USER_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value);
		} else if (!emailValid) {
			emailImputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				{/* <div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div> */}
				<Input
					ref={emailImputRef}
					type="email"
					id="email"
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
					isValid={emailState.isValid}
					name="E-Mail"
				></Input>
				{/* 	<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div> */}
				<Input
					ref={passwordInputRef}
					type="password"
					id="password"
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
					isValid={passwordState.isValid}
					name="Password"
				></Input>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
