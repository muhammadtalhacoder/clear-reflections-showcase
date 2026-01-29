import { Award, Truck, Shield, Palette } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Each mirror is crafted with the finest materials and attention to detail.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Bespoke mirror solutions tailored to your unique style and space.",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    description: "Professional packaging and delivery to ensure your mirror arrives perfectly.",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "All our mirrors come with a comprehensive warranty for peace of mind.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Crafting Reflections of{" "}
            <span className="text-gradient-gold">Perfection</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Clear Reflections has been the trusted name in premium mirrors since 2010. 
            We believe every mirror should be more than functional — it should be 
            a masterpiece that transforms your space.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
              <span className="text-sm text-foreground/80">Est. 2010</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded by master craftsmen with a passion for excellence, Clear Reflections 
              began as a small workshop dedicated to creating mirrors that capture light 
              and beauty in extraordinary ways.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Today, we've grown into a premier destination for homeowners, interior designers, 
              and businesses seeking exceptional mirrors. From classic baroque designs to 
              cutting-edge smart mirrors, our collection spans every style.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every piece is carefully selected or custom-crafted to meet our exacting standards. 
              We source materials globally and work with skilled artisans to bring you mirrors 
              that will be treasured for generations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Unique Designs" },
              { value: "50+", label: "Expert Artisans" },
              { value: "2K+", label: "Happy Customers" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-card rounded-2xl p-8 border border-border/50 card-hover"
              >
                <div className="text-4xl md:text-5xl font-serif text-gradient-gold font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              className="bg-gradient-card rounded-2xl p-8 border border-border/50 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300"
              >
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </motion.div>
              <h4 className="font-serif text-xl text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
