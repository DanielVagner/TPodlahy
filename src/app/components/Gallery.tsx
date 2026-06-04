import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { featuredImages, allImages } from '../images';

export function Gallery() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (featuredSrc: string) => {
    const index = allImages.indexOf(featuredSrc);
    setLightboxIndex(index !== -1 ? index : 0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const goPrev = () =>
    setLightboxIndex(i => (i === null ? null : (i - 1 + allImages.length) % allImages.length));

  const goNext = () =>
    setLightboxIndex(i => (i === null ? null : (i + 1) % allImages.length));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

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
              onClick={() => openLightbox(src)}
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-zinc-950/97 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X className="size-6" />
          </button>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tabular-nums">
            {lightboxIndex + 1} / {allImages.length}
          </div>

          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
            onClick={e => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
            onClick={e => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="size-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <ImageWithFallback
              src={allImages[lightboxIndex]}
              alt={`Realizace ${lightboxIndex + 1}`}
              className="max-h-[88vh] max-w-full w-auto object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-4 max-w-[90vw] overflow-x-auto">
            {allImages.map((src, index) => (
              <button
                key={src}
                onClick={e => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  index === lightboxIndex
                    ? 'border-orange-500 scale-110'
                    : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100'
                }`}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Náhled ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
