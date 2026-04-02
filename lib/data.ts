export interface Product {
  id: string
  name: string
  description: string
  shortDescription: string
  category: string
  material: string
  style: string
  images: string[]
  // Replace with real factory models - these are placeholder paths
  modelPath: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: "sofa-milano",
    name: "Milano Modular Sofa",
    description: "Crafted by skilled artisans in Kayseri, Turkey, the Milano Modular Sofa exemplifies contemporary luxury. Its modular design allows for versatile configurations, while premium linen upholstery ensures lasting comfort and elegance. The solid oak frame provides exceptional durability, making this piece a timeless investment for discerning buyers.",
    shortDescription: "Contemporary modular sofa with premium linen upholstery",
    category: "Sofas",
    material: "Linen",
    style: "Modern",
    // images: ["/images/products/sofa-1.jpg"],
    // Replace with real factory models
    modelPath: "/models/sofa.glb",
    featured: true,
  },
  {
    id: "chair-vienna",
    name: "Vienna Accent Chair",
    description: "The Vienna Accent Chair brings warmth and sophistication to any space. Upholstered in supple full-grain leather sourced from sustainable tanneries, this chair features a sculptural silhouette inspired by mid-century design. The solid walnut frame is hand-finished to highlight natural wood grain, creating a piece that bridges artistry and function.",
    shortDescription: "Sculptural leather accent chair with walnut frame",
    category: "Chairs",
    material: "Leather",
    style: "Mid-Century",
    // images: ["/images/products/chair-1.jpg"],
    // Replace with real factory models
    modelPath: "/models/chair.glb",
    featured: true,
  },
  {
    id: "table-nordic",
    name: "Nordic Dining Table",
    description: "The Nordic Dining Table celebrates the beauty of natural materials. Crafted from sustainably sourced solid walnut, its expansive surface showcases rich wood grain patterns unique to each piece. The minimalist black steel base provides structural integrity while maintaining visual lightness, perfect for modern dining spaces that demand both presence and refinement.",
    shortDescription: "Solid walnut dining table with minimalist steel base",
    category: "Tables",
    material: "Wood",
    style: "Scandinavian",
    images: ["/images/products/table-1.jpg"],
    // Replace with real factory models
    modelPath: "/models/table.glb",
    featured: true,
  },
  {
    id: "bed-cloud",
    name: "Cloud Platform Bed",
    description: "Experience unparalleled comfort with the Cloud Platform Bed. The generously padded headboard, wrapped in luxurious bouclé fabric, creates an inviting focal point for any bedroom. Precision engineering ensures whisper-quiet performance, while the low-profile platform design adds a contemporary edge. Available in multiple sizes to accommodate any space.",
    shortDescription: "Luxury platform bed with bouclé upholstered headboard",
    category: "Beds",
    material: "Fabric",
    style: "Contemporary",
    images: ["/images/products/bed-1.jpg"],
    // Replace with real factory models
    modelPath: "/models/sofa.glb",
    featured: true,
  },
  {
    id: "cabinet-artisan",
    name: "Artisan Sideboard",
    description: "The Artisan Sideboard combines traditional craftsmanship with modern aesthetics. Constructed from solid oak with hand-applied finish, it features elegant brass hardware that adds a subtle metallic accent. Ample storage behind fluted doors makes it ideal for dining rooms or living spaces. Each piece is numbered and signed by the master craftsman.",
    shortDescription: "Handcrafted oak sideboard with brass accents",
    category: "Storage",
    material: "Wood",
    style: "Artisan",
    images: ["/images/products/cabinet-1.jpg"],
    // Replace with real factory models
    modelPath: "/models/table.glb",
    featured: true,
  },
  {
    id: "desk-executive",
    name: "Executive Writing Desk",
    description: "Designed for the modern professional, the Executive Writing Desk offers a refined workspace. The solid ash wood construction provides a stable, substantial surface for focused work. Integrated cable management keeps technology discreet, while the spacious drawer accommodates essential accessories. Clean lines and impeccable proportions make this desk a statement in any office.",
    shortDescription: "Solid ash executive desk with integrated storage",
    category: "Office",
    material: "Wood",
    style: "Modern",
    images: ["/images/products/desk-1.jpg"],
    // Replace with real factory models
    modelPath: "/models/table.glb",
    featured: true,
  },
]

export const categories = ["Sofas", "Chairs", "Tables", "Beds", "Storage", "Office"]
export const materials = ["Wood", "Leather", "Fabric", "Linen", "Metal"]
export const styles = ["Modern", "Mid-Century", "Scandinavian", "Contemporary", "Artisan"]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFilteredProducts(
  category?: string,
  material?: string,
  style?: string
): Product[] {
  return products.filter((product) => {
    if (category && product.category !== category) return false
    if (material && product.material !== material) return false
    if (style && product.style !== style) return false
    return true
  })
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}
