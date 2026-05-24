function MarqueeStrip() {
  const line = 'THE DROP: 09:00:00 — THE DROP: 09:00:00 — THE DROP: 09:00:00 — THE DROP: 09:00:00 — THE DROP: 09:00:00 — '
  const blocks = [line, line]

  return (
    <div className="relative w-full overflow-hidden bg-accent-blue py-1.5">
      <div
        className="flex w-max animate-[marquee-scroll_20s_linear_infinite] motion-reduce:animate-none items-center gap-8 whitespace-nowrap font-anton text-sm font-bold italic leading-none text-background md:text-base"
        style={{ willChange: 'transform' }}
      >
        {[...blocks, ...blocks].map((chunk, i) => (
          <span key={i}>{chunk}</span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip
