import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export const CoreLayoutRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors.blue.blue1,
  height: '100vh',
});

export const Content = styled.main({
  paddingTop: 16,
  paddingBottom: 16,
  flex: 1,
});
