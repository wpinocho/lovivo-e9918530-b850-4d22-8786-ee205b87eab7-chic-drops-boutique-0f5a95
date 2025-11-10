import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroNewDrops } from '@/components/HeroNewDrops';
import { TrendCarousel } from '@/components/TrendCarousel';
import { ShoppableLookbook } from '@/components/ShoppableLookbook';
import { SizeGuide } from '@/components/SizeGuide';
import { CategoryFilters } from '@/components/CategoryFilters';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Editorial-chic women's fashion store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = ['Dresses', 'Outerwear', 'Knitwear', 'Trousers', 'Accessories'];
  
  const featuredCollections = collections.filter(c => 
    ['trending-now', 'new-drops', 'outerwear'].includes(c.handle || '')
  );

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - New Drops */}
      <HeroNewDrops />

      {/* Trend Carousel */}
      {!loadingCollections && featuredCollections.length > 0 && (
        <TrendCarousel 
          collections={featuredCollections}
          onViewCollection={handleViewCollectionProducts}
        />
      )}

      {/* Category Filters */}
      <CategoryFilters 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'
                  : activeCategory || 'All Products'
                }
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
            </div>
            
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <SizeGuide />
              {(selectedCollectionId || activeCategory) && (
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    handleShowAllProducts();
                    setActiveCategory(null);
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-muted animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-6">
                No products found in this category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  handleShowAllProducts();
                  setActiveCategory(null);
                }}
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Shoppable Lookbook */}
      <ShoppableLookbook />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};
