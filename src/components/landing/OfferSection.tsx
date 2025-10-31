import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const bonuses = [
    {
        title: 'Bono 1: (15 min) Postres Rápidos y Saludables.',
        description: 'Deliciosos postres que puedes preparar en 15 minutos o menos. (Valor: $10)'
    },
    {
        title: 'Bono 2: Salsas y Coberturas Cremosas sin Lácteos.',
        description: 'El toque final para elevar cualquier postre. (Valor: $15)'
    },
    {
        title: 'Bono 3: Helados y Paletas Refrescantes.',
        description: 'Postres fríos, naturalmente dulces. (Valor: $12)'
    }
];

export function OfferSection() {
    const ebookCover = PlaceHolderImages.find(p => p.id === 'ebook-cover');

    return (
        <section id="purchase" className="bg-pink-50/50 py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl sm:text-4xl text-accent">
                        5. ¡La Oferta Completa! Esto es lo que te llevas hoy:
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Columna Izquierda - Ebook */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border">
                        <p className="font-bold text-pink-500 text-sm">EBOOK</p>
                        <h3 className="font-headline text-2xl text-primary">Recetario Principal (Valor: <span className="line-through">$25.00 USD</span>)</h3>
                        {ebookCover && (
                             <div className="relative w-full aspect-[3/4] my-4 shadow-xl rounded-lg overflow-hidden">
                                <Image
                                    src={ebookCover.imageUrl}
                                    alt={ebookCover.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={ebookCover.imageHint}
                                />
                            </div>
                        )}
                        <p className="text-muted-foreground text-sm">
                            100 recetas clasificadas por tipo de postre, dificultad y tiempo de preparación, todas con imágenes y guías paso a paso. Incluye pasteles, panes, brownies, budines, brigadeiros, churros, tartas, y bebidas naturales.
                        </p>
                    </div>

                    {/* Columna Derecha - Bonos */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-2xl text-accent text-center">¡Además, 4 Bonos Exclusivos GRATIS!</h3>
                        <div className="space-y-4">
                            {bonuses.map((bono, index) => (
                                <Card key={index} className="bg-white p-4 shadow-md rounded-lg border-l-4 border-accent">
                                    <CardContent className="p-0 flex items-start gap-4">
                                        <Gift className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary">{bono.title}</h4>
                                            <p className="text-sm text-muted-foreground">{bono.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 space-y-4">
                    <p className="font-bold text-xl text-primary">
                        Valor Real del Paquete: <span className="line-through">$25.00 USD</span>. Hoy, por solo <span className="text-accent font-extrabold">$5.99 USD</span>.
                    </p>
                    <p className="font-bold text-xl text-accent">¡Te llevas todo esto + los Bonos Gratis!</p>
                    <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg transform hover:scale-105 transition-transform px-10 py-8 text-xl rounded-full">
                        <a href="https://pay.hotmart.com/H102664906U">
                        ¡ACCESO INMEDIATO Y GRATIS A LOS 4 BONOS!
                        </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">No dejes pasar esta oferta por tiempo limitado.</p>
                </div>
            </div>
        </section>
    );
}
