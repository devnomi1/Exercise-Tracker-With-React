import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateExercise from "./pages/CreateExercise";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Navbar/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create-exercise" element={<CreateExercise />} />
			</Routes>
		</div>
	);
}

export default App;
