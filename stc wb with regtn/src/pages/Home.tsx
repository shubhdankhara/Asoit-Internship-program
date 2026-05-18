import { motion } from 'motion/react';
import { Coffee, Leaf, Droplets, Flame, ShoppingBag, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const coffeeTypes = [
    { 
      name: 'Espresso', 
      description: 'The foundation of all coffee drinks. Concentrated coffee brewed by forcing hot water through finely-ground beans.',
      recipe: '7-9g coffee, 25-30ml water, 20-30s extraction.',
      variations: ['Ristretto (Short)', 'Lungo (Long)', 'Doppio (Double)']
    },
    { 
      name: 'Americano', 
      description: 'A diluted espresso, providing a similar strength to drip coffee but with a different flavor profile.',
      recipe: '1 shot espresso (30ml), 60-90ml hot water.'
    },
    { 
      name: 'Latte', 
      description: 'Creamy and mild, perfect for those who enjoy a milky brew with a hint of espresso.',
      recipe: '1/3 espresso, 2/3 steamed milk, thin layer of foam.'
    },
    { 
      name: 'Cappuccino', 
      description: 'The classic balance of espresso, steamed milk, and a thick layer of frothed milk.',
      recipe: 'Equal parts espresso, steamed milk, and milk foam.'
    },
    { 
      name: 'Flat White', 
      description: 'Velvety micro-foam poured over a double ristretto for a strong but smooth finish.',
      recipe: 'Double ristretto shot, thin micro-foam (no stiff foam).'
    },
    { 
      name: 'Cortado', 
      description: 'Espresso "cut" with an equal amount of warm milk to reduce the acidity.',
      recipe: '1:1 ratio of espresso and steamed milk.'
    },
    { 
      name: 'Red Eye', 
      description: 'A caffeine punch—regular drip coffee with a shot of espresso added.',
      recipe: '8oz brewed coffee, 1 shot of espresso.'
    },
    { 
      name: 'Cafe Au Lait', 
      description: 'French style—brewed coffee mixed with warm milk.',
      recipe: '1/2 strong brewed coffee, 1/2 scalded milk.'
    },
  ];

  const products = [
    { name: 'House Blend Beans', price: '$24.00', image: 'https://picsum.photos/seed/beans/400/500' },
    { name: 'Ceramic Brew Kit', price: '$85.00', image: 'https://picsum.photos/seed/brew/400/500' },
    { name: 'Ethiopian Single Origin', price: '$28.00', image: 'https://picsum.photos/seed/ethiopia/400/500' },
    { name: 'Artisan Tamper', price: '$45.00', image: 'https://picsum.photos/seed/tamper/400/500' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/cafe/1920/1080" 
            className="w-full h-full object-cover opacity-40"
            alt="Cafe Interior"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-cream via-transparent to-coffee-cream" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-coffee-gold uppercase tracking-[0.3em] font-medium mb-6"
          >
            Since 1998 — Premium Roastery
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-serif font-bold text-coffee-dark mb-8 tracking-tighter"
          >
            The Art of <br />
            <span className="italic font-normal text-coffee-medium">Pure</span> Coffee
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="bg-coffee-dark text-coffee-cream px-10 py-5 rounded-full text-lg font-medium hover:bg-coffee-medium transition-all shadow-xl group">
              Explore Menu <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-coffee-dark text-coffee-dark px-10 py-5 rounded-full text-lg font-medium hover:bg-coffee-dark hover:text-coffee-light transition-all">
              Our Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* 1.1 A Cup of Cappuccino */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/cappuccino/800/1000" 
              alt="Cappuccino Art" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-coffee-gold p-12 rounded-full hidden md:block">
              <Coffee className="w-16 h-16 text-coffee-dark" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-coffee-dark leading-tight">
              A Cup of <span className="italic font-normal text-coffee-gold">Cappuccino</span>
            </h2>
            <p className="text-xl text-coffee-dark/70 mb-8 leading-relaxed">
              Named after the Capuchin friars, the Cappuccino is more than a drink; it's a sensory experience. The perfect Cappuccino is a 1:1:1 ratio of espresso, steamed milk, and deep, velvety foam.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-coffee-light/10">
                <div className="w-12 h-12 rounded-full bg-coffee-cream flex items-center justify-center flex-shrink-0">
                  <Star className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-dark mb-1">Double Espresso Base</h4>
                  <p className="text-coffee-dark/60">Rich, dark notes from roasted Arabica beans.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-coffee-light/10">
                <div className="w-12 h-12 rounded-full bg-coffee-cream flex items-center justify-center flex-shrink-0">
                  <Star className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-dark mb-1">Micro-foam Perfection</h4>
                  <p className="text-coffee-dark/60">Silky smooth texture that holds the latte art.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.2 Coffee Production Procedure */}
      <section className="bg-coffee-dark py-32 text-coffee-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">From Farm to <span className="text-coffee-gold italic font-normal">Cup</span></h2>
            <p className="text-coffee-light/60 max-w-2xl mx-auto text-lg uppercase tracking-widest">The full procedure of coffee excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Cultivation', desc: 'Starting in shaded nurseries, seeds are tended for 3-4 years before the first harvest of cherries.' },
              { icon: Star, title: 'Harvesting', desc: 'Cherries are carefully hand-picked at peak ripeness to ensure uniform flavor quality.' },
              { icon: Droplets, title: 'Processing', desc: 'Removing the pulp via washed (wet) or natural (dry) methods to reveal the green bean.' },
              { icon: Star, title: 'Milling', desc: 'The parchment layer is removed (hulling), and beans are sorted by size and density.' },
              { icon: ArrowRight, title: 'Exporting', desc: 'Green coffee beans are shipped in burlap sacks across the globe to our local roastery.' },
              { icon: Flame, title: 'Roasting', desc: 'Precision heating at 400°F transforms chemical compounds into the coffee we love.' },
              { icon: Coffee, title: 'Grinding', desc: 'Adjusting coarseness perfectly to match the intended brewing method of your choice.' },
              { icon: Star, title: 'Brewing', desc: 'The final extraction—timing and temperature coming together for the perfect cup.' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 border border-coffee-light/10 rounded-3xl hover:bg-coffee-light/5 transition-all group"
              >
                <step.icon className="w-10 h-10 text-coffee-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-bold mb-3">{step.title}</h3>
                <p className="text-coffee-light/50 text-sm leading-relaxed">{step.desc}</p>
                <span className="inline-block mt-6 text-coffee-gold font-mono text-[10px] tracking-tighter">PHASE 0{i+1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.3 Types of Coffee & Recipes */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-coffee-dark">The <span className="text-coffee-gold italic font-normal">Connoisseur's</span> Guide</h2>
          <p className="text-coffee-dark/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Every type of coffee tells a story. Discover your perfect match with our detailed recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coffeeTypes.map((type, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-[3rem] border border-coffee-light/10 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-coffee-cream rounded-bl-[4rem] group-hover:bg-coffee-gold transition-colors flex items-center justify-center">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-coffee-dark mb-4">{type.name}</h3>
              <p className="text-coffee-dark/60 mb-8 max-w-md">{type.description}</p>
              
              <div className="bg-coffee-cream/50 p-6 rounded-2xl border-l-4 border-coffee-gold">
                <span className="text-xs uppercase tracking-widest font-bold text-coffee-gold mb-2 block">The Recipe</span>
                <p className="text-coffee-dark font-medium italic">{type.recipe}</p>
              </div>

              {type.variations && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {type.variations.map((v, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-wider font-bold border border-coffee-dark/10 px-3 py-1 rounded-full text-coffee-dark/40">
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 1.4 Coffee Products */}
      <section className="py-32 bg-coffee-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-4">Artisan <span className="text-coffee-gold italic font-normal">Market</span></h2>
              <p className="text-coffee-dark/50 text-lg uppercase tracking-widest font-medium">Bring the experience home</p>
            </div>
            <button className="flex items-center gap-2 text-coffee-medium font-bold hover:text-coffee-dark transition-colors group">
              View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6 shadow-lg bg-coffee-dark">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-coffee-cream text-coffee-dark w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                <h4 className="text-xl font-serif font-bold text-coffee-dark mb-1 group-hover:text-coffee-gold transition-colors">{product.name}</h4>
                <p className="text-coffee-medium font-bold">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
