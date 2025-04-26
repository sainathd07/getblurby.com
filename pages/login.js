import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { useSession } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const profileImage = (session?.user?.image && session.user.image.trim() !== "")
    ? session.user.image
    : (session?.user?.email
        ? `https://api.dicebear.com/7.x/identicon/png?seed=${encodeURIComponent(session.user.email)}`
        : "https://api.dicebear.com/7.x/identicon/png?seed=blurbyuser");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email/password login logic here (if supported)
    // signIn('credentials', { email, password })
  };

  return (
    <div className="min-h-screen bg-[#222831] flex flex-col">
      <Head>
        <title>Login | Blurby AI</title>
      </Head>
      {/* Navigation Bar */}
      <nav className="w-full flex items-center px-8 py-4 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46]">
        <span className="text-2xl font-bold text-[#00ADB5]">Blurby AI</span>
      </nav>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">

          <div className="flex flex-col items-center w-full mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded mb-4 transition focus:outline-none"
          onClick={() => signIn('google')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
          Continue with Google
        </button>
        <div className="flex items-center w-full mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-[#00ADB5]"
          />
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-[#00ADB5]"
          />
          <div className="flex justify-end mb-4">
            <a href="#" className="text-xs text-gray-500 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">Don't have an account yet? <a href="#" className="font-semibold underline">Create for free</a></p>
        </div>
      </div>
    </div>
  );
}
