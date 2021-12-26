import * as React from 'react';

import Link from 'next/link';

import { Container } from '@/components/system/Container';

import * as S from './styled';

export const CoreHeader = () => {
  return (
    <S.CoreHeaderWrapper>
      <Container>
        <S.CoreHeaderRoot>
          <Link href="/">
            <S.Logo>Crypto Market</S.Logo>
          </Link>

          <S.HelperContainer />
        </S.CoreHeaderRoot>
      </Container>
    </S.CoreHeaderWrapper>
  );
};
