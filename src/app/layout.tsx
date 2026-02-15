import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Add Perspective | Aerial Cinematography for Hospitality",
  description:
    "Professional drone footage for hotels, resorts, and real estate. Based in Sri Lanka.",
  openGraph: {
    title: "Add Perspective | Aerial Cinematography",
    description:
      "Professional drone footage that transforms how properties are seen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
