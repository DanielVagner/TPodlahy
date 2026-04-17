import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { featuredImages, allImages } from '../images';

export function Gallery() {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
              <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
                Realizace
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-3">
              Galerie
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              Ukázka naší práce. Celkem {allImages.length} fotek z realizací.
            </p>
          </div>

          <button
            onClick={() => navigate('/galerie')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors flex-shrink-0"
          >
            Zobrazit vše ({allImages.length})
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredImages.map((src, index) => (
            <button
              key={src}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              onClick={() => navigate('/galerie')}
            >
              <ImageWithFallback
                src={src}
                alt={`Realizace ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-zinc-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Zobrazit
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/galerie')}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Všechny fotky ({allImages.length})
            <ArrowRight className="size-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
