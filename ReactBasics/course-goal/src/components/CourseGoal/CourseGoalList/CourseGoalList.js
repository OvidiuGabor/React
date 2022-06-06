import React, { useState } from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import "./CourseGoalList.css";

const CourseGoalList = (props) => {
    const onDeleteHandler = (id) => {
        //console.log(id)
        props.onDelete(id)
    }
	return (
		<ul className="goal-list">
			{props.goals.map((goal) => (
				<CourseGoalItem value={goal.goal} key={goal.id} id={goal.id} onGoalDelete= {onDeleteHandler}></CourseGoalItem>
			))}
		</ul>
	);
};

export default CourseGoalList;
