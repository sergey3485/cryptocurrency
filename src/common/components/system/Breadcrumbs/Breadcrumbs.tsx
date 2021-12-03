import * as React from 'react';

import * as S from './styled';

export interface BreadcrumbsItemProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
  const { children } = props;

  return (
    <S.BreadcrumbsItemRoot>{children}</S.BreadcrumbsItemRoot>
  );
};

export interface BreadcrumbsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => {
  const { children, ...other } = props;

  return (
    <S.BreadcrumbsLinkRoot {...other}>
      {children}
    </S.BreadcrumbsLinkRoot>
  );
};

export interface BreadcrumbsSeparatorProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const BreadcrumbsSeparator = (props: BreadcrumbsSeparatorProps) => {
  const { children } = props;

  return (
    <S.BreadcrumbsSeparatorRoot aria-hidden>
      {children}
    </S.BreadcrumbsSeparatorRoot>
  );
};

export interface BreadcrumbsProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const Breadcrumbs = (props: BreadcrumbsProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.BreadcrumbsRoot>
      <S.BreadcrumbsList>
        {children}
      </S.BreadcrumbsList>
    </S.BreadcrumbsRoot>
  );
};

export {
  Breadcrumbs as Root,
  BreadcrumbsItem as Item,
  BreadcrumbsSeparator as Separator,
  BreadcrumbsLink as Link,
};
