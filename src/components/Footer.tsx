import { forwardRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Story", href: "/#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  products: [
    { label: "Drawing Room", href: "/#categories" },
    { label: "Bathroom", href: "/#categories" },
    { label: "Dressing", href: "/#categories" },
    { label: "Bedroom", href: "/#categories" },
  ],
  support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "FAQ", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/#", "#");
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Newsletter Section */}
      <div className="bg-gradient-card border-b border-border/30">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Stay <span className="text-gradient-gold">Inspired</span>
              </h3>
              <p className="text-muted-foreground">
                Subscribe for exclusive designs, offers, and inspiration.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-premium px-6 py-3 rounded-xl text-accent-foreground font-medium flex items-center gap-2"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center shadow-gold">
                <span className="text-accent-foreground font-serif font-bold text-xl">CR</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-xl text-foreground">Clear Reflections</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Premium mirrors for every space. Crafting elegance and quality since 2010. 
              Transform your home with our exquisite collection.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">123 Mirror Boulevard, Crystal City, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+15551234567" className="text-sm hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@clearreflections.com" className="text-sm hover:text-primary transition-colors">
                  info@clearreflections.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-foreground mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-foreground mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Clear Reflections. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
