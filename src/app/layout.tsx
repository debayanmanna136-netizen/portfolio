import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Pinyon_Script, Caveat } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

const casualScript = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-casual-script",
});

export const metadata: Metadata = {
  title: "Debayan Manna | Data Analyst & Web Designer",
  description: "Portfolio of Debayan Manna, a Data Analyst and Web Designer building data-driven solutions, AI projects, and modern web experiences.",
  icons: {
    icon: "/favicon.jpg",
  },
  verification: {
    google: "rtXTmA4J68pvM_fTuyXZPERpnkrapwIYYXvXJ6u9Uwk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Debayan Manna",
    url: "https://debayanmanna.vercel.app/",
    jobTitle: "Data Analyst & Web Designer",
    sameAs: [
      "https://www.linkedin.com/in/debayan-manna-322344319/",
      "https://github.com/debayanmanna136-netizen"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sans.variable} ${serif.variable} ${script.variable} ${casualScript.variable} antialiased bg-surface-container-lowest text-on-surface min-h-screen flex flex-col selection:bg-primary selection:text-on-primary`}
      >
        {children}
      </body>
    </html>
  );
}
