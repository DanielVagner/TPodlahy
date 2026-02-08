import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Images } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  images: string[];
}

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Vinylová podlaha - Moderní byt Praha',
      category: 'Vinyl',
      location: 'Praha 3',
      images: [
        'https://images.unsplash.com/photo-1617044351564-edc92b339fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aW55bCUyMGZsb29yaW5nJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MDU0MTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1595424073665-bf04f38d9c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwdmlueWwlMjBmbG9vcmluZ3xlbnwxfHx8fDE3NzA1NDI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1708919268841-27c120c45a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMGZsb29yJTIwdGlsZXMlMjBwYXR0ZXJufGVufDF8fHx8MTc3MDU0MTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1763616828285-eb2da34565a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZmxvb3IlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcwNTQyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 2,
      title: 'Luxusní dřevěné schodiště',
      category: 'Schodiště',
      location: 'Brno',
      images: [
        'https://images.unsplash.com/photo-1759774310270-da7eb867790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBzdGFpcmNhc2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA1NDE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1769738204142-35ce7b6ea0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFpcmNhc2UlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MDU0MTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1769701710623-3b5a17cb94b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzdGFpcnMlMjBkZXRhaWx8ZW58MXx8fHwxNzcwNTQyNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1766371900890-696edc6c7fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBzdGFpcmNhc2UlMjBkZXNpZ258ZW58MXx8fHwxNzcwNTQyNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 3,
      title: 'Laminátová podlaha - Rodinný dům',
      category: 'Laminát',
      location: 'Ostrava',
      images: [
        'https://images.unsplash.com/photo-1696861080288-0cc2f1cd48d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1pbmF0ZSUyMGZsb29yaW5nJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzA1NDE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1761053130711-2515ef532bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJyaW5nYm9uZSUyMHdvb2QlMjBmbG9vcnxlbnwxfHx8fDE3NzA1NDI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1601063936640-a0e4e4ed081c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjBoYXJkd29vZCUyMGZsb29yaW5nfGVufDF8fHx8MTc3MDU0MjcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1765766601467-30b5937fe417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwd29vZGVuJTIwZmxvb3J8ZW58MXx8fHwxNzcwNTQyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 4,
      title: 'Vinylová podlaha - Koupelna',
      category: 'Vinyl',
      location: 'Praha 6',
      images: [
        'https://images.unsplash.com/photo-1695191388218-f6259600223f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGZsb29yJTIwdGlsZXN8ZW58MXx8fHwxNzcwNTQyNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1617044351564-edc92b339fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aW55bCUyMGZsb29yaW5nJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MDU0MTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1708919268841-27c120c45a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMGZsb29yJTIwdGlsZXMlMjBwYXR0ZXJufGVufDF8fHx8MTc3MDU0MTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 5,
      title: 'Renovace schodiště - Panelový byt',
      category: 'Schodiště',
      location: 'Plzeň',
      images: [
        'https://images.unsplash.com/photo-1769738204142-35ce7b6ea0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFpcmNhc2UlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MDU0MTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1759774310270-da7eb867790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBzdGFpcmNhc2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA1NDE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1769701710623-3b5a17cb94b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzdGFpcnMlMjBkZXRhaWx8ZW58MXx8fHwxNzcwNTQyNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 6,
      title: 'Laminát - Kancelářské prostory',
      category: 'Laminát',
      location: 'Praha 4',
      images: [
        'https://images.unsplash.com/photo-1601063936640-a0e4e4ed081c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjBoYXJkd29vZCUyMGZsb29yaW5nfGVufDF8fHx8MTc3MDU0MjcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1696861080288-0cc2f1cd48d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1pbmF0ZSUyMGZsb29yaW5nJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzA1NDE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1720156066527-41497702fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vciUyMGluc3RhbGxhdGlvbiUyMHRvb2xzfGVufDF8fHx8MTc3MDU0MTc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToPrevious = () => {
    if (selectedProject) {
      setCurrentImageIndex(currentImageIndex === 0 
        ? selectedProject.images.length - 1 
        : currentImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedProject) {
      setCurrentImageIndex(currentImageIndex === selectedProject.images.length - 1 
        ? 0 
        : currentImageIndex + 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  return (
    <>
      <section id="gallery" className="py-20 bg-amber-50 dark:bg-stone-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Galerie realizací
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Podívejte se na naše dokončené projekty a inspirujte se pro svůj domov
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openProject(project)}
              >
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-amber-700 text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Images className="size-4" />
                        <span>{project.images.length}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/30 rounded-full p-2"
            onClick={closeProject}
          >
            <X className="size-8" />
          </button>

          {/* Previous button */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-3 z-10 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="size-8" />
          </button>

          {/* Next button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-3 z-10 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="size-8" />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={selectedProject.images[currentImageIndex]}
              alt={selectedProject.title}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            
            {/* Image info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-amber-700 text-white text-sm px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-gray-300 text-sm">{selectedProject.location}</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm">
                Fotografie {currentImageIndex + 1} z {selectedProject.images.length}
              </p>
            </div>

            {/* Thumbnail navigation */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-2 px-4">
              {selectedProject.images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-amber-500 scale-110' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}