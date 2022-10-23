export default function Hero({ children, title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="py-2 dark:text-white text-3xl font-mono tracking-tight font-bold">{title}</h2>
      <p className="pb-2 text-gray-500 text-2xl">{subtitle}</p>
      <p className="pb-2 text-gray-500 text-2xl">{children}</p>
    </div>
  )
}
