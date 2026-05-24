import { SHOP_PRICE_MAX, SHOP_PRICE_MIN } from '../data/shopProducts'
import { parsePrice } from './parsePrice'

/** Default filter state for the shop page. */
export const DEFAULT_SHOP_FILTERS = {
  search: '',
  categories: [],
  priceMin: SHOP_PRICE_MIN,
  priceMax: SHOP_PRICE_MAX,
  sort: 'popular',
}

/**
 * Returns true when any filter differs from the default state.
 */
export function hasActiveShopFilters(filters) {
  return (
    filters.search.trim() !== '' ||
    filters.categories.length > 0 ||
    filters.priceMin !== SHOP_PRICE_MIN ||
    filters.priceMax !== SHOP_PRICE_MAX ||
    filters.sort !== DEFAULT_SHOP_FILTERS.sort
  )
}

/**
 * Filters products by search query, category, and price range.
 */
export function filterProducts(products, { search, categories, priceMin, priceMax }) {
  const query = search.trim().toLowerCase()

  return products.filter((product) => {
    const price = parsePrice(product.price)

    if (price < priceMin || price > priceMax) return false

    if (categories.length > 0 && !categories.includes(product.category)) return false

    if (!query) return true

    const haystack = `${product.name} ${product.subtitle} ${product.category}`.toLowerCase()
    return haystack.includes(query)
  })
}

/**
 * Sorts products by the selected sort option.
 */
export function sortProducts(products, sort) {
  const sorted = [...products]

  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    case 'price-desc':
      return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
    case 'new':
      return sorted.sort((a, b) => b.dateAdded - a.dateAdded)
    case 'popular':
    default:
      return sorted.sort((a, b) => b.popularity - a.popularity)
  }
}

/**
 * Applies all shop filters and sorting in one pass.
 */
export function filterAndSortProducts(products, filters) {
  const filtered = filterProducts(products, filters)
  return sortProducts(filtered, filters.sort)
}
