import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Mirror Introduction" },
  { href: "#categories", label: "Mirror Categories" },
  { href: "#location", label: "Shop Location" },
  { href: "#contact", label: "Contact Us" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-serif font-bold text-lg">CR</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-semibold text-lg leading-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                Clear Reflections
              </span>
              <span className={`text-xs tracking-widest uppercase transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}>
                Premium Mirrors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className={`gap-2 ${
                isScrolled
                  ? "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-elegant animate-slide-up">
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-foreground font-medium py-2 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                onClick={() => handleNavClick("#contact")}
                className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
