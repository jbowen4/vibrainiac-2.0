'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
}

const MIN_THUMB_PX = 24;

/**
 * Scrollable region with an always-visible custom pill scrollbar. Native
 * scrollbars are hidden — overlay-vs-classic rendering and "always show"
 * behavior differ too much across browsers/OS to rely on for a scrollbar
 * that must stay visible regardless of scroll state.
 */
export function ScrollArea({ children, className }: ScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState<{ height: number; top: number } | null>(
    null,
  );

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight + 1) {
      setThumb(null);
      return;
    }
    const height = Math.max(
      (clientHeight / scrollHeight) * clientHeight,
      MIN_THUMB_PX,
    );
    const top =
      (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - height);
    setThumb({ height, top });
  }, []);

  useEffect(() => {
    update();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [update]);

  return (
    <div className='flex min-h-0 flex-1 items-stretch gap-4'>
      <div
        ref={scrollRef}
        onScroll={update}
        className={cn(
          'min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          className,
        )}>
        {children}
      </div>
      {thumb && (
        <div className='relative w-2 shrink-0 rounded-full border border-white/70 bg-black/70'>
          <div
            className='absolute inset-x-0 rounded-full bg-white'
            style={{ height: thumb.height, top: thumb.top }}
          />
        </div>
      )}
    </div>
  );
}
