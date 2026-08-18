import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Fragment } from 'react';

import { cn } from '@/lib/cn';
import { NavActiveDrip } from '@/components/NavActiveDrip';

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
  return (
    <span className='relative inline-flex items-center self-stretch'>
      {active && <NavActiveDrip />}
      <a
        aria-current={active ? 'page' : undefined}
        className={cn(
          'relative font-sans text-body-sm tracking-wide transition-colors duration-(--transition-fast) ease-standard',
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
