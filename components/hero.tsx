"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, MapPin, ChevronDown, ArrowRight, Sparkles } from "lucide-react"
import gsap from "gsap"
import FlipCard from "./flip-card"
import { useParallax, useMagnetic } from "@/lib/gsap-utils"

export default function Hero() {
  const textContentRef = useRef<HTMLDivElement>(null)
  const imageContentRef = useRef<HTMLDivElement>(null)
  const socialLinksRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useParallax(0.3)
  const blob2Ref = useParallax(0.5)
  
  // New decorative refs
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate badge
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
      )
    }

    // Animate text content on mount
    if (textContentRef.current) {
      const elements = textContentRef.current.children
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out", 
          delay: 0.3 
        }
      )
    }

    // Animate image content on mount
    if (imageContentRef.current) {
      gsap.fromTo(
        imageContentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
      )
    }

    // Stagger animate social links
    if (socialLinksRef.current) {
      const links = socialLinksRef.current.children
      gsap.fromTo(
        links,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1,
        }
      )
    }
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1918]">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={blob1Ref as React.RefObject<HTMLDivElement>} className="absolute -top-[10%] -right-[10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[30px] md:blur-[60px] sm:blur-[120px] mix-blend-normal md:mix-blend-screen animate-pulse" />
        <div ref={blob2Ref as React.RefObject<HTMLDivElement>} className="absolute -bottom-[10%] -left-[10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[30px] md:blur-[50px] sm:blur-[100px] mix-blend-normal md:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 sm:opacity-20 mix-blend-normal md:mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Text Content - Spans 7 columns */}
          <div ref={textContentRef} className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            
            {/* Status Badge */}
            <div ref={badgeRef} className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-amber-500/30 bg-[#252423] md:bg-amber-500/10 backdrop-blur-none md:backdrop-blur-md">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-amber-200 text-xs font-medium tracking-wide uppercase">Currently open to work</span>
              </div>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Front-end <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient-x">
               Engineer
              </span>
            </h2>

            <h1 className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Gusti Gibran Avattar</span>. 
              I build accessible, pixel-perfect, and performant web experiences that blend design and engineering.
            </h1>

            {/* CTA Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="cursor-target group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 touch-manipulation"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Social Links */}
              <div ref={socialLinksRef} className="cursor-target flex items-center gap-4">
                <SocialLink 
                  href="https://github.com/BranProHengker"
                  icon={<Github size={22} />}
                  ariaLabel="Visit Gusti Gibran Avattar's GitHub Profile"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/gusti-gibran-avattar-819455389/"
                  icon={<Linkedin size={22} />}
                  ariaLabel="Visit Gusti Gibran Avattar's LinkedIn Profile"
                />
                <SocialLink
                  href="mailto:gustigibranavttr@gmail.com"
                  icon={<Mail size={22} />}
                  ariaLabel="Contact Gusti Gibran Avattar via Email"
                  isEmail
                />
              </div>
            </div>

            {/* Location & Role Tags */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500 font-mono">
               <div className="flex items-center gap-2">
                 <MapPin className="w-4 h-4 text-amber-500" />
                 <span>Malang, Indonesia</span>
               </div>
               <div className="w-1 h-1 bg-gray-700 rounded-full self-center hidden sm:block" />
               <div className="flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-purple-500" />
                 <span>UI/UX Designer</span>
               </div>
               <div className="w-1 h-1 bg-gray-700 rounded-full self-center hidden sm:block" />
               <div className="flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-blue-500" />
                 <span>Frontend Engineer</span>
               </div>
            </div>

          </div>

          {/* Visual Content - Spans 5 columns */}
          <div ref={imageContentRef} className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mr-0">
              {/* Abstract Shapes Behind */}
              <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-amber-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-white/5 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main Card Container */}
              <div className="relative h-full w-full bg-[#252423] rounded-[32px] p-2 border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-[32px] pointer-events-none" />
                
                {/* Inner Content */}
                <div className="cursor-target h-full w-full rounded-\[24px]\ overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <FlipCard
                    images={[
                      "/gwehj.jpg",
                      "/gwehj.jpg",
                    ]}
                    interval={4000}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Card Detail */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#1a1918]/90 md:bg-white/10 backdrop-blur-none md:backdrop-blur-md p-4 rounded-xl border border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <p className="text-white font-medium text-sm">Gusti Gibran Avattar</p>
                     <p className="text-gray-300 text-xs">Junior Front-end Engineer & UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        aria-label="Scroll to about section"
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-amber-400 transition-colors duration-300 group touch-manipulation"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
        <ChevronDown size={24} className="animate-bounce" />
      </button>
    </section>
  )
}

// Magnetic Social Link Component
function SocialLink({
  href,
  icon,
  isEmail = false,
  ariaLabel,
}: {
  href: string
  icon: React.ReactNode
  isEmail?: boolean
  ariaLabel?: string
}) {
  const linkRef = useMagnetic(0.3)

  return (
    <a
      ref={linkRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      aria-label={ariaLabel}
      className="relative p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 group text-gray-300"
    >
      {icon}
    </a>
  )
}
