import { SHOP_PRICE_MAX, SHOP_PRICE_MIN } from '../../data/shopProducts'
import { formatPrice } from '../../utils/parsePrice'

/**
 * Dual min/max price range sliders — shared by Performance and Lifestyle shop sections.
 */
function PriceRangeFilter({ priceMin, priceMax, onPriceMinChange, onPriceMaxChange, idPrefix = 'price' }) {
  return (
    <section>
      <h3 className="mb-6 font-sora text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
        Price Range
      </h3>
      <div className="space-y-4">
        <div>
          <label
            htmlFor={`${idPrefix}-min`}
            className="mb-2 block font-sora text-xs text-on-surface-variant"
          >
            Min: {formatPrice(priceMin)}
          </label>
          <input
            id={`${idPrefix}-min`}
            type="range"
            min={SHOP_PRICE_MIN}
            max={SHOP_PRICE_MAX}
            value={priceMin}
            onChange={(e) => onPriceMinChange(Number(e.target.value))}
            className="accent-accent-blue h-1 w-full cursor-pointer appearance-none rounded-lg bg-surface-container"
          />
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-max`}
            className="mb-2 block font-sora text-xs text-on-surface-variant"
          >
            Max: {formatPrice(priceMax)}
          </label>
          <input
            id={`${idPrefix}-max`}
            type="range"
            min={SHOP_PRICE_MIN}
            max={SHOP_PRICE_MAX}
            value={priceMax}
            onChange={(e) => onPriceMaxChange(Number(e.target.value))}
            className="accent-accent-blue h-1 w-full cursor-pointer appearance-none rounded-lg bg-surface-container"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between font-sora text-sm text-on-surface-variant">
        <span>{formatPrice(SHOP_PRICE_MIN)}</span>
        <span className="font-semibold text-accent-blue">
          {formatPrice(priceMin)} – {formatPrice(priceMax)}
        </span>
        <span>{formatPrice(SHOP_PRICE_MAX)}</span>
      </div>
    </section>
  )
}

export default PriceRangeFilter
