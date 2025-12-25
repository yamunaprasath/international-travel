import { Globe, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white">International Travel</div>
                <div className="text-xs text-gray-500">Your Global Travel Toolkit</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Clear, neutral, and trustworthy information for global travelers.
            </p>
            <p className="text-xs text-gray-500">
              Note: We provide information only. We do not process applications or provide professional advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#news" className="hover:text-teal-400 transition-colors">Travel News</a></li>
              <li><a href="#destinations" className="hover:text-teal-400 transition-colors">Destinations</a></li>
              <li><a href="#operators" className="hover:text-teal-400 transition-colors">Tour Operators</a></li>
              <li><a href="#jobs" className="hover:text-teal-400 transition-colors">Job Board</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Visa Information</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Travel Tips</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <a href="mailto:info@intltravel.com" className="hover:text-teal-400 transition-colors">
                  info@intltravel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white text-sm mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-teal-500"
                />
                <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2025 International Travel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
