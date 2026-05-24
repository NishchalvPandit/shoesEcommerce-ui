import { useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import { useCart } from '../../context/CartContext'

/**
 * Catalogue product tile (Shop grid).
 */
function ProductCard({
  product: { id, name, subtitle, price, imageSrc, imageAlt, badge },
}) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      id,
      name,
      subtitle,
      price,
      imageSrc,
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="group relative">
      <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl premium-shadow product-gradient">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={560}
          height={700}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-end gap-3 bg-black/40 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={
              'rounded-xl py-3 font-anton text-lg uppercase transition-colors ' +
              (added
                ? 'bg-accent-blue text-white'
                : 'bg-white text-background hover:bg-accent-blue')
            }
          >
            {added ? 'Added!' : 'Quick Add'}
          </button>
          <Link
            to={`/product/${id}`}
            className={
              'glass-panel block rounded-xl py-3 text-center font-sora text-sm font-semibold uppercase tracking-wider text-on-surface ' +
              'transition-colors hover:bg-white/10'
            }
          >
            View Details
          </Link>
        </div>
        <button
          type="button"
          className="group/heart glass-panel absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-accent-blue active:scale-90"
          aria-label="Add to favourites"
        >
          <MaterialSymbol
            name="favorite"
            className="text-on-surface group-hover/heart:text-background"
          />
        </button>
        {badge === 'new' && (
          <div className="absolute left-4 top-4 rounded-full bg-accent-blue px-3 py-1 font-sora text-[10px] font-bold uppercase tracking-widest text-background">
            New Drop
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-anton text-xl uppercase leading-tight text-white transition-colors group-hover:text-accent-blue">
            {name}
          </h3>
          <p className="font-sora text-base text-on-surface-variant">{subtitle}</p>
        </div>
        <p className="shrink-0 font-sora text-lg font-semibold text-accent-blue">{price}</p>
      </div>
    </article>
  )
}

export default ProductCard
