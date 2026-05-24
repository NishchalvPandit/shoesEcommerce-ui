const CART_STORAGE_KEY = 'kinetic-cart'

/**
 * Reads cart items from localStorage.
 * Returns an empty array if nothing is stored or parsing fails.
 */
export function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/**
 * Persists cart items to localStorage.
 */
export function saveCartToStorage(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Storage may be unavailable in private browsing; cart still works in-session.
  }
}
