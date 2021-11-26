import React, { useState, useEffect } from "react";
import ExercisesList from "../components/ExercisesList";

function HomePage() {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		async function fetchExercises() {
			try {
				const response = await fetch("http://localhost:3111/exercises");
				const fetchedExercises = await response.json();
				console.log("Here are exercises that we fetched", fetch);
				setExercises(fetchedExercises);
			} catch (error) {
				console.log(error);
			}
		}
		fetchExercises();
	}, []);
	return (
		<div>
			<ExercisesList exercises={exercises} />
		</div>
	);
}

export default HomePage;
