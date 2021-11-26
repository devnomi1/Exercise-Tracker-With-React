import React from "react";

function ExercisesItem({ exercise }) {
	return (
		<div className="exercise">
			<div className="actions">
				<h4>{exercise.title}</h4>
                <div className="buttons">
                    
                </div>
            </div>
            <div className="details">
                <p>{ exercise.details}</p>
            </div>
		</div>
	);
}

export default ExercisesItem;
