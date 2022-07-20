import classes from "./Input.module.css";

//Expect and Input object{id:'', type:''..}
const Input = (props) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input {...props.input} />{/*  when using the spread operator to an JSX
			sintaxt, it will add the items as properties for the jsc code ex:
			id:'label' => id = "label" */}
		</div>
	);
};
export default Input;
