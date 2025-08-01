import Link from "next/link";

export default function ProjectGrid() {
  return (
    <section className="projects-grid">
      <Link href="/work/subtracker" className="glass-button">
        <div>
          <h3>SubTracker</h3>
          <p>Keep track of recurring charges with one prompt.</p>
          <div className="launch">→</div>
        </div>
      </Link>
    </section>
  );
}
