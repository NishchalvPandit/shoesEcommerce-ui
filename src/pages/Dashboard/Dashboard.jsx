import { useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'
import { useCart } from '../../context/CartContext'

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Overview', active: true, filled: true },
  { icon: 'history', label: 'Order History' },
  { icon: 'favorite', label: 'Wishlist' },
  { icon: 'location_on', label: 'Saved Addresses' },
  { icon: 'settings', label: 'Account Settings' },
]

const ORDERS = [
  {
    id: 'KN-99201',
    name: "KINETIC PHANTOM G3 — 'ELECTRIC'",
    status: 'DELIVERED',
    date: 'Delivered • Jan 12, 2024',
    progress: 100,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6lHANvP4e_d-gs-O8-V-kp0jQVNZzxtJY1KgzVzV0DcPo3QArxf7q4EeYEGVOsMbe2vGNzcRqn8beDqt70B1eCxYxVjJZt28zUnkMD3gDJdBidNy2H8NHeDb5Jkq2EQKIBSCV5IEWIOnJszOqLMg4BbhDzYolm3LA1igF_bpkb7g8cAHbNODcz7y64-uRYjS3z5Q2sIsVBySTgvr2FE9hUN3LZAZ_lCAaoo_OXKSfsVaxvzKfE1q37OzkHk-ellAXJy7pZIESwZk',
  },
  {
    id: 'KN-98442',
    name: "ARC RUNNER V2 — 'COBALT'",
    status: 'SHIPPED',
    date: 'Shipped • Jan 10, 2024',
    progress: 65,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhMNAfaMOXln2Dvgfa6spYrpYPSp3O3SK4hxPkmvjEVynWSt0zXT3ELzm-QdV-Y8hQxiKwIsud3rRuVDiVBF6uFuxAtd6s_OX_qB4ULi6Zf4TiskX0eu7XqSfN67i44ShUnpFrpBssWewNhu_jzFMn85HevRpmJFaqlgye4Ef0zm5obpRwJsVI453mgw8rVIN9b36PTvCnVQz4EosjmsyPTStPzrkoGskyoLoZUv8AjXwCTqVRkODMhmHJFkZp1XE1lTazgMAKn_k',
  },
]

const SAVED_ITEMS = [
  {
    id: 'carbon-elite-x1',
    tag: 'ARCHIVE COLLECTION',
    name: 'CARBON ELITE X1',
    price: '$240.00',
    stock: 'RESTOCK SOON',
    stockTone: 'neutral',
    rotate: '-rotate-12',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPvOAVOyFgE3et-DuY6qbTf4taDW7YklW0-TYEtvsQcaI0G06FFEwasZQPs8SJ9t7lzRe0d58B2rHXnHhpyJV21cYroYezVJ-SW_EYkQJBoXNO_MA2_UHXmCnL_TKSHtTt-K3Hmr20_qww9G5bczDxLwhvdcWLE9hzv1ASgc2F9ISrGDHJdBoC4Hq-ZcbwUhSu_cG8XdB06_jNHNFisk-gS9KN0zqvbTDJ4H7tUw5irYX9ETaBI8mM_TeLTs3fS04k4CGMowwcnLU',
  },
  {
    id: 'nova-blitz-v4',
    tag: 'PERFORMANCE',
    name: 'NOVA BLITZ V4',
    price: '$185.00',
    stock: 'IN STOCK',
    stockTone: 'neutral',
    rotate: 'rotate-6',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwz0ZzewiL1rIwhcNPfUK-DOtN99ibNKQElyrsy8FpR9VZhtWTty-Hu71ErDJbOSjKLq_KktKs-QBxlnHUYP0rqut1SsPWeLHg2--yfEnJJeIat36D5BDJqZatYq00iWC1-bTrZLTJSyJlvGxwCqRoVIfh6sdgQG11qfTHCKBiQUMoVSDEHEau2awRq8jLGo8wlWakMj-Y3pvzO5v6w5KFlNL3vBeVUnZw4jDDn9hL3RBbUxTrqSY9baz6bcTYPCUjxWa32Mu-EnY',
  },
  {
    id: 'cyber-walk-01',
    tag: 'LIFESTYLE',
    name: 'CYBER_WALK 01',
    price: '$310.00',
    stock: 'LAST 2 LEFT',
    stockTone: 'error',
    rotate: '-rotate-6',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGx8RGrAGVLp2Q0SUgeYCm5iwSt7Ib7g-iGDA0B1d6ASCRO42LaFlYK8DhiWehxnroHNatMi6Fs-e7otDX2O6C8geT_7bm0XAUh79Sv4mRJWmf8_XZ_hU0BKRCoshJUlEwQGw9vkTDesdF7dKNZHDZd-vnPc9Rifol5lVngL3G5rRFodatQI4Xeo6YUwzCNQ2EZOGR4RgX_E0QN16sx9_1TUYA8VTUOqDBLYrHqK6PYSN61Qp43wY4YvHXowGZX_BlHCzrvQqTZtQ',
  },
]

