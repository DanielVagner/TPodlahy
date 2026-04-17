import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { allImages } from '../images';

export function GalleryPage() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">

      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'gallery' } })}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Zpět na hlavní stránku
          </button>
          <span className="text-sm text-zinc-400 dark:text-zinc-500">
            {allImages.length} fotografií
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
          <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
            Realizace
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Galerie
        </h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {allImages.map((src, index) => (
            <button
              key={src}
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              onClick={() => openLightbox(index)}
            >
              <ImageWithFallback
                src={src}
                alt={`Realizace ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/25 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-zinc-950/97 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X className="size-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tabular-nums">
            {lightboxIndex + 1} / {allImages.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
            onClick={e => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
            onClick={e => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Image */}
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

          {/* Thumbnails strip */}
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
    </div>
  );
}
