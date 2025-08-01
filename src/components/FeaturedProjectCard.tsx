import Image from "next/image";
import Link from "next/link";

type FeaturedProjectProps = {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  imgAlt?: string;
};

export default function FeaturedProjectCard({
  title,
  description,
  href,
  imgSrc,
  imgAlt = "project preview",
}: FeaturedProjectProps) {
  return (
    <div className="featured-project">
      <div className="glass-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className="cta-button small">
          View Case Study
        </Link>
      </div>
      <div className="project-image">
        <Image src={imgSrc} alt={imgAlt} width={600} height={360} />
      </div>
    </div>
  );
}
