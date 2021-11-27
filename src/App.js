import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/home" element={<HomePage />} exact/>
				<Route path="/create-exercise" element={<CreateExercise />} exact/>
				<Route path="/exercises/:id/edit" element={<EditExercise />} exact />
			</Routes>
		</div>
	);
}

export default App;
