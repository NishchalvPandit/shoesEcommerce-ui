/**
 * Converts a display price string (e.g. "$285.00" or "$240") to a number.
 */
export function parsePrice(price) {
  if (typeof price === 'number') return price
  if (!price) return 0
  const cleaned = String(price).replace(/[^0-9.]/g, '')
  const value = parseFloat(cleaned)
  return Number.isFinite(value) ? value : 0
}

/**
 * Formats a numeric price as a USD display string.
 */
export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`
}
