import { Button } from '@/components/ui/button'

interface CategoryFiltersProps {
  categories: string[]
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export const CategoryFilters = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFiltersProps) => {
  return (
    <div className="border-y py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant={activeCategory === null ? 'default' : 'ghost'}
            onClick={() => onCategoryChange(null)}
            className={activeCategory === null ? '' : 'hover:bg-secondary'}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'ghost'}
              onClick={() => onCategoryChange(category)}
              className={activeCategory === category ? '' : 'hover:bg-secondary'}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
