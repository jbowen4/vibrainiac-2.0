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

const ABOUT_ITEMS = [
  { label: 'The Team', href: '/about/team' },
  { label: 'Our Values', href: '/about/values' },
  { label: 'For Partners', href: '/about/partners', active: true },
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
                  <NavLink href='/about/news'>NEWS</NavLink>
                  <NavLink href='/games'>GAMES</NavLink>
                </>
              }
              end={
                <>
                  <NavDropdown label='ABOUT' items={ABOUT_ITEMS} active />
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
                <Heading size='display'>
                  Help us build the{' '}
                  <span className='text-accent-secondary'>next level</span>
                </Heading>
                <Button variant='solid' href='/contact'>
                  Contact for Partnerships
                </Button>
              </div>

              <div className='flex flex-col gap-6'>
                <Text size='lg'>
                  Vibrainiac is currently developing and building its first
                  title.
                </Text>
                <Text size='lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
                <Text size='lg'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
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
