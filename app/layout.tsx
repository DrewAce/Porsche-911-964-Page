import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porsche 911 (964) — A Legend Reborn",
  description:
    "The Porsche 911 (964) — engineered for an era, revered for eternity. Discover the history, engineering, and legacy of the most iconic air-cooled 911.",
  keywords: ["Porsche 911", "964", "air-cooled", "classic car", "sports car"],
  openGraph: {
    title: "Porsche 911 (964) — A Legend Reborn",
    description: "Discover the history, engineering, and legacy of the 964.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-[#f0ede8] antialiased">
        {children}
      </body>
    </html>
  );
}
