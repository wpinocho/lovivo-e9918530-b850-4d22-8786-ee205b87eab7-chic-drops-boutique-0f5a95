import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

interface LookbookItem {
  id: string
  image: string
  title: string
  products: {
    name: string
    price: number
    link: string
  }[]
}

const lookbookData: LookbookItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    title: 'Effortless Elegance',
    products: [
      { name: 'Silk Slip Dress', price: 298, link: '/products/silk-slip-dress' },
      { name: 'Leather Trench Coat', price: 1200, link: '/products/leather-trench-coat' },
    ]
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    title: 'Modern Minimalist',
    products: [
      { name: 'Tailored Wool Blazer', price: 485, link: '/products/tailored-wool-blazer' },
      { name: 'High-Waist Wide Leg Trousers', price: 225, link: '/products/high-waist-wide-leg-trousers' },
    ]
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    title: 'Cozy Luxe',
    products: [
      { name: 'Cashmere Turtleneck', price: 320, link: '/products/cashmere-turtleneck' },
      { name: 'Ribbed Knit Midi Dress', price: 195, link: '/products/ribbed-knit-midi-dress' },
    ]
  }
]

export const ShoppableLookbook = () => {
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null)

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-muted-foreground">Style Inspiration</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shoppable Lookbook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover complete looks styled by our editors. Click to shop the pieces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lookbookData.map((look) => (
              <div 
                key={look.id}
                className="group relative aspect-[3/4] bg-muted overflow-hidden cursor-pointer"
                onClick={() => setSelectedLook(look)}
              >
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold mb-2">{look.title}</h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm">Shop this look</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedLook} onOpenChange={() => setSelectedLook(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">{selectedLook?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={selectedLook?.image}
                alt={selectedLook?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Shop the Look</h3>
              <div className="space-y-3">
                {selectedLook?.products.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                    <Button 
                      size="sm"
                      onClick={() => window.location.href = product.link}
                    >
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
