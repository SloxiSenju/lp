import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl text-primary mb-4">
            6. ¿Cuánto vale poner fin a la culpa y al antojo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Considerando que el valor real de este paquete completo es de{" "}
            <span className="line-through">$25.00 USD</span>...
          </p>

          <div className="bg-purple-100/50 border-2 border-pink-400 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
            <p className="font-bold text-primary tracking-wide">
              PRECIO ÚNICO DE OFERTA DE LANZAMIENTO HOY:
            </p>
            <p className="text-6xl sm:text-7xl font-bold text-pink-500 my-2">
              $5,99 USD
            </p>
            <p className="font-medium text-primary">
              Un pago único para tener 100 recetas de por vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
