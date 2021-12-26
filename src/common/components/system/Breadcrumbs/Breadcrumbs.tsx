import * as React from 'react';

import * as S from './styled';

export interface BreadcrumbsItemProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>((props, ref) => {
  const { children } = props;

  return (
    <S.BreadcrumbsItemRoot ref={ref}>{children}</S.BreadcrumbsItemRoot>
  );
});

export interface BreadcrumbsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const BreadcrumbsLink = React.forwardRef<HTMLAnchorElement, BreadcrumbsLinkProps>((props, ref) => {
  const { children, ...other } = props;

  return (
    <S.BreadcrumbsLinkRoot {...other} ref={ref}>
      {children}
    </S.BreadcrumbsLinkRoot>
  );
});

export interface BreadcrumbsSeparatorProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const BreadcrumbsSeparator = React.forwardRef<HTMLLIElement, BreadcrumbsSeparatorProps>((props, ref) => {
  const { children } = props;

  return (
    <S.BreadcrumbsSeparatorRoot aria-hidden ref={ref}>
      {children}
    </S.BreadcrumbsSeparatorRoot>
  );
});

export interface BreadcrumbsProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>((props, ref): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.BreadcrumbsRoot ref={ref}>
      <S.BreadcrumbsList>
        {children}
      </S.BreadcrumbsList>
    </S.BreadcrumbsRoot>
  );
});

export {
  Breadcrumbs as Root,
  BreadcrumbsItem as Item,
  BreadcrumbsSeparator as Separator,
  BreadcrumbsLink as Link,
};
