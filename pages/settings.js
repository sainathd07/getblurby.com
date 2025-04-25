import Head from 'next/head';

export default function Settings() {
  return (
    <div className="bg-[#222831] min-h-screen text-white">
      <Head>
        <title>Settings | Blurby AI</title>
      </Head>
      <main className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="bg-white/10 rounded-xl p-6 border border-[#393E46]">
          <p className="text-[#e0e0e0]">Settings page content goes here.</p>
        </div>
      </main>
    </div>
  );
}
