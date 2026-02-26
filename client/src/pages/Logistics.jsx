import Hero from '../components/Hero';

const features = [
  {
    icon: '🚢',
    title: 'Global Shipping Network',
    desc: 'We maintain established relationships with leading freight forwarders and shipping lines, ensuring timely and cost-effective delivery to ports worldwide.',
  },
  {
    icon: '📋',
    title: 'Documentation & Compliance',
    desc: 'Full documentation support including phytosanitary certificates, certificates of origin, fumigation certificates, and letter of credit handling.',
  },
  {
    icon: '🔬',
    title: 'Quality Control',
    desc: 'Every shipment is tested by certified laboratories for moisture content, broken grains, foreign matter, protein levels, and other key parameters.',
  },
  {
    icon: '📦',
    title: 'Flexible Packaging',
    desc: 'Available in 1kg, 5kg, 25kg, and 50kg retail bags as well as bulk container loads (FCL/LCL). Custom branding available on request.',
  },
  {
    icon: '🌍',
    title: 'Destination Markets',
    desc: 'We serve buyers across Asia, the Middle East, Europe, Africa, and the Americas with reliable supply chain solutions tailored to each market.',
  },
  {
    icon: '🏆',
    title: 'Certifications',
    desc: 'ISO 9001 Quality Management, HACCP food safety standards, and Halal certification ensuring compliance with global import regulations.',
  },
];

export default function Logistics() {
  return (
    <>
      <Hero
        title="Logistics & Supply Chain"
        subtitle="Seamless global shipping with world-class quality control and compliance standards."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-700 text-center mb-4">
            End-to-End Supply Chain Solutions
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            From farm to port to your warehouse — Chohan Commodities manages every step of the supply chain, ensuring your products arrive on time, in perfect condition, and fully compliant with destination country requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <span className="text-4xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-700 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 text-center mb-12">Our Export Process</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Inquiry & Quotation', desc: 'Receive your requirements and provide competitive FOB/CIF pricing.' },
              { step: '02', title: 'Proforma Invoice', desc: 'Issue detailed proforma invoice with product specs, packaging, and terms.' },
              { step: '03', title: 'Quality Inspection', desc: 'Independent lab testing and SGS/Intertek inspection before loading.' },
              { step: '04', title: 'Shipping & Documentation', desc: 'Coordinate container booking, loading, and prepare all export documents.' },
              { step: '05', title: 'Delivery & After-Sales', desc: 'Track shipment to destination port and provide post-delivery support.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-6">
                <div className="bg-navy-700 text-white font-bold text-lg rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {step}
                </div>
                <div className="bg-white rounded-xl p-5 shadow flex-grow">
                  <h4 className="font-semibold text-navy-700 mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
