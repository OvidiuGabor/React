import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import Button from "../Button";
import styles from "./ErrorModal.module.css";



//Use React Portals in order to place the HTML where you want inside your application.
//For this to workl, you need a root HTML element, which can be in Public/index/html
//then with createPortal(JSX, HTMLel) you can insert in your root element the html code you need.
//by doing this you keep your code clean, and less prone to errors.

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};
const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
