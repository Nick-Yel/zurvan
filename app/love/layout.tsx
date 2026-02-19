import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love - Royi Sal",
  description: "Preserve and cherish your precious love memories with Royi Sal.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Love - Royi Sal",
    description: "Preserve and cherish your precious love memories with Royi Sal.",
    images: ["/icon.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love - Royi Sal",
    description: "Preserve and cherish your precious love memories with Royi Sal.",
    images: ["/icon.svg"],
  },
};

export default function LoveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
