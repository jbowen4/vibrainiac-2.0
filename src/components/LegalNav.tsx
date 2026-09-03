import { Fragment } from "react";

import { cn } from "@/lib/cn";

export interface LegalNavLink {
  label: string;
  href: string;
}

export interface LegalNavProps {
  links: LegalNavLink[];
  /** href of the link that matches the current page, if any. */
  activeHref?: string;
  className?: string;
}

/**
 * Pill-shaped glass nav listing the legal docs (Terms of Service, Privacy
 * Policy, App Disclaimer) — recurs at the bottom of the Games page and the
 * top of each legal doc page, where it also highlights the active doc.
 */
export function LegalNav({ links, activeHref, className }: LegalNavProps) {
  return (
    <nav
      aria-label="Legal"
      className={cn(
        "flex flex-wrap items-center justify-between gap-x-3 gap-y-2 rounded-full",
        "border border-accent-primary/20 bg-background-elevated/40 px-6 py-3 sm:px-10",
        "shadow-elevated backdrop-blur-glass-md",
        className
      )}
    >
      {links.map((link, index) => {
        const active = link.href === activeHref;
        return (
          <Fragment key={link.href}>
            {index > 0 && (
              <span aria-hidden className="text-accent-primary">
                &bull;
              </span>
            )}
            <a
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center text-center text-[24px] leading-[33px] font-bold uppercase",
                "transition-colors duration-(--transition-fast) ease-standard",
                active
                  ? "text-text-primary drop-shadow-(--shadow-glow-accent)"
                  : "text-accent-primary hover:text-accent-secondary"
              )}
              style={{ fontFamily: "var(--font-truculenta)" }}
            >
              {link.label}
            </a>
          </Fragment>
        );
      })}
    </nav>
  );
}
