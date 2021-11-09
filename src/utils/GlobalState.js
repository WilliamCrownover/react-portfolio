import { createContext, useContext } from 'react';
import { usePortfolioReducer } from './reducers';

const PortfolioContext = createContext();
const { Provider } = PortfolioContext;

const PortfolioProvider = ( { ...props } ) => {
	const [state, dispatch] = usePortfolioReducer( {
		currentPage: 'About Me',
	} );

	return <Provider value={[state, dispatch]} {...props} />;
};

const usePortfolioContext = () => {
	return useContext( PortfolioContext );
};

export { PortfolioProvider, usePortfolioContext };