function Dashboard() {
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  const handleQuickAdd = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.img,
      subtitle: item.tag,
    })
    setAddedId(item.id)
    window.setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <div className="pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row lg:gap-8">
          {/* Sidebar */}
          <aside className="w-full flex-shrink-0 md:w-60 lg:w-64">
            <div className="glass-panel flex flex-col gap-2 rounded-xl p-6">
              <div className="mb-4 border-b border-white/5 pb-4">
                <h2 className="font-anton text-xl uppercase tracking-tight text-white">DASHBOARD</h2>
                <p className="font-sora text-xs text-on-tertiary-container">ELITE MEMBER SINCE 2024</p>
              </div>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={
                    'flex items-center gap-3 rounded-lg p-3 text-left transition-all ' +
                    (item.active
                      ? 'bg-white/5 text-accent-blue'
                      : 'text-on-surface-variant hover:bg-white/5')
                  }
                >
                  <MaterialSymbol name={item.icon} filled={item.filled} />
                  <span className="font-sora text-sm font-semibold">{item.label}</span>
                </button>
              ))}
              <div className="mt-8 border-t border-white/5 pt-4">
                <Link
                  to="/login"
                  className="flex w-full items-center gap-3 p-3 font-sora text-sm font-semibold text-[#ffb4ab] opacity-80 transition-all hover:opacity-100"
                >
                  <MaterialSymbol name="logout" />
                  Sign Out
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <section className="flex flex-grow flex-col gap-10">
            {/* Welcome header */}
            <header className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-sora text-sm font-semibold uppercase tracking-widest text-accent-blue">
                  WELCOME BACK, NISHCHAL
                </span>
                <h1 className="mt-2 font-anton text-4xl font-bold uppercase text-white md:text-5xl">
                  Active Performance Hub
                </h1>
              </div>
              <div className="flex gap-8 rounded-xl border border-white/5 bg-surface-container-high p-4">
                <div className="text-center">
                  <p className="font-sora text-xs uppercase text-on-tertiary-container">Points</p>
                  <p className="font-anton text-2xl text-white">2,450</p>
                </div>
                <div className="border-l border-white/10 pl-8 text-center">
                  <p className="font-sora text-xs uppercase text-on-tertiary-container">Tier</p>
                  <p className="font-anton text-2xl text-accent-blue">PHANTOM</p>
                </div>
              </div>
            </header>

            {/* Recent orders */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-anton text-2xl font-bold uppercase tracking-tight text-white">
                  RECENT ORDERS
                </h3>
                <button
                  type="button"
                  className="font-sora text-xs font-semibold uppercase text-accent-blue hover:underline"
                >
                  VIEW ALL
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {ORDERS.map((order, idx) => (
                  <div
                    key={order.id}
                    className={
                      'glass-panel relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 lg:flex-row lg:items-center ' +
                      (idx > 0 ? 'opacity-80 hover:opacity-100 transition-opacity' : '')
                    }
                  >
                    {idx === 0 && (
                      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-accent-blue/5 to-transparent" />
                    )}
                    <div className="flex items-center gap-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-white/5 bg-surface-container-high">
                        <img
                          src={order.img}
                          alt={order.name}
                          className={
                            'h-full w-full object-cover transition-all duration-500 ' +
                            (idx === 0 ? 'grayscale hover:grayscale-0' : 'grayscale')
                          }
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-sora text-xs text-on-tertiary-container">ORDER #{order.id}</p>
                        <h4 className="font-anton text-lg uppercase text-white">{order.name}</h4>
                        <p className="mt-1 font-sora text-sm text-on-surface-variant">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex min-w-[240px] flex-col gap-4">
                      <div className="mb-1 flex justify-between font-sora text-xs font-semibold">
                        <span className="text-on-tertiary-container">STATUS: {order.status}</span>
                        <span className="text-accent-blue">{order.progress}%</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-accent-blue shadow-[0_0_8px_rgba(0,224,255,0.5)]"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          className="flex-grow rounded-lg bg-white py-3 font-sora text-xs font-semibold uppercase text-background transition-colors hover:bg-accent-blue hover:text-white"
                        >
                          Track Shipment
                        </button>
                        <button
                          type="button"
                          className="rounded-lg border border-white/10 px-4 py-3 text-on-surface transition-colors hover:bg-white/5"
                        >
                          <MaterialSymbol name="more_horiz" className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved items */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-anton text-2xl font-bold uppercase tracking-tight text-white">
                  SAVED ITEMS
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:bg-white/5"
                  >
                    <MaterialSymbol name="grid_view" className="text-sm" />
                  </button>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-on-tertiary-container"
                  >
                    <MaterialSymbol name="list" className="text-sm" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {SAVED_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-transparent bg-[#111111] p-6 premium-shadow transition-all duration-500 hover:border-white/10"
                  >
                    <div className="absolute right-4 top-4 z-10">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/50 text-accent-blue backdrop-blur-md transition-transform active:scale-90"
                        aria-label="Remove from wishlist"
                      >
                        <MaterialSymbol name="favorite" filled />
                      </button>
                    </div>
                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-surface-container-high to-black">
                      <img
                        src={item.img}
                        alt={item.name}
                        className={
                          'h-auto w-4/5 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:' +
                          item.rotate
                        }
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div>
                      <p className="font-sora text-xs uppercase tracking-widest text-on-tertiary-container">
                        {item.tag}
                      </p>
                      <h5 className="mt-1 font-anton text-lg uppercase text-white">{item.name}</h5>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-sora text-sm font-semibold text-accent-blue">
                          {item.price}
                        </span>
                        <span
                          className={
                            'rounded px-2 py-1 font-sora text-xs ' +
                            (item.stockTone === 'error'
                              ? 'bg-[#ffb4ab]/10 text-[#ffb4ab]'
                              : 'bg-white/5 text-on-surface-variant')
                          }
                        >
                          {item.stock}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(item)}
                      className={
                        'w-full rounded-xl border border-white/10 py-4 font-sora text-xs font-semibold uppercase transition-all ' +
                        (addedId === item.id
                          ? 'bg-accent-blue text-white'
                          : 'group-hover:bg-white group-hover:text-background')
                      }
                    >
                      {addedId === item.id ? 'Added!' : 'Quick Add'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
