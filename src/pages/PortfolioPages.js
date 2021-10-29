import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { useState } from 'react';

// import Footer from '../components/Footer';
// import Header from '../components/Header';

import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

export default function PortfolioPages() {
	// const [currentPage, setCurrentPage] = useState( 'About Me' );

	// const renderPage = () => {
	// 	switch( currentPage ) {
	// 	case 'Portfolio':
	// 		return <Portfolio />;
	// 	case 'Contact':
	// 		return <Contact />;
	// 	case 'Resume':
	// 		return <Resume />;
	// 	default:
	// 		return <AboutMe />;
	// 	}
	// };

	// const handlePageChange = ( page ) => setCurrentPage( page );

	return (
		<Router>
			<Switch>
				<Route exact path='/react-portfolio/about' component={AboutMe} />
				<Route exact path='/react-portfolio/projects' component={Projects} />
				<Route exact path='/react-portfolio/contact' component={Contact} />
				<Route exact path='/react-portfolio/resume' component={Resume} />
				<Route path='/' component={AboutMe} />
			</Switch>
			{/* <Header currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer /> */}
		</Router>
	);
}