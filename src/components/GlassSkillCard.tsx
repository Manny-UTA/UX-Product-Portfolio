// components/GlassSkillCard.tsx
import React from "react";

type GlassSkillCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function GlassSkillCard({ number, title, description }: GlassSkillCardProps) {
  return (
    <div className="glass-skill-card">
      <div className="skill-number">{number}</div>
      <div className="skill-title">{title}</div>
      <div className="skill-description">{description}</div>
    </div>
  );
}
