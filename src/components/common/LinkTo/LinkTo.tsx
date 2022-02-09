import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkToProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkTo = ({ href, children, className, ...rest }: LinkToProps) => {
  return (
    <Link href={href} passHref {...rest}>
      <a href={href} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default LinkTo;

LinkTo.defaultProps = {
  className: '',
};
