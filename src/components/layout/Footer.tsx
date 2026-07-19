import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-[#2ECC71]"
            >
              Phil4Kids
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Motivieren Sie Kinder, aktiv zu werden und Spaß an Bewegung zu haben.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/musik" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Musik
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/live" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Live
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-300 hover:text-[#2ECC71] text-sm">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Phil4Kids. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
