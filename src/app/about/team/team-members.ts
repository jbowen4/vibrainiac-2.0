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
    avatar: teamAvatar('/team-headshots/Regine_Headshot.jpg', 'RB', 'violet'),
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
  {
    name: 'Julyssa Jones',
    title: 'Mental Health Game Designer',
    description: [
      'Julyssa Jones is a healthcare strategist, researcher, and mental health game designer specializing in the intersection of behavioral science, digital health, and interactive experiences. Her work focuses on translating evidence-based mental health approaches into engaging, accessible experiences that support well-being and behavior change.',
      'She brings experience across healthcare strategy, scientific content, research, and serious game development, with particular expertise in designing game-based interventions for mental health. Julyssa is also a doctoral researcher at Teachers College, Columbia University, where her work explores the relationship between gaming and mental health and the potential of games as tools for meaningful health impact.',
    ],
    avatar: teamAvatar('/team-headshots/Julyssa_Headshot.png', 'JJ', 'violet'),
  },
  {
    name: 'Kalani Lindsey',
    title: 'Art Director',
    description: [
      'With over 15 years of visual communication experience, Kalani has built thoughtful and immersive experiences across the wide expanse of digital and physical mediums. While furiously holding a controller in one hand he arts and directs with passion and a pointed purpose to boost narration of information from one audience to another.',
      'With values of integrity, he has positioned himself to enhance any creatively dynamic problem solving team! He is now found at the helm of the SS Vibrainiac and a brave art director, ready for another adventure!',
    ],
    avatar: teamAvatar('/team-headshots/Kalani_Headshot.png', 'KL', 'sunset'),
  },
  {
    name: 'Rebecca Anisman',
    title: 'Narrative & Systems Designer',
    description: [
      'Rebecca Anisman is a software engineer, as well as narrative and systems designer, with 6+ years in AAA and many more in the games space generally, having started making games in a middle school club before choosing it as a degree at University of Central Florida and Florida Interactive Entertainment Academy and career.',
      'Rebecca has previously worked on previous years of Madden, including the port for Madden Stadia, Madden 22, 23, and 25. Additionally, they created a mod called Modden26 in Madden for charity and awareness around concussions in football.',
      'As a person at the crossroads of design and code, Rebecca always has another idea, proposal, perspective, suggestion, and/or compromise to put forward to help solve problems, create new things, and move forward.',
    ],
    avatar: teamAvatar('/team-headshots/Rebecca_Headshot.png', 'RA', 'magenta'),
  },
  {
    name: 'Wayne Solomon',
    title: 'Lead Backend Developer',
    description: [
      'Wayne is the Lead Backend Developer at Vibrainiac, bringing over six years of professional experience across software engineering, artificial intelligence, data science, medical devices, and surgical robotics. His career has been shaped by solving technically demanding problems where reliability matters, and he now applies that experience to building the backend systems that help bring Vibrainiac’s games to life.',
      'He holds bachelor’s degrees in Computer Science and Computer Engineering from Florida Atlantic University. Outside the studio, Wayne has mentored a high school FIRST Robotics Competition (FRC) team since 2015, helping students combine creativity, teamwork, and engineering to turn ambitious ideas into working robots.',
    ],
    avatar: teamAvatar(null, 'W', 'violet'),
  },
  {
    name: 'Rob Diaz',
    title: 'Chief Creative Officer',
    description: [
      'I’ve been a part of the gaming industry since 2009, starting out in QA before sneaking into UI/UX where no one asked any questions, and eventually finding my way into creative leadership. Over the past 15+ years, I’ve had the pleasure to work on exciting games across PC, console, and mobile, including SMITE 2, Madden NFL, and NBA LIVE.',
      'Having been a UX/UI designer, Art Lead and often serving as a feature and systems designer during my time at EA SPORTS and Hi-Rez Ventures, I’m now leading the creative direction to building fun and engaging experiences with the team at Vibrainiac Games.',
    ],
    avatar: teamAvatar('/team-headshots/Rob_Headshot.png', 'R', 'sunset'),
  },
];
