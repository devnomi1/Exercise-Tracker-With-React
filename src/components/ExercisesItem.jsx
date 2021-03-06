import React from "react";
import { Link } from "react-router-dom";

function ExercisesItem({ exercise, exercises, setExercises }) {
	// Exercise Deleted
	function deleteExerciseHandler() {
		fetch(`http://localhost:3111/exercises/${exercise.id}`, {
			method: "DELETE",
		})
			.then(() => {
				setExercises(exercises.filter((items) => items.id !== exercise.id));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	//  Toggle function For exercise Completion
	function exerciseToggleHandler() {
		fetch(`http://localhost:3111/exercises/${exercise.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ complete: !exercise.complete }),
		})
			.then(() => {
				setExercises(
					exercises.map((item) => {
						if (item.id === exercise.id) {
							return {
								...item,
								complete: !item.complete,
							};
						}
						return item;
					})
				);
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className={exercise.complete ? "exercise complete" : "exercise"}>
			<div className="actions">
				<h4>{exercise.title}</h4>
				<div className="buttons">
					<button onClick={deleteExerciseHandler}>Delete</button>
					<Link to={`/exercises/${exercise.id}/edit`}>Edit</Link>
					<button onClick={exerciseToggleHandler}>Toggle</button>
				</div>
			</div>
			<div className="details">
				<p>{exercise.details}</p>
			</div>
		</div>
	);
}

export default ExercisesItem;
