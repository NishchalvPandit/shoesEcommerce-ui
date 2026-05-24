import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import MaterialSymbol from '../MaterialSymbol/MaterialSymbol'
import { useCart } from '../../context/CartContext'
import { getShopCollectionUrl } from '../../data/shopCollections'

const navItems = [
  { label: 'Drops', to: '/', exact: true },
  { label: 'Performance', to: getShopCollectionUrl('performance'), hash: '#performance' },
  { label: 'Lifestyle', to: getShopCollectionUrl('lifestyle'), hash: '#lifestyle' },
  { label: 'Collections', to: getShopCollectionUrl('collections'), hash: '#collections' },
]

function isNavActive(location, item) {
  if (item.exact) {
    return location.pathname === '/' || location.pathname === ''
  }
  const hash = location.hash || ''
  const onShop =
    location.pathname === '/shop' || location.pathname.startsWith('/shop/')
  return onShop && hash === item.hash
}

function StyledNavLinks({ orientation = 'horizontal', onNavigate }) {
  const location = useLocation()

  return (
    <ul
      className={
        orientation === 'horizontal'
          ? 'flex flex-wrap items-center justify-center gap-8 xl:gap-11'
          : 'flex flex-col gap-6'
      }
    >
      {navItems.map((item) => {
        const active = isNavActive(location, item)

        return (
          <li key={item.label}>
            <NavLink
              to={item.to}
              end={item.exact}
              aria-current={active ? 'page' : undefined}
              onClick={onNavigate}
              className={
                'group relative block whitespace-nowrap font-sora font-semibold uppercase tracking-[0.2em] ' +
                'text-[length:clamp(11px,0.95vw,12px)] transition-colors duration-300 ease-out ' +
                (active ? 'text-[#00E0FF]' : 'text-[#cfc4c5] hover:text-[#00E0FF]')
              }
            >
              <span className="relative inline-block pb-3">
                {item.label}
                <span
                  className={
                    'pointer-events-none absolute inset-x-0 bottom-1 h-[2px] rounded-full bg-[#00E0FF] ' +
                    'origin-center shadow-[0_0_12px_rgba(0,224,255,0.45)] ' +
                    'transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
                    (active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-95')
                  }
                />
              </span>
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()

  const closeMenu = () => setMobileOpen(false)

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-[100] h-20 w-full border-b border-white/10 ' +
        'bg-surface/80 shadow-2xl backdrop-blur-xl backdrop-saturate-150'
      }
    >
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-5 sm:px-8 lg:px-10">
        <div className="flex flex-1 items-center justify-start">
          <Link
            to="/"
            className={
              'font-anton font-bold select-none uppercase tracking-[0.16em] ' +
              'text-[length:clamp(1.15rem,2.2vw,1.45rem)] leading-none text-white ' +
              'transition-[filter,transform] duration-300 ease-out hover:text-[#00E0FF] active:scale-[0.98]'
            }
            onClick={closeMenu}
          >
            KINETIC
          </Link>
        </div>

        <nav
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-20 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <div className="pointer-events-auto">
            <StyledNavLinks />
          </div>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-5">
          <div className="group relative hidden items-center lg:flex">
            <label className="sr-only" htmlFor="nav-search">
              Search catalogue
            </label>
            <span className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 text-on-surface-variant transition-colors duration-300 group-focus-within:text-accent-blue">
              <MaterialSymbol name="search" className="text-2xl" />
            </span>
            <input
              id="nav-search"
              type="search"
              placeholder="SEARCH ELITE"
              className={
                'h-11 w-64 rounded-xl border-0 bg-surface-container py-2 pl-10 pr-4 font-sora text-sm font-semibold ' +
                'tracking-wide text-on-surface caret-accent-blue placeholder:text-on-surface-variant ' +
                'outline-none ring-0 transition-shadow duration-300 focus:ring-1 focus:ring-accent-blue'
              }
            />
          </div>

          <Link
            to="/cart"
            aria-label={itemCount > 0 ? `Shopping cart, ${itemCount} items` : 'Shopping cart'}
            className={
              'group relative inline-flex rounded-lg p-2.5 text-on-surface ring-2 ring-transparent ' +
              'transition-all duration-200 hover:bg-white/5 hover:text-accent-blue ' +
              'active:scale-95 motion-reduce:active:scale-100 ' +
              'focus-visible:outline-none focus-visible:ring-accent-blue/50'
            }
            onClick={closeMenu}
          >
            <MaterialSymbol name="shopping_cart" className="text-2xl" />
            {itemCount > 0 && (
              <span
                className={
                  'absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center ' +
                  'rounded-full bg-accent-blue px-1 font-sora text-[10px] font-bold text-background'
                }
              >
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            aria-label="Sign in"
            className={
              'group inline-flex rounded-lg p-2.5 text-on-surface ring-2 ring-transparent ' +
              'transition-all duration-200 hover:bg-white/5 hover:text-accent-blue ' +
              'active:scale-95 motion-reduce:active:scale-100 ' +
              'focus-visible:outline-none focus-visible:ring-accent-blue/50'
            }
            onClick={closeMenu}
          >
            <MaterialSymbol name="person" className="text-2xl" />
          </Link>

          <button
            type="button"
            className={
              '-mr-2 inline-flex rounded-lg p-3 text-[#e2e2e2] transition-all duration-200 ' +
              'hover:bg-[rgba(255,255,255,0.06)] hover:text-[#00E0FF] active:scale-95 lg:hidden'
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={
          'overflow-hidden border-t border-white/10 bg-black/96 ' +
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl ' +
          'transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ' +
          (mobileOpen ? 'max-h-[480px] opacity-100 ' : 'max-h-0 opacity-0 pointer-events-none ') +
          'lg:hidden'
        }
        aria-hidden={!mobileOpen}
      >
        <div className="space-y-6 px-6 py-6">
          <div className="flex items-center gap-3 xl:hidden">
            <MaterialSymbol name="search" className="shrink-0 text-2xl text-accent-blue" />
            <label className="sr-only" htmlFor="mobile-nav-search">
              Search catalogue
            </label>
            <input
              id="mobile-nav-search"
              type="search"
              placeholder="SEARCH ELITE"
              className={
                'h-11 flex-1 rounded-xl border-0 bg-surface-container py-2 px-5 font-sora text-sm font-semibold ' +
                'text-on-surface caret-accent-blue outline-none placeholder:text-on-surface-variant ' +
                'ring-2 ring-transparent focus:ring-accent-blue/40'
              }
            />
          </div>
          <StyledNavLinks orientation="vertical" onNavigate={closeMenu} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
