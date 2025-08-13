'use client';

type Hat = {
  id: string;
  title: string;
  blurb: string;
  image: string;     // /public path
  align?: 'left' | 'right'; // large-screen image position
};

const HATS: Hat[] = [
  {
    id: 'community',
    title: 'Community Builder',
    blurb:
      'ColorStack organizer & meetup wrangler. I love creating spaces where designers and engineers swap ideas and help each other ship.',
    image: '/hats/community.jpg',
    align: 'left',
  },
  {
    id: 'antiques',
    title: 'Antique Enthusiast',
    blurb:
      'Weekends = wandering dusty aisles, hunting for little pieces of design history. It keeps my eye sharp for form, type, and craft.',
    image: '/hats/apple-worm.png',
    align: 'right',
  },
  {
    id: 'writer',
    title: 'Writing Tiny Essays',
    blurb:
      'Short notes on systems, accessibility, and design tokens. Helps me clarify thinking and share what I’m learning.',
    image: '/hats/writing.jpg',
    align: 'left',
  },
];

export default function OtherHats() {
  return (
    <section className="hats-section container">
      <header className="hats-head">
        <h2 className="hats-title">
          My Other Hats <span className="hat-emoji">🎩</span>
        </h2>
        <p className="hats-sub">
          Stuff that fuels the work: community, collecting, writing.
        </p>
      </header>

      <div className="hats-list">
        {HATS.map((hat, i) => (
          <article
            key={hat.id}
            className={`hat-card glass-block ${hat.align === 'right' ? 'img-right' : 'img-left'}`}
          >
            <div className="hat-media">
              <img src={hat.image} alt={hat.title} />
            </div>

            <div className="hat-copy">
              <h3>{hat.title}</h3>
              <p>{hat.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
