import React from "react";

function BaseFilter(props) {
	return (
		<nav className="filter-nav">
			<button
				className={props.currentFilter === "all" ? "active" : ""}
				onClick={() => props.onUpdate("all")}
			>
				View All
			</button>
			<button
				className={props.currentFilter === "completed" ? "active" : ""}
				onClick={() => props.onUpdate("completed")}
			>
				completed
			</button>
			<button
				className={props.currentFilter === "pending" ? "active" : ""}
				onClick={() => props.onUpdate("pending")}
			>
				Pending
			</button>
		</nav>
	);
}

export default BaseFilter;
