// import { DashboardHeader } from "@/components/organisms/DashboardHeader"
import { HeroSection } from "@/sections/landing/HeroSection"
import { AboutSection } from "@/sections/landing/AboutSection"
import { InfoSection } from "@/sections/landing/InfoSection"
import { ResourcesSection } from "@/sections/landing/ResourcesSection"



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <DashboardHeader action="dashboard" /> */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <InfoSection />

      </main>
      <ResourcesSection />
    </div>
  )
}
