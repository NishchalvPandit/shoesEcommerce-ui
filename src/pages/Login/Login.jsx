import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'

function Login() {
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
              Enter the Lab
            </h2>
            <p className="font-sora text-base text-on-surface-variant">
              Sign in to your KINETIC performance account.
            </p>
          </div>

          {/* Demo notice — this is a portfolio UI, no real authentication or data collection. */}
          <div
            role="note"
            className="rounded-xl border border-white/10 bg-surface-container px-4 py-3 font-sora text-xs text-on-surface-variant"
          >
            <strong className="text-on-surface">Demo UI</strong> — this storefront is a portfolio
            project. No credentials are submitted, stored, or transmitted anywhere.
          </div>

          {/* Form */}
          <form
            className="space-y-6"
            autoComplete="off"
            data-form-type="other"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div className="input-gradient-focus relative rounded-xl bg-surface-container-low transition-all duration-300">
                <label
                  htmlFor="login-email"
                  className="absolute left-4 top-3 font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container"
                >
                  Email ID
                </label>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="off"
                  placeholder="you@example.com"
                  className="w-full border-none bg-transparent px-4 pb-3 pt-7 font-sora text-base text-on-surface outline-none ring-0 placeholder:text-surface-variant focus:ring-0"
                />
              </div>
              <div className="input-gradient-focus relative rounded-xl bg-surface-container-low transition-all duration-300">
                <label
                  htmlFor="login-pw"
                  className="absolute left-4 top-3 font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container"
                >
                  Password
                </label>
                <input
                  id="login-pw"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="off"
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

            <div className="flex items-center justify-between">
              <label className="group flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-white/10 bg-surface-container-high text-accent-blue focus:ring-0 focus:ring-offset-0"
                />
                <span className="font-sora text-sm font-semibold text-on-surface-variant transition-colors group-hover:text-on-surface">
                  Remember athlete
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="font-sora text-sm font-semibold text-on-surface decoration-white/30 underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className={
                'w-full rounded-none bg-white px-4 py-4 font-anton text-[20px] font-black uppercase leading-none text-background antialiased ' +
                '[text-shadow:0.5px_0_0_currentColor,-0.5px_0_0_currentColor,0_0.5px_0_currentColor,0_-0.5px_0_currentColor] ' +
                'transition-colors hover:bg-accent-blue hover:text-background active:scale-[0.97]'
              }
            >
              Log In
            </button>
          </form>

          <div className="pt-4 text-center">
            <p className="font-sora text-base text-on-surface-variant">
              Not a member yet?{' '}
              <Link
                to="/signup"
                className="ml-1 font-sora text-sm font-semibold uppercase text-on-surface transition-colors hover:text-accent-blue"
              >
                Join the Collective
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

export default Login
