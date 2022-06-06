import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
	const onClickHandler = (event) => {
		//console.log(props.id)
		props.onGoalDelete(props.id);
	};
	return (
		<li className="goal-item" onClick={onClickHandler}>
			<p>{props.value}</p>
		</li>
	);
};

export default CourseGoalItem;
