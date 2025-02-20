"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p>
                  Welcome to Cuties. We are committed to protecting your
                  personal information and your right to privacy. This Privacy
                  Policy explains how we collect, use, and share your
                  information when you use our mobile application.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Information We Collect
                </h2>
                <h3 className="text-xl font-semibold mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Name and username</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Profile photos</li>
                  <li>Age and date of birth</li>
                  <li>Payment information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6">
                  <li>Device information (model, OS version)</li>
                  <li>IP address and location data</li>
                  <li>Usage statistics and interaction data</li>
                  <li>Call duration and connection quality metrics</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  How We Use Your Data
                </h2>
                <ul className="list-disc pl-6">
                  <li>To provide and maintain our service</li>
                  <li>To process your transactions and manage your account</li>
                  <li>To verify your identity and prevent fraud</li>
                  <li>To match you with other users</li>
                  <li>To improve our services and user experience</li>
                  <li>To communicate with you about updates and promotions</li>
                  <li>To ensure compliance with our terms of service</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information. However, no
                  method of transmission over the internet is 100% secure, and
                  we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6">
                  <li>Other users (as part of the video chat service)</li>
                  <li>Payment processors</li>
                  <li>Cloud service providers</li>
                  <li>Analytics partners</li>
                  <li>Law enforcement (when legally required)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Children&apos;s Privacy
                </h2>
                <p>
                  Our service is not intended for users under the age of 18. We
                  do not knowingly collect information from children under 18.
                  If you become aware that a child has provided us with personal
                  information, please contact us.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our
                  practices, please contact us at:
                </p>
                <p className="mt-4">
                  Email: abhishekv.dev@gmail.com
                  <br />
                  Address: Bengaluru, India
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
