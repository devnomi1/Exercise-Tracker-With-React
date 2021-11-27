import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateExercise() {
	const [exercise, setExercise] = useState({
		title: "",
		details: "",
	});

	
	let navigate = useNavigate();

	// Value Reader function
	function valueChangeHandler(e) {
		setExercise({
			...exercise,
			[e.target.name]: e.target.value,
		});
		
	}

	// Add Exercises funtion
	function addedExerciseHandler(event) {
		event.preventDefault();
		const newExercise = {
			title: exercise.title,
			details: exercise.details,
			complete: false,
			id: Math.floor(Math.random() * 10000),
		};
		console.log(newExercise);
		fetch("http://localhost:3111/exercises", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newExercise),
		})
			.then(() => {
				navigate("/home");
			})
			.catch((error) => document.write("can't fetch the Data"));
	}

	// Components Return Method
	return (
		<form onSubmit={addedExerciseHandler}>
			<label>Title</label>
			<input
				type="text"
				name="title"
				onChange={valueChangeHandler}
				value={exercise.title}
				maxLength="15"
				required
			/>
			<label>Details</label>
			<textarea
				name="details"
				cols="30"
				rows="10"
				value={exercise.details}
				onChange={valueChangeHandler}
				required
			></textarea>
			<button>Add Exercise</button>
		</form>
	);
}

export default CreateExercise;
