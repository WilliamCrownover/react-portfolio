import PortfolioPages from './pages/PortfolioPages';
import { PortfolioProvider } from './utils/GlobalState';

function App() {
	return (
		<PortfolioProvider>
			<PortfolioPages/>
		</PortfolioProvider>
	);
}

export default App;
