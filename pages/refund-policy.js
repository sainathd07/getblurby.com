import Head from "next/head";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#222831] flex flex-col">
      <Head>
        <title>Refund Policy | Blurby AI</title>
      </Head>
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46]">
  <div className="flex items-center space-x-8">
    <span className="text-2xl font-bold text-[#00ADB5]">Blurby AI</span>
    <div className="flex items-center space-x-4">
      <a href="#pricing" className="hover:text-[#00ADB5] transition">Pricing</a>
      <a href="#testimonials" className="hover:text-[#00ADB5] transition">Testimonials</a>
      <a href="#how-it-works" className="hover:text-[#00ADB5] transition">How it Works</a>
    </div>
  </div>
  <div className="flex items-center">
    <a href="/login" className="text-white font-semibold hover:underline transition" style={{ padding: '0.5rem 1rem' }}>
      Login
    </a>
    <button
      onClick={() => window.location.href = '/signup'}
      className="bg-[#00ADB5] border border-[#00ADB5] text-white px-4 py-2 rounded-lg font-semibold ml-2 transition hover:bg-[#00959a] hover:text-white"
    >
      Sign Up
    </button>
  </div>
</nav>
      <main className="flex-1 flex justify-center items-start px-4 py-12">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-[#393E46] shadow-md">
          <h1 className="text-3xl font-bold text-white mb-4">Refund and Cancellation Policy</h1>
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
