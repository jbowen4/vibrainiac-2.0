import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibrainiac Games",
  description:
    "Vibrainiac Games is an independent game development studio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${afacadFlux.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
