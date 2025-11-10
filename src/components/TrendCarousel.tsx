import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Collection } from '@/lib/supabase'

interface TrendCarouselProps {
  collections: Collection[]
  onViewCollection: (id: string) => void
}

export const TrendCarousel = ({ collections, onViewCollection }: TrendCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % collections.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + collections.length) % collections.length)
  }

  useEffect(() => {
    if (collections.length === 0) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [collections.length])

  if (collections.length === 0) return null

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase mb-2 text-muted-foreground">Curated Collections</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Trending Now</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {collections.map((collection) => (
                <div key={collection.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      {collection.image ? (
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                            alt={collection.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-6 px-4 md:px-8">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                          {collection.name}
                        </h3>
                        {collection.description && (
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {collection.description}
                          </p>
                        )}
                      </div>
                      
                      <Button
                        onClick={() => onViewCollection(collection.id)}
                        size="lg"
                        variant="outline"
                        className="border-2 border-foreground hover:bg-foreground hover:text-background"
                      >
                        Explore Collection
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {collections.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white rounded-full w-12 h-12"
                aria-label="Previous collection"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white rounded-full w-12 h-12"
                aria-label="Next collection"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="flex justify-center gap-2 mt-8">
                {collections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1 transition-all ${
                      index === currentIndex ? 'w-8 bg-foreground' : 'w-1 bg-foreground/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
