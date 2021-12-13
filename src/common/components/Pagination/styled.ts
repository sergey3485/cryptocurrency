import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export const ChangePage = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: colors.blue.blue11,
  color: 'white',
  marginLeft: 4,
  marginRight: 4,
  cursor: 'pointer',
  width: 32,
  height: 32,

  '&:disabled': {
    border: `1px solid ${colors.blue.blue10}`,
    backgroundColor: 'inherit',
    color: colors.blue.blue10,
    cursor: 'default',
  },
});

export const PaginationRoot = styled.div({
  display: 'flex',
  marginTop: 16,
  justifyContent: 'center',
});

export const PaginationWrapper = styled.div({
  display: 'flex',
});

export const Page = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.blue.blue12,
  backgroundColor: 'inherit',
  border: 'none',
  borderRadius: 4,
  padding: '4px 12px',
  fontSize: 14,
  marginLeft: 4,
  marginRight: 4,
  fontWeight: 'bold',
  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: colors.blueA.blueA12,
    color: 'white',
    cursor: 'default',
  },
});
