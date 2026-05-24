import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import PriceRangeFilter from '../PriceRangeFilter/PriceRangeFilter'
import { SHOP_CATEGORIES } from '../../data/shopProducts'

function FilterHeading({ children }) {
  return (
    <h3 className="mb-6 font-sora text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
      {children}
    </h3>
  )
}

/**
 * Sidebar filter panel for the shop page.
 * Controlled by parent state so filters stay in sync with the product grid.
 */
function SidebarFilter({
  selectedCategories,
  onCategoryToggle,
  priceMin,
  priceMax,
  onPriceMinChange,
  onPriceMaxChange,
  onClearFilters,
  hasActiveFilters,
}) {
  return (
    <aside className="scroll-mt-28 space-y-10 md:col-span-3" aria-label="Filter products">
      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClearFilters}
          className={
            'flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 ' +
            'font-sora text-sm font-semibold uppercase tracking-wider text-on-surface ' +
            'transition-colors hover:border-accent-blue hover:text-accent-blue'
          }
        >
          <MaterialSymbol name="filter_alt_off" className="text-lg" />
          Clear Filters
        </button>
      )}

      <section>
        <FilterHeading>Category</FilterHeading>
        <div className="space-y-3">
          {SHOP_CATEGORIES.map((label) => {
            const checked = selectedCategories.includes(label)

            return (
              <label key={label} className="group flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onCategoryToggle(label)}
                  className={
                    'h-5 w-5 rounded border border-white/20 bg-transparent text-accent-blue ' +
                    'focus:ring-2 focus:ring-accent-blue focus:ring-offset-0 focus:ring-offset-background'
                  }
                />
                <span className="font-sora text-base text-on-surface transition-colors group-hover:text-accent-blue">
                  {label}
                </span>
              </label>
            )
          })}
        </div>
      </section>

      <PriceRangeFilter
        priceMin={priceMin}
        priceMax={priceMax}
        onPriceMinChange={onPriceMinChange}
        onPriceMaxChange={onPriceMaxChange}
        idPrefix="performance-price"
      />
    </aside>
  )
}

export default SidebarFilter
