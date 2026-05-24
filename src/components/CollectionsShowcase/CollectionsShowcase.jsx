import { Link } from 'react-router-dom'
import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import { CURATED_COLLECTION_ROUTES, getShopCollectionUrl } from '../../data/shopCollections'

const COLLECTIONS = [
  {
    id: 'moto',
    title: 'KINETIC x MOTO',
    subtitle: 'Engineered for speed. Designed for the street.',
    tag: 'Upcoming Drop',
    date: '12.04.24',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPSFMyBBKHVS6iHh710L7AvjSQC9AUJEAX4QTNB-dPSZSm_wWdzCg8Xf6NZl7WJn-Vf770aeJ5Tut2XxApxlU-v7IZ_G398nff3Y9KuYeQywaQcafBrleyT-46J3nAeH-i-0dv0HP9txBmuQWimkr74NQ0SsWoTD9dYtAWmmkrmApIjxP-8hlXk9rEnkpsZBfNOWnaqSRrWAOVMhyyqjPjpD_KnZgyU2WDynXqN9at_OrlWEHwvTXkSF1hoGhZWFT1-Z2yeuZqjWA',
    span: 'md:col-span-2 md:row-span-2',
    large: true,
  },
  {
    id: 'archive',
    title: 'Archive Series',
    subtitle: 'Heritage silhouettes reimagined with modern kinetic tech.',
    tag: 'Limited',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlLgdG24JxRY2Kcd6uP-B7LjGy7YrwQEllUlp6iyfZfzyDBqAytI1wPkA7xXDPsh0GKb-weHQuiPxltmk9P8zgpr2t7m2PupOnjRGszl9dkurbZ9ZbmT89Cs9bfXRrvNe8mhoT1pNPWtZiJtud090GJ-mepo0ll0lEXtWDbczJCU6coUCquDEowS233Eg2GpepJwk8Zxdp8_Wpv6fmul8Zej0y21zBnXA3fa3wzXYZ8hrSWEQFh-wvwHX6lRo2rT9DU3MXOGDAyHs',
    span: 'md:col-span-2',
    large: false,
  },
  {
    id: 'seasonal',
    title: 'Seasonal Essentials',
    subtitle: 'Core rotation picks curated for the modern wardrobe.',
    tag: 'Curated',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmJFN_bgJycM55Rrgx7SXpzPR7Tuho6XnpZFGwNxX10vyVsAq80rCPjcJt4aufc_FRhLoexYmVxQ2uoV9hXw6Xicgkg5cEB_SRzoTRMX8YDfEan40Dp9oaaZZDeb1piOEogaUvPkHehOmwXritNXtQ6pnMBNc-37sBtBLz32GRSRX7PiAieBYRUXJ36iEHhDPj1G0eEbas486rdfODh2yhlgQxRBTIbbXNMs9g8uVoGFK6BUntRckhL4iKiqS4bwnws9LzFhTa19U',
    span: 'md:col-span-2',
    large: false,
  },
]

function CollectionCard({ collection }) {
  const routeKey = CURATED_COLLECTION_ROUTES[collection.id] ?? 'collections'

  return (
    <Link
      to={getShopCollectionUrl(routeKey)}
      className={`group relative overflow-hidden rounded-2xl ${collection.span} ${collection.large ? 'min-h-[420px] md:min-h-[560px]' : 'min-h-[280px] md:min-h-[320px]'}`}
    >
      <img
        src={collection.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
        {collection.tag && (
          <span className="mb-3 inline-block rounded-full bg-accent-blue px-3 py-1 font-sora text-[10px] font-bold uppercase tracking-widest text-background">
            {collection.tag}
          </span>
        )}
        <h3
          className={`font-anton uppercase text-white ${collection.large ? 'text-3xl sm:text-4xl md:text-[48px] md:leading-tight' : 'text-2xl sm:text-[32px] sm:leading-tight'}`}
        >
          {collection.title}
        </h3>
        <p className="mt-2 max-w-md font-sora text-sm text-white/70 sm:text-base">
          {collection.subtitle}
        </p>
        {collection.date && (
          <div className="mt-3 flex items-center gap-2 font-sora text-sm text-accent-blue">
            <MaterialSymbol name="schedule" className="text-lg" />
            <span className="font-semibold">DROP: {collection.date}</span>
          </div>
        )}
        <span className="mt-4 inline-flex items-center gap-2 font-sora text-sm font-semibold uppercase tracking-[0.05em] text-accent-blue transition-all group-hover:gap-4">
          Explore Collection
          <MaterialSymbol name="arrow_forward" className="text-lg" />
        </span>
      </div>
    </Link>
  )
}

function DropBanner() {
  const line =
    'NEXT DROP: 12.04.24 — KINETIC x MOTO COLLECTION — NEXT DROP: 12.04.24 — KINETIC x MOTO COLLECTION — '

  return (
    <div className="relative w-full overflow-hidden bg-accent-blue py-3">
      <div
        className="flex w-max animate-[marquee-scroll_25s_linear_infinite] items-center gap-8 whitespace-nowrap motion-reduce:animate-none"
        style={{ willChange: 'transform' }}
      >
        {[line, line, line, line].map((chunk, i) => (
          <span
            key={i}
            className="font-anton text-lg uppercase tracking-tight text-background md:text-2xl"
          >
            {chunk}
          </span>
        ))}
      </div>
    </div>
  )
}

function CollectionsShowcase() {
  return (
    <>
      <section
        id="collections"
        className="scroll-mt-28 border-t border-white/5 pt-20"
        aria-labelledby="collections-heading"
      >
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="collections-heading"
              className="font-anton text-4xl uppercase tracking-tight text-white md:text-5xl"
            >
              Curated Collections
            </h2>
            <div className="mt-2 h-1 w-24 bg-accent-blue" />
          </div>
          <p className="max-w-md font-sora text-base text-on-surface-variant">
            Hand-picked assortments built around theme, tech, and taste.
            Discover the sets that define each season.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
          {COLLECTIONS.map((col) => (
            <CollectionCard key={col.id} collection={col} />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <DropBanner />
      </div>
    </>
  )
}

export default CollectionsShowcase
