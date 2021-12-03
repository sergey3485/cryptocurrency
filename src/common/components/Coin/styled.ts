import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export const CoinRout = styled.span({
  fontSize: 'inherit',

  '&:last-of-type': {
    color: colors.blackA.blackA12,
  },
});

export const CoinRoutContainer = styled.div({
  display: 'flex',
  color: colors.gray.gray9,
  fontSize: 14,
});

export const Rank = styled.sup({
  color: colors.gray.gray11,
  fontSize: 14,
});

export const Change = styled.span({
  color: colors.green.green11,
  fontSize: 14,
});

export const Value = styled.span({
  fontSize: 48,
  color: 'black',
  fontWeight: 500,
  lineHeight: 1,
});

export const Coin = styled.span({
  fontSize: 24,
  fontWeight: 500,
});

export const CoinRoot = styled.div({
  marginBottom: 32,
});

export const ValueWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  marginLeft: 32,
});

export const ContentWrapper = styled.div({
  display: 'flex',
  marginTop: 24,
});

export const ValueContainer = styled.div({
  display: 'flex',
});

export const NavigationItem = styled.a({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textDecoration: 'none',
  color: 'inherit',
});
