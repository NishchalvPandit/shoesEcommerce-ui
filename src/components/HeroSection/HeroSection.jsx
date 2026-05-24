import { Link } from "react-router-dom";
import { getShopCollectionUrl } from "../../data/shopCollections";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASJc_Yr2A1Xyyza1AJFg1Giup1zqQbaXHCMTk-3qzyt4uY6QwroJ8Q522u5KErp0ahuaYQVR0neB35ZjxEkOGXv5rIii19sIvmlYl4-drlUAFkX2N1nYvSHUmPdYg56U4ALzVh5x73wMUNXUKrQ-ZKIoeWcjqRjmL-zhAqkEbxP0lflcywEDvTZ8LE8EEEoW9fDZnPVuM9kEuH5wGsiz9WUTVNO8l0061Su_XVkovD83AgEPNTGJao4As4gMq3G-7ukeFW1fij8I4";

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mb-12 flex min-h-screen items-center overflow-hidden bg-background pt-20 md:mb-16 lg:mb-20"
    >
      <div className="sneaker-spotlight pointer-events-none absolute inset-0 z-0" />
      <p
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-anton text-[25vw] font-bold uppercase leading-none text-white opacity-[0.03]"
        aria-hidden
      >
        KINETIC ALPHA
      </p>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-6 px-5 sm:px-8 md:grid-cols-12 lg:gap-6 lg:px-16">
        <div className="order-1 flex flex-col gap-6 md:order-none md:col-span-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/10 px-4 py-1 text-accent-blue">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-accent-blue"
              aria-hidden
            />
            <span className="font-sora text-sm font-semibold uppercase tracking-[0.05em]">
              New arrival
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-anton text-[clamp(2.25rem,10vw,5rem)] font-bold uppercase leading-snug tracking-[0.02em] text-white"
          >
            Engineered for <br /> the elite
          </h1>

          <p className="max-w-lg font-sora text-lg leading-loose text-on-surface-variant">
            The KINETIC ALPHA represents the pinnacle of athletic engineering.
            40% lighter, 100% more explosive. Redefine your boundaries.
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className={
                "rounded-none bg-white px-4 py-2 font-anton text-[20px] font-black uppercase leading-none text-background antialiased " +
                "[text-shadow:0.5px_0_0_currentColor,-0.5px_0_0_currentColor,0_0.5px_0_currentColor,0_-0.5px_0_currentColor] " +
                "transition-colors hover:bg-accent-blue hover:text-background"
              }
            >
              Shop Alpha
            </Link>
            <Link
              to={getShopCollectionUrl("lifestyle")}
              className={
                "rounded-none border-2 border-white bg-transparent px-4 py-2 font-anton text-[20px] font-black uppercase leading-none text-white antialiased " +
                "[text-shadow:0.5px_0_0_currentColor,-0.5px_0_0_currentColor,0_0.5px_0_currentColor,0_-0.5px_0_currentColor] " +
                "transition-colors hover:bg-white/10"
              }
            >
              Exploration
            </Link>
          </div>
        </div>

        <div className="relative order-2 mt-8 md:order-none md:col-span-6 md:mt-0 md:-translate-y-4 lg:-translate-y-6">
          <img
            src={HERO_IMG}
            alt="KINETIC ALPHA performance sneaker with cyan accents"
            width={900}
            height={900}
            className={
              'premium-shadow h-auto w-full rotate-0 object-contain md:-rotate-12 ' +
              'drop-shadow-[0_20px_50px_rgba(0,224,255,0.3)] transition-transform duration-700 md:hover:rotate-0'
            }
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
