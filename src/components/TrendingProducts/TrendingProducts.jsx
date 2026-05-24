import { useRef } from 'react'
import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import TrendingProductCard from './TrendingProductCard'

const products = [
  {
    id: 'flow',
    name: 'Kinetic Flow',
    category: 'Running',
    price: '$240',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsUCjXjBdC4RSOtcob6pAc5ymXyIASIoFBjP6O_GUgA8EQwYIufkyVTYuPZyDdzmUK_d4t8ALPXzHOFFypNjw58AqFCahdWo0T9HgFBuJhrIuQ61-QiX0_9X6FY3y9yt2QISshCj69eYvCS0zPCjpAO1EAQaFTPf1MPUVpVhE9SfP5suN_nYxxiOQOuYyGm03RLrM_IL5FpspFPDANXwx09YUpcyTyyVfdAalMoAhFXX1nAs6k065ZW5PXYBiuWnziST67ggh8L0s',
    showQuickAdd: true,
  },
  {
    id: 'stealth',
    name: 'Stealth Volt',
    category: 'Basketball',
    price: '$290',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJHr9lNR3eiSClxiSbz23Qr0vYZguTOX6yTH5BY01FomIqSW4yUasA4VhltyZw4XYmYzZzapPq1EqWudVCK5NF7vTfeEDNCcLAvFUBP4ftNUSMYaHnyvfrOdNQ5UMRatfB5PVBveT_KYsCIgEOfVLox_6HIr0yZy_PDZ0KgH2vHhtKV-OS_60fTw80C1-y11DMicYNMZ_bBGYk71RZfzYJGu8aNrTN8HCABqcTqoR5pZtVEDr9vWwyPzZBCWx8ojLBmyi3pCtOR4',
    showQuickAdd: true,
  },
  {
    id: 'aero',
    name: 'Aero Lux',
    category: 'Lifestyle',
    price: '$350',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUgQOvZHZaQwdR2gHdeJwPHotJ6_2uy9IQ5l8s7eC0hV3bot5tIa0gbMxXYtwVLw4D-dW4NiDTWsm5UwrLDv6Ab932c_0toM4xxDedEoHIXmtUtX2Q4DewuItyy7oyGmBfowJN_maUKtT-C49L-7KdIFLEIGlPhIJRYFjfzz91q3HoaE6J58Yp_D__whNH2W_T6DuLAw8jmTyESo1d9yLSdVESdFnmX_IbTCtBcyTpBmWVL8_Hh_RNa-dImRiiL_ciMay3d6Gjje4',
    showQuickAdd: true,
  },
  {
    id: 'gravity',
    name: 'Gravity X',
    category: 'Training',
    price: '$210',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SHZNXeFronplfhsEgKUi7OnSHXKAaBmCD-jrwuDHADqIpUbf2dw_rCCkCTzQQIHltRpt1pP9Lk_DUlmEviSdltlAIzVDxOmA8nYNTS8UHh9qIkKh7IOhTGueFV3g_VLPrKCbxmjOGEj3WQsLe_dybKecE9FkKUSPZxu2tGpg_mwbgAXfYyQzqIYaS5KXMWCWtPNwOxAgBhL44WXm1uOPzeW4V2O7VMd3da8VqPwmUDtd3ITv7hc79HkoUp44_uf1PTKC9T3ve0g',
    showQuickAdd: true,
  },
]

function TrendingProducts() {
  const sectionRef = useRef(null)

  const scrollByDir = (dir) => {
    const el = sectionRef.current?.querySelector('[data-trend-scroll]')
    if (!el) return
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 400), behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1440px] overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
      aria-labelledby="trending-heading"
    >
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2
            id="trending-heading"
            className="font-anton text-5xl font-bold uppercase text-white md:text-[48px]"
          >
            Trending Now
          </h2>
          <div className="mt-2 h-1 w-24 bg-accent-blue" />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByDir(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
          >
            <MaterialSymbol name="chevron_left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByDir(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
          >
            <MaterialSymbol name="chevron_right" />
          </button>
        </div>
      </div>

      <div
        data-trend-scroll
        className="grid grid-cols-1 gap-6 overflow-x-auto pb-2 md:grid-cols-2 lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((p) => (
          <TrendingProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default TrendingProducts
