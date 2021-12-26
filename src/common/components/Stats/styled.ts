import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export const StatsItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: 1,
  padding: 28,
  borderRight: '1px solid',
  borderColor: colors.gray.gray2,
  boxShadow: `
    0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12)
  `,

  '&:last-of-type': {
    borderRight: 'none',
  },
});

export const StatsHeader = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 48,
});

export const StatsTitle = styled.span({
  fontSize: 16,
  fontWeight: 'bold',
});

export const StatsRoot = styled.div({
  backgroundColor: 'white',
});

export const StatsWrapper = styled.div({
  display: 'flex',
});

export const ValueContainer = styled.div<{ reverse: boolean }>((props) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  flexDirection: props.reverse ? 'row-reverse' : 'row',
}));

export const Value = styled.span({
  fontSize: 24,
  marginRight: 8,
});

export interface QuotationRateContainerProps {
  state?: boolean;
}

export const QuotationRateContainer = styled.div<QuotationRateContainerProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 24,
  // eslint-disable-next-line no-nested-ternary
  color: props.state === undefined
    ? colors.gray.gray11
    : (props.state ? colors.green.green11 : colors.red.red11),
}));

export const QuotationRate = styled.span({
  fontSize: 14,
  color: 'inherit',
});

export const CurrencyMark = styled.span({
  fontSize: 24,
  marginRight: 8,
  color: colors.gray.gray6,
});
