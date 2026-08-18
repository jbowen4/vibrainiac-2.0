import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { NavActiveDrip } from "@/components/NavActiveDrip";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks this as the current page — applies the brand glow and the ActiveIndicatorDrip. */
  active?: boolean;
}

/** Single top-level nav item — "ABOUT", "GAMES", "CONTACT US", ... */
export function NavLink({ active = false, className, children, ...props }: NavLinkProps) {
  return (
    <span className="relative inline-block">
      {active && <NavActiveDrip />}
      <a
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative font-sans text-body-sm font-medium tracking-wide transition-colors duration-(--transition-fast) ease-standard",
          active
            ? "text-accent-primary drop-shadow-(--shadow-glow-accent)"
            : "text-text-primary hover:text-accent-primary",
          className
        )}
        {...props}
      >
        {children}
      </a>
    </span>
  );
}
