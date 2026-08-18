"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import { DecorativeBlob, type BlobVariant } from "@/components/GradientBackdrop";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { cn } from "@/lib/cn";

export interface ValuesTab {
  label: string;
  heading: string;
  body: string;
  /** Full-bleed photo backing the panel — omit to fall back to a decorative glow. */
  image?: StaticImageData;
  blob?: BlobVariant;
}

export interface ValuesTabsProps {
  tabs: ValuesTab[];
}

/**
 * The "three principles" tab switcher — a blue control bar (matches the
 * nav's accent-primary bar) selecting between full-bleed panels below it.
 */
export function ValuesTabs({ tabs }: ValuesTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <div className="flex w-full flex-col">
      <div className="w-full bg-accent-primary">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-stretch justify-center">
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={tab.label} className="flex items-stretch">
                {index > 1 && (
                  <span aria-hidden className="my-3 hidden w-px bg-text-primary/30 sm:block" />
                )}
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={cn(
                    "px-6 py-4 text-center font-sans text-body-sm font-bold whitespace-nowrap",
                    "transition-colors duration-(--transition-fast) ease-standard sm:px-8 sm:text-body-lg",
                    isActive
                      ? "bg-text-primary text-text-inverse"
                      : "text-text-primary hover:text-text-inverse/80"
                  )}
                >
                  {tab.label}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex min-h-[24rem] w-full items-center justify-center overflow-hidden bg-background-secondary sm:min-h-[28rem]">
        {active.image ? (
          <>
            <Image src={active.image} alt="" fill priority sizes="100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          <DecorativeBlob
            variant={active.blob ?? "violet"}
            className="top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2"
          />
        )}
        <div className="relative flex max-w-3xl flex-col items-center gap-4 px-6 py-16 text-center sm:px-16">
          <Heading size="lg" className="!text-accent-secondary">
            {active.heading}
          </Heading>
          <Text size="lg">{active.body}</Text>
        </div>
      </div>
    </div>
  );
}
