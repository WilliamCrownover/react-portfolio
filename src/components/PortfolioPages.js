import { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioPages() {
	const [currentPage, setCurrentPage] = useState("About Me");

	const renderPage = () => {
		switch(currentPage) {
			case "Portfolio":
				return <Portfolio />;
			case "Contact":
				return <Contact />;
			case "Resume":
				return <Resume />;
			default:
				return <AboutMe />
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
		</div>
	);
}