import type { Metadata } from "next";
import { Kanit, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["900"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://zurvan.royisal.com"),
  title: "Royi Sal - Your Memories",
  description: "Preserve and cherish your precious memories with Royi Sal",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Royi Sal - Your Memories",
    description: "Preserve and cherish your precious memories with Royi Sal",
    images: ['/og-image.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Royi Sal - Your Memories",
    description: "Preserve and cherish your precious memories with Royi Sal",
    images: ['/og-image.svg'],
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
        className={`${kanit.variable} ${playfairDisplay.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-[#FFF6F5] via-[#FFE5E8] to-[#FFD6DC]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
