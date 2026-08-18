"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Divider } from "@/components/Divider";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";

export interface AccordionItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Item id(s) expanded on first render. */
  defaultOpenIds?: string[];
  className?: string;
}

/**
 * Vertical list of expand/collapse sections — each item toggles
 * independently. Matches the Contact Us page mockup: a label row with a
 * chevron that rotates from "collapsed" (pointing right) to "expanded"
 * (pointing down), a dark panel of revealed content, and a hairline rule
 * under every row.
 */
export function Accordion({ items, defaultOpenIds = [], className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(defaultOpenIds));
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn("flex w-full flex-col", className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const triggerId = `${baseId}-${item.id}-trigger`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id} className="flex flex-col">
            <button
              type="button"
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left sm:py-6"
            >
              <Heading
                size="sm"
                as="span"
                className="normal-case transition-colors duration-(--transition-fast) ease-standard group-hover:text-accent-primary"
              >
                {item.label}
              </Heading>
              <svg
                aria-hidden
                viewBox="0 0 12 8"
                className={cn(
                  "size-3.5 shrink-0 text-accent-primary transition-transform duration-(--transition-base) ease-standard",
                  isOpen ? "rotate-0" : "-rotate-90"
                )}
              >
                <path
                  d="M1 1.5 6 6.5 11 1.5"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "grid transition-[grid-template-rows] duration-(--transition-base) ease-standard",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="bg-gradient-to-b from-black/40 to-transparent px-6 py-10 text-center sm:px-10">
                  {typeof item.content === "string" ? (
                    <Text size="lg" tone="secondary">
                      {item.content}
                    </Text>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>

            <Divider tone="subtle" />
          </div>
        );
      })}
    </div>
  );
}
