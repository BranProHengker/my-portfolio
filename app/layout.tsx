import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import NoiseOverlay from "@/components/noise-overlay"
import VibePlayer from "@/components/vibe-player"
import "./globals.css"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-league-spartan",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Gusti Gibran Avattar | Front-end Engineer | Web Developer & UI/UX Designer in Malang",
    template: "%s | Gusti Gibran Avattar"
  },
  description:
    "Transforming complex problems into elegant web experiences. Explore the portfolio of Gusti Gibran Avattar, a Front-end Engineer | Web Developer based in Malang, Indonesia.",
  keywords: [
    "Gusti Gibran Avattar", 
    "Who is Gusti Gibran Avattar",
    "Gusti Gibran", 
    "Avattar", 
    "Gusti Gibran Avattar Portfolio", 
    "Portofolio Gusti Gibran Avattar",  
    "Gusti GIbran Avattar SMKN6 Malang",
    "Gibran Arek Malang",
    "UI/UX Designer Indonesia", 
    "Frontend Developer Indonesia",
    "Frontend Engineer", 
    "Web Developer Malang",
    "Frontend Developer Malang",
    "Frontend Engineer Malang",
    "Software Engineer Malang",
    "Programmer Malang",
    "UI/UX Designer Malang",
    "React Ecosystem Developer",
    "Interactive Web Design",
    "Next.js Developer"
  ],
  authors: [{ name: "Gusti Gibran Avattar", url: "https://gutsi.my.id" }],
  creator: "Gusti Gibran Avattar",
  publisher: "Gusti Gibran Avattar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gutsi.my.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://gutsi.my.id",
    title: "Gusti Gibran Avattar | Front-end Engineer in Malang",
    description:
      "Transforming complex problems into elegant web experiences. Explore the portfolio of Gusti Gibran Avattar, a Front-end Engineer based in Malang blending the React ecosystem with immersive design.",
    siteName: "Gusti Gibran Avattar Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gusti Gibran Avattar - Frontend Engineer & UI/UX Designer',
      },
    ],
    firstName: "Gusti",
    lastName: "Gibran Avattar",
    username: "gibran",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gusti Gibran Avattar | Front-end Engineer & UI/UX Designer",
    description: "Transforming complex problems into elegant web experiences. Explore the portfolio of Gusti Gibran Avattar.",
    images: ['/og-image.png'],
    creator: '@3Br4n',
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "VaPDMhXb57mnJ9x602y0gB3nvsWj1IFntRvYYI3vasc",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1918',
}

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://gutsi.my.id",
                "name": "Gusti Gibran Avattar Portfolio",
                "description": "Portfolio of Gusti Gibran Avattar, a Front-end Engineer and UI/UX Designer.",
                "publisher": {
                  "@type": "Person",
                  "name": "Gusti Gibran Avattar"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2024-01-01T00:00:00+07:00",
                "dateModified": new Date().toISOString(),
                "mainEntity": {
                  "@type": "Person",
                  name: "Gusti Gibran Avattar",
                  url: "https://gutsi.my.id",
                  jobTitle: "Front-end Developer | Web Developer | UI/UX Designer",
                  image: "https://gutsi.my.id/saya-versi-ai.png",
                  sameAs: [
                    "https://github.com/BranProHengker", 
                    "https://www.linkedin.com/in/gusti-gibran-avattar-819455389/",
                    "https://www.instagram.com/bran.nnz/"
                  ],
                  description:
                    "Gusti Gibran Avattar is a passionate Front-end Developer and UI/UX Designer specializing in building immersive web applications with the React ecosystem and modern web technologies.",
                  knowsAbout: [
                    "UI/UX Design",
                    "Front-end Development",
                    "React Ecosystem",
                    "Next.js",
                    "React Native Expo",
                    "AstroJs",
                    "Angular",
                    "TypeScript",
                    "Tailwind CSS",
                    "Creative Coding",
                    "GSAP Animation",
                    "Web Developer"
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Malang",
                    addressRegion: "East Java",
                    addressCountry: "Indonesia"
                  }
                }
              }
            ]),
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        <NoiseOverlay />
        <VibePlayer />
        {children}
        <Toaster position="top-center" richColors theme="dark" />
        <Analytics />
      </body>
    </html>
  )
}
