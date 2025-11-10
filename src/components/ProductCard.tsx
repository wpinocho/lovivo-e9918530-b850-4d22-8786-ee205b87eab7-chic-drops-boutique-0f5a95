import { EditorialProductCardUI } from "@/components/ui/EditorialProductCard"
import type { Product } from "@/lib/supabase"

/**
 * ROUTE COMPONENT - ProductCard
 * 
 * Uses editorial-chic product card design
 */

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return <EditorialProductCardUI product={product} />
}
