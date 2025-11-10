import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Editorial-chic template for women's fashion store
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-6 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex space-x-10">
              <Link 
                to="/" 
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
              >
                Stories
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-transparent"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-8">
            <h1 className="text-4xl font-serif font-bold">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-background py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <BrandLogoLeft />
            <p className="mt-6 text-background/70 max-w-md">
              Contemporary women's fashion for the modern wardrobe. Timeless pieces designed with intention.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Shop</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                New Arrivals
              </Link>
              <Link 
                to="/" 
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                Dresses
              </Link>
              <Link 
                to="/" 
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                Outerwear
              </Link>
              <Link 
                to="/blog" 
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                Stories
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">&copy; 2024 Your Store. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/60">
            <button className="hover:text-background transition-colors">Privacy Policy</button>
            <button className="hover:text-background transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}
