import Image from 'next/image';

import { Accordion, type AccordionItem } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GradientBackdrop } from '@/components/GradientBackdrop';
import { Heading } from '@/components/Heading';
import { NavDropdown, Navbar } from '@/components/Navbar';
import { NavLink } from '@/components/NavLink';
import { SocialIcon, type SocialPlatform } from '@/components/SocialIcon';
import contactUsText from '../../../public/contact/contact-us-text.png';
import heroBackground from '../../../public/home/hero-background.png';

const ABOUT_ITEMS = [
  { label: 'The Team', href: '/about/team' },
  { label: 'Our Values', href: '/about/values' },
  { label: 'For Partners', href: '/about/partners' },
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

const CONTACT_ITEMS: AccordionItem[] = [
  {
    id: 'game-support',
    label: 'Game Support',
    content: 'Please contact us at support@vibrainiacgames.com',
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    content: 'Please contact us at recruitment@vibrainiacgames.com',
  },
  {
    id: 'partnerships',
    label: 'Partnerships',
    content: 'Please contact us at partnerships@vibrainiacgames.com',
  },
  {
    id: 'general-inquiries',
    label: 'General Inquiries',
    content: 'Please contact us at hello@vibrainiacgames.com',
  },
];

export default function ContactPage() {
  return (
    <>
      <GradientBackdrop
        backgroundImage={heroBackground}
        fade
        className='min-h-screen'>
        <div className='flex min-h-screen flex-col'>
          <Container>
            <Navbar
              start={
                <>
                  <NavLink href='/about/news'>NEWS</NavLink>
                  <NavLink href='/games'>GAMES</NavLink>
                </>
              }
              end={
                <>
                  <NavDropdown label='ABOUT' items={ABOUT_ITEMS} />
                  <NavLink href='/contact' active>
                    CONTACT US
                  </NavLink>
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

          <div className='flex-1 py-16 sm:py-24'>
            <Container>
              <div className='mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14'>
                <Heading size='display' as='h1' className='flex justify-center'>
                  <Image
                    src={contactUsText}
                    alt='Contact Us'
                    priority
                    className='h-auto w-full max-w-sm sm:max-w-xl'
                  />
                </Heading>
                <Accordion items={CONTACT_ITEMS} />
              </div>
            </Container>
          </div>
        </div>
      </GradientBackdrop>

      <Footer
        links={FOOTER_LINKS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        address={
          '212 E International Airport Rd\nAnchorage, AK 99518\nUnited States'
        }
      />
    </>
  );
}
