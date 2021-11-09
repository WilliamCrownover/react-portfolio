import Header from '../components/Header';
import Project from '../components/Project';
import { allProjectInfo } from '../utils/data';

export default function Projects() {

	return (
		<>
			<Header/>
			<div className="page-section">
				<h2 className="lines">Collaborative</h2>
				<div className="all-projects-container">
					{allProjectInfo.filter(projectInfo => projectInfo.id < 4).map( ( projectInfo ) => (
						<Project key={projectInfo.id}
							title={projectInfo.title}
							imageName={projectInfo.imageName}
							goal={projectInfo.goal}
							role={projectInfo.role}
							concepts={projectInfo.concepts}
							tech={projectInfo.tech}
							liveURL={projectInfo.liveURL}
							repoURL={projectInfo.repoURL}
							guestAccount={projectInfo.guestAccount}
						/>
					) ) }
				</div>
				<h2 className="lines">Independent</h2>
				<div className="all-projects-container">
					{allProjectInfo.filter(projectInfo => projectInfo.id > 3).map( ( projectInfo ) => (
						<Project key={projectInfo.id}
							title={projectInfo.title}
							imageName={projectInfo.imageName}
							goal={projectInfo.goal}
							role={projectInfo.role}
							concepts={projectInfo.concepts}
							tech={projectInfo.tech}
							liveURL={projectInfo.liveURL}
							repoURL={projectInfo.repoURL}
							guestAccount={projectInfo.guestAccount}
						/>
					) ) }
				</div>
			</div>
		</>
	);
}