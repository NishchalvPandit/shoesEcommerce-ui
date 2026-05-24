import { Link } from 'react-router-dom'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/parsePrice'

function Cart() {
  const {
    items,
    subtotal,
    subtotalDisplay,
    checkoutSuccess,
    updateQuantity,
    removeFromCart,
    checkout,
  } = useCart()

  const handleCheckout = () => {
    checkout()
  }

  if (checkoutSuccess) {
    return (
      <div className="pb-20 pt-12 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
          <div className="glass-panel rounded-2xl p-10 md:p-14">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/20">
              <MaterialSymbol name="check_circle" className="text-4xl text-accent-blue" />
            </div>
            <h1 className="font-anton text-4xl uppercase text-white md:text-5xl">
              Order Confirmed
            </h1>
            <p className="mt-4 font-sora text-base text-on-surface-variant">
              Thank you for your purchase. Your kinetic gear is on its way.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-anton text-lg uppercase text-background transition-colors hover:bg-accent-blue hover:text-white"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="pb-20 pt-12 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
          <MaterialSymbol name="shopping_cart" className="mx-auto text-6xl text-on-surface-variant" />
          <h1 className="mt-6 font-anton text-4xl uppercase text-white md:text-5xl">Your Cart</h1>
          <p className="mt-4 font-sora text-base text-on-surface-variant">
            Your cart is empty. Discover elite performance footwear.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-anton text-lg uppercase text-background transition-colors hover:bg-accent-blue hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-20 pt-12 md:pb-28 md:pt-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-16">
        <h1 className="mb-10 font-anton text-4xl uppercase text-white md:text-5xl">Your Cart</h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Cart items */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            {items.map((item) => (
              <article
                key={item.id}
                className="glass-panel flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:p-6"
              >
                <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-surface-container sm:h-32 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h2 className="font-anton text-xl uppercase text-white">{item.name}</h2>
                  {item.variant && (
                    <p className="font-sora text-sm text-on-surface-variant">{item.variant}</p>
                  )}
                  {item.size && (
                    <p className="font-sora text-sm text-on-surface-variant">Size: {item.size}</p>
                  )}
                  <p className="font-sora text-lg font-semibold text-accent-blue">
                    {item.priceDisplay}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-accent-blue hover:text-accent-blue"
                    >
                      <MaterialSymbol name="remove" />
                    </button>
                    <span className="min-w-[2rem] text-center font-sora text-base font-semibold text-white">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-accent-blue hover:text-accent-blue"
                    >
                      <MaterialSymbol name="add" />
                    </button>
                  </div>

                  <button
                    type="button"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => removeFromCart(item.id)}
                    className="font-sora text-xs font-semibold uppercase text-[#ffb4ab] transition-colors hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Order summary */}
          <aside className="lg:col-span-4">
            <div className="glass-panel sticky top-28 rounded-2xl p-6 md:p-8">
              <h2 className="font-anton text-2xl uppercase text-white">Order Summary</h2>

              <div className="mt-6 space-y-3 border-b border-white/10 pb-6">
                <div className="flex justify-between font-sora text-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>{subtotalDisplay}</span>
                </div>
                <div className="flex justify-between font-sora text-sm text-on-surface-variant">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <span className="font-sora text-base font-semibold text-white">Total</span>
                <span className="font-anton text-2xl text-accent-blue">{formatPrice(subtotal)}</span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className={
                  'mt-8 w-full rounded-xl bg-white py-4 font-anton text-lg uppercase text-background ' +
                  'transition-all hover:bg-accent-blue hover:text-white active:scale-95'
                }
              >
                Checkout
              </button>

              <Link
                to="/shop"
                className="mt-4 block text-center font-sora text-sm text-on-surface-variant underline transition-colors hover:text-white"
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Cart
