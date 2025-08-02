'use client';
import "./globals.css";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import GlassSkillCard from "@/components/GlassSkillCard";
import SkillsSection from "@/components/SkillsSection";
import StackingSkills from "@/components/StackingSkills";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero full-width">
        <div className="hero-inner">
          <motion.h1
            className="headline"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hey, I'm Manny ! UX/Product Designer & Engineer
          </motion.h1>

          <motion.p
            className="subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Turning complex problems into intuitive, impactful experiences — backed by research, driven by systems thinking.
          </motion.p>

          <div className="toolstack">
          <span>Figma</span>
          <span>Framer</span>
          <span>HTML</span>
          <span>React</span>
          <span>Notion</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Next.JS</span>
          <span>React.JS</span>
          <span>TypeScript</span>
          <span>Python</span>
         </div>

          <motion.a
            href="#projects"
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See My Work
          </motion.a>

          <div className="scroll-cue">↓  Scroll to explore featured projects</div>
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
