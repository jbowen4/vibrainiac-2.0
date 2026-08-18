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
          "transition-colors duration-(--transition-fast) ease-(--ease-standard)",
          active
            ? "text-accent-primary drop-shadow-[var(--shadow-glow-accent)]"
            : "text-text-primary hover:text-accent-primary"
        )}
      >
        {label}
        <svg
          aria-hidden
          viewBox="0 0 12 8"
          className="size-2.5 fill-current"
        >
          <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
                  "transition-colors duration-(--transition-fast) ease-(--ease-standard)",
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

export interface NavbarProps {
  /** Nav items rendered after the logo — plain `NavLink`s or a `NavDropdown`. */
  children: ReactNode;
  logo?: ReactNode;
  className?: string;
}

/**
 * Site header: the glass logo pill on the left (matches the "Frame 2"
 * capsule measured on every page — radius-lg, ambient shadow, ~40px
 * horizontal / 15px vertical padding) and the nav item list on the right.
 */
export function Navbar({ children, logo, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between gap-6 py-6",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-[10px] rounded-lg bg-background-secondary/70 py-[15px] pr-[39px] pl-10",
          "backdrop-blur-glass-sm shadow-elevated"
        )}
      >
        {logo ?? <Logo />}
      </div>
      <div className="flex items-center gap-8">{children}</div>
    </nav>
  );
}
