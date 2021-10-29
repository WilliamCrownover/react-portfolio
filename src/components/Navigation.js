import { Link } from "react-router-dom";
import { UPDATE_PAGE } from "../utils/actions";
import { usePortfolioContext } from "../utils/GlobalState";

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

export default function Navigation() {
	const [state, dispatch] = usePortfolioContext();

	return (
		<ul className="nav-tabs">
			{pageNames.map( ( page ) => (
				<li key={page.id}>
					<Link
						to={page.link}
						onClick={() => {dispatch({ type: UPDATE_PAGE, currentPage: page.name})}}
						className={state.currentPage === page.name ? 'nav-link active' : 'nav-link'}
					>
						{page.name}
					</Link>
				</li>
			) )}
		</ul>
	);
}