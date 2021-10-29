import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function PortfolioPages() {
	const [currentPage, setCurrentPage] = useState( 'About Me' );

	const renderPage = () => {
		switch( currentPage ) {
		case 'Portfolio':
			return <Portfolio />;
		case 'Contact':
			return <Contact />;
		case 'Resume':
			return <Resume />;
		default:
			return <AboutMe />;
		}
	};

	const handlePageChange = ( page ) => setCurrentPage( page );

	return (
		<div>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer />
		</div>
	);
}