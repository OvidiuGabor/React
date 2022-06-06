import "./CourseGoalItem.css"

const CourseGoalItem = props => {
    const onClickHandler = (event) => {
        //console.log(props.id)
        props.onGoalDelete(props.id)
    }
return <div className="goal-item" onClick={onClickHandler}>
    <p>{props.value}</p>
</div>

}

export default CourseGoalItem;