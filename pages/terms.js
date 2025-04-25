import Head from 'next/head';

export default function Terms() {
  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
        <title>Terms and Conditions | Blurby AI</title>
      </Head>
      <main className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        <div className="bg-white/10 rounded-xl p-6 border border-[#393E46] text-[#e0e0e0] space-y-4">
          <p>Welcome to Blurby AI! By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
          <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>By accessing or using Blurby AI, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our services.</p>
          <h2 className="text-xl font-semibold mt-6">2. Use of Service</h2>
          <p>You agree to use Blurby AI only for lawful purposes and in accordance with these terms. You may not use our service for any illegal or unauthorized purpose.</p>
          <h2 className="text-xl font-semibold mt-6">3. Intellectual Property</h2>
          <p>All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of Blurby AI or its licensors.</p>
          <h2 className="text-xl font-semibold mt-6">4. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
          <h2 className="text-xl font-semibold mt-6">5. Limitation of Liability</h2>
          <p>Blurby AI is provided on an "as is" and "as available" basis. We do not guarantee that the service will be uninterrupted or error-free. In no event shall Blurby AI be liable for any damages arising from the use of or inability to use the service.</p>
          <h2 className="text-xl font-semibold mt-6">6. Changes to Terms</h2>
          <p>We reserve the right to update or change these Terms and Conditions at any time. Your continued use of the service after any such changes constitutes acceptance of the new terms.</p>
          <h2 className="text-xl font-semibold mt-6">7. Contact</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@blurby.com" className="text-[#00ADB5] underline">support@blurby.com</a>.</p>
        </div>
      </main>
    </div>
  );
}
