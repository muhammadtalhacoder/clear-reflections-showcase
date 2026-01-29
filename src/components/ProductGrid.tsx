import { useState, useMemo } from "react";
import { mirrors, categoryLabels, materialLabels, MirrorCategory, MirrorMaterial } from "@/data/mirrors";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Grid3X3, LayoutGrid, X } from "lucide-react";

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<MirrorCategory | "all">("all");
  const [activeMaterial, setActiveMaterial] = useState<MirrorMaterial | "all">("all");
  const [gridSize, setGridSize] = useState<"large" | "small">("large");

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
    <section id="categories" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Collection</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Mirror <span className="text-gradient-gold">Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our extensive collection of mirrors designed for every room and style.
            Filter by category or material to find your perfect reflection.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-foreground mb-3">Filter by Room</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "border-border hover:border-accent hover:text-accent"
                }
              >
                {category === "all" ? "All Rooms" : categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>

        {/* Material Filters */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-foreground mb-3">Filter by Material</h3>
          <div className="flex flex-wrap gap-2">
            {materials.map((material) => (
              <Button
                key={material}
                variant={activeMaterial === material ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveMaterial(material)}
                className={
                  activeMaterial === material
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-foreground"
                }
              >
                {material === "all" ? "All Materials" : materialLabels[material]}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Filters & Grid Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">
              Showing <span className="text-foreground font-medium">{filteredMirrors.length}</span> mirrors
            </span>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-accent hover:text-accent/80"
              >
                <X className="w-4 h-4 mr-1" />
                Clear Filters
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={gridSize === "large" ? "default" : "outline"}
              size="icon"
              onClick={() => setGridSize("large")}
              className="h-9 w-9"
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button
              variant={gridSize === "small" ? "default" : "outline"}
              size="icon"
              onClick={() => setGridSize("small")}
              className="h-9 w-9"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredMirrors.length > 0 ? (
          <div
            className={`grid gap-6 ${
              gridSize === "large"
                ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }`}
          >
            {filteredMirrors.map((mirror) => (
              <ProductCard key={mirror.id} mirror={mirror} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🪞</div>
            <h3 className="font-serif text-2xl text-foreground mb-2">No mirrors found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters to find what you're looking for.
            </p>
            <Button onClick={clearFilters} className="bg-accent text-accent-foreground">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
