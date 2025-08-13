'use client';

import PlayHero from "@/components/PlayHero";

type Lab = {
  id: string;
  title: string;
  blurb: string;
  cover: string;
  tags: string[];
  live: string;
  code?: string; 
};

const labs: Lab[] = [
  {
    id: "masking-ease",
    title: "Masking Ease Curve",
    blurb: "Micro-interaction study for image masking feedback.",
    cover: "/play/masking-ease.png",
    tags: ["UI", "Motion"],
    live: "https://example.com/demo1",
    code: "https://github.com/your/repo1",
  },
  {
    id: "token-visualizer",
    title: "Token Visualizer",
    blurb: "A tiny tool to preview color/typography tokens in context.",
    cover: "/play/tokens.png",
    tags: ["Systems", "Tooling"],
    live: "https://example.com/demo2"
  },
  {
    id: "glass-cta",
    title: "Glass CTA Hover",
    blurb: "Frosted hover that lifts focus without stealing attention.",
    cover: "/play/glass-cta.png",
    tags: ["UI"],
    live: "https://example.com/demo3",
    code: "https://github.com/your/repo3",
  }
];

export default function PlayPage() {
  return (
    <main className="container play">
      {/* Play hero with SVG illustration */}
      <PlayHero />

      <section className="labs-grid">
  {labs.map((lab) => (
    <article key={lab.id} className="lab-card">
      <a className="lab-media" href={lab.live} target="_blank" rel="noreferrer">
        <img src={lab.cover} alt={lab.title} />
        <div className="lab-overlay"><span>Click to view →</span></div>
      </a>

      <div className="lab-meta">
        <h3>{lab.title}</h3>
        <p>{lab.blurb}</p>

        <ul className="pill-list small">
          {lab.tags.map(t => <li key={t}>{t}</li>)}
        </ul>

        <div className="lab-actions">
          <a
            className="btn-live"
            href={lab.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live demo of ${lab.title} (opens in a new tab)`}
          >
            Live <span aria-hidden="true">↗</span>
          </a>

          {lab.code && (
            <a
              className="btn-code"
              href={lab.code}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open source code for ${lab.title} (opens in a new tab)`}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  ))}
</section>
</main>
  );
}
