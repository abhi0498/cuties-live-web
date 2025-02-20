"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Cuties Live",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Android, iOS",
  description: "Connect with amazing people through live video calls",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    ratingCount: "10000",
  },
};

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`min-h-screen ${theme} flex flex-col`}>
        <div className="bg-background text-foreground flex flex-col h-full flex-1">
          <Header toggleTheme={toggleTheme} />

          <main className="flex-1">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600">
              <div className="container mx-auto px-4 py-16 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      Meet Amazing People on Mobile
                    </h1>
                    <p className="text-xl mb-8">
                      Join millions of users making meaningful connections
                      through video calls
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="https://apps.apple.com"
                        className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition flex items-center gap-2"
                      >
                        <Image
                          src="/cuties-live-web/app-store.webp"
                          alt="Apple Logo"
                          width={30}
                          height={30}
                        />
                        App Store
                      </Link>
                      <Link
                        href="https://play.google.com"
                        className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition flex items-center gap-2"
                      >
                        <Image
                          src="/cuties-live-web/google-play.svg"
                          alt="Google Play Logo"
                          width={30}
                          height={30}
                        />
                        Google Play
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/cuties-live-web/app-preview.webp"
                      alt="Mobile app preview"
                      width={300}
                      height={600}
                      className="rounded-[2.5rem] shadow-xl mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <section className="py-16 container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                App Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-white shadow-lg">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Make Real Connections
                  </h3>
                  <p>Meet new people through live video calls</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-white shadow-lg">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Earn While Chatting
                  </h3>
                  <p>Turn your time into rewards with our coin system</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-white shadow-lg">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-xl font-semibold mb-2">Level Up</h3>
                  <p>Increase your earnings as you gain popularity</p>
                </div>
              </div>
            </section>

            {/* Download CTA Section */}
            <section className="bg-purple-100 py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Download Now</h2>
                <p className="text-xl mb-8">
                  Join our growing community of users finding connections every
                  day
                </p>
                <div className="flex gap-4 justify-center items-center">
                  <Image
                    src="/cuties-live-web/app-store-badge.png"
                    alt="Download on App Store"
                    style={{ width: "150px", height: "50px" }}
                    width={200}
                    height={60}
                    className="cursor-pointer hover:opacity-90 transition"
                  />
                  <Image
                    src="/cuties-live-web/google-play-badge.png"
                    alt="Get it on Google Play"
                    style={{ width: "180px", height: "70px" }}
                    width={200}
                    height={60}
                    className="cursor-pointer hover:opacity-90 transition"
                  />
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
