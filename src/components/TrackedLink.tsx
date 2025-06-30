import Link, { LinkProps } from 'next/link';
import { logUserEvent } from '../utils/logUserEvent';
import { ReactNode } from 'react';

interface TrackedLinkProps extends LinkProps {
  children: ReactNode;
}

export default function TrackedLink({ href, children, ...props }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      onClick={e => {
        logUserEvent('link_click', { link: typeof href === 'string' ? href : href.toString() });
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </Link>
  );
} 