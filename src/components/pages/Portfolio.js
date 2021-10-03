import Project from "../Project";

const allProjectInfo = [
	{
		id: 1,
		title: "Shelf-Life Continued",
		imageName: "slc.jpg",
		liveURL: "https://shelf-life-206.herokuapp.com/",
		repoURL: "https://github.com/WilliamCrownover/shelf-life-continued"
	},
	{
		id: 2,
		title: "US Voter Representative",
		imageName: "usvr.jpg",
		liveURL: "https://williamcrownover.github.io/us-voter-representatives/",
		repoURL: "https://github.com/WilliamCrownover/us-voter-representatives"
	}
]

export default function Portfolio() {

	return (
		<div className="page-section">
			<h2 className="lines">Portfolio</h2>
			<div className="all-projects-container">
				{allProjectInfo.map((projectInfo) => (
					<Project key={projectInfo.id}
						title={projectInfo.title}
						imageName={projectInfo.imageName}
						liveURL={projectInfo.liveURL}
						repoURL={projectInfo.repoURL}
					/>
				))}
			</div>
		</div>
	);
}