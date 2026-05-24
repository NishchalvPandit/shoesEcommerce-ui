import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'
import { useCart } from '../../context/CartContext'
import { getProductBySlug, getRelatedProducts } from '../../data/products'
import { formatPrice } from '../../utils/parsePrice'

/**
 * Empty state shown when the slug does not resolve to a product.
 */
function ProductNotFound({ slug }) {
  return (
    <div className="pb-20 pt-12 md:pb-28 md:pt-14">
      <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
        <div className="glass-panel rounded-2xl p-10 md:p-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffb4ab]/15">
            <MaterialSymbol name="search_off" className="text-4xl text-[#ffb4ab]" />
          </div>
          <h1 className="font-anton text-4xl uppercase text-white md:text-5xl">
            Product Not Found
          </h1>
          <p className="mt-4 font-sora text-base text-on-surface-variant">
            {slug ? (
              <>We couldn't find a product matching <span className="text-white">"{slug}"</span>.</>
            ) : (
              <>That product isn't in the catalogue.</>
            )}
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-anton text-lg uppercase text-background transition-colors hover:bg-accent-blue hover:text-white"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = useMemo(() => getProductBySlug(id), [id])
  const relatedProducts = useMemo(() => (product ? getRelatedProducts(product.slug, 4) : []), [product])

  const [selectedThumb, setSelectedThumb] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColorIdx, setSelectedColorIdx] = useState(0)
  const [added, setAdded] = useState(false)

  // Reset selections whenever the slug changes
  useEffect(() => {
    if (!product) return
    setSelectedThumb(0)
    setSelectedColorIdx(0)
    setAdded(false)

    const defaultSize =
      product.sizes.find((s) => !product.soldOutSizes.includes(s)) ?? product.sizes[0] ?? ''
    setSelectedSize(defaultSize)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product])

  if (!product) {
    return <ProductNotFound slug={id} />
  }

  const mainImg = product.gallery?.[selectedThumb] ?? product.heroImage
  const selectedColor = product.colors[selectedColorIdx]
  const isSelectedSizeSoldOut = product.soldOutSizes.includes(selectedSize)

  const handleAddToCart = () => {
    if (isSelectedSizeSoldOut) return

    addToCart(
      {
        id: product.slug,
        name: product.name,
        price: product.price,
        image: product.heroImage,
        variant: selectedColor?.name,
      },
      { size: selectedSize, variant: selectedColor?.name },
    )

    setAdded(true)
    window.setTimeout(() => setAdded(false), 2000)
  }

  const handleRelatedAdd = (e, related) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: related.slug,
      name: related.name,
      price: related.price,
      image: related.heroImage,
    })
  }

  return (
    <div className="pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-16">
        {/* Product Hero Grid */}
        <section className="mb-24 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Thumbnail sidebar (desktop) */}
          <div className="hidden flex-col gap-4 lg:col-span-1 lg:flex">
            {product.gallery.map((src, i) => (
              <button
                key={`${product.slug}-thumb-${i}`}
                type="button"
                onClick={() => setSelectedThumb(i)}
                className={
                  'aspect-square overflow-hidden rounded-lg border bg-surface-container ' +
                  (selectedThumb === i
                    ? 'border-2 border-accent-blue'
                    : 'border-white/5 opacity-60 transition-opacity hover:opacity-100')
                }
                aria-label={`Product angle ${i + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Main image canvas */}
          <div className="col-span-1 lg:col-span-6">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container premium-shadow">
              <div className="pointer-events-none absolute inset-0 product-gradient opacity-40" />
              <img
                src={mainImg}
                alt={`${product.name} sneaker`}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="glass-panel absolute bottom-8 right-8 rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <MaterialSymbol name="zoom_in" className="text-white" />
              </div>
            </div>

            {/* Mobile thumbnails */}
            <div className="mt-4 flex gap-3 lg:hidden">
              {product.gallery.map((src, i) => (
                <button
                  key={`${product.slug}-mthumb-${i}`}
                  type="button"
                  onClick={() => setSelectedThumb(i)}
                  className={
                    'aspect-square w-16 overflow-hidden rounded-lg border bg-surface-container ' +
                    (selectedThumb === i
                      ? 'border-2 border-accent-blue'
                      : 'border-white/5 opacity-60')
                  }
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info sidebar */}
          <div className="col-span-1 flex flex-col justify-center lg:col-span-5">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent-blue px-3 py-1 font-sora text-[10px] font-bold uppercase tracking-widest text-background">
                {product.useCase}
              </span>
              {product.badge && (
                <span
                  className={
                    'rounded-full px-3 py-1 font-sora text-[10px] font-bold uppercase tracking-widest ' +
                    (product.badgeTone === 'accent'
                      ? 'bg-white text-background'
                      : 'border border-white/20 text-on-surface')
                  }
                >
                  {product.badge}
                </span>
              )}
              <span className="font-sora text-xs text-on-surface-variant">SKU: {product.sku}</span>
            </div>

            <h1 className="mb-2 font-anton text-4xl font-bold uppercase text-white md:text-5xl">
              {product.name}
            </h1>
            <p className="mb-2 font-sora text-sm uppercase tracking-widest text-on-surface-variant">
              {product.tagline}
            </p>
            <p className="mb-8 font-anton text-3xl text-accent-blue">{formatPrice(product.price)}</p>
            <p className="mb-10 max-w-md font-sora text-base leading-relaxed text-on-surface-variant">
              {product.description}
            </p>

            {/* Feature highlights */}
            {product.features?.length > 0 && (
              <ul className="mb-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-sora text-sm text-on-surface"
                  >
                    <MaterialSymbol name="check_circle" className="text-base text-accent-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Colorway selector */}
            <div className="mb-8">
              <span className="mb-4 block font-sora text-xs font-semibold uppercase tracking-widest text-on-surface">
                Colorway: <span className="text-accent-blue">{selectedColor?.name}</span>
              </span>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color, idx) => {
                  const active = idx === selectedColorIdx
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColorIdx(idx)}
                      className={
                        'h-12 w-12 rounded-full border-2 transition-transform hover:scale-110 ' +
                        (active
                          ? 'border-accent-blue ring-4 ' + (color.ringClass ?? 'ring-white/20')
                          : 'border-white/10')
                      }
                      style={{ backgroundColor: color.hex }}
                      aria-label={`${color.name} colorway`}
                      aria-pressed={active}
                    />
                  )
                })}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-12">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-sora text-xs font-semibold uppercase tracking-widest text-on-surface">
                  Select Size (US)
                </span>
                <button
                  type="button"
                  className="font-sora text-xs text-on-surface-variant underline transition-colors hover:text-white"
                >
                  Sizing Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                {product.sizes.map((s) => {
                  const soldOut = product.soldOutSizes.includes(s)
                  const active = selectedSize === s

                  return (
                    <button
                      key={s}
                      type="button"
                      disabled={soldOut}
                      onClick={() => setSelectedSize(s)}
                      className={
                        'flex h-12 items-center justify-center rounded-lg font-sora text-sm font-semibold transition-all ' +
                        (soldOut
                          ? 'cursor-not-allowed border border-white/10 opacity-30'
                          : active
                            ? 'border-2 border-accent-blue bg-white text-background'
                            : 'border border-white/10 hover:border-white hover:bg-white hover:text-background')
                      }
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isSelectedSizeSoldOut}
                className={
                  'w-full rounded-xl py-5 font-anton text-lg uppercase transition-all duration-300 active:scale-95 ' +
                  (isSelectedSizeSoldOut
                    ? 'cursor-not-allowed bg-white/30 text-background/60'
                    : added
                      ? 'bg-accent-blue text-white'
                      : 'bg-white text-background hover:bg-accent-blue hover:text-white')
                }
              >
                {added ? 'ADDED TO CART' : 'ADD TO CART'}
              </button>
              <button
                type="button"
                className={
                  'flex w-full items-center justify-center gap-3 rounded-xl border-2 border-white/20 py-5 ' +
                  'font-anton text-lg uppercase text-white transition-all duration-300 hover:bg-white/10 active:scale-95'
                }
              >
                <MaterialSymbol name="favorite" /> WISHLIST
              </button>
            </div>

            {/* Stock + category footer */}
            <div className="mt-8 flex flex-wrap items-center gap-4 font-sora text-sm text-on-surface-variant">
              <span className="flex items-center gap-2">
                <span
                  className={
                    'inline-block h-2 w-2 rounded-full ' +
                    (product.stockStatus === 'In Stock' ? 'bg-accent-blue' : 'bg-[#ffb4ab]')
                  }
                />
                {product.stockStatus}
              </span>
              <span>•</span>
              <span>Category: <span className="text-on-surface">{product.category}</span></span>
            </div>
          </div>
        </section>

        {/* Technical DNA — dynamic specs */}
        {product.specs?.length > 0 && (
          <section className="mb-24">
            <h2 className="mb-12 text-center font-anton text-4xl font-bold uppercase text-white md:text-5xl">
              TECHNICAL DNA
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {product.specs.map((spec) => (
                <div
                  key={spec.title}
                  className={
                    'rounded-xl border border-white/5 bg-surface-container-low p-8 md:p-10 ' +
                    (spec.wide ? 'md:col-span-2' : '')
                  }
                >
                  <MaterialSymbol
                    name={spec.icon}
                    className="mb-6 inline-block scale-150 text-accent-blue"
                  />
                  <h3 className="mb-4 font-anton text-2xl font-bold uppercase text-white">
                    {spec.title}
                  </h3>
                  <p className="font-sora text-base text-on-surface-variant">{spec.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Products — dynamic by category */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="mb-12 font-anton text-4xl font-bold uppercase text-white md:text-5xl">
              You Might Also Like
            </h2>
            <div className="custom-scrollbar flex snap-x gap-6 overflow-x-auto pb-8">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/product/${related.slug}`}
                  className="group relative w-72 flex-none snap-start sm:w-80"
                >
                  <button
                    type="button"
                    onClick={(e) => handleRelatedAdd(e, related)}
                    aria-label={`Add ${related.name} to cart`}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-accent-blue"
                  >
                    <MaterialSymbol name="add_shopping_cart" className="text-lg" />
                  </button>
                  <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl bg-surface-container">
                    <img
                      src={related.heroImage}
                      alt={related.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {related.badge && (
                      <div
                        className={
                          'absolute right-4 top-4 rounded px-3 py-1 font-sora text-[10px] font-bold uppercase tracking-widest text-white ' +
                          (related.badgeTone === 'accent'
                            ? 'bg-accent-blue'
                            : 'bg-black/60 backdrop-blur-md')
                        }
                      >
                        {related.badge}
                      </div>
                    )}
                  </div>
                  <h4 className="mb-1 font-anton text-xl font-bold uppercase text-white">
                    {related.name}
                  </h4>
                  <p className="font-sora text-sm font-semibold text-accent-blue">
                    {formatPrice(related.price)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
