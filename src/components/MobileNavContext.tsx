'use client';

import { createContext } from 'react';

/**
 * Signals to NavLink/NavDropdown that they're being rendered inside the
 * mobile hamburger panel rather than the desktop nav row, so they can swap
 * NavActiveDrip for MobileNavActiveBar and skip the `self-stretch` sizing
 * that only makes sense in the desktop row's cross axis (height) — in the
 * panel's column layout that same class stretches width instead, which is
 * what left-shifted non-widest items like "ABOUT" out of center.
 */
export const MobileNavContext = createContext(false);
