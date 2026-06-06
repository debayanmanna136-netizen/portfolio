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
  title: "Debayan Manna - Portfolio",
  description: "Debayan Manna Portfolio",
  verification: {
    google: "rtXTmA4J68pvM_fTuyXZPERpnkrapwIYYXvXJ6u9Uwk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${script.variable} ${casualScript.variable} antialiased bg-surface-container-lowest text-on-surface min-h-screen flex flex-col selection:bg-primary selection:text-on-primary`}
      >
        {children}
      </body>
    </html>
  );
}
