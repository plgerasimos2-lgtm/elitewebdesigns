"use client";

import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScrollProgressBar } from "@/components/effects/ScrollProgressBar";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
