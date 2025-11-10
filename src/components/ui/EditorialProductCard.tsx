import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

/**
 * Editorial-chic product card for fashion store
 */

interface EditorialProductCardUIProps {
  product: Product
}

export const EditorialProductCardUI = ({ product }: EditorialProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <div className="group">
          <Link to={`/products/${logic.product.slug}`} className="block">
            <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden relative">
              {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                <img
                  src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                  alt={logic.product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  No image
                </div>
              )}

              {/* Badges */}
              {(logic.discountPercentage || logic.product.featured || !logic.inStock) && (
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {logic.discountPercentage && (
                    <span className="bg-black text-white text-xs px-2.5 py-1 uppercase tracking-wider">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-black text-white text-xs px-2.5 py-1 uppercase tracking-wider">
                      New
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-muted-foreground text-white text-xs px-2.5 py-1 uppercase tracking-wider">
                      Sold Out
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg font-medium line-clamp-1 group-hover:underline">
                {logic.product.title}
              </h3>
              
              <div className="flex items-baseline gap-2">
                <span className="font-medium">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
            </div>
          </Link>

          {logic.hasVariants && logic.options && (
            <div className="mt-3 space-y-2">
              {logic.options.map((opt) => (
                <div key={opt.id}>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                    {opt.name}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                      const isSelected = logic.selected[opt.name] === val
                      const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                      if (swatch) {
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            title={`${opt.name}: ${val}`}
                            className={`h-7 w-7 border ${
                              isSelected ? 'border-black ring-1 ring-black' : 'border-border'
                            } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                            style={{ backgroundColor: swatch }}
                            aria-label={`${opt.name}: ${val}`}
                          />
                        )
                      }

                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => logic.handleOptionChange(opt.name, val)}
                          className={`border px-2.5 py-1 text-xs uppercase tracking-wider ${
                            isSelected 
                              ? 'border-black bg-black text-white' 
                              : 'border-border bg-background hover:border-foreground'
                          } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                          aria-pressed={isSelected}
                          aria-label={`${opt.name}: ${val}`}
                        >
                          {val}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Button
            onClick={() => {
              logic.onAddToCartSuccess()
              logic.handleAddToCart()
            }}
            disabled={!logic.canAddToCart}
            className="w-full mt-4 uppercase tracking-wider"
            variant="outline"
          >
            {logic.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      )}
    </HeadlessProductCard>
  )
}
