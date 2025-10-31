import Image from 'next/image';
import { CheckSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const faqContent = [
  {
    question: '1. ¿Qué estoy comprando exactamente?',
    answer: [
      'Estás comprando la llave maestra a la repostería consciente: el eBook oficial <strong>"Postres Saludables sin Azúcar, sin Gluten y sin Lactosa"</strong>, creado por los expertos en nutrición de Come Rico Vive Sano.',
      'No es un simple recetario. Es una colección de <strong>100 recetas únicas</strong>, probadas y optimizadas para que puedas disfrutar de pasteles, brownies, tartas, e incluso snacks salados, con la tranquilidad de que son 100% amigables con tu salud y tus intolerancias. ¡Es tu nueva biblia dulce!',
    ],
  },
  {
    question: '2. ¿Qué hará este eBook por mí y por mi familia?',
    answer: [
      {
        type: 'list',
        items: [
          {
            title: 'Dile Adiós a la Culpa y al Malestar:',
            text: 'Nunca más tendrás que elegir entre el sabor y la salud. Prepara postres que no te inflamarán ni te harán sentir pesado, gracias a sus ingredientes naturales y libres de los 3 grandes irritantes.',
          },
          {
            title: 'Sorprende Sin Esfuerzo:',
            text: '¿Tienes invitados con intolerancias o simplemente quieres ofrecer algo delicioso y nutritivo? Tendrás un arsenal de 100 soluciones probadas para impresionar a cualquiera.',
          },
          {
            title: 'Ahorra Tiempo y Dinero:',
            text: 'Deja de buscar recetas dudosas en internet. Aquí tienes 100 soluciones probadas en un solo lugar, elaboradas con ingredientes que encuentras fácilmente en cualquier supermercado.',
          },
        ],
      },
    ],
    image: 'ebook-cover-alt',
    imageCaption: '"Postres con sabor a casa, pero con la tranquilidad de que cuidan mi bienestar. ¡Mis hijos no notan la diferencia!"',
  },
  {
    question: '3. ¿Por qué elijo este eBook y no otro?',
    answer: [
      'Porque este libro fue creado por el equipo de <strong>Come Rico Vive Sano</strong>, líderes en alimentación consciente. Cada una de las 100 recetas ha sido:',
      {
        type: 'bullet',
        items: [
          '<strong>Testeada y Aprobada:</strong> Garantizamos el sabor y la textura que esperas de un postre de verdad.',
          '<strong>Apta para Todos:</strong> El enfoque triple (Sin Azúcar, Sin Gluten, Sin Lactosa) asegura que sea un producto apto para celíacos, diabéticos (con aprobación médica), intolerantes a la lactosa y cualquiera que busque una vida más sana.',
          '<strong>100% Digital e Ilustrada:</strong> Acceso inmediato y fotos de alta calidad que te inspirarán a hornear de inmediato.',
        ],
      },
    ],
  },
];


export function FaqSection() {
    const ebookCoverAlt = PlaceHolderImages.find(p => p.id === 'ebook-cover-alt');

  return (
    <section id="faq" className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqContent.map((item, index) => (
            <div key={index} className="bg-background/80 p-6 sm:p-8 rounded-xl shadow-sm">
              <h2 className="font-headline text-3xl sm:text-4xl text-accent mb-4" dangerouslySetInnerHTML={{ __html: item.question }} />
              <div className="flex flex-col md:flex-row gap-8">
                <div className="space-y-4 text-lg text-foreground flex-1">
                  {item.answer.map((content, idx) => {
                    if (typeof content === 'string') {
                      return <p key={idx} dangerouslySetInnerHTML={{ __html: content }} />;
                    }
                    if (content.type === 'list') {
                      return (
                        <ul key={idx} className="space-y-4">
                          {content.items.map((listItem: any, itemIdx: number) => (
                            <li key={itemIdx} className="flex items-start gap-3">
                              <CheckSquare className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-accent">{listItem.title}</strong>
                                <p className="text-muted-foreground">{listItem.text}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (content.type === 'bullet') {
                        return (
                          <ul key={idx} className="space-y-2 list-disc pl-6">
                            {content.items.map((bulletItem: any, bulletIdx: number) => (
                              <li key={bulletIdx} dangerouslySetInnerHTML={{ __html: bulletItem }} />
                            ))}
                          </ul>
                        );
                      }
                    return null;
                  })}
                </div>
                {item.image && ebookCoverAlt && (
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="relative w-full aspect-[3/4] shadow-xl rounded-lg overflow-hidden">
                       <Image
                          src={ebookCoverAlt.imageUrl}
                          alt={ebookCoverAlt.description}
                          fill
                          className="object-cover"
                          data-ai-hint={ebookCoverAlt.imageHint}
                        />
                    </div>
                    {item.imageCaption && (
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">{item.imageCaption}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
