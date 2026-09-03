import Image from 'next/image';
import type { ReactNode } from 'react';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { LegalNav } from '@/components/LegalNav';
import { NavDropdown, Navbar } from '@/components/Navbar';
import { NavLink } from '@/components/NavLink';
import { ScrollArea } from '@/components/ScrollArea';
import { SocialIcon, type SocialPlatform } from '@/components/SocialIcon';
import forestBackground from '../../public/news/forest-background.png';

const ABOUT_ITEMS = [
  { label: 'The Team', href: '/about/team' },
  { label: 'Our Values', href: '/about/values' },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: 'x', href: '#' },
  { platform: 'tiktok', href: '#' },
  { platform: 'instagram', href: '#' },
  { platform: 'youtube', href: '#' },
  { platform: 'linkedin', href: '#' },
];

const FOOTER_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: 'youtube', href: '#' },
  { platform: 'instagram', href: '#' },
  { platform: 'x', href: '#' },
  { platform: 'twitter', href: '#' },
  { platform: 'tiktok', href: '#' },
  { platform: 'facebook', href: '#' },
  { platform: 'linkedin', href: '#' },
];

const FOOTER_LINKS = [
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Safe and Fair Play Policy', href: '/safe-and-fair-play' },
  { label: 'Accessibility Statement', href: '/accessibility' },
  { label: 'Other Legal Docs', href: '/legal' },
  { label: 'Media Center', href: '/media-center' },
  { label: 'Our Domains', href: '/domains' },
  { label: 'Site Map', href: '/site-map' },
];

const LEGAL_NAV_LINKS = [
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'App Disclaimer', href: '/app-disclaimer' },
];

export interface LegalPageShellProps {
  /** href of the current legal doc, used to highlight it in the LegalNav pill. */
  activeHref: string;
  children: ReactNode;
}

/**
 * Shared chrome for the legal doc pages (Terms of Service, Privacy Policy,
 * App Disclaimer) — forest hero backdrop, Return + LegalNav row, and a
 * scrollable content well with the accent-blue top border and custom
 * pill scrollbar used by the Games page's left panel.
 */
export function LegalPageShell({ activeHref, children }: LegalPageShellProps) {
  return (
    <>
      <div className='relative flex min-h-dvh flex-col overflow-hidden bg-background-primary md:h-dvh'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-x-0 top-0 h-[clamp(220px,38vh,480px)]'>
          <div className='absolute inset-0 bg-(image:--gradient-hero)' />
          <Image
            src={forestBackground}
            alt=''
            fill
            priority
            sizes='100vw'
            className='object-cover object-top'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-background-secondary to-transparent' />
          <div className='absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-b from-background-primary/0 to-background-primary' />
        </div>

        <div className='relative z-10 flex min-h-dvh flex-col overflow-y-auto md:h-dvh md:overflow-hidden'>
          <Container className='shrink-0'>
            <Navbar
              start={
                <>
                  <NavDropdown label='ABOUT' items={ABOUT_ITEMS} />
                  <NavLink href='/games'>GAMES</NavLink>
                </>
              }
              end={
                <>
                  <NavLink href='/about/partners'>PARTNERS</NavLink>
                  <NavLink href='/contact'>CONTACT US</NavLink>
                </>
              }
              social={NAV_SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.platform}
                  platform={social.platform}
                  href={social.href}
                />
              ))}
            />
          </Container>

          <div className='flex min-h-0 flex-1 flex-col py-6 md:py-8'>
            <Container className='flex min-h-0 flex-1 flex-col'>
              <div
                className='relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[5px]'
                style={{
                  background:
                    'linear-gradient(270deg, rgba(1, 4, 15, 0) 0%, #01040F 100%)',
                  backdropFilter: 'blur(4.55px)',
                }}>
                <div aria-hidden className='h-[5px] w-full shrink-0 bg-accent-primary' />

                <div className='flex min-h-0 flex-1 flex-col gap-4 px-6 py-6 sm:px-12 sm:py-8 lg:px-16'>
                  <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                    <Button variant='ghost' href='/games' className='shrink-0'>
                      <svg aria-hidden viewBox='0 0 16 12' className='size-4'>
                        <path
                          d='M6.5 1 1 6l5.5 5M1.5 6h13.5'
                          stroke='currentColor'
                          strokeWidth={1.5}
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      Return
                    </Button>
                    <div className='flex w-full sm:flex-1 sm:justify-center'>
                      <LegalNav
                        links={LEGAL_NAV_LINKS}
                        activeHref={activeHref}
                        stackOnMobile
                        className='w-full sm:w-auto lg:px-28'
                      />
                    </div>
                  </div>

                  <ScrollArea className='pr-2 sm:pr-4'>
                    <div className='flex flex-col gap-5 pb-6'>{children}</div>
                  </ScrollArea>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <Footer
        links={FOOTER_LINKS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        address={
          '225 N. French Avenue, Suite C\nSanford, FL 32771\nUnited States'
        }
      />
    </>
  );
}
