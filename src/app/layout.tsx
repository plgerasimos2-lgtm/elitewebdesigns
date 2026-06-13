import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Web Designs | Επαγγελματικές Ιστοσελίδες",
  description:
    "Σχεδιάζουμε σύγχρονες, γρήγορες και αποδοτικές ιστοσελίδες που βοηθούν τις επιχειρήσεις να αποκτήσουν περισσότερους πελάτες και να ξεχωρίσουν online.",
  keywords: [
    "κατασκευή ιστοσελίδων",
    "web design",
    "SEO",
    "e-shop",
    "landing pages",
    "Elite Web Designs",
    "Ελλάδα",
  ],
  authors: [{ name: "Elite Web Designs" }],
  openGraph: {
    title: "Elite Web Designs | Premium Web Design Agency",
    description:
      "Επαγγελματικές ιστοσελίδες που αναπτύσσουν την επιχείρησή σας.",
    type: "website",
    locale: "el_GR",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "tCCJG1TrEsFjvcIdbdMWHbpyp9Nosep9rTjhXkIzbf8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
