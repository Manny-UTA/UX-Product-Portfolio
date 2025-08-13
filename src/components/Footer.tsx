// components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left: meta */}
        <div className="footer-meta">
          <p className="footer-copy">
            © {new Date().getFullYear()} Manny Arellano Jr — Website coded by me ˶ᵔ ᵕ ᵔ˶
          </p>
          <p className="footer-tagline">
            Handcrafted with coffee and questionable playlists ♡
          </p>
        </div>

        {/* Middle: connect */}
        <div className="footer-connect" aria-label="Contact links">
          <span className="footer-heading">Let’s Connect!</span>
          <div className="footer-icons">
            <a href="/portfolio" aria-label="Work">💼</a>
            <a href="mailto:mannyarellanojr17@gmail.com" aria-label="Email">📧</a>
            <a href="https://cal.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Book time">🐙</a>
          </div>
        </div>

        {/* Right: nav */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-links">
            <li><Link href="/portfolio">Work</Link></li>
            <li><a href="https://dribbble.com/your-handle" target="_blank" rel="noopener noreferrer">Play</a></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
