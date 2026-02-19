import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passion - Royi Sal",
  description: "Preserve and cherish your precious passion memories with Royi Sal.",
  icons: {
    icon: "/file.svg",
    apple: "/file.svg",
  },
  openGraph: {
    title: "Passion - Royi Sal",
    description: "Preserve and cherish your precious passion memories with Royi Sal.",
    images: ["/file.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passion - Royi Sal",
    description: "Preserve and cherish your precious passion memories with Royi Sal.",
    images: ["/file.svg"],
  },
};

export default function PassionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
