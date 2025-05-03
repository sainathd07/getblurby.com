import Head from "next/head";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function RefundPolicy() {
  const { data: session } = useSession();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const profileImage = (session?.user?.image && session.user.image.trim() !== "")
    ? session.user.image
    : (session?.user?.email
        ? `https://api.dicebear.com/7.x/identicon/png?seed=${encodeURIComponent(session.user.email)}`
        : "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser");
  return (
    <div className="min-h-screen bg-[#222831] flex flex-col">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Refund Policy | Blurby AI</title>
      </Head>
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
            <Link href="/profile" className="text-xl font-semibold hover:text-[#00ADB5] transition">Profile</Link>
            <button 
              onClick={() => setShowMobileNav(false)}
              className="mt-4 text-[#ff6b6b] font-semibold"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}

      <main className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12">
        <h1 className="text-3xl font-bold mb-8 text-center sm:text-4xl md:text-5xl">REFUND POLICY</h1>
        <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] text-[#e0e0e0] space-y-4">
        <p className="text-center font-semibold">Last updated April 26, 2025</p>
<p className="text-gray-200 mb-6">
  At Blurby AI, we're committed to ensuring your satisfaction with our product. We offer the following options to help you make an informed decision:
</p>
<ol className="list-decimal list-inside text-gray-200 mb-6 space-y-2">
  <li>
    <span className="font-semibold text-white">Free Trial:</span> We offer a free plan, allowing you to experience our product before committing to a paid subscription. This gives you the chance to explore our features and assess whether our service aligns with your needs.
  </li>
  <li>
    <span className="font-semibold text-white">Extended Evaluation Period:</span> Even after making a purchase, we provide a <span className="font-semibold">2-day period</span> to explore the full range of our service. If you determine that our product does not meet your expectations within this time, you may request a refund.
  </li>
</ol>
<h2 className="text-xl font-semibold text-white mb-2">Refund Procedure</h2>
<p className="text-gray-200 mb-6">
  If you are not satisfied with our product during the first 2 days of your paid subscription, you may request a refund by contacting us at <a href="mailto:support@getblurby.com" className="underline text-[#00ADB5]">support@getblurby.com</a>. Kindly include a brief explanation of the reason for your request. Each refund request will be carefully evaluated on an individual basis.
</p>
<h2 className="text-xl font-semibold text-white mb-2">Issue Resolution</h2>
<p className="text-gray-200 mb-6">
  We value your feedback and are committed to enhancing your experience. Should you encounter any issues with our product, we encourage you to contact our support team at <a href="mailto:support@getblurby.com" className="underline text-[#00ADB5]">support@getblurby.com</a> before considering cancellation. Our team is dedicated to resolving any concerns you may have, ensuring that you get the most value from our service.
</p>
<h2 className="text-xl font-semibold text-white mb-2">Cancellation Procedure</h2>
<p className="text-gray-200 mb-6">
  You may cancel your subscription at any time by logging into your Blurby AI account and selecting the 'Manage Subscription' option. Follow the prompts to complete the cancellation. Your subscription will remain active until the conclusion of the current billing cycle.
</p>
<div className="text-gray-300 text-sm mt-8">
  <span className="block mb-2 font-semibold">Please note:</span>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>After the initial 2-day period has elapsed, we do not offer refunds for subscription cancellations.</li>
    <li>Refund eligibility is subject to our review and approval.</li>
    <li>We reserve the right to deny refund requests that do not meet our criteria or are deemed to be in violation of our <a href="/terms" className="underline text-[#00ADB5]">terms of service</a>.</li>
  </ul>
</div>
        </div>
      </main>
    </div>
  );
}
