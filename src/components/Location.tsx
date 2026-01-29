import { MapPin, Clock, Car, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Location = () => {
  return (
    <section id="location" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Find Us</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Visit Our <span className="text-gradient-gold">Showroom</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience our mirrors in person. Our experts are ready to help 
            you find the perfect reflection for your space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-elegant border border-border/50 h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99012492346979!3d40.74844097138964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clear Reflections Showroom Location"
            />
          </motion.div>

          {/* Location Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-card rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Our Address</h3>
                  <address className="text-muted-foreground not-italic leading-relaxed text-sm">
                    123 Mirror Boulevard<br />
                    Crystal City, NY 10001<br />
                    United States
                  </address>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-card rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-foreground mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: "Mon - Fri", hours: "9:00 AM - 7:00 PM" },
                      { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
                      { day: "Sunday", hours: "11:00 AM - 5:00 PM" },
                    ].map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-muted-foreground">
                        <span>{schedule.day}</span>
                        <span className="text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-card rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Parking</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Free parking available. Wheelchair accessible entrance on Mirror Boulevard.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.google.com/maps/dir/?api=1&destination=40.748441,-73.985664"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full btn-premium text-accent-foreground py-4 rounded-xl font-medium"
            >
              Get Directions
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
