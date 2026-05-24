import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'

function Signup() {
  const navigate = useNavigate()
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="-mt-20 flex min-h-screen items-center justify-center bg-background">
      <section className="flex w-full flex-col items-center justify-center overflow-y-auto px-5 py-12">
        <div className="w-full max-w-md space-y-10">
          <div className="mb-12 flex justify-center">
            <Link to="/" className="font-anton text-3xl tracking-tighter text-on-surface">
              KINETIC
            </Link>
          </div>

          <div className="space-y-2">
            <h2 className="font-anton text-5xl font-bold uppercase text-on-surface">
              Join the Collective
            </h2>
            <p className="font-sora text-base text-on-surface-variant">
              Create your KINETIC account and unlock elite access.
            </p>
          </div>

          {/* Social signups */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="glass-panel flex items-center justify-center gap-3 rounded-xl py-4 transition-all hover:bg-surface-variant active:scale-[0.98]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#e2e2e2" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#e2e2e2" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#e2e2e2" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#e2e2e2" />
              </svg>
              <span className="font-sora text-sm font-semibold">GOOGLE</span>
            </button>
            <button
              type="button"
              className="glass-panel flex items-center justify-center gap-3 rounded-xl py-4 transition-all hover:bg-surface-variant active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.11.74.82 0 1.93-.89 3.51-.72 1.63.18 2.84.88 3.59 2.07-3.23 1.93-2.69 6.22.48 7.51-.65 1.66-1.57 3.25-2.69 3.37zm-3.02-13.8c-.06-3.1 2.58-5.69 5.51-5.48.33 3.42-3.14 5.92-5.51 5.48z" />
              </svg>
              <span className="font-sora text-sm font-semibold">APPLE</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10" />
            <span className="mx-4 shrink-0 font-sora text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
              OR USE EMAIL
            </span>
            <div className="flex-grow border-t border-white/10" />
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="input-gradient-focus relative rounded-xl bg-surface-container-low transition-all duration-300">
                <label
                  htmlFor="signup-name"
                  className="absolute left-4 top-3 font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container"
                >
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Nishchal Pandit"
                  className="w-full border-none bg-transparent px-4 pb-3 pt-7 font-sora text-base text-on-surface outline-none ring-0 placeholder:text-surface-variant focus:ring-0"
                />
              </div>
              <div className="input-gradient-focus relative rounded-xl bg-surface-container-low transition-all duration-300">
                <label
                  htmlFor="signup-email"
                  className="absolute left-4 top-3 font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container"
                >
                  Email ID
                </label>
                <input
                  id="signup-email"
                  type="email"
                  autoComplete="email"
                  placeholder="nishchalpandit@gmail.com"
                  className="w-full border-none bg-transparent px-4 pb-3 pt-7 font-sora text-base text-on-surface outline-none ring-0 placeholder:text-surface-variant focus:ring-0"
                />
              </div>
              <div className="input-gradient-focus relative rounded-xl bg-surface-container-low transition-all duration-300">
                <label
                  htmlFor="signup-pw"
                  className="absolute left-4 top-3 font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container"
                >
                  Password
                </label>
                <input
                  id="signup-pw"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="••••••••••••"
                  className="w-full border-none bg-transparent px-4 pb-3 pt-7 font-sora text-base text-on-surface outline-none ring-0 placeholder:text-surface-variant focus:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute bottom-3 right-4 text-on-tertiary-container transition-colors hover:text-on-surface"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  <MaterialSymbol name={showPw ? 'visibility_off' : 'visibility'} className="text-lg" />
                </button>
              </div>
            </div>

            <label className="group flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-white/10 bg-surface-container-high text-accent-blue focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-sora text-sm font-semibold text-on-surface-variant transition-colors group-hover:text-on-surface">
                I agree to the{' '}
                <Link to="#" className="text-on-surface underline underline-offset-4 decoration-white/30">
                  Terms
                </Link>{' '}
                &amp;{' '}
                <Link to="#" className="text-on-surface underline underline-offset-4 decoration-white/30">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className={
                'w-full rounded-none bg-white px-4 py-4 font-anton text-[20px] font-black uppercase leading-none text-background antialiased ' +
                '[text-shadow:0.5px_0_0_currentColor,-0.5px_0_0_currentColor,0_0.5px_0_currentColor,0_-0.5px_0_currentColor] ' +
                'transition-colors hover:bg-accent-blue hover:text-background active:scale-[0.97]'
              }
            >
              Sign Up
            </button>
          </form>

          <div className="pt-4 text-center">
            <p className="font-sora text-base text-on-surface-variant">
              Already a member?{' '}
              <Link
                to="/login"
                className="ml-1 font-sora text-sm font-semibold uppercase text-on-surface transition-colors hover:text-accent-blue"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-20 w-full max-w-md">
          <div className="flex items-center justify-between font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container">
            <span>© 2024 KINETIC LABS</span>
            <div className="flex gap-4">
              <Link to="#" className="transition-colors hover:text-on-surface">Privacy</Link>
              <Link to="#" className="transition-colors hover:text-on-surface">Terms</Link>
            </div>
          </div>
        </footer>
      </section>

      {/* Close button */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="glass-panel fixed right-8 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full text-on-surface transition-all hover:bg-surface-variant"
        aria-label="Close"
      >
        <MaterialSymbol name="close" />
      </button>
    </div>
  )
}

export default Signup
