'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';

type SmoothScrollLinkProps = ComponentProps<typeof Link>;

const SmoothScrollLink = ({ href, onClick, ...props }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const hash = typeof href === 'string' ? href.split('#')[1] : undefined;
    if (!hash) return;

    e.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${hash}`);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
};

export default SmoothScrollLink;
