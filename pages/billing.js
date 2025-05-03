import Head from 'next/head';

import { useState } from 'react';
export default function Billing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Billing | Blurby AI</title>
      </Head>
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46]">
  <div className="flex items-center space-x-8">
    <a href="/" aria-label="Go to Home" className="text-2xl font-bold text-[#00ADB5] hover:underline focus:outline-none">Blurby AI</a>
    <div className="hidden md:flex items-center space-x-4">
      <a href="/pricing" className="hover:text-[#00ADB5] transition">Pricing</a>
      <a href="/terms" className="hover:text-[#00ADB5] transition">Terms</a>
    </div>
  </div>
  <div className="flex items-center">
    <button
      className="md:hidden focus:outline-none"
      aria-label="Open menu"
      onClick={() => setMenuOpen(true)}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <a href="/login" className="hidden md:inline text-white font-semibold hover:underline transition ml-4">Login</a>
    <button
      onClick={() => window.location.href = '/signup'}
      className="hidden md:inline bg-[#00ADB5] border border-[#00ADB5] text-white px-4 py-2 rounded-lg font-semibold ml-2 transition hover:bg-[#00959a] hover:text-white"
    >
      Sign Up
    </button>
  </div>
  {menuOpen && (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu overlay"
      />
      {/* Mobile Menu */}
      <div className="fixed top-0 left-0 w-full bg-[#222831] border-b border-[#393E46] shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden animate-fade-in z-50">
        {/* X icon inside menu */}
        <button
          className="absolute top-4 right-4 text-[#00ADB5] focus:outline-none"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a href="/" className="hover:text-[#00ADB5] transition text-lg" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/pricing" className="hover:text-[#00ADB5] transition text-lg" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="/terms" className="hover:text-[#00ADB5] transition text-lg" onClick={() => setMenuOpen(false)}>Terms</a>
        <a href="/login" className="text-white font-semibold hover:underline transition text-lg" onClick={() => setMenuOpen(false)}>Login</a>
        <button
          onClick={() => { setMenuOpen(false); window.location.href = '/signup'; }}
          className="bg-[#00ADB5] border border-[#00ADB5] text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-[#00959a] hover:text-white text-lg"
        >
          Sign Up
        </button>
      </div>
    </>
  )}
</nav>
<main className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Billing</h1>
        <div className="bg-white/10 rounded-xl p-6 sm:p-8 md:p-10 border border-[#393E46]">
          <p className="text-[#e0e0e0] text-sm sm:text-base md:text-lg">Billing page content goes here.</p>
        </div>
      </main>
    </div>
  );
}
