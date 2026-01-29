import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#categories", label: "Collection" },
  { href: "/#location", label: "Showroom" },
  { href: "/#contact", label: "Contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/" && href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    
    const hash = href.replace("/#", "#").replace("/", "");
    if (hash.startsWith("#")) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-elegant py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center shadow-gold"
            >
              <span className="text-accent-foreground font-serif font-bold text-xl">CR</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-xl text-foreground leading-tight tracking-wide">
                Clear Reflections
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Premium Mirrors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors link-underline"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => handleNavClick("/#contact")}
                className="btn-premium gap-2 px-6 text-accent-foreground font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Book Consultation
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-4 border-t border-border/30">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-foreground font-medium py-2 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <Button
                  onClick={() => handleNavClick("/#contact")}
                  className="mt-4 btn-premium text-accent-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
