'use client';

import "./globals.css";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import GlassSkillCard from "@/components/GlassSkillCard";
import SkillsSection from "@/components/SkillsSection";
import StackingSkills from "@/components/StackingSkills";
import Typewriter from 'typewriter-effect';
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const tools = [
  'figma',
  'framer',
  'slack',
  'react',
  'ts',
  'js',
];

export default function HeroSection() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-background" />

        <div className="hero-content">
          <div className="hero-content-wrapper">
            <div className="hero-left">
              <h1 className="hero-title">
                Hey, I'm Manny — <br /> UX Engineer & Systems Thinker
              </h1>

              <div className="typewriter-subtitle">
                <Typewriter
                  options={{
                    strings: [
                      'Designing clean, scalable systems.',
                      'Bridging design and engineering.',
                      'Turning Figma files into frontend gold.',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 20,
                  }}
                />
              </div>

              <p className="hero-description">
                Based in Texas. Often seen rating matcha spots ✦ organizing ColorStack events ✦ drafting 5+ Substack pieces I’m proudly gatekeeping.{' '}
                <em>(shhh 🤫)</em>
              </p>
            </div>

            <div className="hero-right">
  <div className="rotating-stamp-wrapper">
    <img src="/manny-rotation.png" alt="Name Ring" className="name-ring rotating" />
    <img src="/manny-icon.png" alt="Manny Icon" className="center-icon" />
  </div>
</div>
            
          </div>
          <div className="scroll-cue">
  <span>↓ Scroll</span>
</div>
        </div>
</section>


      {/* Selected Projects */}
      <section id="projects" className="full-width project-section">
        <Reveal delay={0}>
          <FeaturedProjectCard
            title="SubTracker"
            description="A simple app to manage and track your subscriptions. Set alerts, get insights, and stay in control."
            href="/work/subtracker"
            imgSrc="/projectdemo1.avif"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <FeaturedProjectCard
            title="SubTracker"
            description="A simple app to manage and track your subscriptions. Set alerts, get insights, and stay in control."
            href="/work/subtracker"
            imgSrc="/projectdemo2.jpg"
          />
        </Reveal>

        <Reveal delay={0.4}>
          <FeaturedProjectCard
            title="SubTracker"
            description="A simple app to manage and track your subscriptions. Set alerts, get insights, and stay in control."
            href="/work/subtracker"
            imgSrc="/projectdemo3.jpg"
          />
        </Reveal>
      </section>

      <StackingSkills />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
