// components/SkillsSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassSkillCard from './GlassSkillCard';
import './skills.css'; // assuming styles are here

const skills = [
  {
    number: '01',
    title: 'UX Design',
    description:
      'Solving user problems with intuitive, user-first solutions using Figma, prototyping, and research.',
  },
  {
    number: '02',
    title: 'Visual Design',
    description:
      'Designing elegant, branded interfaces through type, color, layout, and motion.',
  },
  {
    number: '03',
    title: 'Graphic Design',
    description:
      'Certified in Adobe Photoshop and Illustrator. I cultivated my visual skills across branding, identity, and illustration.',
  },
  {
    number: '04',
    title: 'Design Systems',
    description:
      "I have experience in managing and building Design Systems — components, tokens, docs — from scratch and at scale.",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section className="skills-sticky-container" ref={ref}>
      {/* LEFT CONTENT */}
      <div className="skills-left">
        <div className="section-label">Skills & Expertise</div>
        <h2 className="skills-title">
          My Skills that Shine,
          <br />
          What I Specialize in
        </h2>
        <a href="/about" className="more-button">
          More about me
        </a>
      </div>

      {/* STACKED CARDS */}
      <div className="skills-right">
        {skills.map((skill, i) => {
          const offsetY = useTransform(scrollYProgress, [0, 1], [i * 60, 0]);
          const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0]);

          return (
            <motion.div
              key={i}
              className="stacked-card-wrapper"
              style={{ y: offsetY, opacity, zIndex: skills.length - i }}
            >
              <GlassSkillCard {...skill} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
