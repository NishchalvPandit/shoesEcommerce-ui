import { useState } from 'react'
import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import { useCart } from '../../context/CartContext'

function TrendingProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div
      className={
        'group relative overflow-hidden rounded-[16px] bg-[#111111] p-6 transition-all duration-500 ' +
        'hover:bg-[#1a1a1a]'
      }
    >
      <div className="absolute right-4 top-4 z-10">
        <button
          type="button"
          aria-label="Add to favorites"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/50 backdrop-blur-md transition-colors hover:bg-accent-blue"
        >
          <MaterialSymbol name="favorite" className="text-[20px] text-on-surface" />
        </button>
      </div>

      <div className="relative mb-6 h-64 transform transition-transform duration-500 group-hover:scale-110">
        <img
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-sora text-sm font-semibold tracking-[0.05em] text-accent-blue">
          {product.category}
        </span>
        <h3 className="font-anton text-2xl font-bold uppercase text-white">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-anton text-[22px] text-accent-blue">{product.price}</p>
          {product.showQuickAdd && (
            <button
              type="button"
              onClick={handleQuickAdd}
              className={
                'rounded-lg px-4 py-2 font-sora text-sm font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100 ' +
                (added
                  ? 'bg-accent-blue text-white'
                  : 'bg-white text-[#111111] hover:bg-accent-blue hover:text-white')
              }
            >
              {added ? 'Added!' : 'Quick add'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrendingProductCard
