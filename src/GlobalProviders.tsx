import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './state/store';

import { PersistGate } from 'redux-persist/integration/react';

const GlobalProviders = ({ children }: PropsWithChildren<{}>) => {
	return (
		<ReduxProvider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</ReduxProvider>
	);
};

export default GlobalProviders;
