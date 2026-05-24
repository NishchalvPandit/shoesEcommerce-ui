import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.65" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.65" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

function IconYoutube({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 9l5 3-5 3V9z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.65" />
    </svg>
  )
}

const company = [
  { label: 'Drops', to: '/' },
  { label: 'About', to: '/about' },
]

const support = [
  { label: 'Help center', to: '/support' },
  { label: 'Shipping', to: '/shipping' },
  { label: 'Returns', to: '/returns' },
  { label: 'Warranty', to: '/warranty' },
]

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] bg-[#0E0E0E]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className={
                'inline-block font-anton font-black uppercase tracking-[0.14em] ' +
                'text-[length:clamp(1.1rem,2vw,1.35rem)] leading-none ' +
                'bg-gradient-to-br from-[#f5f5f5] via-[#e2e2e2] to-[#a8f4ff] bg-clip-text text-transparent'
              }
            >
              KINETIC
            </Link>
            <p className="mt-5 max-w-xs font-sora text-sm leading-relaxed text-[#757575]">
              Futurist performance footwear—precision-tuned for velocity, control, and presence in neon-lit arenas.
            </p>
          </div>

          <div>
            <p className="font-sora text-[11px] font-semibold uppercase tracking-[0.35em] text-[#CFC4C5]">Company</p>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-sora text-sm text-[#757575] transition-colors duration-300 hover:text-[#00E0FF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sora text-[11px] font-semibold uppercase tracking-[0.35em] text-[#CFC4C5]">Support</p>
            <ul className="mt-5 space-y-3">
              {support.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-sora text-sm text-[#757575] transition-colors duration-300 hover:text-[#00E0FF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sora text-[11px] font-semibold uppercase tracking-[0.35em] text-[#CFC4C5]">Connect</p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={
                  'inline-flex rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1F1F1F] p-3 text-[#E2E2E2] ' +
                  'transition-all duration-300 hover:border-[#00E0FF]/40 hover:text-[#00E0FF] hover:shadow-[0_0_20px_rgba(0,224,255,0.15)]'
                }
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className={
                  'inline-flex rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1F1F1F] p-3 text-[#E2E2E2] ' +
                  'transition-all duration-300 hover:border-[#00E0FF]/40 hover:text-[#00E0FF] hover:shadow-[0_0_20px_rgba(0,224,255,0.15)]'
                }
              >
                <X className="h-5 w-5" strokeWidth={1.65} aria-hidden />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className={
                  'inline-flex rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1F1F1F] p-3 text-[#E2E2E2] ' +
                  'transition-all duration-300 hover:border-[#00E0FF]/40 hover:text-[#00E0FF] hover:shadow-[0_0_20px_rgba(0,224,255,0.15)]'
                }
              >
                <IconYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sora text-xs text-[#757575]">© {new Date().getFullYear()} Kinetic. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 font-sora text-xs text-[#757575]">
            <Link to="/privacy" className="transition-colors duration-300 hover:text-[#00E0FF]">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors duration-300 hover:text-[#00E0FF]">
              Terms
            </Link>
            <Link to="/cookies" className="transition-colors duration-300 hover:text-[#00E0FF]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
