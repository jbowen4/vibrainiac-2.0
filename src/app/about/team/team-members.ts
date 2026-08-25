/**
 * Real headshots live in /public/team-headshots. When a member has no photo
 * there yet, they fall back to a generated portrait — an initials-on-gradient
 * circle reusing the exact color stops from the design system's decorative
 * blob tokens (`--gradient-blob-*` in tokens.css) rather than inventing new
 * colors.
 */
const GRADIENT_STOPS = {
  violet: ['#406adc', '#6a45be', '#6a45be'],
  sunset: ['#e0e8b7', '#fb8a2e', '#e2425c'],
  magenta: ['#b13589', '#c62f94', '#8a3ac8'],
} as const;

function placeholderAvatar(
  initials: string,
  variant: keyof typeof GRADIENT_STOPS,
) {
  const [from, mid, to] = GRADIENT_STOPS[variant];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <defs>
      <radialGradient id="g" cx="50%" cy="42%" r="70%">
        <stop offset="0%" stop-color="${from}" />
        <stop offset="55%" stop-color="${mid}" />
        <stop offset="100%" stop-color="${to}" />
      </radialGradient>
    </defs>
    <rect width="400" height="400" fill="url(#g)" />
    <text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" font-family="'Afacad Flux', sans-serif" font-size="150" font-weight="700" fill="rgba(255,255,255,0.92)">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** Resolves to the real headshot when one exists, otherwise the initials placeholder. */
function teamAvatar(
  photo: string | null,
  initials: string,
  variant: keyof typeof GRADIENT_STOPS,
) {
  return photo ?? placeholderAvatar(initials, variant);
}

export interface TeamMember {
  name: string;
  title: string;
  /** One entry per paragraph — rendered as separate `<p>`s so breaks actually show up. */
  description: string[];
  avatar: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Regine Bowen',
    title: 'CEO',
    description: [
      'Regine Bowen brings more than 20 years of corporate leadership experience from IBM, where she led global delivery teams across multiple business units and organizations to develop and deliver innovative solutions that create substantial value for clients.',
      'For the past seven years, she also had the privilege of leading multidisciplinary teams responsible for delivering major AAA game titles, combining enterprise-scale leadership with a deep passion for game development and interactive entertainment.',
      'She is passionate about building high-performing, diverse teams and creating cultures where collaboration, innovation, and continuous improvement thrive. As a PMI-certified leader, she brings a disciplined, outcome-focused approach to transforming ambitious ideas into exceptional products and experiences.',
      'Today, she’s focused on building Vibrainiac Games by bringing together talented people, bold ideas, and world-class execution to create games that improve the life of our players one game at a time.',
    ],
    avatar: teamAvatar('/team-headshots/Regine_Headshot.png', 'RB', 'violet'),
  },
  {
    name: 'Alex Chadwick',
    title: 'CTO',
    description: [
      'An accomplished software engineer with over eight years of professional experience, Alex brings a deep expertise in technical development and user interface design to the team. A proud alumnus of the University of Central Florida, they have honed a robust academic and practical foundation in engineering that began with competitive robotics during their formative years.',
      'Alex most recently served as a UI Software Engineer on the critically acclaimed College Football 25, where they specialized in crafting seamless, industry-leading user experiences.',
    ],
    avatar: teamAvatar('/team-headshots/Alex_Headshot.png', 'AC', 'sunset'),
  },
  {
    name: 'Kelly Jean-Ware',
    title: 'Chief of Staff',
    description: [
      'Drawing on 25 years at the intersection of creative production and operations in top tier feature animation, VFX, and AAA game studios, Kelly champions the systems that let great ideas thrive. Supporting executive leadership and team workflow alike, she brings structure, clarity, and steady momentum to Vibrainiac’s mission.',
    ],
    avatar: teamAvatar(
      '/team-headshots/Kelly_Headshot.jpg.png',
      'KJ',
      'magenta',
    ),
  },
];
