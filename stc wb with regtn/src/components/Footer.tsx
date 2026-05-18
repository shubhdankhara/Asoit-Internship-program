import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-3xl font-serif font-bold mb-6 tracking-tight">
              <Coffee className="w-10 h-10 text-coffee-light" />
              <span>Caffe<span className="text-coffee-gold">.</span></span>
            </Link>
            <p className="text-coffee-light/60 max-w-md text-lg leading-relaxed mb-8">
              Experience the finest coffee in an atmosphere crafted for moments of pure indulgence. From bean to cup, we celebrate the ritual of coffee.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-light/20 flex items-center justify-center hover:bg-coffee-gold hover:border-coffee-gold hover:text-coffee-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-light/20 flex items-center justify-center hover:bg-coffee-gold hover:border-coffee-gold hover:text-coffee-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-light/20 flex items-center justify-center hover:bg-coffee-gold hover:border-coffee-gold hover:text-coffee-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6 italic">Quick Links</h4>
            <ul className="space-y-4 text-coffee-light/60">
              <li><Link to="/" className="hover:text-coffee-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-coffee-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-coffee-gold transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-coffee-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6 italic">Opening Hours</h4>
            <ul className="space-y-4 text-coffee-light/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>7:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-light/10 pt-10 text-center text-sm text-coffee-light/40 tracking-widest uppercase">
          <p>© 2026 Caffe Premium Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
