'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fragen, Buchungsanfragen oder Feedback? Wir freuen uns auf deine Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-2 font-[family-name:var(--font-poppins)]">
                  Nachricht gesendet!
                </h2>
                <p className="text-gray-600 mb-6">
                  Danke für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="text-[#2ECC71] hover:text-[#27ae60] font-medium"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 outline-none transition-all"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 outline-none transition-all"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 outline-none transition-all resize-none"
                    placeholder="Deine Nachricht..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2ECC71] hover:bg-[#27ae60] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
                Kontaktinformationen
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">E-Mail</p>
                  <a href="mailto:info@phil4kids.de" className="text-[#2ECC71] hover:text-[#27ae60] font-medium">
                    info@phil4kids.de
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <a href="tel:+491234567890" className="text-[#2ECC71] hover:text-[#27ae60] font-medium">
                    +49 123 456 7890
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Adresse</p>
                  <p className="text-[#2C3E50]">
                    Philipp Greifenberg<br />
                    Musterstraße 1<br />
                    12345 Berlin
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
                Social Media
              </h2>
              <div className="flex gap-4">
                <a href="https://instagram.com/phil4kids" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#E1306C]/10 rounded-full flex items-center justify-center hover:bg-[#E1306C]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.236 0-5.838 2.602-5.838 5.838 0 3.237 2.602 5.838 5.838 5.838 3.237 0 5.838-2.602 5.838-5.838 0-3.236-2.602-5.838-5.838-5.838zm0 9.338c-1.92 0-3.5-1.58-3.5-3.5 0-1.92 1.58-3.5 3.5-3.5s3.5 1.58 3.5 3.5c0 1.92-1.58 3.5-3.5 3.5zm4.5-6.338c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@phil4kids" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF0000]/10 rounded-full flex items-center justify-center hover:bg-[#FF0000]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com/@phil4kids" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.925h3.638C18.42 7.29 22 12.89 22 19.5c0 1.5-.3 2.5-.7 3.5h-3.6c-.3-1-.5-2-.5-3 0-2.5-1.5-4.5-4-4.5-.5 0-1 0-1.5.2v6.3c-2.5-.5-4.5-2.5-4.5-5 0-2.5 2-4.5 4.5-4.5v-3c-4.5.5-8.5 3.5-8.5 8.5 0 4.5 3.5 8.5 8.5 8.5 1.5 0 3-.3 4.5-1z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
                Rechtliches
              </h2>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-[#2ECC71] hover:text-[#27ae60] text-sm font-medium">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="block text-[#2ECC71] hover:text-[#27ae60] text-sm font-medium">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
