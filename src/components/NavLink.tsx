'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Fragment, useContext } from 'react';

import { cn } from '@/lib/cn';
import { MobileNavContext } from '@/components/MobileNavContext';
import { MobileNavActiveBar, NavActiveDrip } from '@/components/NavActiveDrip';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks this as the current page — applies the brand glow and the ActiveIndicatorDrip. */
  active?: boolean;
}

/**
 * Splits a multi-word label onto separate lines, e.g. "CONTACT US" ->
 * "CONTACT" / "US". Only applied while active, so inactive labels stay
 * on one line.
 */
function breakLabel(children: ReactNode): ReactNode {
  if (typeof children !== 'string') return children;
  const words = children.split(' ');
  if (words.length < 2) return children;

  return words.map((word, i) => (
    <Fragment key={word + i}>
      {i > 0 && <br />}
      {word}
    </Fragment>
  ));
}

/** Single top-level nav item — "ABOUT", "GAMES", "CONTACT US", ... */
export function NavLink({
  active = false,
  className,
  children,
  ...props
}: NavLinkProps) {
  const mobile = useContext(MobileNavContext);
  const wide = typeof children === 'string' && children.trim().split(/\s+/).length > 1;

  return (
    <span
      className={cn('relative inline-flex items-center', !mobile && 'self-stretch')}>
      {active &&
        (mobile ? <MobileNavActiveBar /> : <NavActiveDrip wide={wide} />)}
      <a
        aria-current={active ? 'page' : undefined}
        className={cn(
          'relative font-sans text-body-sm tracking-wide transition-colors duration-(--transition-fast) ease-standard',
          mobile && 'px-6 py-2',
          active
            ? 'font-bold text-text-inverse text-center'
            : 'font-medium text-text-primary hover:text-accent-primary',
          className,
        )}
        {...props}>
        {children}
      </a>
    </span>
  );
}
