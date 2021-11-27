import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditExercise() {
	const [exercise, setExercise] = useState({
		title: "",
		details: "",
	});
	let params = useParams();
	const exerciseId = params.id;
	useEffect(() => {
		fetch(`http://localhost:3111/exercises/${exerciseId}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setExercise({
					title: data.title,
					details: data.details,
				});
			})
			.catch((error) => console.log(error));
	}, [exerciseId]);

	// Value Reader function
	function valueChangeHandler(e) {
		setExercise({
			...exercise,
			[e.target.name]: e.target.value,
		});
	}

	// Updated Exercise Function
	let navigate = useNavigate();
	function updateExerciseHandler(e) {
		e.preventDefault();
		fetch(`http://localhost:3111/exercises/${exerciseId}`, {
			method: "PATCH",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(exercise),
		})
			.then(() => {
				navigate("/home");
			})
			.catch((error) => console.log(error));
	}

	// Components Return Method
	return (
		<form onSubmit={updateExerciseHandler}>
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
			<button>Update Exercise</button>
		</form>
	);
}

export default EditExercise;
