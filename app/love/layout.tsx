import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love - Royi Sal",
  description: "Preserve and cherish your precious love memories with Royi Sal.",
  icons: {
    icon: "/file.svg",
    apple: "/file.svg",
  },
  openGraph: {
    title: "Love - Royi Sal",
    description: "Preserve and cherish your precious love memories with Royi Sal.",
    images: ["/file.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love - Royi Sal",
    description: "Preserve and cherish your precious love memories with Royi Sal.",
    images: ["/file.svg"],
  },
};

export default function LoveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
