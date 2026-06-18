import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Creative Color Palette Generator',
  description: 'Generate unique and harmonious color palettes for designers, artists, and hobbyists.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/generate-palette">Generate Palette</Link>
            </li>
            <li>
              <Link href="/saved-palettes">Saved Palettes</Link>
            </li>
            <li>
              <Link href="/color-theory-guide">Color Theory Guide</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
