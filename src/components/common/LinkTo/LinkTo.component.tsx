import Link, { LinkProps } from 'next/link';
import { ReactNode, AnchorHTMLAttributes } from 'react';

interface LinkToProps extends LinkProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkTo = ({ href, children, className = '', ...rest }: LinkToProps) => {
  return (
    <Link href={href} passHref>
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default LinkTo;
