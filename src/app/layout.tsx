import type { Metadata } from "next";
import { Afacad_Flux, Truculenta } from "next/font/google";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

const truculenta = Truculenta({
  variable: "--font-truculenta",
  subsets: ["latin"],
  weight: ["700"],
});

const SITE_DESCRIPTION =
  "Vibrainiac is an independent game studio built by industry veterans creating culturally relevant games that help players build emotional skills.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vibrainiac.com"),
  title: {
    default: "Vibrainiac Games",
    template: "%s | Vibrainiac Games",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Vibrainiac Games",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Vibrainiac Games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibrainiac Games",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${afacadFlux.variable} ${truculenta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
