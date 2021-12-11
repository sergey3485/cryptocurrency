import styled from 'styled-components';

import * as colors from '@radix-ui/colors';

export const CoinTableRoot = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  borderBottom: '1px solid black',
});

export const CryptocurrencyWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const CryptocurrencyName = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 16,
});

export const Icon = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8,
});

export const Text = styled.span({
  fontSize: 14,
  fontWeight: 500,
  color: 'black',
});

export const Change = styled.span<{ isPositive: boolean }>((props) => ({
  color: props.isPositive ? colors.green.green11 : colors.redA.redA11,
}));

export const Symbol = styled.span({
  fontSize: 14,
  color: 'black',
});

export const Rank = styled.span({
  fontSize: 12,
  color: 'black',
  minWidth: '4ch',
});

export const TableHeader = styled.thead({
  '& th': {
    padding: '16px 0',
    textAlign: 'left',
  },
});

export const TableHead = styled.th({
  fontSize: 14,
});

export const TableCell = styled.td({
  fontSize: 14,
  fontWeight: 500,
  color: 'black',
});

export const TableRow = styled.tr({
  borderBottom: '1px solid',
  borderColor: colors.blackA.blackA7,
  cursor: 'pointer',

  '& td': {
    padding: '8px 0',
  },
});
