import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

export const BreadcrumbsRoot = styled.nav({});

export const BreadcrumbsList = styled.ol({
  display: 'flex',
  alignItems: 'center',

  fontSize: 14,
  lineHeight: '20px',

  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const BreadcrumbsLinkRoot = styled.a({
  color: colors.gray.gray9,
  textDecoration: 'none',
});

export const BreadcrumbsItemRoot = styled.li({
  display: 'inline-flex',
  alignItems: 'center',
});

export const BreadcrumbsSeparatorRoot = styled.li({
  display: 'inline-flex',
  userSelect: 'none',
  marginLeft: 4,
  marginRight: 4,
});
