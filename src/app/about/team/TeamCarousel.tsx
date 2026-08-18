"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { Text } from "@/components/Text";
import type { TeamMember } from "./team-members";

const OFFSETS = [-2, -1, 0, 1, 2];
const AUTO_ADVANCE_MS = 4500;
/** Cumulative horizontal wheel delta (px) needed before a scroll gesture advances a step. */
const SCROLL_STEP_THRESHOLD = 60;
/** Cooldown (ms) after a step-triggering scroll before another can fire, so one continuous trackpad swipe doesn't blow through several members. */
const SCROLL_STEP_COOLDOWN_MS = 350;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

/**
 * Member lookup advances one-per-step (`offset`), but the two outermost
 * slots are pushed further out than a linear spacing would place them —
 * otherwise, at this bubble size, they'd read as a 4th/5th mostly-visible
 * bubble instead of the thin sliver "entering/exiting the viewport" the
 * design calls for.
 */
function visualOffset(offset: number) {
  return Math.abs(offset) === 2 ? Math.sign(offset) * 2.22 : offset;
}

export interface TeamCarouselProps {
  members: TeamMember[];
}

/**
 * Horizontally infinite carousel of team-member bubbles. `position` is an
 * unbounded absolute index — it only ever increments/decrements, never
 * wraps — while each rendered slot looks up its member via `mod()`. That
 * keeps the motion genuinely continuous (no visible "reset" jump at the
 * ends) without having to render the whole roster at once.
 */
export function TeamCarousel({ members }: TeamCarouselProps) {
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = members.length;
  const active = members[mod(position, count)];

  const goTo = (delta: number) => setPosition((p) => p + delta);

  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (!pausedRef.current) setPosition((p) => p + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, []);

  const trackRef = useRef<HTMLDivElement>(null);

  // React attaches its synthetic `onWheel` listener as passive, so
  // preventDefault() inside a JSX handler is silently ignored — a native
  // listener is required to stop horizontal trackpad scroll from also
  // triggering the browser's swipe-navigation gesture.
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    let accumulated = 0;
    let cooling = false;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();

      if (cooling) return;
      accumulated += event.deltaX;

      if (Math.abs(accumulated) >= SCROLL_STEP_THRESHOLD) {
        setPosition((p) => p + (accumulated > 0 ? 1 : -1));
        accumulated = 0;
        cooling = true;
        window.setTimeout(() => {
          cooling = false;
        }, SCROLL_STEP_COOLDOWN_MS);
      }
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        ref={trackRef}
        role="group"
        aria-label="Team members"
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") goTo(-1);
          if (event.key === "ArrowRight") goTo(1);
        }}
        style={{
          // Sized as a share of viewport width (matching the Figma 1920px
          // canvas ratios: 490/443/315 ≈ 25.5vw/23vw/16.4vw) rather than
          // fixed breakpoints, so the far bubbles keep peeking in at the
          // screen edges at any window size instead of just on desktop.
          ["--carousel-spacing" as string]: "clamp(110px, 25.5vw, 490px)",
          ["--carousel-active" as string]: "clamp(160px, 23vw, 443px)",
          ["--carousel-inactive" as string]: "clamp(100px, 16.4vw, 315px)",
          height: "calc(var(--carousel-active) + 3rem)",
        }}
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden outline-none">
        {OFFSETS.map((offset) => {
          const member = members[mod(position + offset, count)];
          const isActive = offset === 0;

          return (
            <button
              key={`${offset}-${member.name}`}
              type="button"
              aria-label={`Show ${member.name}`}
              aria-current={isActive ? "true" : undefined}
              disabled={isActive}
              onClick={() => goTo(offset)}
              style={{
                transform: `translate(-50%, -50%) translateX(calc(var(--carousel-spacing) * ${visualOffset(offset)}))`,
                width: isActive ? "var(--carousel-active)" : "var(--carousel-inactive)",
                height: isActive ? "var(--carousel-active)" : "var(--carousel-inactive)",
                zIndex: 10 - Math.abs(offset),
              }}
              className={cn(
                "absolute top-1/2 left-1/2 rounded-full transition-[width,height,opacity,transform]",
                "duration-(--transition-slow) ease-(--ease-standard)",
                isActive
                  ? "cursor-default border-[5px] border-text-primary bg-white/10 opacity-100 shadow-[0_0_25px_var(--color-accent-primary)] backdrop-blur-glass-sm"
                  : "cursor-pointer border border-text-muted bg-white/[0.02] opacity-20 backdrop-blur-glass-md hover:opacity-40",
              )}>
              <span className="absolute inset-[7%] overflow-hidden rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element -- generated data-URI placeholder, not an optimizable asset */}
                <img
                  src={member.avatar}
                  alt={isActive ? member.name : ""}
                  className={cn(
                    "size-full object-cover",
                    isActive && "shadow-[inset_0_0_40px_var(--color-accent-primary)]",
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 px-6 sm:mt-14 sm:px-0">
        <div className="flex gap-4 border-l-[3px] border-accent-secondary pl-4 sm:gap-5 sm:pl-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-sans text-heading-md text-accent-secondary font-bold uppercase leading-tight sm:text-heading-xl">
              {active.name} | {active.title}
            </h2>
            <Text size="lg" weight="light">
              {active.description}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
