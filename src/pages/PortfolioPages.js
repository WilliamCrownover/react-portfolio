import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';

import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Welcome from './Welcome';

export default function PortfolioPages() {

	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/react-portfolio/about' component={AboutMe} />
					<Route exact path='/react-portfolio/projects' component={Projects} />
					<Route exact path='/react-portfolio/contact' component={Contact} />
					<Route exact path='/react-portfolio/resume' component={Resume} />
					<Route path='/' component={Welcome} />
				</Switch>
			</Router>
			{/* <Footer/> */}
		</>
	);
}