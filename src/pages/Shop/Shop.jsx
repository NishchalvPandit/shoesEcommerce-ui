import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'
import LifestyleCollection from '../../components/LifestyleCollection/LifestyleCollection'
import CollectionsShowcase from '../../components/CollectionsShowcase/CollectionsShowcase'
import { SHOP_PRODUCTS } from '../../data/shopProducts'
import { getCollectionFromHash } from '../../data/shopCollections'
import {
  DEFAULT_SHOP_FILTERS,
  filterAndSortProducts,
  hasActiveShopFilters,
} from '../../utils/shopFilters'

function Shop() {
  const location = useLocation()
  const [filters, setFilters] = useState(DEFAULT_SHOP_FILTERS)

  /** Apply collection route from URL hash and scroll to the matching section. */
  useEffect(() => {
    if (location.pathname !== '/shop') return

    const collection = getCollectionFromHash(location.hash)
    if (!collection) return

    setFilters({
      ...DEFAULT_SHOP_FILTERS,
      categories: collection.categories,
    })

    const scrollTarget = collection.scrollTarget
    window.requestAnimationFrame(() => {
      document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  const filteredProducts = useMemo(
    () => filterAndSortProducts(SHOP_PRODUCTS, filters),
    [filters],
  )

  const activeFilters = hasActiveShopFilters(filters)

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }))
  }

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sort: e.target.value }))
  }

  const handlePriceMinChange = useCallback((value) => {
    setFilters((prev) => ({
      ...prev,
      priceMin: Math.min(value, prev.priceMax),
    }))
  }, [])

  const handlePriceMaxChange = useCallback((value) => {
    setFilters((prev) => ({
      ...prev,
      priceMax: Math.max(value, prev.priceMin),
    }))
  }, [])

  const handleClearFilters = useCallback(() => {
    setFilters(DEFAULT_SHOP_FILTERS)
  }, [])

  return (
    <div className="pb-20 pt-12 md:pb-28 md:pt-14">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 md:px-8 lg:px-16">
        <div
          id="performance"
          className="mb-12 flex scroll-mt-[6rem] flex-col gap-6 md:flex-row md:items-end md:justify-between lg:scroll-mt-28"
        >
          <div>
            <h1
              id="shop-heading"
              className="font-anton text-4xl uppercase leading-tight tracking-tight text-white md:text-5xl"
            >
              Elite Performance
            </h1>
            <p className="mt-3 max-w-xl font-sora text-lg text-on-surface-variant">
              Precision-engineered footwear for the modern athlete. Discover the latest drops in our
              high-performance technical catalog.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center md:w-auto">
            <div className="relative flex-grow sm:min-w-[220px] md:flex-grow-0">
              <label htmlFor="shop-search" className="sr-only">
                Search products
              </label>
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                <MaterialSymbol name="search" className="text-xl" />
              </span>
              <input
                id="shop-search"
                type="search"
                value={filters.search}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className={
                  'h-12 w-full rounded-xl border-0 bg-surface-container-high py-2 pl-10 pr-4 ' +
                  'font-sora text-sm font-semibold text-on-surface caret-accent-blue ' +
                  'placeholder:text-on-surface-variant outline-none ring-0 transition-colors ' +
                  'focus:ring-2 focus:ring-accent-blue'
                }
              />
            </div>

            <div className="relative flex-grow md:flex-grow-0">
              <label htmlFor="shop-sort" className="sr-only">
                Sort products
              </label>
              <select
                id="shop-sort"
                value={filters.sort}
                onChange={handleSortChange}
                className={
                  'h-12 w-full cursor-pointer appearance-none rounded-xl border-0 bg-surface-container-high py-3 pl-6 pr-10 ' +
                  'font-sora text-sm font-semibold uppercase tracking-wider text-on-surface outline-none ring-0 transition-colors hover:bg-surface-variant ' +
                  'focus:ring-2 focus:ring-accent-blue'
                }
              >
                <option value="popular">Sort: Popular</option>
                <option value="new">Sort: Newest</option>
                <option value="price-asc">Sort: Price Low–High</option>
                <option value="price-desc">Sort: Price High–Low</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                <MaterialSymbol name="expand_more" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-6 lg:gap-8">
          <SidebarFilter
            priceMin={filters.priceMin}
            priceMax={filters.priceMax}
            onPriceMinChange={handlePriceMinChange}
            onPriceMaxChange={handlePriceMaxChange}
            onClearFilters={handleClearFilters}
            hasActiveFilters={activeFilters}
          />

          <div className="md:col-span-9">
            <p className="mb-6 font-sora text-sm text-on-surface-variant">
              Showing {filteredProducts.length} of {SHOP_PRODUCTS.length} products
            </p>

            {filteredProducts.length === 0 ? (
              <div className="glass-panel flex flex-col items-center justify-center rounded-2xl px-6 py-16 text-center">
                <MaterialSymbol name="search_off" className="mb-4 text-5xl text-on-surface-variant" />
                <h2 className="font-anton text-2xl uppercase text-white">No Products Found</h2>
                <p className="mt-3 max-w-md font-sora text-base text-on-surface-variant">
                  No products match your current filters. Try adjusting your search or clearing filters.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-6 rounded-xl bg-white px-6 py-3 font-anton text-base uppercase text-background transition-colors hover:bg-accent-blue hover:text-white"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 [&>*]:scroll-mt-[6rem]">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        <LifestyleCollection />

        <CollectionsShowcase />
      </div>
    </div>
  )
}

export default Shop
