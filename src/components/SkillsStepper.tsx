'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skillsData';

const appear = {
  initial: { opacity: 0, y: 24, scale: 0.98, filter: 'blur(2px)' },
  inView:  { opacity: 1, y: 0,  scale: 1.0,  filter: 'blur(0px)', transition: { duration: 0.45, ease: 'easeOut' } }
};

export default function SkillsStepper() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  return (
    <section ref={sectionRef} className="skills-stepper">
      <div className="stepper-left">
        <span className="eyebrow">Skills &amp; Expertise</span>
        <h2 className="skills-title">My skills that shine,<br/>what I specialize in</h2>
        <p className="skills-sub">
          How I think and build—each card is a habit I bring to product teams.
        </p>

        {/* progress rail */}
        <div className="rail">
          <motion.div className="rail-fill" style={{ scaleY: scrollYProgress }} />
        </div>
      </div>

      <div className="stepper-right">
        <div className="sticky-col">
  {skills.map((s) => (
    <div key={s.id} className="skill-row">
      <div className="skill-idx">{s.index}</div>

      <motion.article
        className="skill-card2"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.45 }}
        whileHover={{ y: -4, scale: 1.01 }}
      >
        {/* remove the old <div className="skill-index"> inside the card */}
        <div className="skill-body">
          <h3 className="skill-title">{s.title}</h3>
          <p className="skill-line1">{s.line1}</p>
          <p className="skill-line2">{s.line2}</p>
          <ul className="skill-tags">
            {s.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </motion.article>
    </div>
  ))}
</div>
</div>
    </section>
  );
}
