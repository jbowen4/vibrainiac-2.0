import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GradientBackdrop } from '@/components/GradientBackdrop';
import { Heading } from '@/components/Heading';
import { NavDropdown, Navbar } from '@/components/Navbar';
import { NavLink } from '@/components/NavLink';
import { SocialIcon, type SocialPlatform } from '@/components/SocialIcon';
import { Text } from '@/components/Text';
import brainImg from '../../public/brain-img.png';
import topographicBrain from '../../public/Topographic_Brain.png';
import newHomePageImage from '../../public/new-home-page-img.png';

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

export default function Home() {
  return (
    <>
      <GradientBackdrop
        backgroundImage={topographicBrain}
        backgroundImageClassName='opacity-[0.05]'
        gradient='horizontal'
        className='min-h-screen'>
        <div className='flex min-h-screen flex-col'>
          <Container>
            <Navbar
              homeActive
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

          <div className='flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 sm:gap-8'>
            <Image
              src={newHomePageImage}
              alt='Vibrainiac'
              priority
              className='h-auto w-full max-w-170'
            />
          </div>
        </div>
      </GradientBackdrop>

      <GradientBackdrop
        backgroundImage={brainImg}
        gradient={false}
        overlay={
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 opacity-90'
            style={{
              background: '#020202',
              boxShadow:
                '0px 0px 75px #03020D, 0px 0px 100px rgba(3, 2, 13, 0.5)',
            }}
          />
        }
        className='py-20 sm:py-24'>
        <Container className='mx-auto flex max-w-5xl flex-col items-center gap-8 text-center'>
          <Heading size='lg' className='!text-accent-secondary'>
            Who We Are
          </Heading>
          <Text size='xl' weight='regular'>
            Vibrainiac is an independent game studio built by industry veterans,
            primarily former EA team members, with more than 20 years of
            combined AAA experience. We combine AAA polish and creative rigor
            with indie agility to create culturally relevant games that help
            young adults build emotional skills, explore new ways of responding
            and discover what they’re capable of—without another lecture.
          </Text>
          <Text size='xl' weight='regular'>
            <span className='font-bold text-accent-secondary'>Our mission</span>{' '}
            is to prove that games can be both deeply engaging and socially
            uplifting, blending innovation, artistry, and purpose in every
            project we create. With a core goal in mind:{' '}
            <span className='text-accent-secondary'>
              Improving the life of our players one game at a time.
            </span>
          </Text>
          <Button variant='solid' href='/about/team'>
            Meet the Team
          </Button>
        </Container>
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
