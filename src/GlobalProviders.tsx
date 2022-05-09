import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './state/store';


const GlobalProviders = ({children}: PropsWithChildren<{}>) => {
  return (
    <ReduxProvider store={store}>
        {children}
    </ReduxProvider>
  )
}

export default GlobalProviders;