import React from "react";
import ExercisesItem from "./ExercisesItem";

function ExercisesList({ exercises }) {
	if (exercises.length === 0) return null;
	return (
		<ul>
			{exercises.map((exercise) => (
				<ExercisesItem key={exercise.id} exercise={exercise} />
			))}
		</ul>
	);
}

export default ExercisesList;
