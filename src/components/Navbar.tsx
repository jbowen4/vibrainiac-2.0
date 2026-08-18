import type { ReactNode } from 'react';
import Link from 'next/link';
import { DropdownMenu } from 'radix-ui';

import { cn } from '@/lib/cn';
import { Logo } from '@/components/Logo';
import { ActiveIndicatorBar, NavActiveDrip } from '@/components/NavActiveDrip';

export interface NavDropdownItem {
  label: string;
  href: string;
  /** Marks this item as the currently open/selected page within the dropdown. */
  active?: boolean;
}

export interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  /** Marks the trigger itself as the active top-level nav item (e.g. any About page). */
  active?: boolean;
}

/**
 * Nav item that reveals a menu on click — the "About" tab in the Navbar
 * reference frame ("Clicking on 'About' reveals the dropdown menu... the
 * screen updates with the highlighted page listed below the tab").
 */
export function NavDropdown({
  label,
  items,
  active = false,
}: NavDropdownProps) {
  const activeItem = items.find((item) => item.active);

  return (
    <div className='relative flex items-center self-stretch'>
      {active && <NavActiveDrip />}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className={cn(
            'relative inline-flex cursor-pointer items-center gap-1 font-sans text-body-sm font-medium outline-none',
            'transition-colors duration-(--transition-fast) ease-standard',
            active
              ? 'text-accent-primary drop-shadow-(--shadow-glow-accent)'
              : 'text-text-primary hover:text-accent-primary',
          )}>
          {label}
          <svg aria-hidden viewBox='0 0 12 8' className='size-2.5'>
            <path
              d='M1 1.5 6 6.5 11 1.5'
              stroke='currentColor'
              strokeWidth={1.5}
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={12}
            className={cn(
              'z-50 min-w-40 rounded-sm border border-border-hairline/40 bg-surface-glass p-2',
              'backdrop-blur-glass-sm shadow-elevated',
              'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out',
            )}>
            {items.map((item) => (
              <DropdownMenu.Item key={item.href} asChild>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'block cursor-pointer select-none rounded-sm px-3 py-2 text-body-sm font-medium outline-none',
                    'transition-colors duration-(--transition-fast) ease-standard',
                    item.active
                      ? 'bg-text-primary text-text-inverse'
                      : 'text-text-inverse hover:text-accent-primary hover:drop-shadow-(--shadow-glow-accent) data-highlighted:text-accent-primary',
                  )}>
                  {item.label}
                </a>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      {active && activeItem && (
        <span
          className={cn(
            'pointer-events-none absolute top-full left-1/2 mt-1.5 -translate-x-1/2',
            'hidden whitespace-nowrap font-sans text-body-sm font-medium text-text-primary md:block',
          )}>
          {activeItem.label}
        </span>
      )}
    </div>
  );
}

export interface NavbarProps {
  /** Nav items rendered before the logo pill (e.g. "GAMES"). */
  start?: ReactNode;
  /** Nav items rendered after the logo pill (e.g. "ABOUT" dropdown, "CONTACT US"). */
  end?: ReactNode;
  /** Icons pinned to the far right edge, independent of the centered nav cluster. */
  social?: ReactNode;
  logo?: ReactNode;
  /** Marks the logo pill as the current page, rendering the 3-layer glow indicator around it. */
  homeActive?: boolean;
  className?: string;
}

/**
 * Site header: a centered cluster (nav links either side of the glass
 * logo pill — the "Frame 2" capsule measured on every page: radius-lg,
 * ambient shadow, ~40px horizontal / 15px vertical padding) with social
 * icons pinned to the right edge.
 */
export function Navbar({
  start,
  end,
  social,
  logo,
  homeActive = false,
  className,
}: NavbarProps) {
  return (
    <nav
      className={cn(
        'relative grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 py-3 sm:gap-6',
        className,
      )}>
      <ActiveIndicatorBar />

      <div aria-hidden />

      <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap md:flex-nowrap md:gap-16'>
        {start}
        <div className='relative flex items-center self-stretch'>
          {homeActive && <NavActiveDrip />}
          <Link
            href='/'
            className={cn(
              'relative inline-flex shrink-0 items-center justify-center rounded-lg px-3 md:px-4',
            )}>
            {logo ?? <Logo size={50} variant={homeActive ? 'dark' : 'light'} />}
          </Link>
        </div>
        {end}
      </div>

      <div className='hidden items-center gap-5 justify-self-end md:flex'>
        {social}
      </div>
    </nav>
  );
}
