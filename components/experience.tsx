"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, GraduationCap, Building2, X, Award } from "lucide-react"
import { useScrollAnimation, useStaggerAnimation } from "@/lib/gsap-utils"

export default function Experience() {
  const headerRef = useScrollAnimation({ triggerStart: "top 80%" })
  const timelineRef = useStaggerAnimation(0.2, { triggerStart: "top 75%" })

  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateImage, setCertificateImage] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Add individual refs for each experience card animation
  const internRef = useScrollAnimation({ triggerStart: "top 85%" });
  const explorAItionRef = useScrollAnimation({ triggerStart: "top 85%" });
  const gameSeedRef = useScrollAnimation({ triggerStart: "top 85%" });
  const educationRef = useScrollAnimation({ triggerStart: "top 85%" });

  const handleCertificateClick = (image: string, title: string) => {
    setIsImageLoading(true);
    setCertificateImage(image);
    setCertificateTitle(title);
    setShowCertificate(true);
  };

  const closeModal = () => {
    setShowCertificate(false);
    setCertificateImage("");
    setCertificateTitle("");
  };

  return (
    <section
      id="experience"
      className="py-20 sm:py-32 bg-[#1a1918] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The path that shaped my skills and professional growth.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div ref={timelineRef as React.RefObject<HTMLDivElement>}>
            <div className="relative space-y-12">
              {/* Connecting Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-linear-to-b from-amber-500/50 via-slate-500/30 to-transparent hidden sm:block" />

              {/* 3PM Solution Experience */}
              <div
                ref={internRef as React.RefObject<HTMLDivElement>}
                className="relative pl-0 sm:pl-24 group cursor-pointer"
                onClick={() => handleCertificateClick("/certifjuaravibecoding.jpeg", "3PM IT Solution Certificate")}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -translate-x-[7px] rounded-full border-2 border-[#C0151A] bg-[#1a1918] group-hover:bg-[#C0151A] transition-colors duration-300 z-10 hidden sm:block">
                   <div className="absolute inset-0 bg-[#C0151A]/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                <div className="relative bg-[#232325] rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]">
                   <div className="absolute inset-0 bg-linear-to-br from-[#C0151A]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                   <div className="cursor-target relative bg-[#232325]/90 backdrop-blur-xl rounded-[20px] p-6 sm:p-8 border border-white/5 overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#f1f1f1]/90 rounded-xl flex items-center justify-center">
                               <Image
                                  src="/3PMSolution.png"
                                  alt="3PM Solution Logo"
                                  width={32}
                                  height={32}
                                  className="w-9 h-9 object-contain"
                               />
                            </div>
                            <div>
                               <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Intern Frontend Engineer</h3>
                               <div className="flex items-center gap-2 text-[#C0151A]/80 font-medium">
                                  <Building2 className="w-4 h-4" />
                                  <span>3PM Solution</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                               <Calendar className="w-4 h-4" />
                               <span>Dec 2025 – Jun 2026</span>
                            </div>
                            <div
                              className="flex items-center gap-2 cursor-pointer group/cert"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCertificateClick("/certifjuaravibecoding.jpeg", "3PM IT Solution Certificate");
                              }}
                            >
                              <Award className="w-4 h-4 text-[#C0151A] group-hover/cert:text-[#C0151A]/80 transition-colors" />
                              <MapPin className="w-4 h-4" />
                              <span>Malang, ID</span>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-3 pl-0 sm:pl-[68px]">
                         <p className="text-gray-300 leading-relaxed">
                           Working as a Frontend Engineering intern, contributing to web development projects and enhancing user interface implementations.
                         </p>
                         <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 text-xs font-medium text-[#C0151A] bg-[#C0151A]/10 rounded-full border border-[#C0151A]/20">Frontend Development</span>
                            <span className="px-3 py-1 text-xs font-medium text-[#C0151A] bg-[#C0151A]/10 rounded-full border border-[#C0151A]/20">Web Development</span>
                            <span className="px-3 py-1 text-xs font-medium text-[#C0151A] bg-[#C0151A]/10 rounded-full border border-[#C0151A]/20">UI Implementation</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* ExplorAItion Experience */}
              <div
                ref={explorAItionRef as React.RefObject<HTMLDivElement>}
                className="relative pl-0 sm:pl-24 group cursor-pointer"
                onClick={() => handleCertificateClick("/Explor[AI]tion - JUARA 2.png", "ExplorAItion Certificate")}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -translate-x-[7px] rounded-full border-2 border-blue-500 bg-[#1a1918] group-hover:bg-blue-500 transition-colors duration-300 z-10 hidden sm:block">
                   <div className="absolute inset-0 bg-blue-500/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                <div className="relative bg-[#232325] rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]">
                   <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                   <div className="cursor-target relative bg-[#232325]/90 backdrop-blur-xl rounded-[20px] p-6 sm:p-8 border border-white/5 overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-xl flex items-center justify-center">
                               <Image
                                  src="/ExplorAItion-logo.webp"
                                  alt="ExplorAItion Logo"
                                  width={32}
                                  height={32}
                                  className="w-9 h-9 object-contain"
                               />
                            </div>
                            <div>
                               <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Certificate ExplorAItion</h3>
                               <div className="flex items-center gap-2 text-blue-400/80 font-medium">
                                  <Building2 className="w-4 h-4" />
                                  <span>Garuda Spark Innovation Hub</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                               <Calendar className="w-4 h-4" />
                               <span>Nov 2025</span>
                            </div>
                            <div
                              className="flex items-center gap-2 cursor-pointer group/cert"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCertificateClick("/Explor[AI]tion - JUARA 2.png", "ExplorAItion Certificate");
                              }}
                            >
                              <Award className="w-4 h-4 text-blue-400 group-hover/cert:text-blue-300 transition-colors" />
                              <MapPin className="w-4 h-4" />
                              <span>Surabaya, ID</span>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-3 pl-0 sm:pl-[68px]">
                         <p className="text-gray-300 leading-relaxed">
                           ExplorAItion is an innovation event where you and your team are given 48 hours to create a digital solution from a business idea or problem you want to develop.
                           During these two days, you will be guided to map out problems, develop concepts, and finally produce a prototype that can be directly presented and serve as an initial foundation for developing your digital solution further.
                         </p>
                         <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">Innovation</span>
                            <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">Prototyping</span>
                            <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">Problem Solving</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* GameSeed Experience */}
              <div
                ref={gameSeedRef as React.RefObject<HTMLDivElement>}
                className="relative pl-0 sm:pl-24 group cursor-pointer"
                onClick={() => handleCertificateClick("/Gusti Gibran Avattar GAMESEED sertif.png", "GameSeed Certificate")}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -translate-x-[7px] rounded-full border-2 border-amber-500 bg-[#1a1918] group-hover:bg-amber-500 transition-colors duration-300 z-10 hidden sm:block">
                   <div className="absolute inset-0 bg-amber-500/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                <div className="relative bg-[#232325] rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]">
                   <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                   <div className="cursor-target relative bg-[#232325]/90 backdrop-blur-xl rounded-[20px] p-6 sm:p-8 border border-white/5 overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-amber-500/10 rounded-xl flex items-center justify-center">
                               <Image
                                  src="/GameSeed.png"
                                  alt="GameSeed Logo"
                                  width={32}
                                  height={32}
                                  className="w-9 h-9 object-contain"
                               />
                            </div>
                            <div>
                               <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">UI/UX Designer</h3>
                               <div className="flex items-center gap-2 text-amber-400/80 font-medium">
                                  <Building2 className="w-4 h-4" />
                                  <span>GameSeed</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                               <Calendar className="w-4 h-4" />
                               <span>Jul 2025 – Aug 2025</span>
                            </div>
                            <div
                              className="flex items-center gap-2 cursor-pointer group/cert"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCertificateClick("/Gusti Gibran Avattar GAMESEED sertif.png", "GameSeed Certificate");
                              }}
                            >
                              <Award className="w-4 h-4 text-amber-400 group-hover/cert:text-amber-300 transition-colors" />
                              <MapPin className="w-4 h-4" />
                              <span>Remote, ID</span>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-3 pl-0 sm:pl-[68px]">
                         <p className="text-gray-300 leading-relaxed">
                           Collaborated with a team to design user interfaces for a game development competition.
                           Focused on creating intuitive and immersive player experiences.
                         </p>
                         <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/20">UI Design</span>
                            <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/20">Game Assets</span>
                            <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/20">Prototyping</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Education Item */}
              <div ref={educationRef as React.RefObject<HTMLDivElement>} className="relative pl-0 sm:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -translate-x-[7px] rounded-full border-2 border-slate-500 bg-[#1a1918] group-hover:bg-slate-500 transition-colors duration-300 z-10 hidden sm:block" />

                <div className="cursor-target relative bg-[#232325] rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]">
                   <div className="absolute inset-0 bg-linear-to-br from-slate-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                   <div className="relative bg-[#232325]/90 backdrop-blur-xl rounded-[20px] p-6 sm:p-8 border border-white/5 overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-500/10 rounded-xl">
                               <GraduationCap className="w-6 h-6 text-slate-400" />
                            </div>
                            <div>
                               <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Software Engineering</h3>
                               <div className="flex items-center gap-2 text-slate-400/80 font-medium">
                                  <Building2 className="w-4 h-4" />
                                  <span>SMK Negeri 6 Malang</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                               <Calendar className="w-4 h-4" />
                               <span>2023 – 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <MapPin className="w-4 h-4" />
                               <span>Malang, ID</span>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-3 pl-0 sm:pl-[68px]">
                         <p className="text-gray-300 leading-relaxed">
                           Focused on Software Engineering (RPL) with a strong interest in Frontend Development and UI/UX Design.
                           Actively participating in tech communities and school projects.
                         </p>
                         <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-500/10 rounded-full border border-slate-500/20">Software Engineering</span>
                            <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-500/10 rounded-full border border-slate-500/20">Web Development</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-[#232325] p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">{certificateTitle}</h3>
            </div>

            <div className="bg-[#1a1918] p-6 flex items-center justify-center relative min-h-[40vh] sm:min-h-[60vh]">
              {/* Skeleton Loader */}
              {isImageLoading && (
                <div className="absolute inset-6 flex items-center justify-center bg-[#232325] rounded-lg animate-pulse">
                  <div className="flex flex-col items-center gap-4">
                     <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                     <span className="text-amber-500/50 text-sm font-medium animate-pulse">Wait a seconds....</span>
                  </div>
                </div>
              )}

              <Image
                src={certificateImage}
                alt={`${certificateTitle} Certificate`}
                width={800}
                height={600}
                className={`max-w-full max-h-[70vh] object-contain rounded-lg transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsImageLoading(false)}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}