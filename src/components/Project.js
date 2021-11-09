/* eslint-disable no-undef */

export default function Project( { title, imageName, liveURL, repoURL } ) {

	return (
		<div className="project-card">
			<div className="project-image-btns">
				<div className="project-title">
					<h3>{title}</h3>
				</div>
				<img src={`${process.env.PUBLIC_URL}/assets/${imageName}`} alt="Project"/>
				<div className="project-btn-wrapper">
					<a className="btn-left" href={liveURL} target="_blank" rel="noreferrer"
						alt={`Go to ${title} Webpage`}>Live Site</a>
					<a className="btn-right" href={repoURL} target="_blank" rel="noreferrer"
						alt={`Go to ${title} Repo`}>Repository</a>
				</div>
			</div>
			<div className="project-info-card">
				<p>Testing text</p>
			</div>
		</div>
	);
}