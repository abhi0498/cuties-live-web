"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen ${theme} flex flex-col`}>
      <div className="bg-background text-foreground flex flex-col h-full flex-1">
        <Header toggleTheme={toggleTheme} />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600">
            <div className="container mx-auto px-4 py-16 text-white">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  About Cuties
                </h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Connecting people through meaningful video conversations
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our Mission
              </h2>
              <p className="text-lg mb-8 text-center">
                We believe in creating genuine connections in today's digital
                world. Our platform enables meaningful interactions between
                people across the globe through high-quality video calls.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-purple-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4 text-center">🤝</div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Authentic Connections
                  </h3>
                  <p className="text-center">
                    We prioritize real, meaningful interactions between our
                    users
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4 text-center">💫</div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Fair Rewards
                  </h3>
                  <p className="text-center">
                    Our coin system ensures fair compensation for quality
                    interactions
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4 text-center">🛡️</div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    User Safety
                  </h3>
                  <p className="text-center">
                    We maintain strict safety measures to protect our community
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Stats */}
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our Growing Community
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    1M+
                  </div>
                  <p className="text-lg">Active Users</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    10M+
                  </div>
                  <p className="text-lg">Video Calls</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    100+
                  </div>
                  <p className="text-lg">Countries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="bg-purple-100 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-xl mb-8">
                Download now and start making meaningful connections
              </p>
              <div className="flex gap-4 justify-center items-center">
                <Image
                  src="/cuties-live/app-store-badge.png"
                  alt="Download on App Store"
                  style={{ width: "150px", height: "50px" }}
                  width={200}
                  height={60}
                  className="cursor-pointer hover:opacity-90 transition"
                />
                <Image
                  src="/cuties-live/google-play-badge.png"
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
  );
}
