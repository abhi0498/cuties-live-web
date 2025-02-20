"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function UserAgreement() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen ${theme} flex flex-col`}>
      <div className="bg-background text-foreground flex flex-col h-full flex-1">
        <Header toggleTheme={toggleTheme} />

        <main className="flex-1">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600">
            <div className="container mx-auto px-4 py-16 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                User Agreement
              </h1>
              <p className="text-xl text-center">
                Guidelines for a safe and enjoyable experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Welcome to Cuties</h2>
                <p>
                  This user agreement outlines how to use our platform safely
                  and respectfully. By using Cuties, you agree to follow these
                  guidelines to ensure everyone has a positive experience.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Age Requirement</h2>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <p className="text-lg font-semibold text-yellow-800">
                    You must be at least 18 years old to use Cuties. Any
                    accounts found to be operated by underage users will be
                    immediately terminated.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Profile Guidelines</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use recent and clear photos of yourself</li>
                  <li>Do not use copyrighted images or celebrity photos</li>
                  <li>Avoid misleading or deceptive information</li>
                  <li>
                    Keep your profile information appropriate and respectful
                  </li>
                  <li>Do not share personal contact information publicly</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Video Call Rules</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be respectful and courteous to other users</li>
                    <li>Dress appropriately during video calls</li>
                    <li>Do not engage in or request explicit content</li>
                    <li>Report inappropriate behavior immediately</li>
                    <li>Do not record or capture calls without consent</li>
                    <li>Maintain a safe and comfortable environment</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Coin System Rules</h2>
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">
                      For Users Spending Coins
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Coins are non-refundable virtual currency</li>
                      <li>Purchase coins only through the official app</li>
                      <li>Do not attempt to manipulate the coin system</li>
                      <li>Report any coin-related issues promptly</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">
                      For Users Earning Coins
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Earn coins through legitimate platform activities</li>
                      <li>Follow platform guidelines for coin earnings</li>
                      <li>Do not create multiple accounts</li>
                      <li>Respect the coin withdrawal process</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Safety Guidelines</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Never share personal financial information</li>
                    <li>Do not arrange meetings outside the app</li>
                    <li>Be cautious with personal information</li>
                    <li>Block and report suspicious users</li>
                    <li>Trust your instincts if something feels wrong</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Violations</h2>
                <p>Violations of these guidelines may result in:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Temporary account suspension</li>
                  <li>Permanent account termination</li>
                  <li>Loss of earned or purchased coins</li>
                  <li>Restriction of platform features</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
                <p>
                  If you have questions or need to report an issue, please
                  contact our support team at:
                </p>
                <p className="mt-4">
                  Email: abhishekv.dev@gmail.com
                  <br />
                  Support available 24/7 through the app
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
