import Image from 'next/image'

export default function ProductCard({ name, price, imageSrc }) {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition">
      <div className="relative aspect-square bg-pastelCream/60">
        <Image src={imageSrc} alt={name} fill className="object-contain p-6" />
      </div>
      <div className="p-4">
        <div className="font-semibold">{name}</div>
        <div className="text-cocoa/70">{price}</div>
      </div>
    </div>
  )
}

