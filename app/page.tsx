import { Suspense } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import TargetCursor from "@/components/TargetCursor"
import { supabase } from "@/lib/supabase"

// Lazy load components below the fold using Next.js dynamic
const Skills = dynamic(() => import("@/components/skills"))
const Workflow = dynamic(() => import("@/components/workflow"))
const Experience = dynamic(() => import("@/components/experience"))
const Projects = dynamic(() => import("@/components/projects"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))
const BackToTop = dynamic(() => import("@/components/back-to-top"))

// Loading fallback component
function LoadingSection() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-pulse text-amber-400">Loading...</div>
    </div>
  )
}

export const revalidate = 0;

export default async function Home() {
  // Fetch projects on the server to prevent client waterfall
  let projectsData: any[] = [];
  try {
    if (supabase) {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });
      if (data) {
        // Filter out drafts, but be safe if is_draft is undefined for older rows
        projectsData = data.filter((p: any) => !p.is_draft);
      }
    }
  } catch (error) {
    console.error("Failed to fetch projects in server component:", error);
  }

  return (
    <main className="min-h-screen bg-[#1a1918]">
      <Header />
      <Hero />
      <About />
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Workflow />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Projects initialProjects={projectsData} />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </main>
  )
}
