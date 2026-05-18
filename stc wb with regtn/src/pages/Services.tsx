import { motion } from 'motion/react';
import { Wifi, Music, Users, Cake, ShieldCheck, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Wifi, title: 'High-Speed WiFi', desc: 'Complimentary fiber-optic connection for our remote workers and students.' },
    { icon: Music, title: 'Live Jazz Nights', desc: 'Every Friday and Saturday evening from 19:00 featuring local artists.' },
    { icon: Users, title: 'Private Bookings', desc: 'Host your meetings, celebrations, or workshops in our exclusive upper lounge.' },
    { icon: Cake, title: 'Artisan Bakery', desc: 'Freshly baked croissants, sourdough, and seasonal cakes delivered every morning.' },
    { icon: ShieldCheck, title: 'Ethical Sourcing', desc: 'Direct trade relationships that ensure farmers get 20% above fair trade prices.' },
    { icon: MapPin, title: 'Global Tasting', desc: 'Monthly workshops exploring flavor notes from different regions worldwide.' },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-coffee-dark mb-6 tracking-tighter"
          >
            Our <span className="italic font-normal text-coffee-gold">Amenities</span>
          </motion.h1>
          <p className="text-xl text-coffee-dark/60 max-w-2xl mx-auto leading-relaxed">
            More than just coffee, we provide an environment designed for comfort, productivity, and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] border border-coffee-light/10 shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-coffee-cream flex items-center justify-center mb-8 group-hover:bg-coffee-gold group-hover:text-coffee-dark transition-all">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-4">{service.title}</h3>
              <p className="text-coffee-dark/50 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-coffee-cream py-32 border-y border-coffee-light/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark mb-12">Looking to Reserve a Table?</h2>
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="flex-1 text-center border-r border-coffee-light/10 last:border-0 p-4">
                <h4 className="text-xs uppercase tracking-widest font-bold text-coffee-gold mb-2">Monday - Friday</h4>
                <p className="text-2xl font-serif font-bold">7AM - 9PM</p>
              </div>
              <div className="flex-1 text-center border-r border-coffee-light/10 last:border-0 p-4">
                <h4 className="text-xs uppercase tracking-widest font-bold text-coffee-gold mb-2">Weekends</h4>
                <p className="text-2xl font-serif font-bold">8AM - 10PM</p>
              </div>
            </div>
            <button className="bg-coffee-dark text-coffee-cream px-12 py-5 rounded-full text-lg font-medium hover:bg-coffee-gold transition-colors shadow-lg">
              Check Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
