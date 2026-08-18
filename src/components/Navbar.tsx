import type { ReactNode } from "react";
import { DropdownMenu } from "radix-ui";

import { cn } from "@/lib/cn";
import { Logo } from "@/components/Logo";

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  active?: boolean;
}

/**
 * Nav item that reveals a menu on click — the "About" tab in the Navbar
 * reference frame ("Clicking on 'About' reveals the dropdown menu... the
 * screen updates with the highlighted page listed below the tab").
 */
export function NavDropdown({ label, items, active = false }: NavDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          "inline-flex cursor-pointer items-center gap-1 font-sans text-body-sm font-medium outline-none",
          "transition-colors duration-(--transition-fast) ease-standard",
          active
            ? "text-accent-primary drop-shadow-[var(--shadow-glow-accent)]"
            : "text-text-primary hover:text-accent-primary"
        )}
      >
        {label}
        <svg aria-hidden viewBox="0 0 12 8" className="size-2.5">
          <path
            d="M1 1.5 6 6.5 11 1.5"
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={12}
          className={cn(
            "z-50 min-w-40 rounded-sm border border-border-hairline/40 bg-surface-glass p-2",
            "backdrop-blur-glass-sm shadow-elevated",
            "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out"
          )}
        >
          {items.map((item) => (
            <DropdownMenu.Item key={item.href} asChild>
              <a
                href={item.href}
                className={cn(
                  "block cursor-pointer select-none rounded-sm px-3 py-2 text-body-sm font-medium text-text-inverse outline-none",
                  "transition-colors duration-(--transition-fast) ease-standard",
                  "hover:text-accent-primary hover:drop-shadow-[var(--shadow-glow-accent)] data-[highlighted]:text-accent-primary"
                )}
              >
                {item.label}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

/**
 * The "currently selected page" treatment — three stacked layers matching
 * the Figma reference: a full-width blue bar (Layer 0), a soft blue glow
 * in a smooth trapezoid drip (Layer 1), and a solid white drip of the same
 * shape on top (Layer 2). Wrap it around whichever nav element represents
 * the active page — here, the logo pill for the Home page.
 */
function ActiveIndicatorBar() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0">
      <div className="h-1.5 w-full bg-accent-primary shadow-glow-brand" />
    </div>
  );
}

/** A flat-topped shape that sags into one smooth curve at the center — the "trapezoid-ish" dip from the reference. */
function DripShape({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
      className={className}
    >
      <path d="M0,0 C50,0 45,60 100,60 C155,60 150,0 200,0 Z" fill={fill} />
    </svg>
  );
}

function ActiveIndicatorDrip() {
  return (
    <>
      {/* -top-6 cancels the nav's py-6 so this drip starts at the nav's
          very top edge (where the bar sits), not the pill's own top. */}
      <DripShape
        className="pointer-events-none absolute -top-6 left-1/2 h-16 w-40 -translate-x-1/2 text-accent-primary opacity-80 blur-xl"
        fill="currentColor"
      />
      <DripShape
        className="pointer-events-none absolute -top-6 left-1/2 h-11 w-28 -translate-x-1/2 text-text-primary"
        fill="currentColor"
      />
    </>
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
export function Navbar({ start, end, social, logo, homeActive = false, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "relative grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 py-6 sm:gap-6",
        className
      )}
    >
      {homeActive && <ActiveIndicatorBar />}

      <div aria-hidden />

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap md:flex-nowrap md:gap-8">
        {start}
        <div className="relative">
          {homeActive && <ActiveIndicatorDrip />}
          <div
            className={cn(
              "relative inline-flex shrink-0 items-center justify-center rounded-lg bg-background-secondary/70 p-3 md:p-4",
              "backdrop-blur-glass-sm shadow-elevated"
            )}
          >
            {logo ?? <Logo />}
          </div>
        </div>
        {end}
      </div>

      <div className="hidden items-center gap-5 justify-self-end md:flex">{social}</div>
    </nav>
  );
}
