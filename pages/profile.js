import Head from 'next/head';
import { useSession, signOut } from "next-auth/react";
import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
  const { data: session } = useSession();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const profileImage = (session?.user?.image && session.user.image.trim() !== "")
    ? session.user.image
    : (session?.user?.email
        ? `https://api.dicebear.com/7.x/identicon/png?seed=${encodeURIComponent(session.user.email)}`
        : "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser");

  // Mock: Replace with real plan/license logic
  const plan = 'PRO'; // 'FREE', 'PRO', or 'ULTIMATE'
  const licenseKey = 'XXXX-YYYY-ZZZZ';
  const [showLicense, setShowLicense] = useState(false);

  const handleCopyLicenseKey = () => {
    // Implement the logic to copy the license key to the clipboard
    console.log("Copying license key:", licenseKey);
  };

  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
        <title>Profile | Blurby AI</title>
      </Head>
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46] relative z-20">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#00ADB5] hover:underline focus:outline-none">Blurby AI</Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-start items-center space-x-8">
            <Link href="/" className="hover:text-[#00ADB5] transition">Home</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {session?.user ? (
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="focus:outline-none"
              aria-label="Toggle navigation"
            >
              <img
                src={profileImage}
                onError={(e) => { e.currentTarget.src = "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser"; }}
                alt="User Profile"
                className="w-9 h-9 rounded-full border-2 border-[#00ADB5] object-cover hover:ring-2 hover:ring-[#00ADB5] transition"
              />
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-white font-semibold hover:underline transition px-3">Login</Link>
              <Link href="/signup" className="bg-[#00ADB5] border border-[#00ADB5] text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-[#00959a] hover:text-white">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {showMobileNav && (
        <div className="md:hidden fixed inset-0 z-30 bg-[#222831] pt-20">
          <div className="flex flex-col items-center space-y-6 p-6">
            <Link href="/" className="text-xl font-semibold hover:text-[#00ADB5] transition">Home</Link>
            <Link href="#pricing" className="text-xl font-semibold hover:text-[#00ADB5] transition">Pricing</Link>
            <Link href="#testimonials" className="text-xl font-semibold hover:text-[#00ADB5] transition">Testimonials</Link>
            <Link href="#how-it-works" className="text-xl font-semibold hover:text-[#00ADB5] transition">How it Works</Link>
            <button 
              onClick={() => setShowMobileNav(false)}
              className="mt-4 text-[#ff6b6b] font-semibold"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}

      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        {/* Quick Start (Browser Extension only) */}
        <section className="mb-6">
          <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
            <h2 className="text-lg font-semibold mb-2">Quick Start</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
              <div>
                <span className="font-medium">Browser Extension</span>
                <p className="text-[#e0e0e0] text-sm">Instantly run on any site</p>
              </div>
              <a href="#" className="text-[#00ADB5] font-semibold hover:underline">How to use</a>
            </div>
          </div>
        </section>

        {/* Current Plan */}
        <section className="mb-6">
          <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
            <h2 className="text-lg font-semibold mb-2">Current Plan</h2>
            <span className="inline-block bg-[#00ADB5] text-white px-3 py-1 rounded-full mb-2 text-xs font-bold tracking-wide shadow">FREE</span>
            <p className="mb-2 text-[#e0e0e0]">Upgrade for an enhanced writing experience</p>
            <button className="bg-[#00ADB5] hover:bg-[#00959a] text-white px-4 py-2 rounded font-semibold transition mb-2">Upgrade</button>
          </div>
        </section>

        {/* License Key (only for paid users) */}
        {['PRO', 'ULTIMATE'].includes(plan) && (
          <section className="mb-6">
            <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
              <h2 className="text-lg font-semibold mb-2">License Key</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="bg-[#393E46] px-3 py-2 rounded text-[#e0e0e0] text-sm tracking-wider font-mono">
                  {showLicense ? licenseKey : '•••••••••••••••••••'}
                </span>
                <button 
                  onClick={() => setShowLicense(!showLicense)} 
                  className="text-[#00ADB5] hover:underline text-sm font-semibold"
                >
                  {showLicense ? 'Hide' : 'Unhide'}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* My Account */}
        <section className="mb-6">
          <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
            <h2 className="text-lg font-semibold mb-2">My Account</h2>
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="text-[#e0e0e0] text-sm mb-0">Email</label>
              <div className="bg-[#393E46] px-3 py-2 rounded text-[#e0e0e0] text-sm">
                {session?.user?.email || '—'}
              </div>
            </div>
            {session?.user?.image && session?.user?.email && session.user.email.endsWith('@gmail.com') ? null : (
              <a href="#" className="text-[#00ADB5] hover:underline text-sm block mb-2">Change Password</a>
            )}
            <button onClick={() => signOut({ callbackUrl: '/' })} className="text-[#ff6b6b] font-semibold text-sm hover:underline">Logout</button>
          </div>
        </section>

        {/* Support & Delete Account */}
        <section className="mb-6">
          <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
            <p className="mb-2 text-[#e0e0e0] text-sm">For any queries, reach out to us at <a href="mailto:support@blurby.com" className="text-[#00ADB5] underline">support@blurby.com</a></p>
            <button className="text-[#ff6b6b] font-semibold text-sm hover:underline mt-2">Delete Account</button>
          </div>
        </section>
      </main>
    </div>
  );
}