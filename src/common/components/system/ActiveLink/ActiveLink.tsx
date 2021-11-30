import * as React from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

export interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
}

export const ActiveLink = (props: ActiveLinkProps) => {
  const {
    href,
    children,
    ...other
  } = props;

  const { asPath } = useRouter();

  const child = React.Children.only(children);
  const isActive = asPath === href;

  return (
    <Link href={href} {...other} passHref>
      {React.cloneElement(child, {
        active: isActive,
      })}
    </Link>
  );
};
