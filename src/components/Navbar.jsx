import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
			<div>
				<ul className="main-nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/create-exercise">Create Exercise</Link>
					</li>
				</ul>
			</div>
		);
}

export default Navbar;
