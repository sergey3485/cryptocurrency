import { GlobalStyles } from '../common/design/GlobalStyles';
import { ResetStyles } from '../common/design/ResetStyles';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ResetStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
