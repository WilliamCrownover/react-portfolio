import Navigation from './Navigation';

export default function Header( { currentPage, handlePageChange } ) {

	return (
		<header>
			<h1>William Crownover</h1>
			<Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
		</header>
	);
}