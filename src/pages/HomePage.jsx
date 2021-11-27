import React, { useState, useEffect } from "react";
import BaseFilter from "../components/BaseFilter";
import ExercisesList from "../components/ExercisesList";

function HomePage() {
	const [exercises, setExercises] = useState([]);
	const [currentFilter, setCurrentFilter] = useState("all");

	function filterHandler(newFilter) {
		setCurrentFilter(newFilter);
	}

	useEffect(() => {
		async function fetchExercises() {
			try {
				const response = await fetch("http://localhost:3111/exercises");
				const fetchedExercises = await response.json();
				console.log("Here are exercises that we fetched", fetch);
				setExercises(fetchedExercises);
			} catch (error) {
				console.log("this is the error", error);
			}
		}
		fetchExercises();
	}, []);

	let jsx = <ExercisesList exercises={exercises} setExercises={setExercises} />;
	if (currentFilter === "completed") {
		jsx = (
			<ExercisesList
				exercises={exercises.filter((exercise) => exercise.complete)}
				setExercises={setExercises}
			/>
		);
	} else if (currentFilter === "pending") {
		jsx = (
			<ExercisesList
				exercises={exercises.filter((exercise) => !exercise.complete)}
				setExercises={setExercises}
			/>
		);
	}

	return (
		<div>
			<BaseFilter onUpdate={filterHandler} currentFilter={currentFilter} />
			{jsx}
		</div>
	);
}

export default HomePage;
