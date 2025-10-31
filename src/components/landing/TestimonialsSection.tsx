import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María L.',
    avatar: 'M',
    avatarBg: 'bg-pink-400',
    text: '"Soy celíaca y pensaba que mi vida dulce había terminado. ¡Qué equivocada estaba! El cheesecake de lima es mi nueva obsesión. Recetas súper claras."',
    rating: 5,
  },
  {
    name: 'Javier P.',
    avatar: 'J',
    avatarBg: 'bg-purple-400',
    text: '"Lo compré para mi hija con diabetes. Ahora hacemos galletas juntos y sé que está comiendo algo bueno. ¡Una inversión en paz mental!"',
    rating: 5,
  },
  {
    name: 'Laura S.',
    avatar: 'L',
    avatarBg: 'bg-green-400',
    text: '"El bono de pasteles especiales es genial. Lo uso para mi emprendimiento de repostería saludable y mis ventas se dispararon."',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl tracking-tight text-primary sm:text-4xl">
            4. No me creas a mí, ¡créeles a ellos!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-lg border-t-4 border-pink-400 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="flex-grow p-0 flex flex-col">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className={`${testimonial.avatarBg} text-white font-bold`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                     <p className="font-bold text-primary">{testimonial.name}</p>
                     <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
