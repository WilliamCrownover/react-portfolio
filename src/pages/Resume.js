import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import Header from '../components/Header';

export default function Resume() {

	return (
		<>
			<Header/>
			<div className="page-section">
				<h2 className="lines">Resume</h2>
				<a href="https://drive.google.com/file/d/1x7OT6fWnPFBiMKqCCCLBXNnjjtMLydO4/view?usp=sharing" target="_blank" rel="noreferrer">
					<div className="accord-title resume-btn">
						<h3>Downloadable PDF <span><FontAwesomeIcon icon={faFile} size="1x" /></span></h3>
					</div>
				</a>
			</div>
		</>
	);
}