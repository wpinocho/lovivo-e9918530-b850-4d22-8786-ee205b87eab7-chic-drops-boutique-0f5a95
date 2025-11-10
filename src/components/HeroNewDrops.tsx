import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroNewDrops = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-secondary overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
          alt="New Drops Collection"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-90">Spring/Summer 2024</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-none">
            New Drops
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Discover the season's most coveted pieces. Timeless elegance meets modern sophistication.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-base px-8 py-6 h-auto group"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
