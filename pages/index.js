import Head from 'next/head';

import { useState, useEffect } from 'react';

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();
  const [pricingPeriod, setPricingPeriod] = useState('monthly');
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('#user-menu')) setShowMobileNav(false);
    }
    if (showMobileNav) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showMobileNav]);

  const profileImage = (session?.user?.image && session.user.image.trim() !== "")
  ? session.user.image
  : (session?.user?.email
      ? `https://api.dicebear.com/7.x/identicon/png?seed=${encodeURIComponent(session.user.email)}`
      : "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser");

  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blurby AI – LinkedIn & X Post Generator Extension</title>
        <meta name="description" content="Blurby AI: Instantly generate high-quality LinkedIn and X (Twitter) posts from any article or web content. AI-powered, customizable, and effortless." />
      </Head>
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46] relative z-20">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#00ADB5] hover:underline focus:outline-none">Blurby AI</Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-start items-center space-x-8">
            <Link href="#pricing" className="hover:text-[#00ADB5] transition">Pricing</Link>
            <Link href="#testimonials" className="hover:text-[#00ADB5] transition">Testimonials</Link>
            <Link href="#how-it-works" className="hover:text-[#00ADB5] transition">How it Works</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {session?.user ? (
            <>
              <Link href="/profile" className="hidden md:block">
                <img
                  src={profileImage}
                  onError={(e) => { e.currentTarget.src = "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser"; }}
                  alt="User Profile"
                  className="w-9 h-9 rounded-full border-2 border-[#00ADB5] object-cover hover:ring-2 hover:ring-[#00ADB5] transition"
                />
              </Link>
              <Link href="/profile" className="md:hidden">
                <img
                  src={profileImage}
                  onError={(e) => { e.currentTarget.src = "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser"; }}
                  alt="User Profile"
                  className="w-9 h-9 rounded-full border-2 border-[#00ADB5] object-cover hover:ring-2 hover:ring-[#00ADB5] transition"
                />
              </Link>
            </>
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
            <Link href="/" onClick={() => setShowMobileNav(false)} className="text-xl font-semibold hover:text-[#00ADB5] transition">Home</Link>
            <Link href="#pricing" onClick={() => setShowMobileNav(false)} className="text-xl font-semibold hover:text-[#00ADB5] transition hidden md:block">Pricing</Link>
            <Link href="#testimonials" onClick={() => setShowMobileNav(false)} className="text-xl font-semibold hover:text-[#00ADB5] transition hidden md:block">Testimonials</Link>
            <Link href="#how-it-works" onClick={() => setShowMobileNav(false)} className="text-xl font-semibold hover:text-[#00ADB5] transition hidden md:block">How it Works</Link>
            <Link href="/profile" onClick={() => setShowMobileNav(false)} className="text-xl font-semibold hover:text-[#00ADB5] transition">Profile</Link>
            <button 
              onClick={() => setShowMobileNav(false)}
              className="mt-4 text-[#ff6b6b] font-semibold"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 pt-8 md:pt-12 lg:pt-16 lg:pb-8 max-w-7xl mx-auto gap-8 md:gap-12">
        <div className="flex-1 max-w-xl w-full flex flex-col items-center md:items-center lg:items-start mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">Your AI Assistant for Effortless LinkedIn & X Posts</h1>
          <p className="text-lg text-[#e0e0e0] mb-6 text-center lg:text-left">Generate engaging, high-quality social posts from any article or web content. Save time, stay consistent, and boost your online presence with Blurby AI.</p>
          <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[#e0e0e0] w-full max-w-md mx-auto md:mx-0 text-center lg:text-left">
            <li>✔️ One-Click Post Generation</li>
            <li>✔️ Multiple Post Styles</li>
            <li>✔️ Character Range Control</li>
            <li>✔️ Tone Customization</li>
            <li>✔️ Emojis & Hashtags</li>
            <li>✔️ Glassmorphic UI</li>
          </ul>
          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:justify-start">
            <button className="bg-[#00ADB5] hover:bg-[#00959a] transition text-white px-6 py-3 rounded-lg font-semibold shadow-lg w-full max-w-xs lg:w-auto lg:max-w-none">Install Free Extension</button>
            <div className="flex items-center justify-center lg:justify-start mt-1 w-full lg:w-auto">
              <div className="flex -space-x-2 mr-3">
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=alice" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=bob" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=charlie" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span className="text-[#e0e0e0] text-sm">700,000+ happy users</span>
            </div>
          </div>
        </div>
        {/* Hero Screenshot Placeholder */}
        <div className="flex-1 flex justify-center md:justify-center lg:justify-end w-full">
          <img
            src="/screenshot.png"
            alt="Blurby AI Extension Screenshot"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[800px] h-auto object-contain rounded-2xl mx-auto"
          />
        </div>
      </section>
      {/* How it Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 md:py-16 pt-16" id="how-it-works">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">How Blurby AI Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md flex flex-col items-center">
            <span className="text-4xl mb-4">📰</span>
            <h3 className="font-semibold text-xl mb-2 text-white">Extract Content</h3>
            <p className="text-[#e0e0e0] text-center">Blurby AI grabs content from any article or lets you paste your own.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md flex flex-col items-center">
            <span className="text-4xl mb-4">🎨</span>
            <h3 className="font-semibold text-xl mb-2 text-white">Customize</h3>
            <p className="text-[#e0e0e0] text-center">Pick platform, style, length, tone, and more. Personalize your post in seconds.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md flex flex-col items-center">
            <span className="text-4xl mb-4">⚡</span>
            <h3 className="font-semibold text-xl mb-2 text-white">Generate & Share</h3>
            <p className="text-[#e0e0e0] text-center">Get AI-crafted posts instantly. Copy or share directly to LinkedIn or X.</p>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16" id="features">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <h3 className="font-semibold text-lg text-[#00ADB5] mb-2">Multiple Post Styles</h3>
            <p className="text-[#e0e0e0]">Choose from Informative, Witty, Story-driven, Technical, Minimalist, and more.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <h3 className="font-semibold text-lg text-[#00ADB5] mb-2">Character Range Control</h3>
            <p className="text-[#e0e0e0]">Select custom post length (Short to Very Long).</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <h3 className="font-semibold text-lg text-[#00ADB5] mb-2">Tone Customization</h3>
            <p className="text-[#e0e0e0]">Set the tone: Neutral, Casual, Formal, and more.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <h3 className="font-semibold text-lg text-[#00ADB5] mb-2">Custom Formatting & Examples</h3>
            <p className="text-[#e0e0e0]">Provide your own format or example post for the AI to mimic.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <h3 className="font-semibold text-lg text-[#00ADB5] mb-2">Emojis & Hashtags</h3>
            <p className="text-[#e0e0e0]">Toggle emojis and hashtags for more engaging, discoverable posts.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <h3 className="font-semibold text-lg text-[#00ADB5] mb-2">Usage Tracking & Reset</h3>
            <p className="text-[#e0e0e0]">See remaining posts for the month and quota reset date.</p>
          </div>
        </div>
      </section>

      {/* Language Support & Accessibility */}
      <section className="max-w-7xl mx-auto px-8 py-16" id="languages">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">All Languages Supported</h2>
        <div className="relative w-full overflow-hidden mb-2" style={{height: '70px'}}>
          <div className="animate-marquee flex items-center space-x-8" style={{width: 'max-content'}}>
            {Array(3).fill(['🇧🇷','🇹🇭','🇮🇳','🇵🇹','🇫🇷','🇪🇸','🇰🇷','🇨🇳','🇷🇺']).flat().map((flag, idx) => (
              <span key={idx} className="text-5xl mx-6">{flag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="max-w-7xl mx-auto px-8 pt-8 pb-16" id="testimonials">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Trusted by Professionals Worldwide</h2>
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">1000+</span>
            <span className="text-[#e0e0e0]">Users</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">50+</span>
            <span className="text-[#e0e0e0]">5-Star Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">10+</span>
            <span className="text-[#e0e0e0]">Companies</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <div className="flex items-center mb-2">{/* Copyright-free avatar by DiceBear API */}
<img src="https://api.dicebear.com/7.x/identicon/svg?seed=lara" alt="user" className="w-8 h-8 rounded-full mr-2" /><span className="font-semibold text-white">Lara</span></div>
            <p className="text-[#e0e0e0] text-sm">"Blurby AI is a game changer for my LinkedIn content. Fast, easy, and always on-brand!"</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <div className="flex items-center mb-2">{/* Copyright-free avatar by DiceBear API */}
<img src="https://api.dicebear.com/7.x/identicon/svg?seed=sam" alt="user" className="w-8 h-8 rounded-full mr-2" /><span className="font-semibold text-white">Sam</span></div>
            <p className="text-[#e0e0e0] text-sm">"I love the style options and tone control. Makes my posts stand out every time."</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <div className="flex items-center mb-2">{/* Copyright-free avatar by DiceBear API */}
<img src="https://api.dicebear.com/7.x/identicon/svg?seed=jing" alt="user" className="w-8 h-8 rounded-full mr-2" /><span className="font-semibold text-white">Jing</span></div>
            <p className="text-[#e0e0e0] text-sm">"Super intuitive and looks amazing. The glass UI is gorgeous!"</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <div className="flex items-center mb-2">{/* Copyright-free avatar by DiceBear API */}
<img src="https://api.dicebear.com/7.x/identicon/svg?seed=alex" alt="user" className="w-8 h-8 rounded-full mr-2" /><span className="font-semibold text-white">Alex</span></div>
            <p className="text-[#e0e0e0] text-sm">"Blurby saves me hours every week. The posts are always relevant and creative."</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <div className="flex items-center mb-2">{/* Copyright-free avatar by DiceBear API */}
<img src="https://api.dicebear.com/7.x/identicon/svg?seed=maria" alt="user" className="w-8 h-8 rounded-full mr-2" /><span className="font-semibold text-white">Maria</span></div>
            <p className="text-[#e0e0e0] text-sm">"I recommend Blurby to all my colleagues. The AI understands exactly what I want. It's reliable, intuitive, and has helped me grow my professional network faster than ever. The customer support is also fantastic!"</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-[#393E46] shadow-md">
            <div className="flex items-center mb-2">{/* Copyright-free avatar by DiceBear API */}
<img src="https://api.dicebear.com/7.x/identicon/svg?seed=dave" alt="user" className="w-8 h-8 rounded-full mr-2" /><span className="font-semibold text-white">Dave</span></div>
            <p className="text-[#e0e0e0] text-sm">"The best tool for social media managers. Affordable, simple, and powerful. Blurby has completely changed the way I manage content for my clients. I can create, edit, and schedule posts in minutes, and the results are always top-notch."</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16" id="pricing">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Pricing</h2>
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-[#222831] rounded-xl border border-[#393E46] px-2 py-1 shadow">
            <button
              className={`px-4 py-2 rounded-xl font-semibold transition-colors duration-200 ${pricingPeriod === 'monthly' ? 'bg-[#00ADB5] text-white' : 'text-[#e0e0e0]'}`}
              onClick={() => setPricingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-xl font-semibold transition-colors duration-200 ${pricingPeriod === 'annual' ? 'bg-[#00ADB5] text-white' : 'text-[#e0e0e0]'}`}
              onClick={() => setPricingPeriod('annual')}
            >
              Annual <span className="ml-1 text-xs text-[#2ecc71] font-bold">20% OFF</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Free Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-[#393E46] shadow-md flex flex-col items-center h-full">
            <h3 className="font-bold text-2xl text-[#00ADB5] mb-2">Free</h3>
            <div className="text-3xl font-bold text-white mb-2">$0</div>
            <ul className="text-[#e0e0e0] mb-6 space-y-2 text-center flex-grow">
              <li>Basic post styles</li>
              <li>Short/Medium post lengths</li>
              <li>Limited monthly posts</li>
              <li>Emojis & hashtags toggle</li>
            </ul>
            <button className="bg-[#00ADB5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#00959a] transition mt-auto">Get Started</button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-[#00ADB5] shadow-lg flex flex-col items-center scale-105 h-full">
            <h3 className="font-bold text-2xl text-[#00ADB5] mb-2">Pro</h3>
            {pricingPeriod === 'monthly' ? (
              <div className="text-3xl font-bold text-white mb-2">$8<span className="text-base font-normal">/mo</span></div>
            ) : (
              <div className="text-3xl font-bold text-white mb-2">$6<span className="text-base font-normal">/mo</span></div>
            )}
            <ul className="text-[#e0e0e0] mb-6 space-y-2 text-center flex-grow">
              <li>All Free features</li>
              <li>All post styles</li>
              <li>All post lengths</li>
              <li>Tone customization</li>
              <li>More monthly posts</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-[#00ADB5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#00959a] transition mt-auto">Upgrade to Pro</button>
          </div>
          {/* Ultimate Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-[#393E46] shadow-md flex flex-col items-center h-full">
            <h3 className="font-bold text-2xl text-[#00ADB5] mb-2">Ultimate</h3>
            {pricingPeriod === 'monthly' ? (
              <div className="text-3xl font-bold text-white mb-2">$16<span className="text-base font-normal">/mo</span></div>
            ) : (
              <div className="text-3xl font-bold text-white mb-2">$14<span className="text-base font-normal">/mo</span></div>
            )}
            <ul className="text-[#e0e0e0] mb-6 space-y-2 text-center flex-grow">
              <li>All Pro features</li>
              <li>Unlimited posts</li>
              <li>Custom formatting/examples</li>
              <li>Early access to new features</li>
              <li>License key activation</li>
            </ul>
            <button className="bg-[#00ADB5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#00959a] transition mt-auto">Go Ultimate</button>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="max-w-7xl mx-auto px-8 py-16" id="privacy">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Private & Secure</h2>
        <p className="text-sm sm:text-lg text-gray-200 mb-8 text-center">We value your privacy. Your data is secure and confidential.</p>
        <div className="flex flex-wrap gap-12 justify-center mb-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🚫</span>
            <span className="text-[#e0e0e0]">Not shared with third parties</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">❌</span>
            <span className="text-[#e0e0e0]">Not used for AI training</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🔒</span>
            <span className="text-[#e0e0e0]">Encrypted in-transit using TLS 1.2+</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#00ADB5] hover:bg-[#00959a] transition text-white px-6 py-3 rounded-lg font-semibold shadow-lg">Install Free Extension</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222831] border-t border-[#393E46] py-12 px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-[#e0e0e0] place-items-center md:place-items-start text-center md:text-left">
          <div>
            <div className="flex flex-col items-center md:items-start space-x-2 mb-4">
              <span className="text-xl font-bold text-[#00ADB5]">Blurby AI</span>
            </div>
            <ul className="space-y-1">
              <li className='flex flex-row gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#fff" d="M34,24c0,5.521-4.479,10-10,10s-10-4.479-10-10s4.479-10,10-10S34,18.479,34,24z"></path><linearGradient id="Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1" x1="5.789" x2="31.324" y1="34.356" y2="20.779" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4caf50"></stop><stop offset=".489" stopColor="#4aaf50"></stop><stop offset=".665" stopColor="#43ad50"></stop><stop offset=".79" stopColor="#38aa50"></stop><stop offset=".892" stopColor="#27a550"></stop><stop offset=".978" stopColor="#11a050"></stop><stop offset="1" stopColor="#0a9e50"></stop></linearGradient><path fill="url(#Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1)" d="M31.33,29.21l-8.16,14.77C12.51,43.55,4,34.76,4,24C4,12.96,12.96,4,24,4v11 c-4.97,0-9,4.03-9,9s4.03,9,9,9C27.03,33,29.7,31.51,31.33,29.21z"></path><linearGradient id="Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2" x1="33.58" x2="33.58" y1="6" y2="34.797" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd747"></stop><stop offset=".482" stopColor="#ffd645"></stop><stop offset=".655" stopColor="#fed43e"></stop><stop offset=".779" stopColor="#fccf33"></stop><stop offset=".879" stopColor="#fac922"></stop><stop offset=".964" stopColor="#f7c10c"></stop><stop offset="1" stopColor="#f5bc00"></stop></linearGradient><path fill="url(#Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2)" d="M44,24c0,11.05-8.95,20-20,20h-0.84l8.17-14.79C32.38,27.74,33,25.94,33,24 c0-4.97-4.03-9-9-9V4c7.81,0,14.55,4.48,17.85,11C43.21,17.71,44,20.76,44,24z"></path><linearGradient id="Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3" x1="36.128" x2="11.574" y1="44.297" y2="28.954" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f7572f"></stop><stop offset=".523" stopColor="#f7552d"></stop><stop offset=".712" stopColor="#f75026"></stop><stop offset=".846" stopColor="#f7461b"></stop><stop offset=".954" stopColor="#f7390a"></stop><stop offset="1" stopColor="#f73100"></stop></linearGradient><path fill="url(#Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3)" d="M41.84,15H24c-4.97,0-9,4.03-9,9c0,1.49,0.36,2.89,1.01,4.13H16L7.16,13.26H7.14 C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path><linearGradient id="Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4" x1="19.05" x2="28.95" y1="30.95" y2="21.05" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4)" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
</svg></span>Add to Chrome</li>
              <li className='flex flex-row gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#1de9b6" d="M4,23.481C4,15.673,10.557,4,24.014,4C37.452,4,44,13.923,44,20.905c0,5.604-4.429,9.732-9.992,9.732	c-4.245,0-6.759-1.408-6.759-2.53c0-0.726,1.755-1.837,1.755-3.982c0-2.565-1.986-5.137-5.045-5.137	c-2.934,0-4.974,2.442-4.974,4.905c0,5.952,5.63,11.644,13.931,11.644c4.959,0,6.759-1.828,7.403-1.828	c0.196,0,0.647,0.08,0.647,0.603c0,0.5-5.486,9.686-16.94,9.686C12.632,44,4,35.023,4,23.481z"></path><radialGradient id="2pm2zgLwrfHW4PMfqfOjYa_dGm9KIZPpukc_gr1" cx="17.993" cy="32.825" r="21.348" gradientTransform="matrix(1 0 0 1.1083 0 -3.529)" gradientUnits="userSpaceOnUse"><stop offset=".652" stopColor="#0083de"></stop><stop offset=".822" stopColor="#006aac"></stop><stop offset=".944" stopColor="#005a8c"></stop></radialGradient><path fill="url(#2pm2zgLwrfHW4PMfqfOjYa_dGm9KIZPpukc_gr1)" d="M4,23.481c0-7.808,7.615-12.04,12.73-12.04c13.439,0,17.277,2.483,17.277,9.465	c0,5.604-5.003,5.366-5.003,3.221c0-2.565-1.986-5.137-5.045-5.137c-2.934,0-4.974,2.442-4.974,4.905	c0,5.952,5.63,11.644,13.931,11.644c4.959,0,6.759-1.828,7.403-1.828c0.196,0,0.647,0.08,0.647,0.603c0,0.5-5.486,9.686-16.94,9.686	C12.632,44,4,35.023,4,23.481z"></path><radialGradient id="2pm2zgLwrfHW4PMfqfOjYb_dGm9KIZPpukc_gr2" cx="28.082" cy="29.295" r="16.478" gradientTransform="matrix(1 0 0 1.0028 0 -.067)" gradientUnits="userSpaceOnUse"><stop offset=".69" stopColor="#05509b"></stop><stop offset=".717" stopColor="#054e98"></stop><stop offset="1" stopColor="#033e78"></stop></radialGradient><path fill="url(#2pm2zgLwrfHW4PMfqfOjYb_dGm9KIZPpukc_gr2)" d="M18.985,23.894c0-2.298,1.775-4.575,4.395-4.871c-4.104,0.349-8.798,4.375-8.798,11.831	c0,7.963,6.864,13.465,13.943,12.628c8.386-1.927,12.441-8.74,12.441-9.168c0-0.523-0.451-0.603-0.647-0.603	c-0.643,0-2.444,1.828-7.403,1.828C24.615,35.539,18.985,29.847,18.985,23.894z"></path><radialGradient id="2pm2zgLwrfHW4PMfqfOjYc_dGm9KIZPpukc_gr3" cx="47.648" cy="16.079" r="61.532" gradientTransform="matrix(-1 0 0 -1.5084 95.296 40.31)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5eeb69"></stop><stop offset=".214" stopColor="#4bc958"></stop><stop offset=".225" stopColor="#4ac862"></stop><stop offset=".272" stopColor="#47c68b"></stop><stop offset=".323" stopColor="#44c4ae"></stop><stop offset=".376" stopColor="#41c2cb"></stop><stop offset=".433" stopColor="#3fc1e1"></stop><stop offset=".495" stopColor="#3ec0f1"></stop><stop offset=".565" stopColor="#3dbffa"></stop><stop offset=".664" stopColor="#3dbffd"></stop></radialGradient><path fill="url(#2pm2zgLwrfHW4PMfqfOjYc_dGm9KIZPpukc_gr3)" d="M4,23.481C4,15.673,10.557,4,24.014,4C37.452,4,44,13.923,44,20.905	c0,5.604-4.429,9.732-9.992,9.732c-4.245,0-6.759-1.408-6.759-2.53c0-0.726,1.755-1.837,1.755-3.982	c0-2.565-2.076-10.678-12.628-10.678C13.442,13.448,5.256,14.745,4,23.481z"></path>
</svg></span>Add to Edge</li>
              <li className='flex flex-row gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#ff651f" d="M41,13l1,4l-4.09,16.35c-0.59,2.35-2.01,4.41-4.01,5.79l-8.19,5.68c-0.51,0.36-1.11,0.53-1.71,0.53	c-0.6,0-1.2-0.17-1.71-0.53l-8.19-5.68c-2-1.38-3.42-3.44-4.01-5.79L6,17l1-4l-1-2l3.25-3.25c1.05-1.05,2.6-1.44,4.02-0.99	c0.04,0.01,0.07,0.02,0.1,0.03L14,7l4-4h12l4,4l0.65-0.22c0.83-0.28,1.7-0.27,2.5,0c0.58,0.19,1.13,0.51,1.58,0.95	c0.01,0.01,0.01,0.01,0.02,0.02L42,11L41,13z"></path><path fill="#f4592b" d="M38.73,7.73L33,11l-9,2l-9-3l-2.07-2.07c-0.56-0.56-1.41-0.74-2.15-0.44L8.67,8.33l0.58-0.58	c1.05-1.05,2.6-1.44,4.02-0.99c0.04,0.01,0.07,0.02,0.1,0.03L14,7l4-4h12l4,4l0.65-0.22c0.83-0.28,1.7-0.27,2.5,0	C37.73,6.97,38.28,7.29,38.73,7.73z"></path><path fill="#fff" d="M32.51,23.49c-0.3,0.3-0.38,0.77-0.19,1.15l0.34,0.68c0.22,0.45,0.34,0.94,0.34,1.44	c0,0.8-0.29,1.57-0.83,2.16l-0.66,0.74c-0.32,0.21-0.72,0.23-1.04,0.05l-5.23-2.88c-0.59-0.4-0.6-1.27-0.01-1.66l3.91-2.66	c0.48-0.28,0.63-0.89,0.35-1.37l-1.9-3.16C27.28,17.46,27.45,17.24,28,17l6-3h-5l-3,0.75c-0.55,0.14-0.87,0.7-0.72,1.24l1.46,5.09	c0.14,0.51-0.14,1.05-0.65,1.22l-1.47,0.49c-0.21,0.07-0.41,0.11-0.62,0.11c-0.21,0-0.42-0.04-0.63-0.11l-1.46-0.49	c-0.51-0.17-0.79-0.71-0.65-1.22l1.46-5.09c0.15-0.54-0.17-1.1-0.72-1.24L19,14h-5l6,3c0.55,0.24,0.72,0.46,0.41,0.98l-1.9,3.16	c-0.28,0.48-0.13,1.09,0.35,1.37l3.91,2.66c0.59,0.39,0.58,1.26-0.01,1.66l-5.23,2.88c-0.32,0.18-0.72,0.16-1.04-0.05l-0.66-0.74	C15.29,28.33,15,27.56,15,26.76c0-0.5,0.12-0.99,0.34-1.44l0.34-0.68c0.19-0.38,0.11-0.85-0.19-1.15l-4.09-4.83	c-0.83-0.99-0.94-2.41-0.26-3.51l3.4-5.54c0.27-0.36,0.75-0.49,1.17-0.33l2.62,1.05c0.48,0.19,0.99,0.29,1.49,0.29	c0.61,0,1.23-0.14,1.79-0.42c0.75-0.38,1.57-0.57,2.39-0.57s1.64,0.19,2.39,0.57c1.03,0.51,2.22,0.56,3.28,0.13l2.62-1.05	c0.42-0.16,0.9-0.03,1.17,0.33l3.4,5.54c0.68,1.1,0.57,2.52-0.26,3.51L32.51,23.49z"></path><path fill="#fff" d="M29.51,32.49l-4.8,3.8c-0.19,0.19-0.45,0.29-0.71,0.29s-0.52-0.1-0.71-0.29l-4.8-3.8	c-0.24-0.24-0.17-0.65,0.13-0.8l4.93-2.47c0.14-0.07,0.29-0.1,0.45-0.1s0.31,0.03,0.45,0.1l4.93,2.47	C29.68,31.84,29.75,32.25,29.51,32.49z"></path><path fill="#ed4d01" d="M41,13l1,4l-4.09,16.35c-0.59,2.35-2.01,4.41-4.01,5.79l-8.19,5.68c-0.51,0.36-1.11,0.53-1.71,0.53	V10.36L25,12h7v-2l5.15-3.22c0.59,0.19,1.15,0.52,1.6,0.97L42,11L41,13z"></path><path fill="#f5f5f5" d="M32.51,23.49c-0.3,0.3-0.38,0.77-0.19,1.15l0.34,0.68c0.22,0.45,0.34,0.94,0.34,1.44	c0,0.8-0.29,1.57-0.83,2.16l-0.66,0.74c-0.32,0.21-0.72,0.23-1.04,0.05l-5.23-2.88c-0.59-0.4-0.6-1.27-0.01-1.66l3.91-2.66	c0.48-0.28,0.63-0.89,0.35-1.37l-1.9-3.16C27.28,17.46,27.45,17.24,28,17l6-3h-5l-3,0.75c-0.55,0.14-0.87,0.7-0.72,1.24l1.46,5.09	c0.14,0.51-0.14,1.05-0.65,1.22l-1.47,0.49c-0.21,0.07-0.41,0.11-0.62,0.11V9.63c0.82,0,1.64,0.19,2.39,0.57	c1.03,0.51,2.22,0.56,3.28,0.13l2.62-1.05c0.42-0.16,0.9-0.03,1.17,0.33l3.4,5.54c0.68,1.1,0.57,2.52-0.26,3.51L32.51,23.49z"></path><path fill="#f5f5f5" d="M29.51,32.49l-4.8,3.8c-0.19,0.19-0.45,0.29-0.71,0.29v-7.46c0.16,0,0.31,0.03,0.45,0.1l4.93,2.47	C29.68,31.84,29.75,32.25,29.51,32.49z"></path>
</svg></span>Add to Brave</li>
              <li className='flex flex-row gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#ff1744" d="M24,4C12.947,4,4,12.947,4,24s8.947,20,20,20s20-8.947,20-20S35.053,4,24,4z M24,39c-5.263,0-10-6.896-10-15S18.737,9,24,9s10,6.896,10,15S29.263,39,24,39z"></path><path fill="#d50000" d="M36.564,8.445C34.413,6.972,31.89,6,29.263,6c-3.948,0-7.524,1.98-10.166,5.079C20.573,9.77,22.255,9,24,9c5.263,0,10,6.896,10,15s-4.737,15-10,15c-1.745,0-3.427-0.77-4.903-2.079C21.739,40.02,25.315,42,29.263,42c2.626,0,5.15-0.972,7.3-2.444C41.097,35.891,44,30.29,44,24C44,17.711,41.097,12.11,36.564,8.445z"></path>
</svg></span>Add to Opera</li>
              <li className='flex flex-row gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<linearGradient id="sQuHWIJj4ILlbCRFFb9HVa_qopg2DkQyGsl_gr1" x1="16.285" x2="34.77" y1="2.804" y2="53.591" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#sQuHWIJj4ILlbCRFFb9HVa_qopg2DkQyGsl_gr1)" d="M30.261,42H17.739C9.84,42,6,38.16,6,30.261V17.739C6,9.84,9.84,6,17.739,6h12.522	C38.16,6,42,9.84,42,17.739v11.739C42,38.021,38.27,42,30.261,42z"></path><path d="M24,10.5c7.456,0,13.5,6.044,13.5,13.5S31.456,37.5,24,37.5S10.5,31.456,10.5,24S16.544,10.5,24,10.5 M24,9.5 C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5S38.5,31.995,38.5,24S31.995,9.5,24,9.5L24,9.5z" opacity=".05"></path><path d="M24,10.5c7.456,0,13.5,6.044,13.5,13.5S31.456,37.5,24,37.5S10.5,31.456,10.5,24S16.544,10.5,24,10.5 M24,10 c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S31.72,10,24,10L24,10z" opacity=".07"></path><linearGradient id="sQuHWIJj4ILlbCRFFb9HVb_qopg2DkQyGsl_gr2" x1="13.353" x2="42.114" y1="13.353" y2="42.114" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f9f9f9"></stop><stop offset=".26" stopColor="#f0f1f2"></stop><stop offset=".678" stopColor="#d9dcdf"></stop><stop offset="1" stopColor="#c2c8cc"></stop></linearGradient><circle cx="24" cy="24" r="13.5" fill="url(#sQuHWIJj4ILlbCRFFb9HVb_qopg2DkQyGsl_gr2)"></circle><linearGradient id="sQuHWIJj4ILlbCRFFb9HVc_qopg2DkQyGsl_gr3" x1="17.687" x2="36.011" y1="2.192" y2="52.538" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#sQuHWIJj4ILlbCRFFb9HVc_qopg2DkQyGsl_gr3)" d="M32.674,20.716c-2.223,3.853-4.446,7.706-6.669,11.567c-0.411,0.72-1.013,1.147-1.835,1.21	c-0.918,0.063-1.646-0.324-2.112-1.116c-1.408-2.413-2.801-4.842-4.193-7.263c-0.847-1.472-1.701-2.943-2.548-4.423	c-0.854-1.487,0.111-3.299,1.82-3.386c0.902-0.047,1.598,0.372,2.057,1.155c0.625,1.068,1.242,2.152,1.867,3.228	c0.451,0.775,0.886,1.559,1.345,2.318c0.665,1.116,1.646,1.741,2.951,1.82c1.843,0.111,3.56-1.226,3.782-3.18	c0.016-0.142,0.024-0.293,0.032-0.364c-0.008-0.633-0.127-1.171-0.38-1.669c-0.688-1.377,0.047-2.919,1.543-3.252	c1.218-0.269,2.484,0.625,2.642,1.859C33.054,19.751,32.943,20.249,32.674,20.716L32.674,20.716z"></path>
</svg></span>Add to Vivaldi</li>
              <li className='flex flex-row gap-1 opacity-60'><span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#cfd8dc" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#448aff" d="M41,24c0,9.391-7.609,17-17,17S7,33.391,7,24S14.609,7,24,7S41,14.609,41,24z"></path><path fill="#ff3d00" d="M21.898,21.898l4.203,4.203l9.199-13.402L21.898,21.898z"></path><path fill="#bf360c" d="M24,24l11.301-11.301l-9.199,13.402L24,24z"></path><path fill="#fff" d="M21.898,21.898l-9.199,13.402l13.402-9.199L21.898,21.898z"></path><path fill="#bdbdbd" d="M24,24L12.699,35.301l13.402-9.199L24,24z"></path><path fill="#bbdefb" d="M17.102,10.699c0.598-0.301,1.199-0.598,1.797-0.801l1.203,2.703l-1.801,0.797L17.102,10.699z M36,25h2.898c0-0.301,0.102-0.699,0.102-1s0-0.699-0.102-1H36V25z M12.699,14.102l2.102,2.098l1.398-1.398l-2.098-2.102C13.602,13.199,13.199,13.602,12.699,14.102z M25,9.102C24.699,9,24.301,9,24,9s-0.699,0-1,0.102V12h2V9.102z M30.398,10.5c-0.598-0.301-1.199-0.5-1.898-0.699l-1.102,2.801l1.902,0.699L30.398,10.5z M12.5,20.5l0.699-1.898L10.5,17.5c-0.301,0.602-0.5,1.199-0.699,1.898L12.5,20.5z M12,23H9.102C9,23.301,9,23.699,9,24s0,0.699,0.102,1H12V23z M35.5,27.5l-0.699,1.898L37.5,30.5c0.301-0.602,0.5-1.199,0.699-1.898L35.5,27.5z M38.102,18.898c-0.203-0.598-0.5-1.199-0.801-1.797l-2.699,1.199l0.797,1.801L38.102,18.898z M35.301,33.898l-2.102-2.098l-1.398,1.398l2.098,2.102C34.398,34.801,34.801,34.398,35.301,33.898z M13.398,29.699l-0.797-1.801l-2.703,1.203c0.203,0.598,0.5,1.199,0.801,1.797L13.398,29.699z M29.699,34.602l-1.801,0.797l1.203,2.703c0.598-0.203,1.199-0.5,1.797-0.801L29.699,34.602z M20.5,35.5l-1.898-0.699L17.5,37.5c0.602,0.301,1.199,0.5,1.898,0.699L20.5,35.5z M25,38.898V36h-2v2.898c0,0,0.699,0.102,1,0.102S24.699,39,25,38.898z"></path>
</svg></span>Add to Safari (coming soon)</li>
              <li className='flex flex-row gap-1 opacity-60'><span></span>Add to Firefox (coming soon)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Menu</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#00ADB5]">Home</a></li>
              <li><a href="#features" className="hover:text-[#00ADB5]">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#00ADB5]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#00ADB5]">Login</a></li>
              <li><a href="#" className="hover:text-[#00ADB5]">Signup</a></li>
              <li><a href="#" className="hover:text-[#00ADB5]">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#00ADB5]">Blog</a></li>
              <li><a href="#" className="hover:text-[#00ADB5]">Help Center</a></li>
              <li><a href="/terms" className="hover:text-[#00ADB5]">Terms</a></li>
              <li><a href="/privacy" className="hover:text-[#00ADB5]">Privacy</a></li>
              <li><a href="/refund-policy" className="hover:text-[#00ADB5]">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Use cases</h4>
            <ul className="space-y-1">
              <li>LinkedIn & X posts</li>
              <li>Content writing</li>
              <li>Correct grammar</li>
              <li>Brainstorm ideas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Ways to launch</h4>
            <ul className="space-y-1">
              <li>Via extension icon</li>
              <li>Keyboard shortcut</li>
              <li>From share menu</li>
              <li>Text highlighting</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-[#e0e0e0] mt-8 opacity-70">© {new Date().getFullYear()} Blurby AI. Made with <span className="text-[#ff6b6b]">♥</span></div>
      </footer>
    </div>
  );
}
