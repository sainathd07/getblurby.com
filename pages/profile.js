import Head from 'next/head';
import { useSession, signOut } from "next-auth/react";

import { useState } from 'react';

export default function Profile() {
  const { data: session } = useSession();

  // Mock: Replace with real plan/license logic
  const plan = 'PRO'; // 'FREE', 'PRO', or 'ULTIMATE'
  const licenseKey = 'XXXX-YYYY-ZZZZ';
  const [showLicense, setShowLicense] = useState(false);

  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
        <title>Profile | Blurby AI</title>
      </Head>
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        {/* Quick Start (Browser Extension only) */}
        <section className="mb-6">
          <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
            <h2 className="text-lg font-semibold mb-2">Quick Start</h2>
            <div className="flex justify-between items-center mb-2">
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
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-[#e0e0e0]">Powered by</span>
              <span className="text-xs font-semibold text-[#00ADB5]">Mistral-7B</span>
              <span className="text-xs text-[#e0e0e0]">• Faster and Better Responses</span>
            </div>
          </div>
        </section>

        {/* License Key (only for paid users) */}
        {['PRO', 'ULTIMATE'].includes(plan) && (
          <section className="mb-6">
            <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] mb-4">
              <h2 className="text-lg font-semibold mb-2">License Key</h2>
              <div className="flex items-center gap-3">
                <span className="bg-[#393E46] px-3 py-2 rounded text-[#e0e0e0] text-sm tracking-wider font-mono">
                  {showLicense ? licenseKey : '••••••••••••••••••••••••••••••••••••'}
                </span>
                <button onClick={() => setShowLicense(v => !v)} className="text-[#00ADB5] hover:underline text-sm font-semibold">
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
            <div className="mb-4 flex items-center gap-3">
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
