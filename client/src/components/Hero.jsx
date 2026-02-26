export default function Hero({ title, subtitle, cta }) {
  return (
    <section className="relative bg-navy-700 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-600 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            {subtitle}
          </p>
        )}
        {cta && (
          <a
            href={cta.href}
            className="inline-block bg-white text-navy-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-lg"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
