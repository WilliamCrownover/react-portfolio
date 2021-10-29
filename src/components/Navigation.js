import { Link } from "react-router-dom";

const pageNames = [
	{
		id: 1,
		link: '/react-portfolio/about',
		name: 'AboutMe'
	},
	{
		id: 2,
		link: '/react-portfolio/projects',
		name: 'Projects'
	},
	{
		id: 3,
		link: '/react-portfolio/contact',
		name: 'Contact'
	},
	{
		id: 4,
		link: '/react-portfolio/resume',
		name: 'Resume'
	}
];

export default function Navigation( { currentPage, handlePageChange } ) {

	return (
		<ul className="nav-tabs">
			{pageNames.map( ( page ) => (
				<li key={page.id}>
					<Link
						to={page.link}
						// onClick={() => handlePageChange( page.name )}
						// className={currentPage === page.name ? 'nav-link active' : 'nav-link'}
					>
						{page.name}
					</Link>
				</li>
			) )}
		</ul>
	);
}