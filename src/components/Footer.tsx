import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  products: [
    { label: "Drawing Room", href: "#categories" },
    { label: "Bathroom", href: "#categories" },
    { label: "Dressing", href: "#categories" },
    { label: "Bedroom", href: "#categories" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
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
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">CR</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-lg">Clear Reflections</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Premium mirrors for every space. Crafting elegance and quality since 2010. 
              Transform your home with our exquisite collection.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">123 Mirror Boulevard, Crystal City, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+15551234567" className="text-sm hover:text-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@clearreflections.com" className="text-sm hover:text-accent transition-colors">
                  info@clearreflections.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
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
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Clear Reflections. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
