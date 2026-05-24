import { useState } from "react";

function NewsletterCTA() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="mx-auto max-w-[1440px] px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-16"
      aria-labelledby="newsletter-heading"
    >
      <div className="glass-panel relative overflow-hidden rounded-3xl py-12 sm:py-14">
        {/* Local "carbon-fibre" texture rendered via CSS gradients — no third-party requests. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.6)_0_1px,transparent_1px_3px),repeating-linear-gradient(-45deg,rgba(255,255,255,0.5)_0_1px,transparent_1px_3px)] [background-size:6px_6px,6px_6px]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-6">
          <h2
            id="newsletter-heading"
            className="font-anton text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase leading-[1] text-white"
          >
            Join the inner circle
          </h2>
          <p className="mt-4 font-sora text-base text-on-surface-variant sm:text-lg">
            Access early drops, exclusive collaborations, and elite performance
            insights. No spam, just power.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 md:flex-row md:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className={
                "min-h-12 flex-grow rounded-xl border border-white/10 bg-surface-container px-4 py-3 font-sora text-sm " +
                "font-semibold uppercase tracking-wider text-white outline-none placeholder:text-on-tertiary-container " +
                "focus:ring-2 focus:ring-accent-blue"
              }
            />
            <button
              type="submit"
              className={
                "min-h-12 shrink-0 rounded-xl bg-white px-5 font-anton text-[20px] font-black uppercase leading-none text-background antialiased " +
                "[text-shadow:0.5px_0_0_currentColor,-0.5px_0_0_currentColor,0_0.5px_0_currentColor,0_-0.5px_0_currentColor] " +
                "transition-colors hover:bg-accent-blue hover:text-background whitespace-nowrap"
              }
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterCTA;
