import Hero from '../components/Hero';

export default function About() {
  return (
    <>
      <Hero
        title="About Chohan Commodities"
        subtitle="A legacy of trust, quality, and global reach since 2009."
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-700 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2009 in Karachi, Pakistan, Chohan Commodities began as a regional distributor of agricultural staples. Over the years, we have evolved into a globally recognized name in commodity trading, exporting premium-quality products to customers across Asia, the Middle East, Europe, and Africa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our deep-rooted relationships with farmers, processors, and logistics partners allow us to deliver consistent quality and competitive pricing. We understand that our clients depend on reliable supply chains, and we take that responsibility seriously.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, with over 15 years of experience, Chohan Commodities stands as a beacon of excellence in the global commodities market, handling rice, grains, spices, and lentils with uncompromising standards.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-700 mb-4">At a Glance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><span className="text-2xl">📅</span><span><strong>Founded:</strong> 2009</span></li>
                <li className="flex items-center gap-3"><span className="text-2xl">📍</span><span><strong>HQ:</strong> Karachi, Pakistan</span></li>
                <li className="flex items-center gap-3"><span className="text-2xl">🌍</span><span><strong>Markets:</strong> Asia, Middle East, Europe, Africa</span></li>
                <li className="flex items-center gap-3"><span className="text-2xl">🌾</span><span><strong>Products:</strong> Rice, Grains, Spices, Lentils</span></li>
                <li className="flex items-center gap-3"><span className="text-2xl">✅</span><span><strong>Certifications:</strong> ISO, HACCP Compliant</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-700 text-center mb-12">Mission, Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Our Mission',
                text: 'To provide the highest quality agricultural commodities to global markets while maintaining transparency, reliability, and ethical trade practices.',
              },
              {
                icon: '🔭',
                title: 'Our Vision',
                text: 'To be the most trusted name in global commodity trading, recognized for quality, integrity, and innovation in agricultural supply chains.',
              },
              {
                icon: '💎',
                title: 'Our Values',
                text: 'Excellence, integrity, customer focus, sustainability, and long-term partnerships. We believe that business thrives on trust.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-navy-700 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
