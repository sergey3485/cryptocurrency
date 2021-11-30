import * as React from 'react';

import { Container } from '@/components/system/Container';
import { ActiveLink } from '@/components/system/ActiveLink';

import * as S from './styled';

export const CoreHeader = () => {
  return (
    <S.CoreHeaderWrapper>
      <Container>
        <S.CoreHeaderRoot>
          <S.Logo>Crypto Market</S.Logo>

          <S.Navigation>
            <ActiveLink href="/">
              <S.NavigationItem>Cryptocurrencies</S.NavigationItem>
            </ActiveLink>

            <ActiveLink href="/exchanges">
              <S.NavigationItem>Exchanges</S.NavigationItem>
            </ActiveLink>

            <ActiveLink href="/watchlist">
              <S.NavigationItem>Watchlist</S.NavigationItem>
            </ActiveLink>

            <ActiveLink href="/calendar">
              <S.NavigationItem>Calendar</S.NavigationItem>
            </ActiveLink>

            <ActiveLink href="/products">
              <S.NavigationItem>Products</S.NavigationItem>
            </ActiveLink>
          </S.Navigation>
          <S.HelperContainer />
        </S.CoreHeaderRoot>
      </Container>
    </S.CoreHeaderWrapper>
  );
};
