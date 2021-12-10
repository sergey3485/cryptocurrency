import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export const CoinStatsRoot = styled.div({
  backgroundColor: 'white',
  marginTop: 16,
  flex: 1,
});

export const CoinStatsItem = styled.li<{ state: boolean, last?: boolean }>((props) => ({
  display: 'flex',
  color: props.state ? colors.green.green11 : colors.red.red11,
  justifyContent: 'space-between',
  flexDirection: props.last ? 'column' : 'row',
  marginTop: 4,
  marginBottom: 4,
  paddingBottom: 8,
  borderBottom: props.last ? 'none' : '1px solid',
  borderColor: colors.gray.gray2,
}));

export const CoinStatsWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
});

export const CoinStatsList = styled.ol({
  display: 'flex',
  flexDirection: 'column',

  fontSize: 14,
  lineHeight: '20px',

  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginTop: 16,
});

export const CoinStatsKey = styled.span({
  color: colors.gray.gray9,
  marginRight: 16,
});

export const CoinStatsValue = styled.span<{ state?: boolean }>((props) => ({
  color: props.state ? 'inherit' : colors.blackA.blackA12,
  fontWeight: 500,
}));

export const Coin = styled.span({
  color: colors.gray.gray9,
});

export const StatsOption = styled.span({
  color: colors.blackA.blackA12,
  marginRight: 16,
});

export const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 20,
});

export const Heading = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 16,
});

export const ValueContainer = styled.div({
  color: 'inherit',
  display: 'flex',
});
