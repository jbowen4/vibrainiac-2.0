'use client';

import type { ReactNode } from 'react';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { DropdownMenu } from 'radix-ui';

import { cn } from '@/lib/cn';
import { Logo } from '@/components/Logo';
import { MobileNavContext } from '@/components/MobileNavContext';
import {
  ActiveIndicatorBar,
  MobileNavActiveBar,
  NavActiveDrip,
} from '@/components/NavActiveDrip';

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
  const mobile = useContext(MobileNavContext);

  return (
    <div className={cn('relative flex items-center', !mobile && 'self-stretch')}>
      {active && (mobile ? <MobileNavActiveBar /> : <NavActiveDrip />)}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className={cn(
            'relative inline-flex cursor-pointer flex-col items-center gap-1 font-sans text-body-sm outline-none',
            'transition-colors duration-(--transition-fast) ease-standard',
            mobile && 'px-6 py-2',
            active
              ? 'font-bold text-text-inverse'
              : 'font-medium text-text-primary hover:text-accent-primary',
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={cn(
        'relative grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 py-3 sm:gap-6',
        className,
      )}>
      <ActiveIndicatorBar />

      <div aria-hidden />

      <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap md:flex-nowrap md:gap-16'>
        <div className='hidden md:contents'>{start}</div>
        <div className='relative flex items-center self-stretch'>
          {homeActive && (
            <span className='hidden md:contents'>
              <NavActiveDrip />
            </span>
          )}
          <Link
            href='/'
            className={cn(
              'relative inline-flex shrink-0 items-center justify-center rounded-lg px-3 md:px-4',
            )}>
            {logo ?? (
              <>
                <span className='md:hidden'>
                  <Logo size={50} variant='light' />
                </span>
                <span className='hidden md:block'>
                  <Logo size={50} variant={homeActive ? 'dark' : 'light'} />
                </span>
              </>
            )}
          </Link>
        </div>
        <div className='hidden md:contents'>{end}</div>
      </div>

      <div className='flex items-center gap-4 justify-self-end'>
        <div className='hidden items-center gap-5 md:flex'>{social}</div>
        <button
          type='button'
          aria-expanded={mobileOpen}
          aria-controls='mobile-nav-panel'
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
          className='relative inline-flex size-8 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden'>
          <span
            className={cn(
              'h-0.5 w-6 rounded-full bg-text-primary transition-transform duration-(--transition-fast) ease-standard',
              mobileOpen && 'translate-y-2 rotate-45',
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 rounded-full bg-text-primary transition-opacity duration-(--transition-fast) ease-standard',
              mobileOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 rounded-full bg-text-primary transition-transform duration-(--transition-fast) ease-standard',
              mobileOpen && '-translate-y-2 -rotate-45',
            )}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          id='mobile-nav-panel'
          className='absolute top-full left-1/2 z-40 w-screen -translate-x-1/2 md:hidden'>
          <div className='flex flex-col items-center gap-8 border-t border-border-hairline/40 bg-background-primary px-6 py-8 shadow-elevated'>
            <MobileNavContext.Provider value={true}>
              <div className='flex flex-col items-center gap-6'>{start}</div>
              <div className='flex flex-col items-center gap-6'>{end}</div>
            </MobileNavContext.Provider>
            <div className='flex items-center gap-5'>{social}</div>
          </div>
        </div>
      )}
    </nav>
  );
}
