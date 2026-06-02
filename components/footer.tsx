"use client"

import { useState } from "react"
import OptimizedImage from "./optimized-image"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  ArrowRight,
  Heart,
  Sparkles,
  Code2,
  Palette
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const services = [
    { icon: Code2, label: "Web Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Sparkles, label: "Front-end Engineer" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/BranProHengker", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gusti-gibran-avattar-819455389/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/gustigibran", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/3Br4n", label: "Twitter" },
  ]

  return (
    <footer className="bg-[#252423] relative overflow-hidden" style={{ clipPath: "polygon(0 0, calc(8% + 20px) 0, calc(8% + 40px) 40px, 100% 40px, 100% 100%, 0 100%)" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-amber-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />
        {/* Folder tab highlight */}
        <div className="absolute top-0 left-[8%] w-24 h-10 bg-[#252423]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 40px, calc(100% - 20px) 40px, calc(100% - 20px) calc(100% - 10px), 0 calc(100% - 10px))" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Call to Action Section */}
     
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand & Services */}
          <div className="lg:col-span-1">
            <button
              aria-label="Scroll to home section"
              onClick={() => scrollToSection("home")}
              className="group inline-block mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="cursor-target relative w-12 h-12 group-hover:scale-110 transition-transform">
                  <OptimizedImage
                    src="/gutsi-logo-copy.png"
                    fallbackSrc="/gutsi-logo-copy.png"
                    alt="Gutsi Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    quality={75}
                  />
                </div>
                <div>
                  <span className="text-white font-bold text-xl">Gibran</span>
                  <p className="text-gray-400 text-xs">Portfolio</p>
                </div>
              </div>
            </button>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Building websites and applications that actually work well for real people.
            </p>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service.label} className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors">
                  <service.icon className="w-4 h-4" />
                  <span className="text-sm">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-400"></span>
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-1px bg-amber-400 transition-all duration-300"></span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-400"></span>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:gustigibranavattr@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">gustigibranavattr@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Malang, East Java, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span className="text-sm">Available for Work </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target w-10 h-10 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-400"></span>
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow to get the latest updates on my projects and blog posts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  aria-label="Email address for newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="cursor-target w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="cursor-target w-full bg-linear-to-r from-amber-400 to-orange-500 text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105"
              >
                {isSubscribed ? "✓ Following!" : "Follow"}
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-400 text-sm mt-2 animate-fade-in">
                Thank you for following!
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-linear-to-r from-[#252423] via-[#1a1918] to-[#252423] px-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-amber-400">Gusti Gibran Avattar</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
