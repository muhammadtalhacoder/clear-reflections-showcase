import drawingRoom1 from "@/assets/mirrors/drawing-room-1.jpg";
import drawingRoom2 from "@/assets/mirrors/drawing-room-2.jpg";
import bathroom1 from "@/assets/mirrors/bathroom-1.jpg";
import bathroom2 from "@/assets/mirrors/bathroom-2.jpg";
import dressing1 from "@/assets/mirrors/dressing-1.jpg";
import dressing2 from "@/assets/mirrors/dressing-2.jpg";
import bedroom1 from "@/assets/mirrors/bedroom-1.jpg";
import bedroom2 from "@/assets/mirrors/bedroom-2.jpg";

export type MirrorCategory = "drawing-room" | "bathroom" | "dressing" | "bedroom";
export type MirrorMaterial = "wooden" | "acrylic" | "metal" | "decorative" | "led" | "bluetooth";

export interface Mirror {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MirrorCategory;
  material: MirrorMaterial;
  features: string[];
  dimensions: string;
}

export const categoryLabels: Record<MirrorCategory, string> = {
  "drawing-room": "Drawing Room Mirrors",
  "bathroom": "Bathroom Mirrors",
  "dressing": "Dressing Mirrors",
  "bedroom": "Bedroom Mirrors",
};

export const materialLabels: Record<MirrorMaterial, string> = {
  wooden: "Wooden Framed",
  acrylic: "Acrylic Bordered",
  metal: "Metal Bordered",
  decorative: "Decorative",
  led: "LED Mirrors",
  bluetooth: "Bluetooth Mirrors",
};

export const mirrors: Mirror[] = [
  {
    id: "cr-001",
    name: "Aurelius Gold Round Mirror",
    description: "Elegant round wall mirror with a luxurious gold-finished frame. Perfect centerpiece for any drawing room.",
    price: 289,
    image: drawingRoom1,
    category: "drawing-room",
    material: "decorative",
    features: ["24\" diameter", "Gold leaf finish", "Hanging hardware included", "Premium quality glass"],
    dimensions: "60cm x 60cm",
  },
  {
    id: "cr-002",
    name: "Geometric Prism Wall Mirror",
    description: "Modern geometric hexagonal mirror with sleek black metal frame. Contemporary art meets functionality.",
    price: 345,
    image: drawingRoom2,
    category: "drawing-room",
    material: "metal",
    features: ["Geometric design", "Matte black finish", "Wall mounted", "Shatter-resistant"],
    dimensions: "75cm x 75cm",
  },
  {
    id: "cr-003",
    name: "LED Backlit Vanity Mirror",
    description: "Modern rectangular bathroom mirror with integrated LED backlighting. Energy efficient with anti-fog technology.",
    price: 429,
    image: bathroom1,
    category: "bathroom",
    material: "led",
    features: ["LED backlighting", "Anti-fog", "Touch dimmer", "IP44 rated", "Energy efficient"],
    dimensions: "80cm x 60cm",
  },
  {
    id: "cr-004",
    name: "Smart Touch LED Mirror",
    description: "Circular smart mirror with touch-activated LED ring light. Perfect for modern bathrooms with smart technology.",
    price: 519,
    image: bathroom2,
    category: "bathroom",
    material: "bluetooth",
    features: ["Bluetooth speakers", "Touch controls", "LED ring light", "Anti-fog", "Memory function"],
    dimensions: "70cm diameter",
  },
  {
    id: "cr-005",
    name: "Classic Wooden Standing Mirror",
    description: "Full-length standing mirror with elegant mahogany wooden frame. Timeless design for your dressing area.",
    price: 599,
    image: dressing1,
    category: "dressing",
    material: "wooden",
    features: ["Full-length", "Solid wood frame", "Tilting mechanism", "Floor standing", "Premium glass"],
    dimensions: "180cm x 50cm",
  },
  {
    id: "cr-006",
    name: "Hollywood Glamour Vanity Mirror",
    description: "Professional vanity mirror with surrounding LED bulbs. Studio-quality lighting for perfect makeup application.",
    price: 449,
    image: dressing2,
    category: "dressing",
    material: "led",
    features: ["15 LED bulbs", "Dimmable", "Touch controls", "Tabletop design", "USB charging port"],
    dimensions: "65cm x 50cm",
  },
  {
    id: "cr-007",
    name: "Baroque Ornate Oval Mirror",
    description: "Stunning ornate oval mirror with vintage baroque gold frame. Adds royal elegance to any bedroom.",
    price: 379,
    image: bedroom1,
    category: "bedroom",
    material: "decorative",
    features: ["Hand-carved details", "Antique gold finish", "Premium beveled glass", "Wall mounted"],
    dimensions: "90cm x 60cm",
  },
  {
    id: "cr-008",
    name: "Minimalist Acrylic Frame Mirror",
    description: "Clean rectangular mirror with transparent acrylic border. Scandinavian minimalist design for modern bedrooms.",
    price: 199,
    image: bedroom2,
    category: "bedroom",
    material: "acrylic",
    features: ["Clear acrylic frame", "Lightweight", "Easy installation", "Modern design"],
    dimensions: "100cm x 70cm",
  },
];
