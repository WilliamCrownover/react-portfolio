import Project from '../components/Project';

const allProjectInfo = [
	{
		id: 1,
		title: 'Shelf-Life Continued',
		imageName: 'slc.jpg',
		liveURL: 'https://shelf-life-206.herokuapp.com/',
		repoURL: 'https://github.com/WilliamCrownover/shelf-life-continued'
	},
	{
		id: 2,
		title: 'US Voter Representative',
		imageName: 'usvr.jpg',
		liveURL: 'https://williamcrownover.github.io/us-voter-representatives/',
		repoURL: 'https://github.com/WilliamCrownover/us-voter-representatives'
	},
	{
		id: 3,
		title: 'Weather Forecast Dashboard',
		imageName: 'wfd.jpg',
		liveURL: 'https://williamcrownover.github.io/weather-forecast-dashboard/',
		repoURL: 'https://github.com/WilliamCrownover/weather-forecast-dashboard'
	},
	{
		id: 4,
		title: 'Tech Blog Forum',
		imageName: 'tbf.jpg',
		liveURL: 'https://tech-blog-forum-mvc.herokuapp.com/',
		repoURL: 'https://github.com/WilliamCrownover/tech-blog-forum'
	},
	{
		id: 5,
		title: 'Employee CMS',
		imageName: 'ecms.jpg',
		liveURL: 'https://github.com/WilliamCrownover/employee-content-management-system',
		repoURL: 'https://github.com/WilliamCrownover/employee-content-management-system'
	},
	{
		id: 6,
		title: 'JavaScript Quiz Game',
		imageName: 'jsq.jpg',
		liveURL: 'https://williamcrownover.github.io/javascript-coding-quiz/',
		repoURL: 'https://github.com/WilliamCrownover/javascript-coding-quiz'
	}
];

export default function Portfolio() {

	return (
		<div className="page-section">
			<h2 className="lines">Portfolio</h2>
			<div className="all-projects-container">
				{allProjectInfo.map( ( projectInfo ) => (
					<Project key={projectInfo.id}
						title={projectInfo.title}
						imageName={projectInfo.imageName}
						liveURL={projectInfo.liveURL}
						repoURL={projectInfo.repoURL}
					/>
				) )}
			</div>
		</div>
	);
}