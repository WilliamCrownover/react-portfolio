import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import Header from '../components/Header';

export default function Resume() {

	return (
		<>
			<Header/>
			<div className="page-section">
				<h2 className="lines">Resume</h2>
				<a href="https://drive.google.com/file/d/1stCDKVvpGVHaHWtrjFR0GRNn3QJp89m_/view?usp=sharing" target="_blank" rel="noreferrer">
					<h3>Downloadable PDF <span><FontAwesomeIcon icon={faFile} size="1x" /></span></h3>
				</a>
				<div className="flex-lists">
					<div>
						<h4>Front-end Proficiencies</h4>
						<ul className="proficient-list">
							<li>HTML5</li>
							<li>CSS3</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Handlebars.js</li>
							<li>React.js</li>
						</ul>
					</div>
					<div>
						<h4>Back-end Proficiencies</h4>
						<ul className="proficient-list">
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MySQL2</li>
							<li>Sequelize</li>
							<li>MongoDB</li>
							<li>Mongoose.js</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}