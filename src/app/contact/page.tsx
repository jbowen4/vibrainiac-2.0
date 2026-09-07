import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GradientBackdrop } from '@/components/GradientBackdrop';
import { Heading } from '@/components/Heading';
import { NavDropdown, Navbar } from '@/components/Navbar';
import { NavLink } from '@/components/NavLink';
import { SocialIcon, type SocialPlatform } from '@/components/SocialIcon';
import { Text } from '@/components/Text';
import contactUsText from '../../../public/contact/contact-us-text.png';
import heroBackground from '../../../public/home/hero-background.png';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Vibrainiac Games team.',
};

const ABOUT_ITEMS = [
  { label: 'The Team', href: '/about/team' },
  { label: 'Our Values', href: '/about/values' },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: 'linkedin', href: '#' },
];

const FOOTER_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: 'linkedin', href: '#' },
];

const FOOTER_LINKS = [
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Site Map', href: '/site-map' },
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
                  <NavDropdown label='ABOUT' items={ABOUT_ITEMS} />
                  <NavLink href='/games'>GAMES</NavLink>
                </>
              }
              end={
                <>
                  <NavLink href='/about/partners'>PARTNERS</NavLink>
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

                <div className='flex flex-col items-center gap-4 text-center'>
                  <Heading size='lg' className='text-accent-secondary'>
                    The summit is only the beginning.
                  </Heading>
                  <Text size='lg' className='max-w-2xl'>
                    Be among the first to see what we&rsquo;re building,
                    follow the development journey and hear when playtesting
                    begins.
                  </Text>
                </div>

                <ContactForm />
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
