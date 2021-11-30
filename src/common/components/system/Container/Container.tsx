import * as React from 'react';

import * as S from './styled';

export interface ContainerProps {
  children?: React.ReactNode;
  disableGutters?: boolean;
}

export const Container = (props: ContainerProps) => {
  const {
    children,
    disableGutters,
  } = props;

  return (
    <S.ContainerRoot disableGutters={disableGutters}>{children}</S.ContainerRoot>
  );
};
