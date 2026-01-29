import { Mirror } from "@/data/mirrors";
import { Eye, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCardProps {
  mirror: Mirror;
  index?: number;
}

export const ProductCard = ({ mirror, index = 0 }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-gradient-card rounded-2xl overflow-hidden border border-border/50 card-hover"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={mirror.image}
          alt={mirror.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold rounded-full capitalize">
            {mirror.category.replace("-", " ")}
          </span>
        </div>

        {/* Quick View Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Link to={`/product/${mirror.id}`}>
            <Button className="w-full btn-premium text-accent-foreground gap-2">
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {mirror.name}
          </h3>
          <Link 
            to={`/product/${mirror.id}`}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-accent-foreground transition-colors" />
          </Link>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {mirror.description}
        </p>

        {/* Material Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs px-2.5 py-1 bg-secondary rounded-full text-secondary-foreground capitalize">
            {mirror.material}
          </span>
          <span className="text-xs text-muted-foreground">{mirror.dimensions}</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between pt-4 border-t border-border/50">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Starting at</span>
            <div className="text-2xl font-serif text-gradient-gold font-semibold">
              ${mirror.price}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
