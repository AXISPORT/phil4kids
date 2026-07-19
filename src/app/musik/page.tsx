import Link from 'next/link';
import { albums } from '@/data/content';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Musik - Phil4Kids',
  description: 'Hören Sie die Musik von Philipp Greifenberg. Entdecken Sie die Alben "Tierisch in Bewegung" und "Bewegung ist alles".',
};

export default function MusikPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
            Musik
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecke die farbenfrohen Lieder von Phil4Kids. Jedes Album bringt neue Tierbewegungen und melodische Abenteuer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {albums.map((album) => (
            <Card key={album.slug} hover>
              <Link href={`/musik/${album.slug}`}>
                <div className="bg-[#2ECC71] rounded-t-2xl aspect-square flex items-center justify-center">
                  <span className="text-white text-2xl font-bold text-center px-4">{album.title}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#2C3E50] mb-2 font-[family-name:var(--font-poppins)]">
                    {album.title}
                  </h2>
                  <p className="text-gray-500 mb-4">
                    {album.year} · {album.tracks.length} Tracks
                  </p>
                  <p className="text-[#2C3E50] text-sm">
                    Entdecke die neuesten Hits von Phil4Kids.
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
            Alle Alben auf Spotify
          </h2>
          <p className="text-gray-600 mb-6">
            Höre alle Songs auf Spotify, Apple Music und anderen Streaming-Plattformen.
          </p>
          <a
            href="https://open.spotify.com/artist/phil4kids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.1 17.1c-.2.3-.5.4-.8.2-1.5-.9-3.4-1.1-5.7-1-.4 0-.7-.1-.8-.5-.1-.4.1-.7.5-.8 3.4-1 6.9-.5 9.7 1.2.3.2.4.5.3.9zm1.1-3.8c-.3.4-.7.5-1.1.3-2.9-1.8-7-2.1-10.4-1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.9-1.2 8.4-.8 11.6 1.2.2.2.4.6.3.9zm.2-4c-3.4-2-8.6-2.2-12.5-.8-.5.2-1-.1-1.1-.5-.2-.5.1-1 .6-1.1 4.4-1.6 10.1-1.3 14 1 .4.2.5.7.3 1.1-.2.3-.6.4-.9.3z"/>
            </svg>
            Auf Spotify hören
          </a>
        </div>
      </div>
    </div>
  );
}
