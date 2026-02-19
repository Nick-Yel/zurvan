import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindness - Royi Sal",
  description: "Preserve and cherish your precious kindness memories with Royi Sal.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kindness - Royi Sal",
    description: "Preserve and cherish your precious kindness memories with Royi Sal.",
    images: ["/icon.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindness - Royi Sal",
    description: "Preserve and cherish your precious kindness memories with Royi Sal.",
    images: ["/icon.svg"],
  },
};

export default function KindnessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
