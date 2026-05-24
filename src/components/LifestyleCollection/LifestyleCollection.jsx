import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import PriceRangeFilter from '../PriceRangeFilter/PriceRangeFilter'
import { useCart } from '../../context/CartContext'
import { SHOP_PRICE_MAX, SHOP_PRICE_MIN } from '../../data/shopProducts'
import { parsePrice, formatPrice } from '../../utils/parsePrice'

const LIFESTYLE_PRODUCTS = [
  {
    id: 'kinetic-flow',
    name: 'Kinetic Flow',
    variant: 'Triple Black / Onyx',
    price: '$340',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWGySja0aQcN5KvWb7XSfxyruz_2NyB8jEOgV94oynkFwlsYDcrp4UXwo8WtF5YoLPG0co2RYGyQiJsVSXGCJlfuXUAQY7VHyax_0bxW3ztazdeecOyJzByf0sr7tauBCnrxX1j15xQaZ2FAuGSd8TId8fMa2keF_gTrYWXIIXtuKGOr1ucPeWFVJuyCBJgh63DVi8I4L5jAr1Skg9-AhrIyzHES0nRwqOGFWvZZLP7LySIi17Nn_HEKiDXlj6cDi5v9IZ1QVWRoE',
  },
  {
    id: 'aero-lux',
    name: 'Aero Lux',
    variant: 'Cloud / Volt Blue',
    price: '$420',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoSqj5Rb2T32v4SdFVwElZ3uPJ550UgcV4sQ-2Y0epeDkgcRix2mjqtOPsMBHUGNYOy8jCu9JXiA37b3FdVg5f1ZgCwo5FpJo-LlOpA6jyZ3wzNCffCNTrCehwiwVfHhQbpc-bC4Uy-xczPym5e2lofTSFCL_GfCIa1f2cOmy7hQP0ajxav6mXJVF-KsKgtl6fZZUxjeghwHRyECY2A4aeMFNBWY6P2VchCRlySaykdkey-OnBx_u-90Ap_Lew2ayxKDimknFNwoY',
  },
  {
    id: 'velocity-shift',
    name: 'Velocity Shift',
    variant: 'Cyber Lime / Slate',
    price: '$290',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGtxq05RFg_a79TzcVIZeTa6K2C0uJl7lNFaiAYTivct6Ud3kumLR86nKGn49SapQ3RLohqqCML1ae_Kxq_JBt7EmCUN562Vny4yNSQisiNPDOacY8c7F7I5KtsKSYt89QGLjl1IyCqbIiwlGVv6KxOdsUKsYrugGhl-bKM2zX6Nzm6wZWChuQ2Hf1ncZbGVEJ5EFJXQucFql6jlVkAr7vzi1yzi8d26KRQl9Uz1kCIultN_SB4UT0aZfMLFQe9X9y1XCo4mOE2vs',
  },
  {
    id: 'scarlet-pulse',
    name: 'Scarlet Pulse',
    variant: 'Infrared / Matte',
    price: '$380',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYo7sO3Hg18FPm3cIjnggztEbmSjcFoYwDTxQW1CTAREFk3qNl_9FqDQTUW41iv3OzMUcBU9b4I7zJUyUqwaPT4gPIpo59O8pS9ZCDrbPyaudxz3M5bWokWLmQGCD7xrQmf3e6eyhgw_tq2SwpBGmoQcjTYLumgOc5aMDHcT45OkDjGwSXVSN7QlNGG8RzVNsW71rSg9pcy_yfpPj259m9cFJF2GXZj_t8Kzt7mU54D1hhHxrC31OxU385w0pJOAYNvHooYcCVA8',
  },
  {
    id: 'element-one',
    name: 'Element One',
    variant: 'Bone / Parchment',
    price: '$450',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmJFN_bgJycM55Rrgx7SXpzPR7Tuho6XnpZFGwNxX10vyVsAq80rCPjcJt4aufc_FRhLoexYmVxQ2uoV9hXw6Xicgkg5cEB_SRzoTRMX8YDfEan40Dp9oaaZZDeb1piOEogaUvPkHehOmwXritNXtQ6pnMBNc-37sBtBLz32GRSRX7PiAieBYRUXJ36iEHhDPj1G0eEbas486rdfODh2yhlgQxRBTIbbXNMs9g8uVoGFK6BUntRckhL4iKiqS4bwnws9LzFhTa19U',
  },
  {
    id: 'void-runner',
    name: 'Void Runner',
    variant: 'Silver / Ghost Grey',
    price: '$310',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRkhAQ9WDdufeeH2rOYSjp8FmUb2Uu_9NIbkFjTfBfTDEWVUVEdXNf5VT5_y1GnUuwaNB0xH08Jo8VfwUmWMuKFOSyxiNKoCQNQlMdP6W4rjAUjAlIrwGT89gBRxhJEIX_jWffcWek3pzk4Z0tB0AVVq3ie5BMxsJE3lNukMki_WAAgyvC9pgJbRQGxKb65hS0SoQZmWkwVOngdBh2LLZ_-VhhZ3mnkwF6QggiYB64Y5e2gyU-Wl30YwpTxSPEk7MM71IeUTAm4I8',
  },
]

const BRANDS = ['KINETIC LABS', 'ARCHIVE SERIES', 'COLLAB LIMITED']
const SIZES = ['40', '41', '42', '43', '44', '45']

function LifestyleCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: product.variant,
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card-lifestyle group relative block"
    >
      <div className="rounded-[16px] bg-[#111111] p-6 pb-10 premium-shadow transition-all duration-500 hover:bg-[#1a1a1a] sm:p-8 sm:pb-12">
        <div className="relative flex h-56 items-center justify-center sm:h-64">
          <div className="bg-gradient-radial pointer-events-none absolute inset-0 rounded-full from-white/5 to-transparent opacity-50 blur-3xl" />
          <img
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="break-grid-img relative z-10 h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-anton text-xl uppercase leading-tight text-white transition-colors group-hover:text-accent-blue">
                {product.name}
              </h3>
              <p className="font-sora text-base text-on-surface-variant">{product.variant}</p>
            </div>
            <p className="shrink-0 font-sora text-lg font-semibold text-accent-blue">
              {formatPrice(parsePrice(product.price))}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleAdd}
              className={
                'flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 active:scale-90 sm:h-12 sm:w-12 ' +
                (added
                  ? 'bg-accent-blue text-background'
                  : 'bg-white text-black hover:bg-accent-blue hover:text-background')
              }
              aria-label={added ? 'Added to cart' : `Add ${product.name} to cart`}
            >
              <MaterialSymbol name={added ? 'check' : 'add'} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

function LifestyleCollection() {
  const [activeSize, setActiveSize] = useState('41')
  const [priceMin, setPriceMin] = useState(SHOP_PRICE_MIN)
  const [priceMax, setPriceMax] = useState(SHOP_PRICE_MAX)

  const handlePriceMinChange = useCallback((value) => {
    setPriceMin(Math.min(value, priceMax))
  }, [priceMax])

  const handlePriceMaxChange = useCallback((value) => {
    setPriceMax(Math.max(value, priceMin))
  }, [priceMin])

  const filteredProducts = useMemo(
    () =>
      LIFESTYLE_PRODUCTS.filter((product) => {
        const price = parsePrice(product.price)
        return price >= priceMin && price <= priceMax
      }),
    [priceMin, priceMax],
  )

  return (
    <section
      id="lifestyle"
      className="scroll-mt-28 border-t border-white/5 pt-20"
      aria-labelledby="lifestyle-heading"
    >
      <div className="mb-14 md:mb-16">
        <h2
          id="lifestyle-heading"
          className="font-anton text-4xl uppercase tracking-tight text-white md:text-[64px] md:leading-none lg:text-[80px]"
        >
          Lifestyle Collections
        </h2>
        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl font-sora text-lg leading-relaxed text-on-surface-variant">
            Where urban utility meets unapologetic style. Our lifestyle range is
            engineered for the 24-hour cycle, blending haute couture silhouettes
            with high-impact kinetic technology for the ultimate daily rotation.
          </p>
          <div className="flex shrink-0 items-center gap-4 rounded-xl border border-white/5 bg-surface-container p-4">
            <span className="font-sora text-sm font-semibold uppercase tracking-[0.05em] text-accent-blue">
              New Arrival
            </span>
            <div className="h-px w-12 bg-white/20" />
            <span className="font-sora text-base text-on-surface">
              APEX CHRONO v2
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-6 lg:gap-8">
        {/* Lifestyle sidebar filters */}
        <aside
          className="space-y-10 md:col-span-3 md:sticky md:top-32"
          aria-label="Filter lifestyle products"
        >
          <section>
            <h3 className="mb-6 font-sora text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Brand
            </h3>
            <div className="space-y-3">
              {BRANDS.map((label) => (
                <label
                  key={label}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border border-white/20 bg-transparent text-accent-blue focus:ring-2 focus:ring-accent-blue focus:ring-offset-0 focus:ring-offset-background"
                  />
                  <span className="font-sora text-base text-on-surface transition-colors group-hover:text-accent-blue">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-6 font-sora text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Size (EU)
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setActiveSize(s)}
                  className={
                    'flex h-10 items-center justify-center rounded-lg border font-sora text-base transition-all ' +
                    (s === activeSize
                      ? 'border-accent-blue bg-accent-blue/10 text-on-surface'
                      : 'border-white/10 text-on-surface hover:border-accent-blue hover:text-accent-blue')
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </section>

          <PriceRangeFilter
            priceMin={priceMin}
            priceMax={priceMax}
            onPriceMinChange={handlePriceMinChange}
            onPriceMaxChange={handlePriceMaxChange}
            idPrefix="lifestyle-price"
          />
        </aside>

        {/* Lifestyle product grid */}
        <div className="md:col-span-9">
          <p className="mb-6 font-sora text-sm text-on-surface-variant">
            Showing {filteredProducts.length} of {LIFESTYLE_PRODUCTS.length} products
          </p>

          {filteredProducts.length === 0 ? (
            <div className="glass-panel flex flex-col items-center justify-center rounded-2xl px-6 py-16 text-center">
              <MaterialSymbol name="search_off" className="mb-4 text-5xl text-on-surface-variant" />
              <h3 className="font-anton text-2xl uppercase text-white">No Products Found</h3>
              <p className="mt-3 max-w-md font-sora text-base text-on-surface-variant">
                No lifestyle products match this price range. Try adjusting the sliders.
              </p>
              <button
                type="button"
                onClick={() => {
                  setPriceMin(SHOP_PRICE_MIN)
                  setPriceMax(SHOP_PRICE_MAX)
                }}
                className="mt-6 rounded-xl bg-white px-6 py-3 font-anton text-base uppercase text-background transition-colors hover:bg-accent-blue hover:text-white"
              >
                Reset Price
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {filteredProducts.map((product) => (
                <LifestyleCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-20 text-center md:mt-28">
            <Link
              to="/shop"
              className="inline-block border-2 border-white px-10 py-4 font-anton text-xl uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-12 sm:py-5 sm:text-2xl md:text-[32px]"
            >
              Explore More Archives
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifestyleCollection
