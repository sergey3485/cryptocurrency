import * as React from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { GlobalStyles } from '../common/design/GlobalStyles';
import { ResetStyles } from '../common/design/ResetStyles';

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyles />
        <ResetStyles />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
