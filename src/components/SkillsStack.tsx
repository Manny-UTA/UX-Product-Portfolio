// components/SkillsStack.tsx
'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/skillsData";
import { useLayoutEffect, useRef } from "react";

console.log("skills length", skills?.length);
gsap.registerPlugin(ScrollTrigger);

export default function SkillsStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || cards.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = cards.length;

    // Initial (visible) scattered state — GSAP owns transforms
    const spreadX = 140;   // px
    const spreadY = 56;    // px
    const baseY  = 120;    // px

    gsap.set(cards, {
      opacity: 1,
      rotateX: prefersReduced ? 0 : -6,
      xPercent: -50,                       // <-- centers card (replaces CSS translateX)
      x: (i: number) => prefersReduced ? 0 : (i - (n - 1) / 2) * spreadX,
      y: (i: number) => prefersReduced ? (-i * 64) : (baseY + i * spreadY),
      transformOrigin: "50% 100%",
    });

    if (prefersReduced) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=1400",
        scrub: 0.35,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true, // uncomment to debug
      },
    });

    // Animate TO the tidy stack
    tl.to(cards, {
      rotateX: 0,
      x: 0,
      y: (i: number) => -i * 64,   // final spacing
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.inOut",
    }).to(cards, {
      y: (i: number) => -i * 56,   // tiny settle
      duration: 0.5,
      ease: "power2.out",
    });
  }, sectionRef); // <- scope to this section so StrictMode/unmounts are safe

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="skills-stack-section">
      <div className="skills-intro-col">
        <span className="eyebrow">Skills & Expertise</span>
        <h2 className="skills-title">
          My skills that shine,<br/>what I specialize in
        </h2>
        <p className="skills-sub">
          A quick tour of how I think and build — each card is a habit I bring to product teams.
        </p>
      </div>


{(!skills || skills.length === 0) && (
  <p style={{color:"#fff"}}>No skills data found.</p>
)}
      <div className="skills-stage">
        {skills.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => { cardsRef.current[i] = el as HTMLDivElement; }}
            className="skill-card"
          >
            <div className="skill-index">{s.index}</div>
            <div className="skill-body">
              <h3 className="skill-title">{s.title}</h3>
              <p className="skill-line1">{s.line1}</p>
              <p className="skill-line2">{s.line2}</p>
              <ul className="skill-tags">
                {s.tags.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
