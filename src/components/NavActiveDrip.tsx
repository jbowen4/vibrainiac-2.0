import Image from 'next/image';

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
      {/* This is the thin blue bar at the top of the screen */}
      <div className='h-2.5 w-full bg-accent-primary' />
    </div>
  );
}

/** Narrow drip shape (`Union2.svg`, 163×59) — every tab except "CONTACT US". */
const NARROW_PATH =
  'M117.718 43.0809C114.288 52.0916 106.005 59 96.3636 59H66.6363C56.9952 59 48.7115 52.0916 45.2822 43.0809C39.0589 26.7285 25.7416 3.21772 0 5.90005e-05C38.0004 -4.224e-05 132 6.62787e-06 163 5.89412e-05C137.258 3.21772 123.941 26.7285 117.718 43.0809Z';

/** Wide drip shape (`Union.svg`, 223×59) — the "CONTACT US" tab. */
const WIDE_PATH =
  'M177.718 43.0809C174.288 52.0916 166.005 59 156.364 59H66.6363C56.9952 59 48.7115 52.0916 45.2822 43.0809C39.0589 26.7285 25.7416 3.21772 0 5.90005e-05C38.0004 -4.224e-05 192 6.62788e-06 223 5.89412e-05C197.258 3.21772 183.941 26.7285 177.718 43.0809Z';

/**
 * A flat-topped shape that sags into one smooth curve at the center — the
 * "trapezoid-ish" dip from the reference. Uses a fixed pixel size matching
 * whichever source SVG applies, rather than scaling to its parent
 * (`preserveAspectRatio="none"`) — `wide` picks between the two shapes the
 * design calls for: `Union2.svg` (163×59) for the single-word tabs ("HOME",
 * "ABOUT", "GAMES") and `Union.svg` (223×59) for "CONTACT US".
 */
function DripShape({
  className,
  fill,
  wide,
}: {
  className?: string;
  fill: string;
  wide?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox={wide ? '0 0 223 59' : '0 0 163 59'}
      preserveAspectRatio='none'
      fill='none'
      className={cn('h-14.75', wide ? 'w-55.75' : 'w-40.75', className)}
      xmlns='http://www.w3.org/2000/svg'>
      <path d={wide ? WIDE_PATH : NARROW_PATH} fill={fill} />
    </svg>
  );
}

/**
 * Drop this inside a `relative`-positioned wrapper that stretches to the
 * full height of the nav row (`self-stretch`) around the active nav
 * element — it self-positions to the top of that wrapper via `top-[10px]`.
 * The wrapper must stretch to the row's full height, otherwise nav items
 * shorter than the tallest sibling get vertically centered within the row
 * and their own top no longer lines up with the nav's top edge.
 *
 * Pass `wide` for the "CONTACT US" tab, whose drip spans the full 223px
 * shape width — every other nav item (logo/Home, About, Games, News) uses
 * the narrow 16px width.
 */
export function NavActiveDrip({ wide = false }: { wide?: boolean }) {
  return (
    <>
      <TopHighlightLine wide={wide} />
      <Image
        aria-hidden
        src={wide ? '/Blue-background-union.svg' : '/Blue-background-union2.svg'}
        alt=''
        width={wide ? 268 : 211}
        height={79}
        className='pointer-events-none absolute left-1/2 max-w-none -translate-x-1/2'
      />
      <DripShape
        className='pointer-events-none absolute left-1/2 -translate-x-1/2 text-text-primary'
        fill='currentColor'
        wide={wide}
      />
    </>
  );
}

/**
 * A white line, the same height as `ActiveIndicatorBar`'s blue bar, sitting
 * directly above the `DripShape` at the very top of the nav row — stacked
 * above the blue bar (`z-10` vs. its `z-0`) so it locally overrides the blue
 * with white right where the drip hangs. Slightly wider than the `DripShape`
 * so it pokes out a little on both sides, and gradients from blue at its own
 * edges into solid white through the middle so it blends into the
 * surrounding blue bar instead of cutting a hard edge.
 *
 * `-top-3` cancels out the navbar's own `py-3`: `ActiveIndicatorBar` is a
 * direct child of `<nav>`, so its `top-0` sits at `<nav>`'s padding box (the
 * true top edge), but this line's positioned ancestor is the nav item's
 * `self-stretch` wrapper, which — being a flex/grid child of `<nav>` — starts
 * at `<nav>`'s *content* box, `py-3` lower. Without the offset it'd float
 * 12px below the blue bar instead of flush against it.
 */
function TopHighlightLine({ wide }: { wide?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute -top-3 left-1/2 z-10 h-2.5 -translate-x-1/2',
        wide ? 'w-120' : 'w-100',
      )}
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--color-accent-primary) 0%, white 25%, white 75%, var(--color-accent-primary) 100%)',
      }}
    />
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
