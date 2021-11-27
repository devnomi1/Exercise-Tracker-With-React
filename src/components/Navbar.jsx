import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="main-nav">
			<NavLink to="/home" className={({ isActive }) => (isActive ? "active-style" : "")}>
				Home
			</NavLink>

			<NavLink
				to="/create-exercise"
				className={({ isActive }) => (isActive ? "active-style" : "")}
			>
				Create Exercise
			</NavLink>
		</nav>
	);
}

export default Navbar;
