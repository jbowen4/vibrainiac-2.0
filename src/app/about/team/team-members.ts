/**
 * No real team photos are available yet, so each member gets a generated
 * placeholder portrait — an initials-on-gradient circle reusing the exact
 * color stops from the design system's decorative blob tokens
 * (`--gradient-blob-*` in tokens.css) rather than inventing new colors.
 */
const GRADIENT_STOPS = {
  violet: ["#406adc", "#6a45be", "#6a45be"],
  sunset: ["#e0e8b7", "#fb8a2e", "#e2425c"],
  magenta: ["#b13589", "#c62f94", "#8a3ac8"],
} as const;

function placeholderAvatar(initials: string, variant: keyof typeof GRADIENT_STOPS) {
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

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Regine Bowen",
    title: "CEO",
    description: "Boss Lady.",
    avatar: placeholderAvatar("RB", "violet"),
  },
  {
    name: "Marcus Chen",
    title: "Creative Director",
    description: "Turns whiteboard scribbles into worlds.",
    avatar: placeholderAvatar("MC", "sunset"),
  },
  {
    name: "Aisha Patel",
    title: "Lead Engineer",
    description: "Keeps the builds green and the coffee stronger.",
    avatar: placeholderAvatar("AP", "magenta"),
  },
  {
    name: "Devon Brooks",
    title: "Art Director",
    description: "Paints pixels with AAA polish.",
    avatar: placeholderAvatar("DB", "sunset"),
  },
  {
    name: "Sofia Reyes",
    title: "Community Manager",
    description: "Your favorite Discord mod, secretly.",
    avatar: placeholderAvatar("SR", "violet"),
  },
];
