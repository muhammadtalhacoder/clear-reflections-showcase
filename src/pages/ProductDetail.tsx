import { useParams, Link, useNavigate } from "react-router-dom";
import { mirrors, categoryLabels, materialLabels } from "@/data/mirrors";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShoppingBag, 
  Heart, 
  Share2, 
  Check,
  Truck,
  Shield,
  RotateCcw,
  Ruler,
  Download,
  Star
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const mirror = mirrors.find((m) => m.id === id);
  const currentIndex = mirrors.findIndex((m) => m.id === id);
  const prevMirror = currentIndex > 0 ? mirrors[currentIndex - 1] : null;
  const nextMirror = currentIndex < mirrors.length - 1 ? mirrors[currentIndex + 1] : null;

  // Related mirrors (same category, excluding current)
  const relatedMirrors = mirrors
    .filter((m) => m.category === mirror?.category && m.id !== id)
    .slice(0, 3);

  if (!mirror) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Mirror Not Found</h1>
          <p className="text-muted-foreground mb-6">The mirror you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="btn-premium text-accent-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${mirror.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: isWishlisted 
        ? `${mirror.name} removed from your wishlist.`
        : `${mirror.name} added to your wishlist.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Product link has been copied to clipboard.",
    });
  };

  const handleDownloadSpecs = () => {
    const content = `
CLEAR REFLECTIONS - PRODUCT SPECIFICATIONS
==========================================

${mirror.name.toUpperCase()}
-------------------------------------

Description:
${mirror.description}

Category: ${categoryLabels[mirror.category]}
Material: ${materialLabels[mirror.material]}
Dimensions: ${mirror.dimensions}
Price: $${mirror.price}

Features:
${mirror.features.map((f) => `• ${f}`).join("\n")}

---
INSTALLATION GUIDE:
1. Choose a wall location at eye level
2. Mark the hanging point with a pencil
3. Install appropriate wall anchors
4. Hang mirror securely and level

CARE INSTRUCTIONS:
• Clean with a soft, lint-free cloth
• Use glass cleaner sparingly
• Avoid harsh chemicals
• Handle with care during cleaning

WARRANTY INFORMATION:
This product comes with a 5-year warranty covering:
• Manufacturing defects
• Frame integrity
• Mirror surface quality

---
Contact Clear Reflections:
Email: info@clearreflections.com
Phone: +1 (555) 123-4567
Address: 123 Mirror Boulevard, Crystal City, NY 10001

Thank you for choosing Clear Reflections!
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${mirror.id}-${mirror.name.toLowerCase().replace(/\s+/g, "-")}-specifications.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container-custom py-6">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#categories" className="hover:text-primary transition-colors">Collection</Link>
            <span>/</span>
            <span className="text-foreground">{mirror.name}</span>
          </motion.nav>
        </div>

        {/* Product Section */}
        <section className="container-custom pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-elegant">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={mirror.image}
                  alt={mirror.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="px-4 py-2 bg-accent/90 backdrop-blur-sm text-accent-foreground text-sm font-semibold rounded-full capitalize">
                  {categoryLabels[mirror.category]}
                </span>
                <span className="px-4 py-2 bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium rounded-full capitalize">
                  {materialLabels[mirror.material]}
                </span>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {prevMirror && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(`/product/${prevMirror.id}`)}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                )}
                {nextMirror && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(`/product/${nextMirror.id}`)}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(48 reviews)</span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {mirror.name}
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {mirror.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Starting at</span>
                <div className="text-4xl md:text-5xl font-serif text-gradient-gold font-semibold">
                  ${mirror.price}
                </div>
              </div>

              {/* Dimensions */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-secondary/50 rounded-xl">
                <Ruler className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Dimensions: {mirror.dimensions}</span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-foreground/80 mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary" />
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {mirror.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 btn-premium text-accent-foreground py-6 text-base font-medium"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWishlist}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                    isWishlisted 
                      ? "bg-destructive text-destructive-foreground" 
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="w-14 h-14 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Download Specs */}
              <button
                onClick={handleDownloadSpecs}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium link-underline">Download Full Specifications</span>
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                {[
                  { icon: Truck, label: "Free Shipping", desc: "On orders $300+" },
                  { icon: Shield, label: "5-Year Warranty", desc: "Full coverage" },
                  { icon: RotateCcw, label: "Easy Returns", desc: "30-day policy" },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <badge.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{badge.label}</div>
                    <div className="text-xs text-muted-foreground">{badge.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedMirrors.length > 0 && (
          <section className="container-custom pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-8">
                You May Also <span className="text-gradient-gold">Like</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedMirrors.map((related, index) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Link
                      to={`/product/${related.id}`}
                      className="block bg-gradient-card rounded-2xl overflow-hidden border border-border/50 group"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                          {related.name}
                        </h3>
                        <div className="text-xl font-serif text-gradient-gold font-semibold mt-2">
                          ${related.price}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
