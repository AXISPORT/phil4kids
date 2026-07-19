'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Über Phil', href: '/#about' },
  { name: 'Musik', href: '/musik' },
  { name: 'Videos', href: '/videos' },
  { name: 'Bewegung', href: '/#movement' },
  { name: 'Live', href: '/live' },
  { name: 'Artikel', href: '/artikel' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-[#2ECC71] font-[family-name:var(--font-poppins)]"
          >
            Phil4Kids
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#2C3E50] hover:text-[#2ECC71] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/shop"
              className="bg-[#F39C12] hover:bg-[#E67E22] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Zum Shop
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2C3E50] hover:text-[#2ECC71] p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#2C3E50] hover:text-[#2ECC71] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/shop"
              className="bg-[#F39C12] hover:bg-[#E67E22] text-white block px-3 py-2 rounded-full text-base font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Zum Shop
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
