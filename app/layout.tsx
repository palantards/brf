import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "BRF Manager - Enklare administration för bostadsrättsföreningar",
  description: "Digitalisera din BRF. Spara tid på styrelsearbete med verktyg för felanmälan, dokumentarkiv och kommunikation med boende.",
  openGraph: {
    title: "BRF Manager - Enklare administration för bostadsrättsföreningar",
    description: "Ett enkelt verktyg som gör styrelsearbetet smidigare. Hantera felanmälningar, dokument och kommunikation med boende på ett ställe.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
