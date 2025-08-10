// components/FeaturedProjectCard.tsx
'use client';
import Image from "next/image";
import Link from "next/link";

type Props = {
  size?: "large" | "small";
  variant?: "default" | "wide";
  company: string;
  year: number;
  title: string;
  oneLiner: string;
  metric?: string;
  href: string;
  cover: string;   // image URL
  tags?: string[];
};

export default function FeaturedProjectCard({
  size = "small",
  variant = "default", 
  company,
  year,
  title,
  oneLiner,
  metric,
  href,
  cover,
  tags
}: Props) {
  return (
    <article className={`fp-card fp-card--${size} ${variant === "wide" ? "fp-card--wide" : ""}`}>
      <a className="fp-link" href={href} aria-label={`Open case study: ${title}`}>
        <div className="fp-media">
          <img className="fp-img" src={cover} alt={title} />
          {metric && <span className="fp-chip">{metric}</span>}
          <div className="fp-overlay"><span className="fp-cta">CLICK TO VIEW →</span></div>
        </div>

        <div className="fp-meta">
          <p className="fp-eyebrow">{company}, {year} →</p>
          <h3 className="fp-title">{title}</h3>
          <p className="fp-oneline">{oneLiner}</p>
          {tags?.length ? (
            <ul className="fp-tags">{tags.map(t => <li key={t}>{t}</li>)}</ul>
          ) : null}
        </div>
      </a>
    </article>
  );
}

