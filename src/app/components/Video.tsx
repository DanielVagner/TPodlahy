import { Play } from 'lucide-react';
import { useState } from 'react';

const videoFeatures = [
  'Zaměření a dodávka podlahových krytin',
  'Pokládka a renovace parket',
  'Pokládka vinylových dílců a krytin',
  'Laminátové podlahy a koberce',
  'Renovace a pokládka schodišť',
];

export function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = 'eOiIEyn-FQY';

  return (
    <section id="video" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left-aligned header */}
        <div className="max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
            <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
              Naše práce
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-4">
            Výsledky mluví<br />
            <span className="text-orange-600 dark:text-orange-400">za sebe.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
            Podívejte se na ukázku naší práce — od první návštěvy po finální pokládku.
          </p>
        </div>

        {/* Asymmetric grid: video 3/5 + side 2/5 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Video player */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-700/60">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                    alt="Video náhled"
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/15 rounded-full scale-[2] blur-2xl" />
                      <div className="relative bg-white group-hover:bg-orange-50 transition-colors rounded-full w-16 h-16 flex items-center justify-center shadow-2xl group-hover:scale-105 duration-200">
                        <Play className="size-6 text-orange-600 fill-orange-600 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-5">
                    <span className="text-white/70 text-sm font-medium tracking-wide">Přehrát video</span>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="TPodlahy — ukázka práce"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:pt-2">
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
              Petr Tomášek — profesionální pokládka podlah. Podívejte se, co všechno pro vás dokážeme zajistit.
            </p>

            <div className="space-y-3">
              {videoFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 shadow-sm">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <span className="font-semibold text-zinc-900 dark:text-white">Měření zdarma.</span>{' '}
                Přijedeme, zaměříme a připravíme cenovou nabídku — bez závazků a poplatků.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
