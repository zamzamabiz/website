import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const highlights = [
  {
    icon: '🌾',
    title: 'Premium Products',
    desc: 'High-quality rice, grains, spices, and lentils sourced from trusted farms.',
  },
  {
    icon: '🚢',
    title: 'Global Logistics',
    desc: 'Reliable shipping networks across Asia, Middle East, Europe, and Africa.',
  },
  {
    icon: '✅',
    title: 'Quality Assured',
    desc: 'Stringent quality control and compliance with international standards.',
  },
  {
    icon: '🤝',
    title: 'Trusted Since 2009',
    desc: 'Over 15 years of excellence in the global commodities trade.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Global Commodity Excellence Since 2009"
        subtitle="Your trusted partner for premium rice, grains, spices, and lentils — delivered worldwide."
        cta={{ href: '/products', label: 'Explore Our Products' }}
      />

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-700 text-center mb-12">
            Why Choose Chohan Commodities?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-navy-700 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get in touch with our team to discuss your commodity requirements and logistics needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-navy-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
