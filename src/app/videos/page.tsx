'use client';

import { useState } from 'react';
import { videos } from '@/data/content';
import Card from '@/components/ui/Card';

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const categories = ['Alle', ...Array.from(new Set(videos.map((v) => v.category)))];
  const filteredVideos = activeCategory === 'Alle' ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
            Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Musikvideos, Tutorials und Live-Highlights von Philipp Greifenberg.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#2ECC71] text-white'
                  : 'bg-white text-[#2C3E50] hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} hover>
              <button
                onClick={() => setSelectedVideo(video)}
                className="w-full text-left"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-[#3498DB] uppercase">{video.category}</span>
                  <h3 className="text-lg font-bold text-[#2C3E50] mt-1 font-[family-name:var(--font-poppins)]">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{video.description}</p>
                </div>
              </button>
            </Card>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-black flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  title={selectedVideo.title}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50]">{selectedVideo.title}</h3>
                <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="mt-4 text-[#2ECC71] hover:text-[#27ae60] font-medium"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
