import Head from 'next/head';
import { useState } from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { data: session } = useSession();
  const profileImage = (session?.user?.image && session.user.image.trim() !== "")
    ? session.user.image
    : (session?.user?.email
        ? `https://api.dicebear.com/7.x/identicon/png?seed=${encodeURIComponent(session.user.email)}`
        : "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser");

  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Privacy Policy | GetBlurby</title>
        <meta name="description" content="Privacy Policy for GetBlurby.com" />
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
        <h1 className="text-3xl font-bold mb-8 text-center sm:text-4xl md:text-5xl">PRIVACY POLICY</h1>
        <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] text-[#e0e0e0] space-y-4">
          <p className="text-center font-semibold">Last updated April 26, 2025</p>

          <p className="text-sm sm:text-base md:text-lg">Thank you for choosing to be part of our community at GetBlurby ("Company", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us at <a href="mailto:support@getblurby.com" className="text-[#00ADB5] underline">support@getblurby.com</a>.</p>

          <p className="text-sm sm:text-base md:text-lg">When you visit our website https://getblurby.com (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>
          <p>When you visit our website https://getblurby.com (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>

          <p>This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.</p>

          <h2 className="text-xl font-semibold mt-6">TABLE OF CONTENTS</h2>
          <ol className="list-decimal ml-6 space-y-1">
            <li>What information do we collect?</li>
            <li>How do we use your information?</li>
            <li>Will your information be shared with anyone?</li>
            <li>Who will your information be shared with?</li>
            <li>Do we use cookies and other tracking technologies?</li>
            <li>How do we handle your social logins?</li>
            <li>Is your information transferred internationally?</li>
            <li>How long do we keep your information?</li>
            <li>How do we keep your information safe?</li>
            <li>What are your privacy rights?</li>
            <li>Controls for do-not-track features</li>
            <li>Do California residents have specific privacy rights?</li>
            <li>Do we make updates to this notice?</li>
            <li>How can you contact us about this notice?</li>
            <li>How can you review, update or delete the data we collect from you?</li>
          </ol>

          {/* 1. What information do we collect? */}
          <h2 className="text-xl font-semibold mt-6">1. WHAT INFORMATION DO WE COLLECT?</h2>
          <p><span className="font-semibold">Personal information you disclose to us:</span> We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, participate in activities on the Website or otherwise contact us. This may include names, email addresses, mailing addresses, billing addresses, contact preferences, and other similar information. If you make purchases, we may collect payment data (processed by Stripe or other third-party processors).</p>
          <p><span className="font-semibold">Information automatically collected:</span> Some information — such as your IP address and/or browser and device characteristics — is collected automatically when you visit our Website. This may include device and usage information, browser type, operating system, referring URLs, location, and analytics data. We may also use cookies and similar technologies.</p>

          {/* 2. How do we use your information? */}
          <h2 className="text-xl font-semibold mt-6">2. HOW DO WE USE YOUR INFORMATION?</h2>
          <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. These purposes include:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>To facilitate account creation and logon process</li>
            <li>To manage user accounts and provide Services</li>
            <li>To send administrative information and updates</li>
            <li>To protect our Services and users</li>
            <li>To enforce our terms, conditions and policies</li>
            <li>To respond to legal requests and prevent harm</li>
            <li>To fulfill and manage orders, payments, returns, and exchanges</li>
            <li>To deliver and facilitate delivery of services to the user</li>
            <li>To respond to user inquiries and offer support</li>
            <li>To send marketing and promotional communications (with your consent)</li>
            <li>To deliver targeted advertising</li>
            <li>For other business purposes such as data analysis, usage trends, and product improvement</li>
          </ul>

          {/* 3. Will your information be shared with anyone? */}
          <h2 className="text-xl font-semibold mt-6">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. This includes sharing with vendors, service providers, payment processors, and as required for legal compliance or business transfers.</p>

          {/* 4. Who will your information be shared with? */}
          <h2 className="text-xl font-semibold mt-6">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
          <p>We only share and disclose your information with the following categories of third parties as needed: cloud computing services, communication & collaboration tools, data storage providers, payment processors, performance monitoring tools, sales & marketing tools, authentication services, and website hosting providers.</p>

          {/* 5. Do we use cookies and other tracking technologies? */}
          <h2 className="text-xl font-semibold mt-6">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. You can refuse certain cookies via your browser settings. See our Cookie Notice for more details.</p>

          {/* 6. How do we handle your social logins? */}
          <h2 className="text-xl font-semibold mt-6">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p>If you choose to register or log in using a social media account, we may have access to certain information about you from those providers, as described in this notice. We recommend you review their privacy policies for details on their data practices.</p>

          {/* 7. Is your information transferred internationally? */}
          <h2 className="text-xl font-semibold mt-6">7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p>We may transfer, store, and process your information in countries other than your own. We will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</p>

          {/* 8. How long do we keep your information? */}
          <h2 className="text-xl font-semibold mt-6">8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law. When we have no ongoing legitimate business need to process your information, we will delete or anonymize it.</p>

          {/* 9. How do we keep your information safe? */}
          <h2 className="text-xl font-semibold mt-6">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission or storage technology is 100% secure, so we cannot guarantee absolute security.</p>

          {/* 10. What are your privacy rights? */}
          <h2 className="text-xl font-semibold mt-6">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p>In some regions (like the EEA and UK), you have rights under data protection laws, including the right to access, correct, or delete your personal information, restrict processing, or object to processing. To exercise these rights, contact us at <a href="mailto:support@getblurby.com" className="text-[#00ADB5] underline">support@getblurby.com</a>.</p>
          <p>You may also opt out of marketing emails at any time by clicking the unsubscribe link or contacting us.</p>

          {/* 11. Controls for Do-Not-Track features */}
          <h2 className="text-xl font-semibold mt-6">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>Most browsers and some mobile systems include a Do-Not-Track ("DNT") feature. We do not currently respond to DNT signals. If a standard is adopted, we will update this policy accordingly.</p>

          {/* 12. Do California residents have specific privacy rights? */}
          <h2 className="text-xl font-semibold mt-6">12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <p>Yes, California residents have specific rights regarding their personal information, including the right to request access to or deletion of their data. To exercise these rights, contact us at <a href="mailto:support@getblurby.com" className="text-[#00ADB5] underline">support@getblurby.com</a>.</p>

          {/* 13. Do we make updates to this notice? */}
          <h2 className="text-xl font-semibold mt-6">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p>We may update this privacy notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this notice frequently.</p>

          {/* 14. How can you contact us about this notice? */}
          <h2 className="text-xl font-semibold mt-6">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>If you have questions or comments about this notice, please email us at <a href="mailto:support@getblurby.com" className="text-[#00ADB5] underline">support@getblurby.com</a>.</p>

          {/* 15. How can you review, update or delete the data we collect from you? */}
          <h2 className="text-xl font-semibold mt-6">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>To request to review, update, or delete your personal information, please contact us at <a href="mailto:support@getblurby.com" className="text-[#00ADB5] underline">support@getblurby.com</a>.</p>
        </div>
      </main>
    </div>
  );
}
