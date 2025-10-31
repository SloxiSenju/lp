import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-purple-100/50 p-8 sm:p-12 rounded-xl shadow-md border-2 border-pink-400">
          <h2 className="font-headline text-3xl sm:text-4xl text-primary mb-4">
            12. ¡Toma la Decisión Correcta HOY!
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Deja de soñar con postres deliciosos y saludables, y empieza a
            prepararlos.{" "}
            <strong className="text-accent">
              Esta es tu última oportunidad
            </strong>{" "}
            para obtener el eBook y los 4 Bonos Exclusivos por solo $5,99 USD.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg transform hover:scale-105 transition-transform px-10 py-8 text-xl sm:text-2xl rounded-full h-auto"
          >
            <a href="https://pay.hotmart.com/H102664906U">¡HAZ CLIC AQUÍ Y EMPIEZA A HORNÉAR HOY!</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Oferta válida solo por las próximas 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
