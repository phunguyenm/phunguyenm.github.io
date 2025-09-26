import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-pastelCream/80 backdrop-blur border-b border-pastelPink/50">
      <div className="container-padded flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl sm:text-2xl font-bold">Milky's Corner</Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#shop" className="hover:underline">Shop</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

