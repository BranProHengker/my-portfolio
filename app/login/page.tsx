"use client"

import { useState, useRef, useEffect } from "react"
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from "next/navigation"
import TargetCursor from "@/components/TargetCursor"
import { Eye, EyeOff, Loader2, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { useScrollAnimation } from "@/lib/gsap-utils"
export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [lockoutTime, setLockoutTime] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const router = useRouter()

  // Timer effect for lockout
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (lockoutTime) {
      const calculateTimeLeft = () => {
        const now = Date.now();
        const timeRemaining = Math.max(0, Math.ceil((lockoutTime - now) / 1000));
        setTimeLeft(timeRemaining);

        if (timeRemaining <= 0) {
          setLockoutTime(null);
          setFailedAttempts(0);
          setError(null);
        }
      };

      calculateTimeLeft();
      timer = setInterval(calculateTimeLeft, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [lockoutTime]);

  // Animation refs
  const leftSideRef = useScrollAnimation({ y: 30, duration: 0.8, delay: 0.2 })
  const rightSideRef = useScrollAnimation({ y: 30, duration: 0.8, delay: 0.4 })
  const formRef = useScrollAnimation({ y: 20, duration: 0.6, delay: 0.6 })

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Check if user is locked out
    if (lockoutTime) {
      setError(`Too many failed attempts. Please try again in ${timeLeft} seconds.`);
      setLoading(false);
      return;
    }

    // Check if environment variables are available
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setError("Supabase configuration is missing. Please check your environment variables.");
      setLoading(false);
      return;
    }

    // Initialize Supabase client only when needed with 24h cookie expiration
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookieOptions: {
          maxAge: 86400, // 1x24 hours in seconds
        }
      }
    )

    // Convert simple username to email format
    const email = username.includes("@") ? username : `${username}@admin.com`

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      setSuccess(true)
      setFailedAttempts(0) // Reset failed attempts on successful login

      // Smooth transition
      setTimeout(() => {
        router.refresh()
        window.location.href = "/avttr"
      }, 800)

    } catch (error: any) {
      console.error("Login error:", error)

      // Update failed attempts
      const newFailedAttempts = failedAttempts + 1
      setFailedAttempts(newFailedAttempts)

      if (newFailedAttempts >= 4) {
        // Lock the user out for 90 seconds (90,000 ms)
        const lockoutEndTime = Date.now() + 90000
        setLockoutTime(lockoutEndTime)
        setError("Too many failed attempts. Access blocked for 90 seconds.")
      } else {
        setError("Access Denied. Please verify credentials.")
      }

      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex overflow-hidden bg-[#1a1918] font-sans selection:bg-amber-500/30 relative">
      {/* Back Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 hover:bg-white/20 transition-all duration-300 cursor-target group"
        title="Back to Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform duration-200"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>

      {/* Left Side - Visual Branding (60%) */}
      <div ref={leftSideRef as React.RefObject<HTMLDivElement>} className="hidden lg:flex w-[60%] relative bg-[#1a1918] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

        {/* Ambient Lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradlinearient-to-b from-[#1a1918]/80 via-transparent to-[#1a1918]/80 z-10" />
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px]" />

        <div className="relative z-20 flex flex-col items-start max-w-xl px-12">
            <div className="cursor-target mb-8 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl inline-flex items-center justify-center">
               <Image src="/gutsi-logo-copy.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
            </div>

            <h1 className="text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Gutsi <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-amber-500">
                Dashboard
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-md border-l-2 border-amber-500/30 pl-6">
              Manage your portfolio, projects, and content in a secure, high-performance environment designed for creators.
            </p>

        </div>
      </div>

      {/* Right Side - Login Form (40%) */}
      <div ref={rightSideRef as React.RefObject<HTMLDivElement>} className="w-full lg:w-[40%] flex items-center justify-center p-8 relative bg-[#1a1918]/90 border-l border-white/10 backdrop-blur-xl">

        <div ref={formRef as React.RefObject<HTMLDivElement>} className="w-full max-w-[380px] space-y-8 relative z-10">

          <div className="text-center mb-10">
            <div className="cursor-target w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 bg-white/5 border border-white/10">
               <Image src="/gutsi-logo-copy.png" alt="Logo" width={32} height={32} className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="cursor-target w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white text-sm placeholder:text-gray-500 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 outline-none transition-all duration-300 hover:border-amber-400/40"
                placeholder="Enter your username"
                required
                disabled={loading || success}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="cursor-target w-full bg-white/5 border border-white/20 rounded-xl p-4 pr-12 text-white text-sm placeholder:text-gray-500 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 outline-none transition-all duration-300 hover:border-amber-400/40"
                  placeholder="Enter your password"
                  required
                  disabled={loading || success}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-400 transition-colors"
                  disabled={loading || success}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-medium text-center animate-in fade-in slide-in-from-top-1">
                    {error}
                </div>
            )}

            {lockoutTime && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 text-xs font-medium text-center">
                    Access blocked. Try again in {timeLeft} seconds.
                </div>
            )}

            <button
              type="submit"
              disabled={loading || success || lockoutTime !== null}
              className={`
                w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-target
                ${success
                    ? "bg-linear-to-r from-green-500 to-emerald-500 text-white cursor-default"
                    : "bg-linear-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0"}
                disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0
              `}
            >
              {loading ? (
                success ? (
                    <>
                        <CheckCircle2 size={18} className="animate-in zoom-in duration-300" />
                        Authorized
                    </>
                ) : (
                    <Loader2 size={18} className="animate-spin" />
                )
              ) : lockoutTime !== null ? (
                `Wait ${timeLeft}s`
              ) : (
                <>
                  Sign In <ArrowRight size={16} />
                </>
              )}
            </button>

            {failedAttempts > 0 && !lockoutTime && (
                <div className="text-center text-xs text-gray-500">
                    {4 - failedAttempts} attempts remaining before lockout
                </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
             <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                Do not Entry if you are not an Admin.
             </p>
          </div>
        </div>
      </div>
       <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  )
}
