import { formatPrice, parsePrice } from './parsePrice'

/**
 * Builds a unique line-item id from product id, size, and variant.
 * Items with the same id are merged in the cart.
 */
export function getCartLineId(productId, size = '', variant = '') {
  return `${productId}::${size || ''}::${variant || ''}`
}

/**
 * Normalizes product data from any component shape into a cart line item.
 */
export function normalizeCartItem(raw, { size = '', variant = '', quantity = 1 } = {}) {
  const productId = raw.id || raw.productId
  const priceValue = typeof raw.price === 'number' ? raw.price : parsePrice(raw.price)
  const resolvedVariant = variant || raw.variant || raw.subtitle || raw.category || ''
  const resolvedSize = size || raw.size || ''

  return {
    id: getCartLineId(productId, resolvedSize, resolvedVariant),
    productId,
    name: raw.name,
    price: priceValue,
    priceDisplay: formatPrice(priceValue),
    image: raw.image || raw.imageSrc || raw.img || '',
    quantity,
    size: resolvedSize || undefined,
    variant: resolvedVariant || undefined,
  }
}

/**
 * Adds or merges a line item into the current cart array.
 */
export function addItemToCart(items, incoming) {
  const existingIndex = items.findIndex((item) => item.id === incoming.id)

  if (existingIndex === -1) {
    return [...items, incoming]
  }

  return items.map((item, index) =>
    index === existingIndex
      ? { ...item, quantity: item.quantity + incoming.quantity }
      : item,
  )
}

/**
 * Updates quantity for a line item. Removes the item when quantity <= 0.
 */
export function updateItemQuantity(items, lineId, quantity) {
  if (quantity <= 0) {
    return items.filter((item) => item.id !== lineId)
  }

  return items.map((item) =>
    item.id === lineId ? { ...item, quantity } : item,
  )
}

/**
 * Removes a line item from the cart.
 */
export function removeItemFromCart(items, lineId) {
  return items.filter((item) => item.id !== lineId)
}

/**
 * Returns total item count (sum of quantities).
 */
export function getCartItemCount(items) {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

/**
 * Returns cart subtotal as a number.
 */
export function getCartSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
