'use client';

import Link from 'next/link';
import OtherHats from '@/components/OtherHats';



export default function AboutPage() {
  return (
    <main className="container about">
      {/* HERO */}
      <section className="about-hero">
        {/* Swinging ID badge */}
<figure className="id-badge-frame">
<figure className="badge-swing" aria-label="Photo ID badge">
  {/* outer = entry swing, inner = idle bob */}
  <div className="badge-bob">
    <img
      src="/namebadge.png"
      alt="Manny Arellano Jr ID badge"
      className="badge-img"
      width={360}
      height={720}
      loading="eager"
    />
  </div>
</figure>
</figure>

        {/* Intro copy */}
        <div className="about-intro">
          <h1 className="about-title">Hey, I’m Manny — Designer & Engineer</h1>
          <p className="about-sub">
<p>
I’ve always been the one who can fix, build, and create — whether it’s a piece of code, a product idea, or a design system. Friends sometimes call me “Handy Manny” as a joke (yes, like the Disney cartoon), and honestly, they’re not wrong.
</p>
<p>
As a first-generation Hispanic student, I once put my artistic side on hold under the weight of expectations. What I didn’t know then was how deeply design shapes our everyday lives, especially as technology advances.
</p>
<p>
When I discovered <strong>Product Design</strong> in college, it clicked — this was the perfect blend of creativity, problem-solving, and full-stack fundamentals. Now, I work in that sweet spot between design and engineering, building ideas that are both beautiful and functional, and empowering other first-gen Hispanic students to see the impact they can make in tech.
</p></p>

          <div className="about-quick">
            <span className="chip">Design Systems</span>
            <span className="chip">UI Therapist 🎨</span>
            <span className="chip">React/Next</span>
            <span className="chip">Accessibility Advocate</span>
            <span className="chip">Matcha Over Coffee 🍵</span>
            <span className="chip">Figma ↔ Code Wizard</span>
            <span className="chip">First-Gen Advocate ✊</span>
          </div>
        </div>
      </section>


      <section className="about-grid2">
  {/* Experience – timeline */}
  <article className="panel panel--tall">
    <h2 className="panel-title">Experience</h2>
    <ol className="tl">
      <li className="tl-item">
        <div className="tl-dot" />
        <div className="tl-body">
          <div className="tl-top">
            <span className="tl-role">Adobe — Product Designer (Gen-AI)</span>
            <span className="tl-meta">2024–Now</span>
          </div>
          <p className="tl-note">Led Gen-AI features; +15% engagement lift</p>
        </div>
      </li>

      <li className="tl-item">
        <div className="tl-dot" />
        <div className="tl-body">
          <div className="tl-top">
            <span className="tl-role">Startup X — Designer/Engineer</span>
            <span className="tl-meta">2023</span>
          </div>
          <p className="tl-note">Subscriptions tool — design + front-end</p>
        </div>
      </li>

      <li className="tl-item">
        <div className="tl-dot" />
        <div className="tl-body">
          <div className="tl-top">
            <span className="tl-role">Traphene Hickman Library</span>
            <span className="tl-meta">2024</span>
          </div>
          <p className="tl-note">Web apps, visual design, systems</p>
        </div>
      </li>
    </ol>
  </article>

  {/* Education – compact */}
  <article className="panel">
    <h2 className="panel-title">Education</h2>
    <div className="edu">
      <div className="edu-row">
        <span className="edu-left">B.S.</span>
        <span className="edu-right">Technology Design — Focus in Product Design & Full-Stack Development (current)</span>
      </div>
    </div>

    <h3 className="panel-sub">Toolkit</h3>
    <div className="chip-grid">
      <span className="chip">UX / UI</span>
      <span className="chip">Design Systems</span>
      <span className="chip">Accessibility</span>
      <span className="chip">Prototyping</span>
      <span className="chip">React / Next</span>
      <span className="chip">TypeScript</span>
      <span className="chip">Figma</span>
      <span className="chip">GSAP / Framer</span>
      <span className="chip">HTML / CSS</span>
      <span className="chip">JavaScript</span>
      <span className="chip">mySQL</span>
      <span className="chip">Python</span>
    </div>
  </article>
</section>

<OtherHats />


      {/* CTA */}
      <section className="about-cta glass-block">
        <h2>Open to collaborations</h2>
        <p>Have a tricky workflow or system-y problem? I’m game.</p>
        <div className="cta-row">
          <Link className="btn-primary" href="https://www.linkedin.com/in/your-handle" target="_blank">
            Let’s talk
          </Link>
          <Link className="btn-ghost" href="/">{/* home = case studies list */}
            See case studies
          </Link>
        </div>
      </section>
    </main>
  );
}
