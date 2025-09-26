import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container-padded mt-8">
      <div className="card overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 sm:p-12 flex flex-col justify-center gap-4">
          <span className="pill w-max">Welcome</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to Milky’s Corner
          </h1>
          <p className="text-cocoa/80">
            Cozy goodies in soft pastels. Plushies, mugs, and desk delights curated
            by our mascot Milky.
          </p>
          <div>
            <a href="#shop" className="btn-primary">Start Shopping</a>
          </div>
        </div>
        <div className="relative min-h-[240px] bg-gradient-to-br from-pastelPink via-pastelLavender to-pastelMint">
          <Image src="/mascot.svg" alt="Milky mascot" fill className="object-contain p-8 drop-shadow" priority />
        </div>
      </div>
    </section>
  )
}

