import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import AppContainer from './components/AppContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AppContainer />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
