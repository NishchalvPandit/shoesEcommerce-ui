import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialSymbol from '../../components/MaterialSymbol/MaterialSymbol'

const CTA_CLASSES =
  'w-full rounded-none bg-white px-4 py-4 font-anton text-[20px] font-black uppercase leading-none text-background antialiased ' +
  '[text-shadow:0.5px_0_0_currentColor,-0.5px_0_0_currentColor,0_0.5px_0_currentColor,0_-0.5px_0_currentColor] ' +
  'transition-colors hover:bg-accent-blue hover:text-background active:scale-[0.97]'

function ForgotPassword() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

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
              Forgot Password
            </h2>
            <p className="font-sora text-base text-on-surface-variant">
              {submitted
                ? 'Check your inbox for a reset link. It may take a few minutes to arrive.'
                : 'Enter your email and we’ll send you a link to reset your password.'}
            </p>
          </div>

          {/* Demo notice — portfolio UI, no email is sent. */}
          {!submitted && (
            <div
              role="note"
              className="rounded-xl border border-white/10 bg-surface-container px-4 py-3 font-sora text-xs text-on-surface-variant"
            >
              <strong className="text-on-surface">Demo UI</strong> — this storefront is a portfolio
              project. No email is sent and no data is stored.
            </div>
          )}

          {submitted ? (
            <div className="space-y-6">
              <div className="glass-panel rounded-xl p-6 text-center">
                <MaterialSymbol
                  name="mark_email_read"
                  className="mb-4 inline-block text-4xl text-accent-blue"
                />
                <p className="font-sora text-sm text-on-surface-variant">
                  This is a demo confirmation screen. No real reset email was sent.
                </p>
              </div>
              <Link to="/login" className={`${CTA_CLASSES} block text-center`}>
                Back to Log In
              </Link>
            </div>
          ) : (
            <form
              className="space-y-6"
              autoComplete="off"
              data-form-type="other"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="input-gradient-focus relative rounded-xl bg-surface-container-low transition-all duration-300">
                <label
                  htmlFor="forgot-email"
                  className="absolute left-4 top-3 font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container"
                >
                  Email ID
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  autoComplete="off"
                  required
                  placeholder="you@example.com"
                  className="w-full border-none bg-transparent px-4 pb-3 pt-7 font-sora text-base text-on-surface outline-none ring-0 placeholder:text-surface-variant focus:ring-0"
                />
              </div>

              <button type="submit" className={CTA_CLASSES}>
                Send Reset Link
              </button>
            </form>
          )}

          {!submitted && (
            <div className="pt-4 text-center">
              <p className="font-sora text-base text-on-surface-variant">
                Remember your password?{' '}
                <Link
                  to="/login"
                  className="ml-1 font-sora text-sm font-semibold uppercase text-on-surface transition-colors hover:text-accent-blue"
                >
                  Log In
                </Link>
              </p>
            </div>
          )}
        </div>

        <footer className="mt-20 w-full max-w-md">
          <div className="flex items-center justify-between font-sora text-[10px] font-semibold uppercase tracking-widest text-on-tertiary-container">
            <span>© 2024 KINETIC LABS</span>
            <div className="flex gap-4">
              <Link to="#" className="transition-colors hover:text-on-surface">
                Privacy
              </Link>
              <Link to="#" className="transition-colors hover:text-on-surface">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </section>

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

export default ForgotPassword
