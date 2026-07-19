export const metadata = {
  title: 'Impressum - Phil4Kids',
  description: 'Impressum von Phil4Kids',
};

export default function ImpressumPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8 font-[family-name:var(--font-poppins)]">
          Impressum
        </h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="text-[#2C3E50]">
              Philipp Greifenberg<br />
              Phil4Kids<br />
              Musterstraße 1<br />
              12345 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-2">Kontakt</h2>
            <p className="text-[#2C3E50]">
              Telefon: +49 123 456 7890<br />
              E-Mail: info@phil4kids.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-2">Umsatzsteuer-ID</h2>
            <p className="text-[#2C3E50]">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 123456789
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-[#2C3E50]">
              Philipp Greifenberg<br />
              Musterstraße 1<br />
              12345 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-2">Streitschlichtung</h2>
            <p className="text-[#2C3E50]">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" className="text-[#2ECC71]"> https://ec.europa.eu/consumers/odr/</a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Hinweis: Dies ist ein Muster-Impressum. Bitte passen Sie die Daten an Ihre tatsächlichen Angaben an.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
