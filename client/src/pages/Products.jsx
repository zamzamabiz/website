import { useState } from 'react';
import Hero from '../components/Hero';

const products = [
  {
    id: 1,
    title: 'Basmati Rice',
    category: 'Rice',
    desc: 'Premium long-grain aromatic Basmati rice, aged for superior flavor and texture. Sourced from the finest fields of Punjab.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
  },
  {
    id: 2,
    title: 'Parboiled Rice',
    category: 'Rice',
    desc: 'High-quality parboiled rice with improved nutritional value and extended shelf life, ideal for bulk trade.',
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80',
  },
  {
    id: 3,
    title: 'Red Lentils',
    category: 'Lentils',
    desc: 'Split red lentils (Masoor Dal) with vibrant color and rich flavor profile. Excellent for soups, curries, and stews.',
    image: 'https://images.unsplash.com/photo-1611050237424-2df45a4ccce3?w=600&q=80',
  },
  {
    id: 4,
    title: 'Green Lentils',
    category: 'Lentils',
    desc: 'Whole green lentils with firm texture and earthy taste. High in protein and dietary fiber.',
    image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?w=600&q=80',
  },
  {
    id: 5,
    title: 'Black Pepper',
    category: 'Spices',
    desc: 'Premium whole and ground black pepper with bold aroma and sharp flavor, sourced from Southern Asia.',
    image: 'https://images.unsplash.com/photo-1599909533731-c5ee4c80bef7?w=600&q=80',
  },
  {
    id: 6,
    title: 'Cumin Seeds',
    category: 'Spices',
    desc: 'Aromatic cumin seeds and powder with rich earthy flavor. A staple spice in South Asian and Middle Eastern cuisine.',
    image: 'https://images.unsplash.com/photo-1606788075761-83acafc02b7a?w=600&q=80',
  },
  {
    id: 7,
    title: 'Wheat Grain',
    category: 'Grains',
    desc: 'High-protein hard red wheat grain suitable for flour milling and direct use. Tested for moisture, protein, and purity.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80',
  },
  {
    id: 8,
    title: 'Chickpeas',
    category: 'Grains',
    desc: 'Kabuli and Desi chickpeas in various grades. Rich in protein and fiber, suitable for food processing and direct export.',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&q=80',
  },
];

const categories = ['All', ...new Set(products.map((p) => p.category))];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Hero
        title="Our Products"
        subtitle="Premium agricultural commodities — rice, grains, spices, and lentils — for global markets."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-navy-700 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy-500 bg-navy-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy-700 mt-2 mb-1">{product.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
