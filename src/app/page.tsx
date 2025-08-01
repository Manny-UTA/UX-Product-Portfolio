'use client';

import "./globals.css";
import Link from "next/link";
import { motion } from "framer-motion";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import Reveal from "@/components/Reveal";

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
            transition={{ duration: 0.8 }}
          >
            Turning complex UX problems into intuitive product experiences.
          </motion.h1>

          <motion.p
            className="subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I’m a product-minded UX designer and engineer who designs with purpose —
            backed by research, driven by systems thinking, and built for scale.
          </motion.p>

          <motion.a
            className="cta-button"
            href="/work"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            See My Work
          </motion.a>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="full-width" style={{ background: "#0A0A0A", padding: "4rem 0" }}>
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
            title="GymBuddy"
            description="Your personalized fitness companion powered by social accountability."
            href="/work/gymbuddy"
            imgSrc="/projectdemo2.jpg"
          />
        </Reveal>

        <Reveal delay={0.4}>
          <FeaturedProjectCard
            title="ColorStack UTA"
            description="Chapter site that converts interest to community and programs."
            href="/work/colorstack"
            imgSrc="/projectdemo3.jpg"
          />
        </Reveal>
      </section>

      {/* UX Metrics Block */}
      <section className="ux-metrics full-width">
        <h2 className="tan-headline">Design Impact</h2>
        <div className="metrics-grid">
          <div className="metric">
            <h3>+60%</h3>
            <p>Faster student lookup time<br />via MavBuddy AI Tool</p>
          </div>
          <div className="metric">
            <h3>+40%</h3>
            <p>User engagement increase<br />with GymBuddy redesign</p>
          </div>
          <div className="metric">
            <h3>+3000</h3>
            <p>New signups driven by<br />DoorDash campaign strategy</p>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="astro-playground">
        <h2 className="tan-headline">Playground</h2>
        <p>Astrology-inspired design experiments. ✦ Building tools that feel like instinct.</p>
        <a className="cta-button gold small" href="/playground">Explore Concepts</a>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="tan-headline">Let’s Collaborate</h2>
        <p>Have a project or team that needs a sharp mind with soul? Let’s talk.</p>
        <a className="cta-button gold" href="/contact">Contact Me</a>
      </section>
    </main>
  );
}
