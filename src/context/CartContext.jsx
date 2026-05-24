import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  addItemToCart,
  getCartItemCount,
  getCartSubtotal,
  normalizeCartItem,
  removeItemFromCart,
  updateItemQuantity,
} from '../utils/cartHelpers'
import { loadCartFromStorage, saveCartToStorage } from '../utils/cartStorage'
import { formatPrice } from '../utils/parsePrice'

const CartContext = createContext(null)

/**
 * Provides cart state and actions to the entire app.
 * Syncs cart data with localStorage on every change.
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadCartFromStorage())
  const [toast, setToast] = useState(null)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)

  useEffect(() => {
    saveCartToStorage(items)
  }, [items])

  /** Shows a brief toast message. */
  const showToast = useCallback((message) => {
    setToast(message)
    window.setTimeout(() => setToast(null), 2500)
  }, [])

  /** Adds a product to the cart or increases quantity if it already exists. */
  const addToCart = useCallback(
    (product, options = {}) => {
      const lineItem = normalizeCartItem(product, options)
      setItems((current) => addItemToCart(current, lineItem))
      showToast(`${product.name} added to cart`)
    },
    [showToast],
  )

  /** Removes a line item from the cart. */
  const removeFromCart = useCallback((lineId) => {
    setItems((current) => removeItemFromCart(current, lineId))
  }, [])

  /** Updates quantity for a line item. Removes when quantity is 0 or less. */
  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) => updateItemQuantity(current, lineId, quantity))
  }, [])

  /** Clears all items from the cart. */
  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  /**
   * Validates cart is not empty, completes checkout, and clears the cart.
   * Returns true on success, false if cart was empty.
   */
  const checkout = useCallback(() => {
    if (items.length === 0) return false
    clearCart()
    setCheckoutSuccess(true)
    showToast('Order placed successfully!')
    window.setTimeout(() => setCheckoutSuccess(false), 5000)
    return true
  }, [items.length, clearCart, showToast])

  const itemCount = useMemo(() => getCartItemCount(items), [items])
  const subtotal = useMemo(() => getCartSubtotal(items), [items])
  const subtotalDisplay = useMemo(() => formatPrice(subtotal), [subtotal])

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      subtotalDisplay,
      checkoutSuccess,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      checkout,
    }),
    [
      items,
      itemCount,
      subtotal,
      subtotalDisplay,
      checkoutSuccess,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      checkout,
    ],
  )

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={
            'fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-xl border border-white/10 ' +
            'bg-surface-container px-6 py-3 font-sora text-sm font-semibold text-white shadow-2xl ' +
            'backdrop-blur-xl sm:left-auto sm:translate-x-0 sm:right-6'
          }
        >
          {toast}
        </div>
      )}
    </CartContext.Provider>
  )
}

/**
 * Hook to access cart state and actions.
 */
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default CartContext
