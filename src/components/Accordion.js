import { useState } from "react";

export default function Accordion() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='accord-section'>
			<div 
				className='accord-title'
				onClick={() => setIsActive(!isActive)}
			>
				<h3>Front-end Proficiencies</h3>
				<h3>{isActive ? 'v' : '>' }</h3>
			</div>
			{isActive &&
				<div className='accord-content'>
					<ul className="proficient-list">
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>Handlebars.js</li>
						<li>React.js</li>
					</ul>
				</div>
			}
		</div>
	);

}