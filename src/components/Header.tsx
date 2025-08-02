// components/Header.tsx
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
        <li><a href="/">Home</a></li>
        <li><a href="/work">Portfolio</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </header>
  );
}
