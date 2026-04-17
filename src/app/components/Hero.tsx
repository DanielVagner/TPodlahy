import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import heroBg from '../../assets/imgs/WhatsApp Image 2026-04-17 at 20.41.49 (1).jpeg';

const stats = [
  { value: '25+', label: 'let zkušeností' },
  { value: '500+', label: 'realizovaných projektů' },
  { value: '100%', label: 'spokojených zákazníků' },
];

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-dvh flex flex-col justify-center pt-16 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBg}
          alt="Pokládka herringbone parketové podlahy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/70 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="block w-8 h-px bg-orange-500" />
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
                Profesionální instalace podlah
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Podlahy,<br />
              které vydrží<br />
              <span className="text-orange-500">celý život.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl">
              Vinylové podlahy, laminát, parkety, PVC, koberce a schodiště.
              Precizní řemeslo a kvalitní materiály pro každý domov.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Nezávazná poptávka
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center justify-center gap-2 text-white font-medium px-7 py-3.5 rounded-lg border border-white/25 hover:border-white/50 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Naše realizace
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-zinc-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator – absolute so it's always visible regardless of content height */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Více
          </span>
          <ChevronDown className="size-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
