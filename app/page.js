import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container flex-column flex-center" style={{ minHeight: '80vh', textAlign: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '800px' }}>
        <h1 className="gradient-text">Creative Color Palette Generator</h1>
        <h2>Unlock Your Creativity with Perfect Hues</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '2rem 0' }}>
          Designers, artists, and hobbyists often struggle to find harmonious color combinations.
          Our intuitive tool empowers you to effortlessly generate unique, aesthetically pleasing,
          and coherent color palettes for any project. Say goodbye to guesswork and hello to
          a world of vibrant possibilities!
        </p>
        <div className="flex-center gap-8 flex-wrap" style={{ marginTop: '3rem' }}>
          <Link href="/generate-palette" passHref>
            <button className="gradient-button">Generate New Palette</button>
          </Link>
          <Link href="/saved-palettes" passHref>
            <button className="gradient-button">View Saved Palettes</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
