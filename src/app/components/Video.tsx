import { Play } from 'lucide-react';
import { useState } from 'react';

export function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Zde vlož své YouTube video ID nebo vlastní video URL
  const youtubeVideoId = 'eOiIEyn-FQY'; // PŘÍKLAD - Změň na své video ID
  
  // Nebo použij vlastní video soubor:
  // const videoUrl = '/videos/tpodlahy-showcase.mp4';

  return (
    <section id="video" className="py-20 bg-white dark:bg-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Podívejte se na naši práci
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Video ukázka našich realizací a profesionálního přístupu k pokládce podlah
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {!isPlaying ? (
              // Thumbnail s play tlačítkem
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail obrázek - použij vlastní nebo YouTube thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                  alt="Video náhled"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-amber-700 hover:bg-amber-600 rounded-full p-6 transform group-hover:scale-110 transition-transform">
                    <Play className="size-12 text-white fill-white" />
                  </div>
                </div>
              </div>
            ) : (
              // YouTube iframe embed
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="TPodlahy Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Alternativa: Vlastní video soubor */}
            {/* {isPlaying && (
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={videoUrl}
              >
                Váš prohlížeč nepodporuje video tag.
              </video>
            )} */}
          </div>

          {/* Video info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-amber-700 dark:text-amber-500 mb-2">200+</div>
              <div className="text-gray-700 dark:text-gray-300">Spokojených zákazníků</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-amber-700 dark:text-amber-500 mb-2">15+</div>
              <div className="text-gray-700 dark:text-gray-300">Let zkušeností</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-amber-700 dark:text-amber-500 mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300">Záruka spokojenosti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
