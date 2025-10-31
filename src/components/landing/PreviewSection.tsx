import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen } from 'lucide-react';

export function PreviewSection() {
  const previewImages = PlaceHolderImages.filter(img => img.id.startsWith('preview-'));

  return (
    <section id="preview" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
             <BookOpen className="h-8 w-8"/> Lo Que Encontrarás
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Echa un vistazo a algunas de las increíbles recetas que te esperan dentro del e-book.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {previewImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={800}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full"
                        />
                    </CardContent>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-muted-foreground text-center font-medium">{image.description.replace('Una vista previa de una receta de ', '')}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
