export default function CategoryCard({ name, emoji }) {
  return (
    <div className="card p-6 flex flex-col items-center justify-center text-center gap-2 hover:shadow-lg transition">
      <div className="text-3xl">{emoji}</div>
      <div className="font-semibold">{name}</div>
    </div>
  )
}

