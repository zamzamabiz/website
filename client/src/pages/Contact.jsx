import { useState } from 'react';
import Hero from '../components/Hero';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // In production, this would POST to a backend endpoint
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with your requirements or inquiries."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-navy-700 mb-6">Send Us a Message</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-green-800 font-semibold text-lg">Message Sent!</h3>
                  <p className="text-green-700 mt-1">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-4 text-sm text-green-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-navy-700 text-white font-semibold py-3 rounded-lg hover:bg-navy-600 transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Office Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-700">Our Office</h2>
              <div className="space-y-4">
                {[
                  { icon: '📍', label: 'Address', value: 'Karachi, Sindh, Pakistan' },
                  { icon: '📧', label: 'Email', value: 'info@chohancommodities.com' },
                  { icon: '📞', label: 'Phone', value: '+92-21-XXXXXXXX' },
                  { icon: '🕐', label: 'Business Hours', value: 'Mon–Fri: 9:00 AM – 6:00 PM (PKT)' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                      <p className="text-gray-800 font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy-700 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Looking for bulk orders?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We specialize in large-volume exports. Contact our trade team directly for competitive pricing, custom packaging, and logistics arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
