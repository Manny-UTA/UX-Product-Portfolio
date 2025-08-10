// components/Header.tsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link href={href} className={isActive ? "active" : undefined}>
        {children}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <header className="glass-nav">
      <div className="profile">
        <img src="/avatar.jpg" alt="Manny Arellano Jr" className="avatar" />
        <div className="name-role">
          <span className="name">Manny Arellano Jr</span>
          <span className="role">Designer & Engineer</span>
        </div>
      </div>
      <ul className="nav-links">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/work">Portfolio</NavLink>
        <NavLink href="/about">About</NavLink>
      </ul>
    </header>
  );
}
