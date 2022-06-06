import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoal/CourseGoalList/CourseGoalList";
import CourseGoalInput from "./components/CourseGoal/CourseGoalInput/CourseGoalInput";

function App() {
	const [goals, setGoals] = useState([
		{ goal: "Do all exercices", id: "g1" },
		{ goal: "Finish the course", id: "g2" },
	]);

	const goalSubmitedhandler = (newgoal) => {
		let id = Math.random().toString();
		setGoals((prev) => {
			return [{ goal: newgoal, id: id }, ...prev]
		});
	};


  const onGoalClickDeleteHandler = (id) => {
    console.log(id)
    setGoals(prev => {
      const updatedGoals = prev.filter(goal => goal.id !== id);
      return updatedGoals
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if(goals.length > 0) {
    content = <CourseGoalList goals={goals} onDelete ={onGoalClickDeleteHandler}></CourseGoalList>
  }

	return (
		<div>
			<section id="goal-form">
				<CourseGoalInput onGoalSubmited={goalSubmitedhandler} ></CourseGoalInput>
			</section>
			<section id="goals">
				{content}
			</section>
		</div>
	);
}

export default App;
