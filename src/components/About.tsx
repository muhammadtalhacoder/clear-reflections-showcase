import { Award, Truck, Shield, Palette } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Each mirror is crafted with the finest materials and attention to detail.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "We offer bespoke mirror solutions tailored to your unique style and space.",
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

export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">About Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Crafting Reflections of{" "}
            <span className="text-gradient-gold">Perfection</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Clear Reflections has been the trusted name in premium mirrors since 2010. 
            We believe that every mirror should be more than just a functional piece — 
            it should be a work of art that transforms your space and reflects your 
            personal style.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
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
              cutting-edge smart mirrors, our collection spans every style and need.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every piece in our showroom is carefully selected or custom-crafted to meet 
              our exacting standards. We source materials globally and work with skilled 
              artisans to bring you mirrors that will be treasured for generations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-6 shadow-elegant hover-lift">
              <div className="text-4xl font-serif text-gradient-gold font-bold mb-2">15+</div>
              <div className="text-foreground font-medium">Years of Excellence</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant hover-lift">
              <div className="text-4xl font-serif text-gradient-gold font-bold mb-2">500+</div>
              <div className="text-foreground font-medium">Unique Designs</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant hover-lift">
              <div className="text-4xl font-serif text-gradient-gold font-bold mb-2">50+</div>
              <div className="text-foreground font-medium">Expert Artisans</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant hover-lift">
              <div className="text-4xl font-serif text-gradient-gold font-bold mb-2">2K+</div>
              <div className="text-foreground font-medium">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-elegant hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
