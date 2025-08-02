'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassSkillCard from "@/components/GlassSkillCard";

const skills = [
  {
    number: "01",
    title: "UX Design",
    description: "Solving user problems with intuitive, user-first solutions using Figma, prototyping, and research.",
  },
  {
    number: "02",
    title: "Visual Design",
    description: "Designing elegant, branded interfaces through type, color, layout, and motion.",
  },
  {
    number: "03",
    title: "Front-End Development",
    description: "Using HTML, CSS, and React/Next.js to bring designs to life in accessible, scalable code.",
  },
];

export default function StackingSkills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <section ref={ref} className="stacking-section">
      {/* LEFT TEXT */}
      <div className="skills-label">
        <div className="section-label">Skills & Expertise</div>
        <h2>
          My Skills that Shine,<br />
          What I Specialize in
        </h2>
        <a href="/about" className="more-button">More about me</a>
      </div>

      {/* RIGHT STACKING CARDS */}
      <div className="stacking-wrapper">
        {skills.map((skill, index) => {
          const speed = 300;
          const y = useTransform(scrollYProgress, [0, 1.0], [0, -index * 60]);

          return (
            <motion.div
              key={skill.number}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                y,
                width: "100%",
                zIndex: skills.length - index,
              }}
            >
              <GlassSkillCard {...skill} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}