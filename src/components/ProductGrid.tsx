import { useState, useMemo } from "react";
import { mirrors, categoryLabels, materialLabels, MirrorCategory, MirrorMaterial } from "@/data/mirrors";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { X, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<MirrorCategory | "all">("all");
  const [activeMaterial, setActiveMaterial] = useState<MirrorMaterial | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories: Array<MirrorCategory | "all"> = ["all", "drawing-room", "bathroom", "dressing", "bedroom"];
  const materials: Array<MirrorMaterial | "all"> = ["all", "wooden", "acrylic", "metal", "decorative", "led", "bluetooth"];

  const filteredMirrors = useMemo(() => {
    return mirrors.filter((mirror) => {
      const categoryMatch = activeCategory === "all" || mirror.category === activeCategory;
      const materialMatch = activeMaterial === "all" || mirror.material === activeMaterial;
      return categoryMatch && materialMatch;
    });
  }, [activeCategory, activeMaterial]);

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveMaterial("all");
  };

  const hasActiveFilters = activeCategory !== "all" || activeMaterial !== "all";

  return (
    <section id="categories" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Our Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Curated <span className="text-gradient-gold">Mirrors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our extensive collection of mirrors designed for every room and style.
          </p>
        </motion.div>

        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full gap-2 border-border"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {(showFilters || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:block mb-12"
            >
              {/* Category Filters */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground/80 mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary" />
                  Filter by Room
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCategory(category)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-accent text-accent-foreground shadow-gold"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {category === "all" ? "All Rooms" : categoryLabels[category]}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Material Filters */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-foreground/80 mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary" />
                  Filter by Material
                </h3>
                <div className="flex flex-wrap gap-3">
                  {materials.map((material) => (
                    <motion.button
                      key={material}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveMaterial(material)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeMaterial === material
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {material === "all" ? "All Materials" : materialLabels[material]}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-border/50"
        >
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{filteredMirrors.length}</span> mirrors
            </span>
            {hasActiveFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={clearFilters}
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <X className="w-4 h-4" />
                Clear all
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filteredMirrors.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${activeMaterial}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMirrors.map((mirror, index) => (
                <ProductCard key={mirror.id} mirror={mirror} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🪞</div>
              <h3 className="font-serif text-2xl text-foreground mb-3">No mirrors found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to discover more options.
              </p>
              <Button onClick={clearFilters} className="btn-premium text-accent-foreground">
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
