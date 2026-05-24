const features = ['EXPLOSIVE', 'RESPONSIVE', 'AGILE', 'STABLE', 'ENDURANCE']

function Features() {
  return (
    <section className="border-y border-white/10 py-6 sm:py-8" aria-label="Performance pillars">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:px-8 lg:px-16">
        {features.map((name) => (
          <span key={name} className="font-anton text-[clamp(1.25rem,4vw,2rem)] font-bold text-white">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Features
