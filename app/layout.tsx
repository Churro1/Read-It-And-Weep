import type { Metadata } from "next";
import { Bebas_Neue, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Read it and Weep Boulder Competition",
  description:
    "Official event hub for Read it and Weep Boulder Competition at Utah State University. Watch live, check the schedule, download heat replays, and support sponsors.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Read it and Weep Boulder Competition",
    description:
      "Watch the livestream, follow the heat schedule, and download replays from Read it and Weep.",
    siteName: "Read it and Weep",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
