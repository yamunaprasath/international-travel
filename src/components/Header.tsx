import { Globe, Menu, Search } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl tracking-tight">International Travel</div>
              <div className="text-xs text-gray-500">Your Global Travel Toolkit</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#news" className="text-gray-700 hover:text-teal-500 transition-colors">News</a>
            <a href="#destinations" className="text-gray-700 hover:text-teal-500 transition-colors">Destinations</a>
            <a href="#operators" className="text-gray-700 hover:text-teal-500 transition-colors">Tour Operators</a>
            <a href="#jobs" className="text-gray-700 hover:text-teal-500 transition-colors">Jobs</a>
            <a href="#reviews" className="text-gray-700 hover:text-teal-500 transition-colors">Reviews</a>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#news" className="text-gray-700 hover:text-teal-500 transition-colors">News</a>
              <a href="#destinations" className="text-gray-700 hover:text-teal-500 transition-colors">Destinations</a>
              <a href="#operators" className="text-gray-700 hover:text-teal-500 transition-colors">Tour Operators</a>
              <a href="#jobs" className="text-gray-700 hover:text-teal-500 transition-colors">Jobs</a>
              <a href="#reviews" className="text-gray-700 hover:text-teal-500 transition-colors">Reviews</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
