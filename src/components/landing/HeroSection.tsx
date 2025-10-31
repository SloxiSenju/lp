import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn } from '../fade-in';

export function HeroSection() {
  const coverImage = PlaceHolderImages.find(img => img.id === 'ebook-cover');

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-20 bg-background">
      <div className="container mx-auto px-4 mt-8">
        <div className="text-center mb-8">
            <span className="text-sm font-bold tracking-wider uppercase text-accent">La solución que estabas buscando</span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tighter text-primary mt-2">
                El Placer de Comer Dulce
            </h1>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tighter text-accent">
            SIN CULPA, SIN AZÚCAR, SIN GLUTEN, SIN LACTOSA.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-foreground max-w-2xl mx-auto">
                Descubre 100 recetas secretas que harán que tu dieta se sienta como unas vacaciones.
            </p>
        </div>
        <div className="flex justify-center">
            <FadeIn>
              {coverImage && (
                <div className="relative w-[300px] h-[400px] sm:w-[450px] sm:h-[600px] lg:w-[600px] lg:h-[800px] shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src={coverImage.imageUrl}
                    alt={coverImage.description}
                    fill
                    priority
                    data-ai-hint={coverImage.imageHint}
                    className="object-cover"
                  />
                </div>
              )}
            </FadeIn>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg transform hover:scale-105 transition-transform px-10 py-6 text-lg">
                <a href="https://pay.hotmart.com/H102664906U">
                ¡SÍ, QUIERO MI LIBRO DE RECETAS SIN CULPA!
                </a>
            </Button>
            <p className="text-sm text-muted-foreground">Acceso digital inmediato. Compra 100% segura.</p>
        </div>
      </div>
    </section>
  );
}
