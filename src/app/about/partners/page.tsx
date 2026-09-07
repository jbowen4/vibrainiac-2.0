import type { Metadata } from 'next';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GradientBackdrop } from '@/components/GradientBackdrop';
import { Heading } from '@/components/Heading';
import { NavDropdown, Navbar } from '@/components/Navbar';
import { NavLink } from '@/components/NavLink';
import { SocialIcon, type SocialPlatform } from '@/components/SocialIcon';
import { Text } from '@/components/Text';
import heroBackground from '../../../../public/home/hero-background.png';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Vibrainiac is connecting with funders, researchers, and strategic partners working across play-based learning and emotional skill-building.',
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

export default function AboutPartnersPage() {
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
                  <NavLink href='/about/partners' active>
                    PARTNERS
                  </NavLink>
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

          <div className='flex flex-1 items-center py-16 sm:py-24'>
            <Container className='grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-16'>
              <div className='flex flex-col items-start gap-8'>
                <Heading size='lg' as='h1' className='sm:text-display'>
                  For <br />
                  Funders & <br />
                  <span className='text-accent-secondary'>Founders</span>
                </Heading>
                <Button
                  variant='solid'
                  href='/contact'
                  className='px-4! text-body-sm! sm:px-6! sm:text-heading-md!'>
                  Contact for Partnerships
                </Button>
              </div>

              <div className='flex flex-col gap-6'>
                <Text size='xl'>
                  <span className='font-bold'>Vibrainiac™</span> is currently
                  developing and testing our inaugural game experience.
                </Text>
                <Text size='xl'>
                  We’re interested in connecting with funders, researchers and
                  strategic partners working across play-based learning,
                  culturally responsive technology, youth development and
                  emotional skill-building. Support for the next phase will help
                  us strengthen the product, conduct meaningful user testing and
                  build evidence around engagement, confidence and real-world
                  application.
                </Text>
                <Text size='xl'>
                  Join the list and select Funder or Potential Partner to
                  receive relevant project updates and opportunities to connect.
                </Text>
              </div>
            </Container>
          </div>
        </div>
      </GradientBackdrop>

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
