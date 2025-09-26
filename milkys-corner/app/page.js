import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'

const products = [
  { name: 'Milky Plushie', price: '$24.00', imageSrc: '/plushie.svg' },
  { name: 'Pastel Mug', price: '$14.00', imageSrc: '/mug.svg' },
  { name: 'Cute Mousepad', price: '$12.00', imageSrc: '/mousepad.svg' },
]

const categories = [
  { name: 'Plushies', emoji: '🧸' },
  { name: 'Stationery', emoji: '🖊️' },
  { name: 'Drinkware', emoji: '☕' },
  { name: 'Desk Items', emoji: '🖥️' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section id="shop" className="container-padded mt-12">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Featured Products</h2>
            <a className="text-sm underline" href="#">See all</a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        <section className="container-padded mt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Collections</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((c) => (
              <CategoryCard key={c.name} {...c} />
            ))}
          </div>
        </section>

        <section id="about" className="container-padded mt-12">
          <div className="card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold">About Milky’s Corner</h2>
              <p className="mt-3 text-cocoa/80">
                Milky’s Corner is a tiny pastel paradise inspired by cozy cafés and
                adorable mascots. This is a fake storefront made for fun and
                learning. Browse plushies, stationery, drinkware, and desk items —
                all curated with love by Milky.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pastelMint to-pastelLavender flex items-center justify-center shadow-soft">
                <span className="text-5xl">🐰</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

