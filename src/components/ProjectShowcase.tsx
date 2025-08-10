// sections/ProjectShowcase.tsx
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="project-section">
      <div className="projects-inner">
      <div className="projects-grid">
        <FeaturedProjectCard
          size="large"
          company="Adobe"
          year={2024}
          title="Remove Objects Feature"
          oneLiner="Increased engagement by 15% through a Gen-AI remove objects feature"
          metric="+15% Engagement"
          href="/adobe-remove-objects"
          cover="/projectdemo1.avif"
          tags={["AI", "Image Editing", "UX"]}
        />
        <FeaturedProjectCard
          size="small"
          company="Adobe"
          year={2024}
          title="Optimized Image Masking"
          oneLiner="Refined selection experience for faster image masking"
          href="/adobe-image-masking"
          cover="/projectdemo2.jpg"
          tags={["Masking", "UI", "Performance"]}
        />
        <FeaturedProjectCard
          size="small"
          company="Startup X"
          year={2023}
          title="Subscription Tracker"
          oneLiner="Track and optimize your recurring expenses"
          href="/subtracker"
          cover="/projectdemo3.jpg"
          tags={["Finance", "SaaS", "Mobile"]}
        />
        </div>

        <div className="projects-feature">
  <FeaturedProjectCard
    variant="wide"
    size="large"
    company="Acme Health"
    year={2023}
    title="Care Plan Builder"
    oneLiner="Reduced setup time 42% with a composable workflow and tokens."
    metric="Setup −42%"
    href="/work/care-plan-builder"
    cover="/projectdemo3.jpg"
    tags={["Workflow","Design System","React"]}
  />
</div>

      </div>
    </section>
  );
}