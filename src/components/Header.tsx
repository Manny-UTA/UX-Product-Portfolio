export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <div className="logo">Manny Arellano Jr</div>
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/playground">Playground</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
