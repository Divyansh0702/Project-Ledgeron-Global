import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Ledgeron Global
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            href="/contact"
            variant="primary"
            className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-700"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}