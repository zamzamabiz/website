import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-gray-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Chohan Commodities</h3>
            <p className="text-sm leading-relaxed">
              Global Commodity Excellence Since 2009. Trusted exporters of premium agricultural products worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/products', label: 'Products' },
                { to: '/logistics', label: 'Logistics' },
                { to: '/news', label: 'News & Insights' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <address className="text-sm not-italic space-y-1">
              <p>📍 Karachi, Pakistan</p>
              <p>📧 info@chohancommodities.com</p>
              <p>📞 +92-21-XXXXXXXX</p>
            </address>
          </div>
        </div>

        <div className="border-t border-navy-600 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Chohan Commodities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
