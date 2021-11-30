import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export interface NavigationItemProps {
  active?: boolean;
}

export const CoreHeaderRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 96,
});

export const Logo = styled.h1({
  fontSize: 24,
});

export const Navigation = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const NavigationItem = styled.a<NavigationItemProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  marginLeft: 12,
  marginRight: 12,
  textDecoration: 'none',
  color: 'inherit',

  ...(props.active && {
    borderBottom: `2px solid ${colors.blue.blue11}`,
    color: colors.blue.blue10,
  }),
}));

export const CoreHeaderWrapper = styled.div({
  backgroundColor: 'white',
});

export const HelperContainer = styled.div({});
