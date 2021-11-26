import React from "react";
import ExercisesItem from "./ExercisesItem";

function ExercisesList({ exercises, setExercises }) {
	if (exercises.length === 0) return null;
	return (
		<ul className="exercises-list">
			{exercises.map((exercise) => (
				<ExercisesItem
					key={exercise.id}
					exercise={exercise}
					exercises={exercises}
					setExercises={setExercises}
				/>
			))}
		</ul>
	);
}

export default ExercisesList;
