import { cn } from '@/lib/cn';

/**
 * The "currently selected page" treatment, extracted so any nav element
 * (logo pill, a NavLink, or the About NavDropdown trigger) can wear it —
 * not just the logo. Three stacked layers matching the Figma reference:
 * a full-width blue bar across the very top of the nav, a soft blue glow
 * in a smooth trapezoid drip, and a solid white drip of the same shape on
 * top. Wrap `NavActiveDrip` around whichever nav element represents the
 * active page/section.
 */
export function ActiveIndicatorBar() {
  return (
    <div
      aria-hidden
      className='pointer-events-none absolute top-0 z-0 w-screen left-1/2 -translate-x-1/2'>
      <div className='h-1.5 w-full bg-accent-primary' />
    </div>
  );
}

/**
 * A flat-topped shape that sags into one smooth curve at the center — the
 * "trapezoid-ish" dip from the reference. Stretches to the full width of
 * its positioned parent (`preserveAspectRatio="none"`) rather than using a
 * fixed pixel width, so it scales to encapsulate whatever nav item it's
 * wrapping — a short "NEWS" tab and a long "CONTACT US" tab both get a
 * drip sized to their own rendered width instead of sharing one fixed size.
 */
function DripShape({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg
      aria-hidden
      viewBox='0 0 163 59'
      preserveAspectRatio='none'
      fill='none'
      className={cn('h-6.5 w-18 sm:h-15 sm:w-60', className)}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M117.718 43.0809C114.288 52.0916 106.005 59 96.3636 59H66.6363C56.9952 59 48.7115 52.0916 45.2822 43.0809C39.0589 26.7285 25.7416 3.21772 0 5.90005e-05C38.0004 -4.224e-05 132 6.62787e-06 163 5.89412e-05C137.258 3.21772 123.941 26.7285 117.718 43.0809Z'
        fill={fill}
      />
    </svg>
  );
}

/**
 * Drop this inside a `relative`-positioned wrapper that stretches to the
 * full height of the nav row (`self-stretch`) around the active nav
 * element — it self-positions to the top of that wrapper via `-top-3`,
 * which cancels the nav's own `py-3` so the drip starts at the nav's very
 * top edge (where `ActiveIndicatorBar` sits), not the wrapper's own top.
 * The wrapper must stretch to the row's full height, otherwise nav items
 * shorter than the tallest sibling get vertically centered within the row
 * and their own top no longer lines up with the nav's top edge.
 */
export function NavActiveDrip() {
  return (
    <>
      <DripShape
        className='pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-primary opacity-80 blur-xl'
        fill='currentColor'
      />
      <DripShape
        className='pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 text-text-primary'
        fill='currentColor'
      />
    </>
  );
}

/**
 * Mobile-panel equivalent of `NavActiveDrip` — a solid white bar spanning
 * the full viewport width behind the active item's row, rather than the
 * drip shape. Sized to the height of its positioned wrapper via
 * `inset-y-0`, so the wrapper just needs `relative` and whatever padding
 * gives the row its height.
 */
export function MobileNavActiveBar() {
  return (
    <span
      aria-hidden
      className='pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-text-primary'
    />
  );
}
