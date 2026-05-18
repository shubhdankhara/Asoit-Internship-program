import { Link, useLocation } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-coffee-cream/80 backdrop-blur-md border-b border-coffee-light/20">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-coffee-dark tracking-tight">
          <Coffee className="w-8 h-8 text-coffee-medium" />
          <span>Caffe<span className="text-coffee-gold">.</span></span>
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={clsx(
                    "text-sm font-medium uppercase tracking-widest transition-colors relative py-2",
                    location.pathname === link.path
                      ? "text-coffee-medium"
                      : "text-coffee-dark/60 hover:text-coffee-dark"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-coffee-gold" />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="bg-coffee-dark text-coffee-cream px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-coffee-medium transition-colors"
              >
                Book Table
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
