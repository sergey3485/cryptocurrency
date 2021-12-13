import * as React from 'react';
import styled from 'styled-components';

import * as colors from '@radix-ui/colors';

export const CoinTableRoot = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  borderBottom: '1px solid black',
  position: 'relative',
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
  },
});

interface TableCellProps {
  align?: React.CSSProperties['textAlign'];
  width?: React.CSSProperties['width'];
}

export const TableHead = styled.th<TableCellProps>((props) => ({
  fontSize: 14,
  textAlign: props.align,
  width: props.width ?? '25%',
}));

export const TableCell = styled.td<TableCellProps>((props) => ({
  fontSize: 14,
  fontWeight: 500,
  color: 'black',
  textAlign: props.align,
  width: props.width ?? '25%',
}));

export const TableRow = styled.tr({
  borderBottom: '1px solid',
  borderColor: colors.blackA.blackA7,
  cursor: 'pointer',

  '& td': {
    padding: '8px 0',
  },
});
