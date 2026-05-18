import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-coffee-dark mb-6 tracking-tighter"
          >
            Get In <span className="italic font-normal text-coffee-gold">Touch</span>
          </motion.h1>
          <p className="text-xl text-coffee-dark/60 max-w-2xl mx-auto leading-relaxed">
            Visit us in person or reach out for inquiries about events and wholesale partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-coffee-light/10"
          >
            <h2 className="text-3xl font-serif font-bold text-coffee-dark mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-coffee-dark/40 mb-3 ml-2">Your Name</label>
                  <input type="text" className="w-full bg-coffee-cream/50 border border-coffee-light/20 rounded-2xl p-4 focus:outline-none focus:border-coffee-gold transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-coffee-dark/40 mb-3 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-coffee-cream/50 border border-coffee-light/20 rounded-2xl p-4 focus:outline-none focus:border-coffee-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-coffee-dark/40 mb-3 ml-2">Subject</label>
                <select className="w-full bg-coffee-cream/50 border border-coffee-light/20 rounded-2xl p-4 focus:outline-none focus:border-coffee-gold transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Table Reservation</option>
                  <option>Event Hosting</option>
                  <option>Wholesale Coffee</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-coffee-dark/40 mb-3 ml-2">Your Message</label>
                <textarea rows={5} className="w-full bg-coffee-cream/50 border border-coffee-light/20 rounded-2xl p-4 focus:outline-none focus:border-coffee-gold transition-colors resize-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button className="w-full bg-coffee-dark text-white p-5 rounded-2xl text-lg font-bold hover:bg-coffee-gold hover:text-coffee-dark transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-coffee-dark text-white p-12 rounded-[3rem] shadow-xl h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-12 italic">Visit our Roastery</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-coffee-light/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-coffee-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Main Location</h4>
                      <p className="text-coffee-light/60">123 Coffee Street, Artisanal District<br />Ahmedabad, Gujarat 380001</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-coffee-light/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-coffee-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Direct Line</h4>
                      <p className="text-coffee-light/60">+91 79 2650 5000</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-coffee-light/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-coffee-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Support</h4>
                      <p className="text-coffee-light/60">journal@caffe-premium.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-coffee-light/10">
                <div className="flex items-center gap-4 text-coffee-gold font-serif text-xl italic">
                  <MessageSquare className="w-6 h-6" />
                  <span>"Expect a response within 2 hours"</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-32 h-[400px] w-full rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 p-4">
        <img src="https://picsum.photos/seed/map/1920/600" className="w-full h-full object-cover rounded-[3rem]" alt="Map" referrerPolicy="no-referrer" />
      </section>
    </div>
  );
}
