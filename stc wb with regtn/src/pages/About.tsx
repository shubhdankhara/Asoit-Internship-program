import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-coffee-dark mb-8 tracking-tighter">
              Crafted with <br />
              <span className="italic font-normal text-coffee-gold">Passion</span>
            </h1>
            <p className="text-xl text-coffee-dark/70 mb-8 leading-relaxed">
              At Caffe, we believe that coffee is more than just a beverage—it's a ritual. Our journey began in 1998 with a simple goal: to serve the perfect cup in a space that feels like home.
            </p>
            <p className="text-lg text-coffee-dark/60 mb-12 leading-relaxed">
              Every bean is ethically sourced from sustainable farms in Ethiopia, Colombia, and Brazil. Our master roasters work in small batches to preserve the unique flavor profiles of each origin.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-coffee-light/10 pt-12">
              <div>
                <h4 className="text-4xl font-serif font-bold text-coffee-gold">25+</h4>
                <p className="text-xs uppercase tracking-widest text-coffee-dark/40 font-bold mt-2">Years of Craft</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-coffee-gold">12</h4>
                <p className="text-xs uppercase tracking-widest text-coffee-dark/40 font-bold mt-2">Global Origins</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-coffee-gold">150k</h4>
                <p className="text-xs uppercase tracking-widest text-coffee-dark/40 font-bold mt-2">Happy Souls</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-6"
          >
            <img src="https://picsum.photos/seed/about1/600/800" className="rounded-3xl shadow-xl mt-12" alt="Cafe Life" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/about2/600/800" className="rounded-3xl shadow-xl mb-12" alt="Coffee Pour" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      <section className="bg-coffee-dark py-32 mt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-coffee-cream mb-12 italic">"Coffee is a language in itself"</h2>
          <div className="w-24 h-1 bg-coffee-gold mx-auto" />
        </div>
      </section>
    </div>
  );
}
