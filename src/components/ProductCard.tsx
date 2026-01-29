import { Mirror } from "@/data/mirrors";
import { Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  mirror: Mirror;
}

export const ProductCard = ({ mirror }: ProductCardProps) => {
  const handleViewDetails = () => {
    // Create a simple document content for the mirror details
    const content = `
CLEAR REFLECTIONS - PRODUCT SPECIFICATIONS

${mirror.name.toUpperCase()}
=====================================

Description:
${mirror.description}

Category: ${mirror.category.replace("-", " ").toUpperCase()}
Material: ${mirror.material.toUpperCase()}
Dimensions: ${mirror.dimensions}
Price: $${mirror.price}

Features:
${mirror.features.map((f) => `• ${f}`).join("\n")}

---
Contact Clear Reflections:
Email: info@clearreflections.com
Phone: +1 (555) 123-4567
Address: 123 Mirror Boulevard, Crystal City, NY 10001

Thank you for choosing Clear Reflections!
    `;

    // Create a blob and download as text file
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${mirror.id}-${mirror.name.toLowerCase().replace(/\s+/g, "-")}-specs.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-elegant hover-lift">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden image-shine">
        <img
          src={mirror.image}
          alt={mirror.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full capitalize">
            {mirror.category.replace("-", " ")}
          </span>
        </div>
        {/* Material Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full capitalize">
            {mirror.material}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg text-foreground mb-2 line-clamp-1">
          {mirror.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {mirror.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {mirror.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-sm text-muted-foreground">From</span>
            <div className="text-2xl font-serif text-gradient-gold font-bold">
              ${mirror.price}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleViewDetails}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <FileText className="w-4 h-4 mr-1" />
              Specs
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
