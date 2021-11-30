import * as React from 'react';

import { Container } from '@/components/system/Container';

import { CoreHeader } from '../CoreHeader';

import * as S from './styled';

export interface LayoutProps {
  children: React.ReactNode;
}

export const CoreLayout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <S.CoreLayoutRoot>
      <CoreHeader />

      <S.Content>
        <Container>
          {children}
        </Container>
      </S.Content>
    </S.CoreLayoutRoot>
  );
};
