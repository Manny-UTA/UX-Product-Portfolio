'use client';

export default function PlayHero() {
  return (
    <header className="play-hero">
      <img
        src="/Playground.png"
        alt="Play badge — side coding and design projects"
        className="play-hero-badge"
      />
      <div className="play-hero-text">
        <h1 className="about-title">Playground</h1>
        <p className="about-sub">
          Side coding & design projects — fast experiments, micro-interactions, tiny tools.
        </p>
      </div>
    </header>
  );
}

/** Inline SVG badge – playful but clean */
function PlayBadge() {
  return (
    <svg
      viewBox="0 0 320 320"
      width="320"
      height="320"
      className="play-badge"
      role="img"
    >
      <defs>
        <radialGradient id="pbGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(180,160,255,.55)" />
          <stop offset="70%" stopColor="rgba(120,100,220,.25)" />
          <stop offset="100%" stopColor="rgba(40,30,90,0)" />
        </radialGradient>
      </defs>

      {/* soft glow */}
      <circle cx="160" cy="160" r="150" fill="url(#pbGlow)" />

      {/* outer ring */}
      <circle cx="160" cy="160" r="136"
        fill="rgba(35,30,60,.45)"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="2"
      />

      {/* dotted orbit */}
      <circle
        cx="160" cy="160" r="118"
        fill="none"
        stroke="rgba(255,255,255,.2)"
        strokeWidth="2"
        strokeDasharray="3 8"
      />

      {/* little doodles around */}
      <g fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="3" strokeLinecap="round">
        {/* star */}
        <path d="M268 88 l6 10 l12 2 l-9 7 l2 12 l-11 -6 l-11 6 l2 -12 l-9 -7 l12 -2 z" />
        {/* sparkles */}
        <path d="M68 86 l6 -8 M62 78 l8 6" />
        <path d="M244 248 l8 6 M250 242 l6 8" />
      </g>

      {/* center “friend group” (simple shapes holding hands) */}
      <g className="play-badge__friends">
        {/* left bean */}
        <g transform="translate(95,160)">
          <circle cx="-28" cy="-8" r="16" fill="#B7A6FF" />
          <circle cx="-31" cy="-12" r="2.5" fill="#1a132e"/>
          <circle cx="-21" cy="-12" r="2.5" fill="#1a132e"/>
          <path d="M-33 -3 q7 6 15 0" stroke="#1a132e" strokeWidth="2.2" fill="none"/>
          <line x1="-12" y1="-6" x2="8" y2="-6" stroke="#B7A6FF" strokeWidth="6" strokeLinecap="round"/>
        </g>

        {/* middle marshmallow */}
        <g transform="translate(160,160)">
          <rect x="-22" y="-22" width="44" height="44" rx="14" fill="#CFC6FF"/>
          <circle cx="-10" cy="-6" r="2.6" fill="#1a132e"/>
          <circle cx="10" cy="-6" r="2.6" fill="#1a132e"/>
          <path d="M-10 5 q10 8 20 0" stroke="#1a132e" strokeWidth="2.4" fill="none"/>
          <line x1="-40" y1="-6" x2="-22" y2="-6" stroke="#CFC6FF" strokeWidth="6" strokeLinecap="round"/>
          <line x1="22" y1="-6" x2="40" y2="-6" stroke="#CFC6FF" strokeWidth="6" strokeLinecap="round"/>
        </g>

        {/* right triangle friend */}
        <g transform="translate(225,160)">
          <path d="M0,-24 L20,18 L-20,18 Z" fill="#B7A6FF"/>
          <circle cx="-6" cy="-6" r="2.4" fill="#1a132e"/>
          <circle cx="6" cy="-6" r="2.4" fill="#1a132e"/>
          <path d="M-8 4 q8 7 16 0" stroke="#1a132e" strokeWidth="2.2" fill="none"/>
          <line x1="-38" y1="-6" x2="-20" y2="-6" stroke="#B7A6FF" strokeWidth="6" strokeLinecap="round"/>
        </g>
      </g>

      {/* ring text: PLAY • CREATE • EXPERIMENT • */}
      <defs>
        <path id="pbTextPath" d="M160,160 m-112,0 a112,112 0 1,1 224,0 a112,112 0 1,1 -224,0" />
      </defs>
      <text fontSize="16" fill="rgba(255,255,255,.9)" fontFamily="var(--font-display, ui-sans-serif)">
        <textPath href="#pbTextPath" startOffset="0%">
          P L A Y • C R E A T E • E X P E R I M E N T • P L A Y • C R E A T E •
        </textPath>
      </text>
    </svg>
  );
}
