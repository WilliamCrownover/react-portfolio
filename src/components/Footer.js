import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faVimeo } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

	return (
		<footer>
			<a href="https://github.com/WilliamCrownover" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faGithubSquare} size="3x" />
			</a>
			<a href="https://www.linkedin.com/in/williamcrownover/" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faLinkedin} size="3x" />
			</a>
			<a href="https://vimeo.com/user12491647" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faVimeo} size="3x" />
			</a>
		</footer>
	);
}