export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] mb-6 font-[family-name:var(--font-poppins)]">
            Tierisch in Bewegung!
          </h1>
          <p className="text-xl text-[#2C3E50] mb-8 max-w-2xl mx-auto">
            Motivieren Sie Kinder, aktiv zu werden und Spaß an Bewegung zu haben.
          </p>
          <a
            href="/shop"
            className="inline-block bg-[#F39C12] hover:bg-[#E67E22] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Zum Shop
          </a>
        </div>
      </section>

      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center font-[family-name:var(--font-poppins)]">
            Über Phil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-[#2C3E50]">
                Philipp Greifenberg ist Künstler, Entertainer, Musikproduzent und Kindertrainer.
                Mit seiner Musik und seinen Bewegungskonzepten inspiriert er Kinder dazu,
                aktiv zu werden und Spaß an Bewegung zu haben.
              </p>
            </div>
            <div className="bg-[#2ECC71] rounded-2xl h-64 flex items-center justify-center">
              <span className="text-white text-xl">Bild von Philipp</span>
            </div>
          </div>
        </div>
      </section>

      <section id="movement" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center font-[family-name:var(--font-poppins)]">
            Tierisch in Bewegung
          </h2>
          <p className="text-lg text-[#2C3E50] text-center max-w-3xl mx-auto">
            Das Bewegungskartenspiel für Kinder. Lernen Sie die Tiere kennen und bewegen
            sich im Rhythmus der Natur.
          </p>
        </div>
      </section>
    </div>
  );
}
