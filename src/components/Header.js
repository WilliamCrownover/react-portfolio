import Navigation from './Navigation';

export default function Header( { currentPage, handlePageChange } ) {

	return (
		<header>
			<div>
				<h1>William Crownover</h1>
				<p className="pHeader">Portfolio built with React</p>
			</div>
			<Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
		</header>
	);
}