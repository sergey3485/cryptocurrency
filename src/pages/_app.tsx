import * as React from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { GlobalStyles } from '../common/design/GlobalStyles';
import { ResetStyles } from '../common/design/ResetStyles';

import { REACT_QUERY_STATE_PROP_NAME } from '@/modules/rquery/react-query';

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps[REACT_QUERY_STATE_PROP_NAME]}>
        <GlobalStyles />
        <ResetStyles />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
