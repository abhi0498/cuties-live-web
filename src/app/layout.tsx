import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://abhi0498.github.io"),
  title: "Cuties Live - Video Chat App",
  description:
    "Connect with amazing people through live video calls. Join millions of users making meaningful connections on Cuties Live.",
  keywords:
    "video chat, live streaming, social connection, mobile app, video calls",
  authors: [{ name: "Abhishek V" }],
  openGraph: {
    title: "Cuties Live - Video Chat App",
    description: "Connect with amazing people through live video calls",
    url: "https://abhi0498.github.io/cuties-live-web/",
    siteName: "Cuties Live",
    images: [
      {
        url: "/cuties-live-web/og-image.jpg", // Make sure to add this image
        width: 1200,
        height: 630,
        alt: "Cuties Live Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuties Live - Video Chat App",
    description: "Connect with amazing people through live video calls",
    images: ["/cuties-live-web/twitter-image.jpg"], // Make sure to add this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/cuties-live-web/manifest.json", // We'll create this
  icons: {
    icon: [
      { url: "/cuties-live-web/favicon.ico", sizes: "any" },
      {
        url: "/cuties-live-web/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/cuties-live-web/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/cuties-live-web/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/cuties-live-web/apple-touch-icon-precomposed.png",
      },
    ],
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
        <link
          rel="icon"
          type="image/x-icon"
          href="/cuties-live-web/favicon.ico"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
