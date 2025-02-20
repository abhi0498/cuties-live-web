"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function TermsOfService() {
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
                Terms of Service
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
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p>
                  By downloading, accessing, or using the Cuties mobile
                  application, you agree to be bound by these Terms of Service.
                  If you disagree with any part of these terms, you do not have
                  permission to access the service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">User Eligibility</h2>
                <p>
                  You must be at least 18 years old to use this service. By
                  using the app, you represent and warrant that you are at least
                  18 years of age and have the legal capacity to enter into
                  these terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Account Registration
                </h2>
                <p>
                  To use our services, you must register for an account. You
                  agree to provide accurate, current, and complete information
                  during registration and to update such information to keep it
                  accurate, current, and complete.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Virtual Currency and Payments
                </h2>
                <ul className="list-disc pl-6">
                  <li>
                    Coins purchased through the app are virtual currency with no
                    real-world value
                  </li>
                  <li>
                    All purchases are final and non-refundable unless required
                    by law
                  </li>
                  <li>
                    We reserve the right to modify coin values and earning rates
                    at any time
                  </li>
                  <li>
                    Users may not sell, transfer, or exchange coins outside the
                    app
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6">
                  <li>Harass, abuse, or harm other users</li>
                  <li>Share explicit or inappropriate content</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Use the service for illegal activities</li>
                  <li>Attempt to manipulate the coin system</li>
                  <li>
                    Use automated systems or scripts to access the service
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Content Guidelines</h2>
                <p>
                  Users are responsible for the content they share. Prohibited
                  content includes but is not limited to:
                </p>
                <ul className="list-disc pl-6">
                  <li>Sexually explicit material</li>
                  <li>Hate speech or discriminatory content</li>
                  <li>Violence or threats</li>
                  <li>Illegal activities</li>
                  <li>Copyright-infringing material</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account at
                  any time for violations of these terms or for any other
                  reason. Upon termination, you will lose access to the service
                  and any unused coins.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Disclaimer of Warranties
                </h2>
                <p>
                  The service is provided &quot;as is&quot; without warranties
                  of any kind. We do not guarantee that the service will be
                  uninterrupted, secure, or error-free.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  We shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  the service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We
                  will notify users of significant changes through the app or
                  via email.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us
                  at:
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
