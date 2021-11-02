import { useState } from "react";

export default function Accordion( {title, list}) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='accord-section'>
			<div 
				className={`accord-title ${isActive ? 'accord-active' : ''}`}
				onClick={() => setIsActive(!isActive)}
			>
				<h3>{title}</h3>
				<h3>{isActive ? 'v' : '>' }</h3>
			</div>
			{isActive &&
				<div className='accord-content'>
					<ul className="proficient-list">
						{list.map( ( skill ) => (
							<li>{skill}</li>
						))}
					</ul>
				</div>
			}
		</div>
	);

}