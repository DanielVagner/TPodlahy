import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1617044351564-edc92b339fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aW55bCUyMGZsb29yaW5nJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MDU0MTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern flooring installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50 dark:from-black/95 dark:via-black/85 dark:to-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Profesionální pokládka podlah
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Specializujeme se na pokládku vinylových podlah, laminátů a renovaci schodišť. Kvalita a preciznost v každém detailu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Nezávazná poptávka
              <ArrowRight className="size-5" />
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('gallery');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg transition-colors backdrop-blur-sm"
            >
              Naše realizace
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="size-6 text-amber-400 flex-shrink-0" />
              <span>15+ let zkušeností</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="size-6 text-amber-400 flex-shrink-0" />
              <span>Záruka kvality</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="size-6 text-amber-400 flex-shrink-0" />
              <span>Rychlá realizace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}