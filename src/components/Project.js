/* eslint-disable no-undef */

export default function Project( { title, imageName, liveURL, repoURL } ) {

	return (
		<div className="project-card">
			<div className="project-image-btns">
				<h4>{title}</h4>
				<img src={`${process.env.PUBLIC_URL}/assets/${imageName}`} alt="Project"/>
				<div className="project-btn-wrapper">
					<a className="btn-left" href={liveURL} target="_blank" rel="noreferrer"
						alt="Go to Shelf-Life Webpage">Live Site</a>
					<a className="btn-right" href={repoURL} target="_blank" rel="noreferrer"
						alt="Go to Shelf-Life Repo">Repository</a>
				</div>
			</div>
		</div>
	);
}