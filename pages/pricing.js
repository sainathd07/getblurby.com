import Head from 'next/head';

export default function Pricing() {
  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
        <title>Pricing | Blurby AI</title>
        <meta name="description" content="Blurby AI Pricing: Compare Free, Pro, and Ultimate plans for the best LinkedIn & X post generation experience." />
      </Head>
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46]">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#00ADB5]">Blurby AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-[#00ADB5] transition">Home</a>
          <a href="/pricing" className="hover:text-[#00ADB5] transition font-semibold">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white px-4 py-1 rounded hover:bg-[#393E46] transition">Login</button>
          <button className="bg-[#00ADB5] text-white px-4 py-1 rounded shadow hover:bg-[#00959a] transition font-semibold">Sign Up</button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-center">Pricing</h1>
        <p className="text-lg text-[#e0e0e0] mb-12 text-center">Choose the plan that fits your social media workflow. Upgrade anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-[#393E46] shadow-md flex flex-col items-center">
            <h3 className="font-bold text-2xl text-[#00ADB5] mb-2">Free</h3>
            <div className="text-3xl font-bold text-white mb-2">$0</div>
            <ul className="text-[#e0e0e0] mb-6 space-y-2 text-center">
              <li>Basic post styles</li>
              <li>Short/Medium post lengths</li>
              <li>Limited monthly posts</li>
              <li>Emojis & hashtags toggle</li>
            </ul>
            <button className="bg-[#00ADB5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#00959a] transition">Get Started</button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-[#00ADB5] shadow-lg flex flex-col items-center scale-105">
            <h3 className="font-bold text-2xl text-[#00ADB5] mb-2">Pro</h3>
            <div className="text-3xl font-bold text-white mb-2">$8<span className="text-base font-normal">/mo</span></div>
            <ul className="text-[#e0e0e0] mb-6 space-y-2 text-center">
              <li>All Free features</li>
              <li>All post styles</li>
              <li>All post lengths</li>
              <li>Tone customization</li>
              <li>More monthly posts</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-[#00ADB5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#00959a] transition">Upgrade to Pro</button>
          </div>
          {/* Ultimate Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-[#393E46] shadow-md flex flex-col items-center">
            <h3 className="font-bold text-2xl text-[#00ADB5] mb-2">Ultimate</h3>
            <div className="text-3xl font-bold text-white mb-2">$20<span className="text-base font-normal">/mo</span></div>
            <ul className="text-[#e0e0e0] mb-6 space-y-2 text-center">
              <li>All Pro features</li>
              <li>Unlimited posts</li>
              <li>Custom formatting/examples</li>
              <li>Early access to new features</li>
              <li>License key activation</li>
            </ul>
            <button className="bg-[#00ADB5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#00959a] transition">Go Ultimate</button>
          </div>
        </div>
      </main>
    </div>
  );
}
