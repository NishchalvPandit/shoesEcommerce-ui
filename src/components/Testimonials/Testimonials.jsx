import MaterialSymbol from "../MaterialSymbol/MaterialSymbol";

const testimonials = [
  {
    quote:
      "The energy return on the Alpha is unlike anything I've experienced. It feels like the shoe is actively propelling me forward.",
    name: "Nishchal Pandit",
    role: "Professional Sprinter",
    featured: false,
  },
  {
    quote:
      "KINETIC bridged the gap between pure high-performance gear and the aesthetic I need for my gallery openings. Pure genius.",
    name: "Ishowspeed",
    role: "Creative Director",
    featured: true,
  },
  {
    quote:
      "Durability usually means heavy. Not here. These have survived 500 miles and still look and feel like Day 1.",
    name: "Biraj Bhatta",
    role: "Ultra-marathoner",
    featured: false,
  },
];

function Testimonials() {
  return (
    <section
      className="bg-surface-container-lowest py-24"
      aria-labelledby="voices-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="mb-16 text-center">
          <h2
            id="voices-heading"
            className="font-anton text-5xl font-bold uppercase text-white md:text-[48px]"
          >
            Voices of the Elite
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
            KINETIC is the choice of world-record holders and streetwear icons
            alike.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className={`glass-panel flex flex-col gap-4 rounded-xl p-8 ${item.featured ? "border border-accent-blue/30" : ""}`}
            >
              <div className="flex text-accent-blue">
                {Array.from({ length: 5 }).map((_, i) => (
                  <MaterialSymbol
                    key={i}
                    name="star"
                    className="text-[22px]"
                    filled
                  />
                ))}
              </div>
              <blockquote className="font-sora text-lg italic leading-relaxed text-on-surface">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <p className="font-anton text-[18px] font-bold uppercase text-white">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-on-tertiary-container">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
