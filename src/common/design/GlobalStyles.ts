import { createGlobalStyle } from 'styled-components';
import * as colors from '@radix-ui/colors';

export const GlobalStyles = createGlobalStyle({
  body: {
    overflowY: 'scroll',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    textRendering: 'optimizeLegibility',

    fontDisplay: 'swap',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 16,
    fontWeight: 400,

    color: colors.slate.slate11,
    backgroundColor: 'white',
  },

  '::selection': {
    backgroundColor: colors.violetA.violetA5,
    color: colors.violet.violet11,
  },

  '*:focus': {
    outline: `2px solid ${colors.gray.gray8}`,
  },
});
