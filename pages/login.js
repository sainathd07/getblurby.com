import Head from 'next/head';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect to home if already logged in
  useEffect(() => {
    if (session) {
      router.replace('/');
    }
  }, [session, router]);

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
    <div className="min-h-screen bg-[#222831] flex flex-col px-2 sm:px-4 md:px-8">
      <Head>
        <title>Login | Blurby AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <div className="flex-1 flex justify-center items-center py-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-[#393E46] shadow-md flex flex-col items-center">

          <div className="flex flex-col items-center w-full mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Login</h1>
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 bg-[#00ADB5] border border-[#00ADB5] text-white hover:bg-[#00959a] hover:text-white font-semibold py-2 rounded mb-4 transition focus:outline-none"
          onClick={async () => {
            await signIn('google', { callbackUrl: '/' });
          }}
        >
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 100 100">
<path d="M52,96C27.738,96,8,76.262,8,52S27.738,8,52,8c11.018,0,21.562,4.095,29.689,11.529 c1.264,1.155,2.033,2.803,2.106,4.518c0.073,1.712-0.55,3.418-1.71,4.68l-8.528,9.269l15.189-0.003 c3.079,0,5.758,2.189,6.371,5.205C95.703,46.081,96,49.043,96,52C96,76.262,76.262,96,52,96z" opacity=".35"></path><path fill="#f2f2f2" d="M50,94C25.738,94,6,74.262,6,50S25.738,6,50,6c11.018,0,21.562,4.095,29.689,11.529 c1.264,1.155,2.033,2.803,2.106,4.518c0.073,1.712-0.55,3.418-1.71,4.68l-8.528,9.269l15.189-0.003 c3.079,0,5.758,2.189,6.371,5.205C93.703,44.081,94,47.043,94,50C94,74.262,74.262,94,50,94z"></path><path fill="#f9b84f" d="M86.697,42.747h-3.022v-0.156h-33.77V57.6H71.11c-3.094,8.737-11.407,15.009-21.206,15.009 c-12.433,0-22.513-10.08-22.513-22.513s10.08-22.513,22.513-22.513c5.739,0,10.96,2.165,14.936,5.702L75.454,22.67 c-6.702-6.246-15.666-10.097-25.549-10.097c-20.722,0-37.522,16.801-37.522,37.522s16.801,37.522,37.522,37.522 s37.522-16.801,37.522-37.522C87.427,47.58,87.168,45.124,86.697,42.747z"></path><path fill="#f4665c" d="M16.708,32.631l12.328,9.041c3.336-8.259,11.414-14.09,20.868-14.09 c5.739,0,10.96,2.165,14.936,5.702L75.454,22.67c-6.702-6.246-15.666-10.097-25.549-10.097 C35.492,12.573,22.993,20.71,16.708,32.631z"></path><path fill="#96c362" d="M49.904,87.618c9.692,0,18.499-3.709,25.157-9.741L63.448,68.05 c-3.767,2.854-8.45,4.559-13.544,4.559c-9.76,0-18.046-6.223-21.168-14.908L16.5,67.129C22.71,79.28,35.321,87.618,49.904,87.618z"></path><path fill="#2785bd" d="M86.697,42.747h-3.022v-0.156h-33.77V57.6H71.11c-1.486,4.197-4.186,7.816-7.668,10.452 c0.002-0.002,0.004-0.002,0.006-0.004l11.613,9.827c-0.822,0.747,12.366-9.019,12.366-27.78 C87.427,47.58,87.168,45.124,86.697,42.747z"></path><path fill="none" stroke="#40396e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M86.747,42.492L49.5,42.5v15h21.715c-3.089,8.738-11.419,15-21.215,15c-12.426,0-22.5-10.074-22.5-22.5 c0-12.426,10.074-22.5,22.5-22.5c5.834,0,11.149,2.221,15.147,5.862l10.155-11.038C68.632,16.224,59.751,12.5,50,12.5 c-20.711,0-37.5,16.789-37.5,37.5S29.289,87.5,50,87.5S87.5,70.711,87.5,50C87.5,47.429,87.24,44.918,86.747,42.492z"></path>
</svg>
          Continue with Google
        </button>
        <div className="flex items-center w-full mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 mb-4 border-2 border-[#00ADB5] bg-[#393E46] text-white rounded focus:outline-none focus:border-[#00ADB5] placeholder-gray-400 shadow-sm"
          />
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 mb-2 border-2 border-[#00ADB5] bg-[#393E46] text-white rounded focus:outline-none focus:border-[#00ADB5] placeholder-gray-400 shadow-sm"
          />
          <div className="flex justify-end mb-4">
            <a href="#" className="text-xs text-white hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00ADB5] border border-[#00ADB5] text-white hover:bg-[#00959a] hover:text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-white">Don't have an account yet? <a href="#" className="font-semibold underline">Create for free</a></p>
        </div>
      </div>
    </div>
  );
}
